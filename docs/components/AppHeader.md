# AppHeader

This is the application's main header.

## Props

<!-- @vuese:AppHeader:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|brandingImage|Branding image (eg. department logo). Accepts an Object of image attributes (eg. src)|`Object`|`false`|null|
|brandingLink|Branding image link. Accepts an Object of link attributes.|`Object`|`false`|{"href":"/"}|
|appTitle|The application's title/name|`String`|`false`|-|
|appSubtitle|The application's subtitle|`String`|`false`|-|
|appLink|The application's link.|`String`|`false`|/|
|isFluid|Allows the header elements (logo, title, navigation...) to expand with the window width, or stay in the center (not recommended)|`Boolean`|`false`|false|
|isSticky|Fixes the header to the top of the page|`Boolean`|`false`|true|

<!-- @vuese:AppHeader:props:end -->


## Slots

<!-- @vuese:AppHeader:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|mobile-nav|Mobile navigation (See MobileNav component)|-|
|tabs-nav|Tabbed navigation (See TabsNav component)|-|
|left-nav|Allows additional items on the left side of the header (on the right of the tabs navigation)|-|
|right-nav|Allows additional items on the right side of the header (on the left of the dropdown navigation)|-|
|lang-selector-nav|Language Selector (See LangSeletor component)|-|
|dropdown-nav|Dropdown navigation (See DropdownNav component)|-|

<!-- @vuese:AppHeader:slots:end -->


