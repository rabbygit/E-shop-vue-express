import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faPinterest,
  faFacebook,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

import {
  faUser,
  faBuilding,
  faBell,
  faEnvelope,
  faBars,
  faSearch,
  faTimes,
  faEdit,
  faTrashAlt,
  faShoppingCart,
  faSearchPlus,
  faPlus,
  faMinus,
  faTruck,
  faRedoAlt,
  faQuestionCircle,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faUserCircle,
  faCheckCircle,
} from '@fortawesome/free-regular-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(
  faUser,
  faBuilding,
  faUserCircle,
  faCheckCircle,
  faBars,
  faSearch,
  faTimes,
  faBell,
  faEnvelope,
  faEdit,
  faTrashAlt,
  faShoppingCart,
  faSearchPlus,
  faPlus,
  faMinus,
  faPinterest,
  faFacebook,
  faTwitter,
  faTruck,
  faRedoAlt,
  faQuestionCircle,
  faPhoneAlt,
);

Vue.component('font-awesome-icon', FontAwesomeIcon); // registered globally
