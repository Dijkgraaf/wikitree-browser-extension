import { registerFeature, OptionType } from "../../core/options/options_registry";

// The feature data for the myFeature feature
const usabilityTweaks = {
  name: "Usability Tweaks",
  id: "usabilityTweaks",
  description: "Miscellaneous tweaks.",
  category: "Other",
  creators: [{ name: "Ian Beacall", wikitreeid: "Beacall-6" }],
  contributors: [],
  defaultValue: true,
  pages: [true],
  options: [
    {
      id: "global",
      type: OptionType.GROUP,
      label: "Global",
      options: [
        {
          id: "focusFirstNameField",
          type: OptionType.CHECKBOX,
          label: "Put the focus in the First Name field (search field or Add Person First Name at Birth).",
          defaultValue: false,
        },
      ],
    },
    {
      id: "editPage",
      type: OptionType.GROUP,
      label: "Profile edit page",
      options: [
        {
          id: "removeTargetsFromEditFamilyLinks",
          type: OptionType.CHECKBOX,
          label: "Open Add/Remove/Replace links in the same tab.",
          defaultValue: false,
        },
        {
          id: "addRemoveConnectLinks",
          type: OptionType.CHECKBOX,
          label: "Replace Add/Remove/Replace links with Add, Remove, Connect links.",
          defaultValue: false,
        },
        {
          id: "rememberTextareaHeight",
          type: OptionType.CHECKBOX,
          label: "Remember the height of the editor on the edit page.",
          defaultValue: false,
        },
      ],
    },
    {
      id: "searchPage",
      type: OptionType.GROUP,
      label: "Search page",
      options: [
        {
          id: "saveSearchFormDataButton",
          type: OptionType.CHECKBOX,
          label: "Add a button to the search page to save the form data to populate fields on the Add Person page.",
          defaultValue: false,
        },
      ],
    },
    {
      id: "other",
      type: OptionType.GROUP,
      label: "Other",
      options: [
        {
          id: "fixPrintingBug",
          type: OptionType.CHECKBOX,
          label: "Fix a known bug in Chrome on Windows 10 that prevents good printing of WikiTree profiles.",
          defaultValue: false,
        },
      ],
    },
  ],
};
registerFeature(usabilityTweaks);
