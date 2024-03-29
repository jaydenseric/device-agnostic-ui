// @ts-check

import TestDirector from "test-director";

import test_Blockquote from "./Blockquote.test.mjs";
import test_Button from "./Button.test.mjs";
import test_ButtonSubmit from "./ButtonSubmit.test.mjs";
import test_Code from "./Code.test.mjs";
import test_Fieldset from "./Fieldset.test.mjs";
import test_Heading from "./Heading.test.mjs";
import test_Html from "./Html.test.mjs";
import test_Icon from "./Icon.test.mjs";
import test_IconTick from "./IconTick.test.mjs";
import test_LinkCard from "./LinkCard.test.mjs";
import test_LinkNav from "./LinkNav.test.mjs";
import test_LinkText from "./LinkText.test.mjs";
import test_ListOrdered from "./ListOrdered.test.mjs";
import test_ListUnordered from "./ListUnordered.test.mjs";
import test_Loading from "./Loading.test.mjs";
import test_Margin from "./Margin.test.mjs";
import test_Nav from "./Nav.test.mjs";
import test_Para from "./Para.test.mjs";
import test_Picture from "./Picture.test.mjs";
import test_Pre from "./Pre.test.mjs";
import test_Scroll from "./Scroll.test.mjs";
import test_Select from "./Select.test.mjs";
import test_splitWordBreaks from "./splitWordBreaks.test.mjs";
import test_Table from "./Table.test.mjs";
import test_Textbox from "./Textbox.test.mjs";
import test_Toggle from "./Toggle.test.mjs";
import test_useCustomValidity from "./useCustomValidity.test.mjs";
import test_useMergedRef from "./useMergedRef.test.mjs";
import test_useOnFocusReportValidity from "./useOnFocusReportValidity.test.mjs";
import test_WordBreaks from "./WordBreaks.test.mjs";

const tests = new TestDirector();

test_Blockquote(tests);
test_Button(tests);
test_ButtonSubmit(tests);
test_Code(tests);
test_Fieldset(tests);
test_Heading(tests);
test_Html(tests);
test_Icon(tests);
test_IconTick(tests);
test_LinkCard(tests);
test_LinkNav(tests);
test_LinkText(tests);
test_ListOrdered(tests);
test_ListUnordered(tests);
test_Loading(tests);
test_Margin(tests);
test_Nav(tests);
test_Para(tests);
test_Picture(tests);
test_Pre(tests);
test_Scroll(tests);
test_Select(tests);
test_splitWordBreaks(tests);
test_Table(tests);
test_Textbox(tests);
test_Toggle(tests);
test_useCustomValidity(tests);
test_useMergedRef(tests);
test_useOnFocusReportValidity(tests);
test_WordBreaks(tests);

tests.run();
