import { registerFeature, OptionType } from "../core/options/options_registry";
import {
  /* eslint-disable no-unused-vars */
  isWikiPage,
  isWikiEdit,
  isWikiHistory,
  isProfilePage,
  isProfileUserPage,
  isProfileLoggedInUserPage,
  isProfileEdit,
  isProfileAddRelative,
  isAddUnrelatedPerson,
  isProfileHistory,
  isProfileHistoryDetail,
  isSpacePage,
  isSpaceEdit,
  isSpaceHistory,
  isMediaWikiPage,
  isMediaWikiEdit,
  isMediaWikiHistory,
  isCategoryPage,
  isCategoryEdit,
  isCategoryHistory,
  isTemplatePage,
  isTemplateEdit,
  isTemplateHistory,
  isHelpPage,
  isHelpEdit,
  isHelpHistory,
  isOtherPage,
  isOtherEdit,
  isOtherHistory,
  isSpecialPage,
  isSpecialBadges,
  isSpecialDNATests,
  isSpecialMyConnections,
  isSpecialWatchedList,
  isG2G,
  isDNADescendants,
  /* eslint-enable no-unused-vars */
} from "../core/pageType";

// Just importing this file will register all the features

////////////////////////////////////////////////////////////////////////////////
// For features with options they should have their own module to register
// the feature and options
////////////////////////////////////////////////////////////////////////////////

import "./add_person/add_person_options";
import "./agc/agc_options";
import "./auto_bio/auto_bio_options";
import "./categoryDisplay/categoryDisplay_options";
import "./change_family_lists/change_family_lists_options";
import "./custom_change_summary_options/custom_change_summary_options_options";
import "./darkMode/darkMode_options";
import "./date_fixer/date_fixer_options";
import "./edit_family_data/edit_family_data_options";
import "./extra_watchlist/extra_watchlist_options";
import "./g2g/g2g_options";
import "./genderPredictor/gender_predictor_options";
import "./language_setting/language_setting_options";
import "./randomProfile/randomProfile_options";
import "./readability/readability_options";
import "./redir_ext_links/redir_ext_links_options";
import "./sourcepreview/sourcepreview_options";
import "./spacepreview/spacepreview_options";
import "./table_filters/table_filters_options";
import "./usability_tweaks/usability_tweaks_options";
import "./what_links_here/what_links_here_options";
import "./wtPlus/wtPlus_options";

////////////////////////////////////////////////////////////////////////////////
// Simple features with no options can be registered here
////////////////////////////////////////////////////////////////////////////////
registerFeature({
  name: "Access Keys",
  id: "accessKeys",
  description:
    "Adds access keys. g: G2G Recent Activity; r: Random Profile, n: Nav Home Page;" +
    " h: Help Search; s: Save; e: Edit; k: Category; p: Preview.",
  link: "https://www.wikitree.com/wiki/Space:WikiTree_Browser_Extension#Access_Keys",
  category: "Global",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: true,
  pages: [true],
});

registerFeature({
  name: "AKA Name Links",
  id: "akaNameLinks",
  description: 'Adds surname page links to the "aka" names on the profile page.',
  category: "Profile",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: true,
  pages: [isProfilePage],
});

registerFeature({
  name: "Apps Menu",
  id: "appsMenu",
  description: "Adds an apps submenu to the Find menu.",
  category: "Global",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: true,
  pages: [true],
});

registerFeature({
  name: "Bio Check",
  id: "bioCheck",
  description: "Check biography style and sources.",
  category: "Editing",
  creators: [{ name: "Kay Knight", wikitreeid: "Sands-1865" }],
  contributors: [],
  defaultValue: true,
  pages: [isProfileEdit, isProfileAddRelative, isAddUnrelatedPerson, isSpecialWatchedList],
});

registerFeature({
  name: "Category Finder Pins",
  id: "categoryFinderPins",
  description:
    "Adds pins to Category Finder results (on the edit page), similar to the pins in the location dropdown.  These pins link to the category page for you to check that you have the right category.",
  category: "Editing",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: true,
  pages: [isWikiEdit],
});

registerFeature({
  name: "Clipboard and Notes",
  id: "clipboardAndNotes",
  description: "Keep useful things for pasting in the clipboard and useful notes in the notes.",
  category: "Global",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: false,
  pages: [true],
});

registerFeature({
  name: "Collapsible Descendants Tree",
  id: "collapsibleDescendantsTree",
  description: "Makes the descendants tree on profile pages collapsible.",
  creators: [{ name: "Julian Laffey", wikitreeid: "Laffey-98" }],
  contributors: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  category: "Profile",
  defaultValue: true,
  pages: [isProfilePage, isDNADescendants],
});

registerFeature({
  name: "Confirm Thank Yous",
  id: "confirmThankYous",
  description: "Adds a confirmation to 'Thank you' links.",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  category: "Global",
  defaultValue: false,
  pages: [true],
});

registerFeature({
  name: "Distance and Relationship",
  id: "distanceAndRelationship",
  description: "Adds the distance (degrees) between you and the profile person and any relationship between you.",
  category: "Profile",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [{ name: "Riël Smit", wikitreeid: "Smit-641" }],
  defaultValue: true,
  pages: [isProfilePage],
});

registerFeature({
  name: "DNA Connections Table",
  id: "dnaTable",
  description: "Adds birthplaces to DNA Connections table.",
  category: "Other",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: true,
  pages: [isSpecialDNATests],
});

