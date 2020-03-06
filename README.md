# Falcon.io menu
Recreation of falcon.io main menu that is more accessible, has smoother transitions and is fully responsive.

Demo: https://falcon-menu.netlify.com/

## Tested on the following devices, browsers, OSs and screen readers
 - Chrome (MacOS and Windows) (VoiceOver, NVDA, Narrator)
 - Firefox (MacOS and Windows) (VoiceOver, NVDA, Narrator)
 - Edge (Windows) (NVDA, Narrator)
 - iPhone 8 (Safari) (VoiceOver)
 - iPad Pro 11" (Safari) (VoiceOver)

Note: The menu does not work on Internet Explorer because of CSS custom properties and CSS grid, but the code can easily be modified to add support for IE.

## Performance features:
 - Less DOM elements
 - No JS used for transitions
 - Mosttly hardware-accelerated CSS property are used for transitions (transform and opacity). Exception are:
    - Width of the active state element. It can be done with transform: scaleX(), but it will cause unnecessary code complications.
    - Button/link colors

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

## CSS stuff
 - Use of CSS variables for things like primary color and button dimensions means easier styling and future changes (e.g. adding dark mode in the future)
 - Request demo text is properly centered vertically
 - Hamburger icon don't overlap with menu on some screen sizes

## Things to consider
 - in order to use hardware-accelerated CSS properties the sliding logic of the dropdown menu is a bit different than the original one.
 - Some colors are different due to WCAG compliance and also due to changing opacity level for some of them, instead of changing the background-color. Of course, both changes must be coordinated with the designer or the product owner in order to be in line with the brand identity.
 - I've initially used <strong> for the Publish, Engage, etc. as it makes more sense, but Narrator with Chrome didn't read the text at all, so I've changed that to a span.

Using ul's and li's in a navigation is a good idea, because they provide a count and position within the list.

## To do
- Make screenshots of all the ways the menu is currently broken

## Things I Learned:
- `<button>` with `display: grid` not working as expected in Safari
- Chrome with Narrator have issues when there are multiple text elements in a link