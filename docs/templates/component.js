module.exports = function (
  renderedUsage, // props, events, methods and slots documentation rendered
  doc, // the object returned by vue-docgen-api
  config, // the local config, useful to know the context
  fileName, // the name of the current file in the doc (to explain how to import it)
  requiresMd, // a list of all the documentation files
  // attached to the component documented. It includes documentation of subcomponents
  { isSubComponent, hasSubComponents },// are we documenting
  // a sub-component or does the current component have subcomponents
) {
  const { displayName, description, docsBlocks, tags } = doc;

  const dashName = displayName.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
  const cTag = '<' + dashName + ' ></' + dashName + '>';

  const wipBadge = tags.wip ? 'WIP' : '';
  const noExport = tags.noExport ? true : false;

  let usage = '';
  if (!noExport) {
    usage = `
  ## Usage
  #### Import single component...
  \`\`\` js
  import { ${displayName} } from '@phila/phila-ui';

  //register it locally...
  components: {
    ${displayName},
  }

  //... or register it globally
  Vue.component('${dashName}', ${displayName});
  \`\`\`

  #### or import the whole library,
  \`\`\` js
  import * as PhilaUI from '@phila/phila-ui';

  //register it globally
  Vue.use(PhilaUI);
  \`\`\`

  #### then use it in the vue template
  \`\`\` html
  ${cTag}
  \`\`\`
  `;
  } else {
    usage = '<alert type="warning">This component is NOT exported.</alert>';
  }

  //Adds vee-validate integration support alert
  let veeValidateIntegration = '';
  if (tags.group[0]['description'] === 'Inputs') {
    veeValidateIntegration = '<alert>Supports VeeValidate. See [VeeValidate Integration](/vee-validate-integration).</alert>';
  }

  return `
  ---
  title: ${tags.niceName ? tags.niceName[0]['description'] : displayName}
  menuTitle: ${tags.niceName ? tags.niceName[0]['description'] : displayName} ${wipBadge ? '(' + wipBadge + ')' : ''}
  description: ${description}
  category: ${tags.group ? "Components | " + tags.group[0]['description'] : "Components"}
  position: ${tags.position ? tags.position[0]['description'] : 100}
  badge: ${wipBadge}
  ---

  ${description}

  ${veeValidateIntegration}

  ${usage}

  ${renderedUsage.props}
  ${renderedUsage.methods}
  ${renderedUsage.events}
  ${renderedUsage.slots}

  ${docsBlocks ? docsBlocks.join('\n---\n') : ''}

  `;
};