registerFeature({
  name: "Draft List",
  id: "draftList",
  description: "Adds a button to the Find menu to show your uncommitted drafts.",
  category: "Global",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: true,
  pages: [true],
});

registerFeature({
  name: "Family Group",
  id: "familyGroup",
  description: "Display dates and locations of all family members. A button is added to the profile submenu.",
  category: "Profile",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: true,
  pages: [isProfilePage],
});

registerFeature({
  name: "Family Timeline",
  id: "familyTimeline",
  description: "Displays a family timeline. A button is added to the profile submenu.",
  category: "Profile",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [{ name: "Riël Smit", wikitreeid: "Smit-641" }],
  defaultValue: true,
  pages: [isProfilePage],
});

registerFeature({
  name: "Google Search Box",
  id: "googleSearchBox",
  description: "Adds a Google Search Box to the bottom of every page.",
  category: "Global",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: false,
  pages: [true],
});

registerFeature({
  name: "Locations Helper",
  id: "locationsHelper",
  description:
    "Manipulates the suggested locations, highlighting likely correct locations," +
    " based on family members' locations, and demoting likely wrong locations, based on the dates.",
  category: "Editing",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: true,
  pages: [isProfileEdit, isProfileAddRelative],
});

registerFeature({
  name: "Make Radio Buttons De-selectable",
  id: "makeRadioButtonsDeselectable",
  description: "Makes radio buttons de-selectable.  Click on a previously selected status value to clear it.",
  category: "Editing",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: true,
  pages: [isProfileEdit, isProfileAddRelative],
});

registerFeature({
  name: "My Connections",
  id: "myConnections",
  description:
    "Adds buttons to the My Connections page to create tables of the people in each degree," +
    " showing missing parents, possible missing spouses, and the number of children. Also, continues finding more connections in a degree after the maximum 1000 has been reached.",
  category: "Other",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: true,
  pages: [isSpecialMyConnections],
});

registerFeature({
  name: "My Menu",
  id: "myMenu",
  description: "Add your own custom menu for easy access to your most commonly used links.",
  category: "Global",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: false,
  pages: [true],
});

registerFeature({
  name: "Printer Friendly Bio",
  id: "printerFriendly",
  description: "Change the page to a printer-friendly one.",
  category: "Global",
  creators: [{ name: "Jamie Nelson", wikitreeid: "Nelson-3486" }],
  contributors: [],
  defaultValue: true,
  pages: [isProfilePage],
});

registerFeature({
  name: "Scissors",
  id: "scissors",
  description:
    "Adds scissors (like on profile pages) to Category, Help, Project, Template, and Change Details pages to copy various things.",
  category: "Other",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [
    { name: "Riël Smit", wikitreeid: "Smit-641" },
    { name: "Aleš Trtnik", wikitreeid: "Trtnik-2" },
  ],
  defaultValue: true,
  pages: [isWikiPage, isProfileEdit, isSpaceEdit, isProfileHistoryDetail],
});

registerFeature({
  name: "Smooth Scrolling",
  id: "smoothScrolling",
  description: "Scroll the window smoothly when linking to specific sections of the page.",
  category: "Style",
  creators: [{ name: "Jonathan Duke", wikitreeid: "Duke-5773" }],
  contributors: [],
  defaultValue: false,
  pages: [true],
});

registerFeature({
  name: "Sort Badges",
  id: "sortBadges",
  description: "Buttons to move or hide your Club 100/1000 badges.",
  category: "Other",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: true,
  pages: [isProfileLoggedInUserPage, isSpecialBadges],
});

registerFeature({
  name: "Sort Theme People",
  id: "sortThemePeople",
  description:
    "Replaces the Connection Finder (theme of the week) section on Profile pages with a table sorted by degree of closeness to the profile person.",
  category: "Profile",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: false,
  pages: [isProfilePage],
});

registerFeature({
  name: "Sticky Header",
  id: "stickyHeader",
  description: "Makes the WikiTree header stick to the top and more compact on narrow screens.",
  category: "Style",
  creators: [{ name: "Jonathan Duke", wikitreeid: "Duke-5773" }],
  contributors: [],
  defaultValue: false,
  pages: [true],
});

registerFeature({
  name: "Sticky Toolbar",
  id: "stickyToolbar",
  description:
    "Makes the toolbar on the editor on edit pages stick to the top of the screen and not scroll out of sight.",
  category: "Editing",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: true,
  pages: [isWikiEdit],
});

registerFeature({
  name: "Suggested Matches Filters",
  id: "suggestedMatchesFilters",
  description: "Lets you filter out suggested matches for new profiles by location, name, and/or date.",
  category: "Editing",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: true,
  pages: [isProfileAddRelative, isAddUnrelatedPerson],
});

registerFeature({
  name: "Verify ID",
  id: "verifyID",
  description:
    "When attaching a person by ID, you can see some details of the person and check that you've entered the correct ID.",
  category: "Editing",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: true,
  pages: [isProfileAddRelative],
});

/*
 * debugging features for development only
 *
registerFeature({
  name: "Debug Profile Classes",
  id: "debugProfileClasses",
  description: "Highlights various sections of page profiles (for testing the core profileClasses code).",
  category: "Debug",
  creators: [{ name: "Jonathan Duke", wikitreeid: "Duke-5773" }],
  contributors: [],
  defaultValue: false,
  pages: [isProfilePage, isSpacePage, isCategoryPage],
});
// end debugging section */
