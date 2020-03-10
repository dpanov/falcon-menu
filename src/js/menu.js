function menu() {
  const toggledDropdownClass = 'is-dropdown-toggled';
  const toggledNavClass = 'is-nav-toggled';

  const domBody = document.querySelector('body');
  const domHeader = document.querySelector('.js-header');

  const domNav = document.querySelector('.js-nav');
  const domNavToggler = document.querySelector('.js-nav-toggler');
  const domNavDropdownTogglers = [].slice.call(document.querySelectorAll('.js-nav-dropdown-toggler'));
  const domNavCloser = document.querySelector('.js-nav-closer');
  const domNavActiveState = document.querySelector('.js-nav-active-state');

  // Used to store the current active dropdown button
  let activeButton = null;

  init();

  function init() {
    // Set the initial active state position, based on the Nav dom element
    updateActiveIndicator(domNav, false);

    // Add click listeners to all dropdown togglers
    domNavDropdownTogglers.forEach((domNavToggler, index) => {
      domNavToggler.addEventListener('click', () => {
        if (activeButton === domNavToggler) {
          closeDropdown();
        } else {
          closeDropdown(false);
          openDropdown(domNavToggler);
        }
      })
    });

    // Close the dropdown if you click outside of the header
    domBody.addEventListener('click', closeDropdown);

    // Close the dropdown if you click the BACK TO MAIN MENU button
    domNavCloser.addEventListener('click', closeDropdown);

    // Ensure clicks in the header area don't close the nav dropdown
    domHeader.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Listener for menu button on mobile
    domNavToggler.addEventListener('click', toggleNav);
  }

  // Close the dropdown and remove all active states
  function closeDropdown(clearActiveStyles = true) {
    if (activeButton && clearActiveStyles) {
      updateActiveIndicator(activeButton, false);
    }

    if (activeButton) {
      activeButton.classList.remove(toggledDropdownClass);
      activeButton.setAttribute('aria-expanded', false);
      domBody.classList.remove(toggledDropdownClass);
      activeButton = null;
    }
  }

  // Open the dropdown, add proper active state and update aria-expanded
  function openDropdown(clickedButton) {
    activeButton = clickedButton;

    updateActiveIndicator(clickedButton);
    domBody.classList.add(toggledDropdownClass);
    clickedButton.classList.add(toggledDropdownClass);
    clickedButton.setAttribute('aria-expanded', true);
  }

  // Update the position and width of the active state bar
  function updateActiveIndicator(clickedButton, updateWidth = true) {
    const offsetLeft = clickedButton.getBoundingClientRect().left;
    const width = clickedButton.getBoundingClientRect().width;

    domNavActiveState.style.transform = 'translateX(' + offsetLeft + 'px)';
    
    if (updateWidth) {
      domNavActiveState.style.width = width + 'px';
    } else {
      domNavActiveState.style.width = '0';
    }
  }

  // Toggle the menu - used on mobile only
  function toggleNav() {
    domNav.classList.toggle(toggledNavClass);
    domNavToggler.classList.toggle(toggledNavClass);
    domBody.classList.toggle(toggledNavClass);
    domBody.classList.remove('is-dropdown-toggled');
    activeButton.classList.remove('is-dropdown-toggled');
    
    activeButton = null;
  }
}

export default menu;
