# Falcon.io menu
Recreation of falcon.io main menu that is more accessible, has smoother transitions and is fully responsive.

Demo: https://falcon-menu.netlify.com/

Original: https://www.falcon.io/

## Tested on the following devices, browsers, OSs and screen readers
 - Chrome (MacOS and Windows) (VoiceOver, NVDA, Narrator)
 - Firefox (MacOS and Windows) (VoiceOver, NVDA, Narrator)
 - Edge (Windows) (NVDA, Narrator)
 - iPhone 8 (Safari) (VoiceOver)
 - iPad Pro 11" (Safari) (VoiceOver)

Note: The menu does not work on Internet Explorer because of CSS custom properties and CSS grid, but the code can easily be modified to add support for IE.

## Accessibility features:
 - Fully accessible by keyboard
 - Fully accessible by screen readers
 - Proper :focus styling for all focusable elements
 - WCAG AAA compliant color contrast
 - `Skip to content` link
 - Semantic and valid HTML (e.g. a button should really be a `<button>`, not a `<p>`, also no `<div>` children in the `<ul>` element)
 - Takes into consideration `prefers-reduced-motion`
 - Buttons have a bigger click area to ensure easier clicking, especially on touch devices
 - Added some whitespace between nav links in the dropdown - it was getting cluttered on tablet sizes (834px screen width)
 - There's a `<span class="sr-only">.</span>` element after each subnav title that is not visible, but screen readers will know about it. This is to ensure a quick pause between "Publish" and "Manage all your content in one calendar". Otherwise it was read like "Publish manage all your content..."

## Performance features:
 - Less DOM elements - mainly because there is only one menu and not two separate ones for desktop/mobile
 - No JS used for transitions
 - Uses as much hardware-accelerated CSS property for transitions as possible, which results in smoother transitions.

## CSS stuff
 - Use of CSS variables for things like primary color and button dimensions means easier styling and future changes (e.g. adding dark mode in the future)
 - Request demo text is properly centered vertically
 - Hamburger icon don't overlap with menu on some screen sizes

## Things to consider
 - in order to use hardware-accelerated CSS properties the sliding logic of the dropdown menu is a bit different than the original one.
 - Some colors are different due to WCAG compliance and also due to changing opacity level for some of them, instead of changing the background-color. Of course, both changes must be coordinated with the designer or the product owner in order to be in line with the brand identity.
 - I've initially used `<strong>` for the Publish, Engage, etc. as it makes more sense, but Narrator with Chrome didn't read the text at all, so I've changed that to a `<span>`.

## Bugs in the current menu
 - The major one - Opening a dropdown, e.g. Platform, then clicking on another dropdown (e.g. Solutions) removes the transparent backdrop. Then if you close the Solutions dropdown the backdrop appears and as a bonus you have overflow and scrolling issues. And you also can't click anything on the page.
 - Desktop and mobile menus have different links.
 - Issues with both desktop and mobile menu appearing on resolutions that are between a phone and a tablet. Although it wouldn't affect much devices now, it's always a good idea to make your website future-proof.
