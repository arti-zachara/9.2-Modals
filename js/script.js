"use strict";
(function() {
  // remove "show" class from all modals
  function hideAllModals() {
    for (var i = 0; i < modals.length; i++) {
      modals[i].classList.remove("show");
    }
  }

  // links opening modals
  var modalLinks = document.querySelectorAll(".show-modal");

  for (var i = 0; i < modalLinks.length; i++) {
    var modalLinkId = modalLinks[i].getAttributeNode("href").value;
    modalLinks[i].addEventListener("click", function() {
      showModal(event, modalLinkId);
    });
  }

  // function opening modal
  var showModal = function(event, modalToBeShown) {
    event.preventDefault();
    hideAllModals;
    document.querySelector(modalToBeShown).classList.add("show");
    document.querySelector("#modal-overlay").classList.add("show");
  };

  // closing modals removing overlay display
  var hideModal = function(event) {
    event.preventDefault();
    document.querySelector("#modal-overlay").classList.remove("show");
  };

  var closeButtons = document.querySelectorAll(".modal .close");

  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", hideModal);
  }

  // closing by clicking overlay
  document.querySelector("#modal-overlay").addEventListener("click", hideModal);

  // stopping propagation in overlay
  var modals = document.querySelectorAll(".modal");

  for (var i = 0; i < modals.length; i++) {
    modals[i].addEventListener("click", function(event) {
      event.stopPropagation();
    });
  }
})();
