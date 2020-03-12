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

Note: The menu does not currently work properly in Internet Explorer because of CSS custom properties and CSS grid The code can easily be modified to add support for IE by using SASS variables and Flexbox, instead of CSS properties and Grid.

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
 - Less DOM elements - mainly because there is only one menu and not two separate ones for desktop/mobile.
 - No JS used for transitions.
 - Uses as much hardware-accelerated CSS property for transitions as possible, which results in smoother transitions.

## CSS stuff
 - Use of CSS variables for things like primary color and button dimensions means easier styling and future changes (e.g. adding dark mode in the future).
 - Request demo text is properly centered vertically.
 - Hamburger icon don't overlap with menu on some screen sizes.

## Things to consider
 - In order to use hardware-accelerated CSS properties the sliding logic of the dropdown menu is a bit different than the original one.
 - Some colors are different due to WCAG compliance and also due to using opacity instead of changing the background-color property. Of course, both changes must be coordinated with the designer or the product owner in order to be in line with the brand identity.
 - I've initially used `<strong>` for the Publish, Engage, etc. as it makes more sense, but Narrator with Chrome didn't read the text at all, so I've changed that to a `<span>`.

## Some bugs that are currently present on the menu at falcon.io
 - The major one - the menu is not accessible. If you are a blind person that uses a screen reader you won't ever understand that Platform, Solutions, etc. are buttons, because they are not marked up that way. Also, they are not focusable if you hit `TAB`, so if you've focused the logo, the next thing that you can focus is the Pricing link.
 - Another major one - if you open a dropdown, e.g. **Platform**, then if you click on another dropdown (e.g. **Solutions**) the transparent backdrop is removed. After that if you close the **Solutions** dropdown the backdrop appears and as a bonus you have overflow and scrolling issues. And you also **can't click anything on the page**.
 - Desktop and mobile menus have different links.
 - Issues with both desktop and mobile menu appearing on resolutions that are between a phone and a tablet. Although it wouldn't affect much devices now, it's always a good idea to make your website future-proof.
