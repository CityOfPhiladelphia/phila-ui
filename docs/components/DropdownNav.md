# DropdownNav

A dropdown navigation.  Primarily a slot of AppHeader.

## Props

<!-- @vuese:DropdownNav:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|nav|An Object which includes the button (trigger), a FontAwesome icon (optional), and the list of links (See NavLink component)|`Object`|`false`|{"button":"My Items","icon":null,"links":[]}|

<!-- @vuese:DropdownNav:props:end -->


## Slots

<!-- @vuese:DropdownNav:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|The default slot takes a ```button``` as the trigger, and an unordered list (```<ul>```) of links as the dropdown items.|-|

<!-- @vuese:DropdownNav:slots:end -->


