# AppFooter

This is the application's main footer. It accepts a list of links via slot or props

## Props

<!-- @vuese:AppFooter:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|isSticky|Fixes footer to the bottom of the window|`Boolean`|`false`|false|
|isHiddenMobile|Hides footer navigation on mobile (recommended)|`Boolean`|`false`|true|
|links|An array of objects (See NavLink under utils).|`Array`|`false`|[]|

<!-- @vuese:AppFooter:props:end -->


## Slots

<!-- @vuese:AppFooter:slots:start -->
|Name|Description|Default Slot Content|
|---|---|---|
|default|The default slot takes an unordered list (```<ul>```) of links.|-|

<!-- @vuese:AppFooter:slots:end -->


