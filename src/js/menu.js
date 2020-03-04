function toggleMenu() {
	const toggledDropdownClass = 'is-dropdown-toggled';
	const toggledNavClass = 'is-nav-toggled';

	const Nav = document.querySelector('.js-nav');
	const Header = document.querySelector('.js-header');
  const Body = document.querySelector('body');
  
  const MenuToggler = document.querySelector('.js-toggle-menu');
  const NavTogglers = document.querySelectorAll('.js-nav-toggler');
  const NavCloser = document.querySelector('.js-nav-closer');
	const NavActiveState = document.querySelector('.js-nav-active-state');

  let ActiveButton = null;
  
  init();

  function init() {
    setActiveIndicator(Nav, false);

    // Add click listeners to all dropdown togglers
    NavTogglers.forEach((NavToggler) => {
      NavToggler.addEventListener('click', () => {
        toggleButtonClass(NavToggler);
        setActiveIndicator(NavToggler);
        saveActiveButton(NavToggler);
        toggleBodyOverlay();
      })
    });

    // Close the dropdown if you click outside of the header
    Body.addEventListener('click', closeDropdown);

    // Close the dropdown if you click the BACK TO MAIN MENU button
    NavCloser.addEventListener('click', closeDropdown);
    // Ensure clicks in the header area don't close the nav dropdown
    Header.addEventListener('click', (e) => {
      e.stopPropagation();
    })

    MenuToggler.addEventListener('click', toggleMenu);
  }

  // Close the dropdown and remove all active states
  function closeDropdown() {
    ActiveButton.classList.remove(toggledDropdownClass);
    setActiveIndicator(Nav, false);
    saveActiveButton(null);
    Body.classList.remove(toggledDropdownClass);
  }

  // Update the position and width of the active state bar
  function setActiveIndicator(Element, isActive = true) {
    const offsetLeft = Element.getBoundingClientRect().left;
    const width = Element.getBoundingClientRect().width;

    NavActiveState.style.transform = 'translateX(' + offsetLeft + 'px)';
    
    if (isActive) {
      NavActiveState.style.width = width + 'px';
    } else {
      setTimeout(() => {
        NavActiveState.style.width = '0px';
      }, 1);
    }
  }

  // Sets dark overlay under the menu, but over the main content
  function toggleBodyOverlay() {
    if (ActiveButton) {
      Body.classList.add(toggledDropdownClass);
    } else {
      Body.classList.remove(toggledDropdownClass);
    }
  }

  // Save the active button
  function saveActiveButton(ClickedButton) {
    if (isButtonActive(ClickedButton)) {
      ActiveButton = null;
      return;
    }

    ActiveButton = ClickedButton;
  }

  // Toggle the button class
  function toggleButtonClass(ClickedButton) {
    if (ActiveButton) {
      ActiveButton.classList.remove(toggledDropdownClass);
      ActiveButton.setAttribute('aria-expanded', false);
    }

    // If the clicked button is the active one
    if (isButtonActive(ClickedButton)) {
      setActiveIndicator(ClickedButton, false);

      return;
    }

    ClickedButton.classList.add(toggledDropdownClass);
    ClickedButton.setAttribute('aria-expanded', true);
  }

  // Check if a button is the active one
  function isButtonActive(Button) {
    return Button === ActiveButton;
  }

  function toggleMenu() {
    console.log('hey');
    
    Nav.classList.toggle(toggledNavClass);
    MenuToggler.classList.toggle(toggledNavClass);
    Body.classList.toggle(toggledNavClass);
    Body.classList.remove('is-dropdown-toggled');
    saveActiveButton(null);

    NavTogglers.forEach((button) => {
      button.classList.remove('is-dropdown-toggled');
    })
  }

}

export default toggleMenu;
