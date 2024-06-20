searchState.loadedDescShard("zng_wgt_text", 0, "Text widgets and properties.\nAccepts <code>&#39;\\n&#39;</code> input when editable.\nAccepts <code>&#39;\\t&#39;</code> input when editable.\nAuto selection on keyboard focus.\nSelect-all on keyboard focus (highlight) if the text is …\nDefines when text is auto-selected on focus.\nThe widget lost keyboard focus.\nCaret color, inherits from <code>FONT_COLOR_VAR</code>.\nDebounce time for change stop.\nDefines the position of an interactive caret in relation …\nDisplay info of edit caret position.\nArguments for <code>on_change_stop</code>.\nCause of an <code>on_change_stop</code>.\nDefault value, skip glyphs.\nThe <code>change_stop_delay</code> elapsed.\nUnderline is positioned after the text <em>descent</em>, avoiding …\nUses non-interactive carets for all selections.\nDoes not select-all on focus.\n A simple text run with <em>italic</em> font style.\nUses interactive carets for all selections.\nSelect-all on keyboard focus (highlight).\nThe <code>Key::Enter</code> was pressed and <code>accepts_enter</code> is <code>false</code>.\nFont anti-aliasing of <code>Text!</code> spans.\nColor of <code>Text!</code> glyphs that are not colored by palette.\nFont family of <code>Text!</code> spans.\nFont features of <code>Text!</code> spans.\nOverrides of specific colors in the selected colored glyph …\nColor of <code>Text!</code> glyphs that are colored by palette, mostly …\nFont size of <code>Text!</code> spans.\nFont stretch of <code>Text!</code> spans.\nFont style of <code>Text!</code> spans.\nFont synthesis of <code>Text!</code> spans.\nFont variations of <code>Text!</code> spans.\nFont weight of <code>Text!</code> spans.\nUnderline is positioned using the offset defined in the …\nm  Advanced font config, features, kerning, variations and …\nm  Basic text font properties.\nSkip over glyph descenders that intersect with the …\nText hyphenation config.\nHyphen text rendered when auto-hyphenating.\nUnderline style for the IME preview underline.\nUnderline thickness for the IME preview underline.\nInteractive caret mode.\nInteractive caret visual.\nText is allowed to overflow.\nCaret defines the insert point, when there is no selection.\nDefines when the interactive carets are used.\nText justify mode when text align is fill.\nExtra letter spacing of <code>Text!</code> spans.\nConfiguration of line breaks in Chinese, Japanese, or …\nText line height of <code>Text!</code> spans.\nExtra spacing in between lines of <code>Text!</code> spans.\nm  Language and text direction properties.\nRepresents the number of lines and number of wrap lines in …\nMaximum number of characters that can be input.\nUnderline spans the entire text length.\nNo line wrap.\nIf text characters are replaced with <code>OBSCURING_CHAR_VAR</code> …\nReplacement character used when obscuring text.\nOverline color, inherits from <code>FONT_COLOR_VAR</code>.\nOverline style.\nOverline thickness.\nExtra paragraph spacing of text blocks.\nm  Text paragraph properties.\nSelection background color.\nPosition the selection toolbar in relation to the bounding …\nSelection toolbar function.\nSkip white space.\nStrikethrough color, inherits from <code>FONT_COLOR_VAR</code>.\nStrikethrough style.\nStrikethrough thickness.\nCaret defines the selection start in LTR and end in RTL …\nCaret defines the selection end in LTR and start in RTL …\nArguments for <code>selection_toolbar_fn</code>.\nm  Selection toolbar properties.\n A simple text run with <strong>bold</strong> font weight.\nLength of the <code>TAB</code> space.\nText alignment inside the available space.\nText is editable.\nText alignment inside the available space when it …\nText overflow handling.\nText is selectable.\nText transformation function applied to <code>Text!</code> spans.\nIf line breaks are automatically inserted to fill the …\nIf text parse updated for every text change.\nW  A configured text run.\nm  Text align, justify.\nm  Text underline, overline and strikethrough lines.\nm  Text edit properties.\nm  Text color properties.\nm  Properties that probes various state from the text …\nDefines how text overflow is handled by the text widgets.\nm  Text spacing properties.\nm  Text transform properties.\nm  Text wrap, hyphenation.\nUses interactive carets only for touch selections, uses …\nTruncate the text so it will fit, the associated <code>Txt</code> is a …\nRepresents a type that can be a var value, parse and …\nUnderline color, inherits from <code>FONT_COLOR_VAR</code>.\nPosition of the underline.\nParts of text skipped by underline.\nUnderline style.\nUnderline thickness.\nDefines what line gets traced by the text underline …\nRepresents what parts of a text the underline must skip …\nText white space transform of <code>Text!</code> spans.\nConfiguration of line breaks inside words during text wrap.\nExtra word spacing of <code>Text!</code> spans.\nSome text lines have more than one wrap line.\nP  If the <code>&#39;\\n&#39;</code> character is inserted when enter is pressed …\nP  If the <code>&#39;\\n&#39;</code> character is inserted when enter is pressed …\nP  If the <code>&#39;\\t&#39;</code> character is inserted when tab is pressed …\nP  If the <code>&#39;\\t&#39;</code> character is inserted when tab is pressed …\nGet a flags value with all known bits set.\nID of the widget the toolbar is anchored to.\nP  Auto-selection on focus when the text is editable.\nP  Auto-selection on focus when the text is editable.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the underlying bits value.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nP  Defines the color of the non-interactive caret.\nP  Defines the color of the non-interactive caret.\nEvent cause.\nP  Debounce time for <code>on_change_stop</code>.\nP  Debounce time for <code>on_change_stop</code>.\nCommands that control the editable text.\nDisplay column, starts at 1.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nWhether all set bits in a source flags value are also set …\nInsert context variables used by properties in this mix-in.\nInsert context variables used by properties in this mix-in.\nInsert context variables used by properties in this mix-in.\nInsert context variables used by properties in this mix-in.\nInsert context variables used by properties in this mix-in.\nInsert context variables used by properties in this mix-in.\nInsert context variables used by properties in this mix-in.\nInsert context variables used by properties in this mix-in.\nInsert context variables used by properties in this mix-in.\nInsert context variables used by properties in this mix-in.\nInsert context variables used by properties in this mix-in.\nInsert context variables used by properties in this mix-in.\nInsert context variables used by properties in this mix-in.\nContext variables used by properties in text.\nThe intersection of a source flags value with the …\nP  Sets the layout direction used in the layout of the …\nP  Sets the layout direction used in the layout of the …\nTruncate with the ellipses <code>&#39;…&#39;</code> char as suffix.\nGet a flags value with all bits unset.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nP  Configure the anti-aliasing used to render text glyphs …\nP  Configure the anti-aliasing used to render text glyphs …\nP  Sets the font annotation alternative feature.\nP  Sets the font annotation alternative feature.\nP  Sets the font capital variant features.\nP  Sets the font capital variant features.\nP  Sets the font character variant alternative feature.\nP  Sets the font character variant alternative feature.\nP  Sets the Chinese logographic set.\nP  Sets the Chinese logographic set.\nP  Defines the color the most text glyphs are filled with.\nP  Defines the color the most text glyphs are filled with.\nP  Sets the font common ligatures features.\nP  Sets the font common ligatures features.\nP  Sets the font contextual alternatives feature.\nP  Sets the font contextual alternatives feature.\nP  Sets the font discretionary ligatures feature.\nP  Sets the font discretionary ligatures feature.\nP  Sets the East Asian figure width.\nP  Sets the East Asian figure width.\nP  Font family name or list of names for texts in this …\nP  Font family name or list of names for texts in this …\nP  Sets font features.\nP  Sets font features.\nP  Sets the font historical forms alternative feature.\nP  Sets the font historical forms alternative feature.\nP  Sets the font historical ligatures feature.\nP  Sets the font historical ligatures feature.\nP  Sets the Japanese logographic set.\nP  Sets the Japanese logographic set.\nP  Sets the font kerning feature.\nP  Sets the font kerning feature.\nP  Sets the font numeric fraction features.\nP  Sets the font numeric fraction features.\nP  Sets the font numeric spacing features.\nP  Sets the font numeric spacing features.\nP  Sets the font numeric variant features.\nP  Sets the font numeric variant features.\nP  Sets the font ornaments alternative feature.\nP  Sets the font ornaments alternative feature.\nP  Defines the palette used to render colored glyphs …\nP  Defines the palette used to render colored glyphs …\nP  Defines custom palette colors that affect Emoji colors.\nP  Defines custom palette colors that affect Emoji colors.\nP  Sets the font sub/super script position alternative …\nP  Sets the font sub/super script position alternative …\nP  Sets the font size for the widget and descendants.\nP  Sets the font size for the widget and descendants.\nP  Defines how condensed or expanded the preferred font …\nP  Defines how condensed or expanded the preferred font …\nP  Defines the skew style of the font glyphs.\nP  Defines the skew style of the font glyphs.\nP  Sets the font stylistic set alternative feature.\nP  Sets the font stylistic set alternative feature.\nP  Sets the font stylistic alternative feature.\nP  Sets the font stylistic alternative feature.\nP  Sets the font swash features.\nP  Sets the font swash features.\nP  Configure if a synthetic font is generated for fonts …\nP  Configure if a synthetic font is generated for fonts …\nP  Sets font variations.\nP  Sets font variations.\nP  Defines the thickness or boldness the preferred font …\nP  Defines the thickness or boldness the preferred font …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nTruncate (no suffix), or ignore.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nGet a flags value with the bits of a flag with the given …\nTry parse <code>Self</code> from <code>txt</code>, formats the error for display.\nP  Gets the caret char index, if the text is editable.\nP  Gets the caret char index, if the text is editable.\nP  Gets the caret display status, if the text is editable.\nP  Gets the caret display status, if the text is editable.\nP  Gets the number of character in the text.\nP  Gets the number of character in the text.\nP  Gets a vector of font and ranges.\nP  Gets a vector of font and ranges.\nP  Gets the number of lines in the text, including wrap …\nP  Gets the number of lines in the text, including wrap …\nP  Gets the number of wrap lines per text lines.\nP  Gets the number of wrap lines per text lines.\nP  Gets the overflow text, that is a clone of the text …\nP  Gets the overflow text, that is a clone of the text …\nP  The char or small string that is rendered when text is …\nP  The char or small string that is rendered when text is …\nP  Configure hyphenation.\nP  Configure hyphenation.\nGlyph icon widget, properties and nodes..\nP  Style and thickness of the line drawn <em>under</em> the IME …\nP  Style and thickness of the line drawn <em>under</em> the IME …\nChar index on the text string, starts a 0, can be the …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nP  Defines when the interactive carets are used.\nP  Defines when the interactive carets are used.\nP  Defines custom caret visual for interactive caret.\nP  Defines custom caret visual for interactive caret.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether all known bits in this flags value are set.\nWhether all bits in this flags value are unset.\nP  Gets if the text has an entire line overflown.\nP  Gets if the text has an entire line overflown.\nP  Gets if the text is overflown.\nP  Gets if the text is overflown.\nP  If text has changed but <code>txt_parse</code> has not tried to …\nP  If text has changed but <code>txt_parse</code> has not tried to …\nText was selected through touch interaction.\nYield a set of contained flags values.\nYield a set of contained named flags values.\nP  Config the automatic spacing inserted between words and …\nP  Config the automatic spacing inserted between words and …\nP  Sets the text language and script for the widget and …\nP  Sets the text language and script for the widget and …\nP  Extra spacing added in between text letters. If not set …\nP  Extra spacing added in between text letters. If not set …\nDisplay line, starts at 1.\nP  Configuration of text wrapping for Chinese, Japanese, …\nP  Configuration of text wrapping for Chinese, Japanese, …\nP  Height of each text line. If not set inherits the …\nP  Height of each text line. If not set inherits the …\nP  Extra spacing in-between text lines. If not set …\nP  Extra spacing in-between text lines. If not set …\nGets the number of text lines.\nP  Maximum number of characters that can be input.\nP  Maximum number of characters that can be input.\nNew position from char index and text.\nUI nodes used for building a text widget.\nStatus for text without caret.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nP  If the typed text is obscured in render.\nP  If the typed text is obscured in render.\nP  Replacement character used when obscuring text.\nP  Replacement character used when obscuring text.\nP  Called after the text changed and interaction has …\nP  Called after the text changed and interaction has …\nP  Draw lines <em>above</em> each text line.\nP  Draw lines <em>above</em> each text line.\nP  Custom <code>overline</code> color, if not set the <code>font_color</code> is …\nP  Custom <code>overline</code> color, if not set the <code>font_color</code> is …\nP  Extra spacing in-between paragraphs.\nP  Extra spacing in-between paragraphs.\nThe intersection of a source flags value with the …\nP  Sets the <code>SELECTION_COLOR_VAR</code>.\nP  Sets the <code>SELECTION_COLOR_VAR</code>.\nP  Defines the floating mini-toolbar that shows near a new …\nP  Defines the floating mini-toolbar that shows near a new …\nP  Position the selection toolbar in relation to the …\nP  Position the selection toolbar in relation to the …\nP  Defines the floating mini-toolbar that shows near a new …\nP  Defines the floating mini-toolbar that shows near a new …\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nP  Draw lines across each text line.\nP  Draw lines across each text line.\nP  Custom <code>strikethrough</code> color, if not set the <code>font_color</code> …\nP  Custom <code>strikethrough</code> color, if not set the <code>font_color</code> …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nP  Length of the TAB character space, relative to the …\nP  Length of the TAB character space, relative to the …\nDisplay the value, the returned text can be parsed back to …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nTruncate without suffix.\nc  The text string.\nc  The text string.\nP  Alignment of text inside available space.\nP  Alignment of text inside available space.\nP  Enable text caret, input and makes the widget focusable.\nP  Enable text caret, input and makes the widget focusable.\nP  Highlight a text range.\nP  Highlight a text range.\nP  Defines if text overflow is truncated, with optional …\nP  Defines if text overflow is truncated, with optional …\nP  Alignment of text inside available space when the text …\nP  Alignment of text inside available space when the text …\nP  Value that is parsed from the text and displayed as the …\nP  Value that is parsed from the text and displayed as the …\nP  If <code>txt_parse</code> tries to parse after any text change …\nP  If <code>txt_parse</code> tries to parse after any text change …\nP  Shorthand property, disables live parsing and parse on …\nP  Shorthand property, disables live parsing and parse on …\nP  Enable text selection, copy and makes the widget …\nP  Enable text selection, copy and makes the widget …\nP  Text transform, character replacement applied to the …\nP  Text transform, character replacement applied to the …\nP  Enables or disables text wrap.\nP  Enables or disables text wrap.\nP  Draw lines <em>under</em> each text line.\nP  Draw lines <em>under</em> each text line.\nP  Custom <code>underline</code> color, if not set the <code>font_color</code> is …\nP  Custom <code>underline</code> color, if not set the <code>font_color</code> is …\nP  Defines what font line gets traced by the underline.\nP  Defines what font line gets traced by the underline.\nP  Defines what segments of each text line are skipped …\nP  Defines what segments of each text line are skipped …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nP  Text white space transform.\nP  Text white space transform.\nStart building a new instance.\nGets the widget type info.\nInclude the font feature config in the widget context.\nSet the palette color in the font palette colors.\nIncludes the font variation config in the widget context.\nP  Configure line breaks inside words during text wrap.\nP  Configure line breaks inside words during text wrap.\nP  Extra spacing added to the Unicode <code>U+0020 SPACE</code> …\nP  Extra spacing added to the Unicode <code>U+0020 SPACE</code> …\nApplies the <code>TextEditOp</code> into the text if it is editable.\nParse text and update value if <code>txt_parse</code> is pending.\nSelect all text.\nApplies the <code>TextSelectOp</code> into the text if it is editable.\nRepresents a text edit operation that can be send to an …\nRepresents a text selection operation that can be send to …\nApplies <code>TEXT_TRANSFORM_VAR</code> and <code>WHITE_SPACE_VAR</code> to the text.\nRemove one <em>backspace range</em> ending at the caret index, or …\nRemove one <em>backspace word range</em> ending at the caret index, …\nRemove one <em>delete range</em> starting at the caret index, or …\nRemove one <em>delete word range</em> starting at the caret index, …\nReturns the argument unchanged.\nReturns the argument unchanged.\nInsert operation.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nClear selection and move the caret to the nearest insert …\nClear selection and move the caret to the end of the line …\nClear selection and move the caret to the start of the …\nClear selection and move the caret to the nearest insert …\nClear selection and move the caret to the insert point …\nNew text edit operation.\nNew text select operation.\nClear selection and move the caret to the next insert …\nClear selection and move the caret to the next word insert …\nClear selection and move the caret one viewport down.\nClear selection and move the caret one viewport up.\nClear selection and move the caret to the previous insert …\nClear selection and move the caret to the previous word …\nReplace operation.\nSelect the full text.\nExtend or shrink selection by moving the caret index or …\nExtend or shrink selection by moving the caret to the …\nExtend or shrink selection by moving the caret to the end …\nReplace or extend selection with the line nearest to the …\nExtend or shrink selection by moving the caret to the …\nExtend or shrink selection by moving the caret to the …\nExtend or shrink selection by moving the caret to the …\nExtend or shrink selection by moving the caret to the next …\nExtend or shrink selection by moving the caret to the next …\nExtend or shrink selection by moving the caret one …\nExtend or shrink selection by moving the caret one …\nExtend or shrink selection by moving the caret to the …\nExtend or shrink selection by moving the caret to the …\nExtend or shrink selection by moving the caret to the text …\nExtend or shrink selection by moving the caret to the text …\nReplace or extend selection with the word nearest to the …\nClear selection and move the caret to the text end.\nClear selection and move the caret to the text start.\nCode “char” that is mapped to the glyph.\nAdds the <code>icon</code> command metadata.\nRepresents an icon glyph and font.\nIdentifies an icon glyph in the font set.\nDefines the color of an icon.\nDefines the size of an icon.\nW  Render icons defined as glyphs in an icon font.\nString that resolves to the glyph due to the default …\nFont features, like ligatures.\nIcon set font name.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nIcon glyph.\nc  The glyph icon.\nc  The glyph icon.\nP  Sets the <code>ICON_COLOR_VAR</code> that affects all icons inside …\nP  Sets the <code>ICON_COLOR_VAR</code> that affects all icons inside …\nP  Sets the <code>ICON_SIZE_VAR</code> that affects all icons inside …\nP  Sets the <code>ICON_SIZE_VAR</code> that affects all icons inside …\nGets a read-write variable that is the icon for the …\nSets the initial icon if it is not set.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nNew icon.\nStart building a new instance.\nGets the widget type info.\nEnable all ligatures.\nCaret origin.\nRepresents the caret position at the <code>ResolvedText</code> level.\nCommand or other programmatic selection.\nIME text edit that is not committed yet.\nKey press.\nRepresents the laidout text.\nMouse drag.\nOverflow.\nOverline size and position.\nText layout parts that need rebuild.\nFull reshape, re-compute all glyphs.\nText lines position, retains line glyphs but reposition …\nInfo about the last text render or render update.\nRepresents the resolved fonts and the transformed, white …\nStrikethrough size and position.\nDefines the source of the current selection.\nText internals used by text implementer nodes and …\nTouch drag.\nUnderline size and position.\nGet a flags value with all known bits set.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the underlying bits value.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nCaret index and animation.\nTop-middle offset of the caret index in the shaped text.\nThe x offset used when pressing up or down.\nTop-middle offset of the caret selection_index in the …\nClears selection.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nWhether all set bits in a source flags value are also set …\nIdentify, 1.fct()\nDefault interactive caret visual.\nThe intersection of a source flags value with the …\nGet a flags value with all bits unset.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nQueried font faces.\nSized <code>faces</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nGet a flags value with the bits of a flag with the given …\nIME text edit that is not committed yet. Only the text in …\nComputed <code>IME_UNDERLINE_THICKNESS_VAR</code>.\nList of underline segments for IME preview text, defining …\nCaret byte offset in the text string.\nValue incremented by one every time the <code>index</code> is set.\nSelection by word or line sets this value, selection …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nAn Ui node that implements interaction and renders the …\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether all known bits in this flags value are set.\nWhether all bits in this flags value are unset.\nYield a set of contained flags values.\nYield a set of contained named flags values.\nRead lock the current contextual laidout text.\nAn UI node that layouts the parent <code>ResolvedText</code> defined by …\nCreate a node that is sized one text line height by <code>width</code>.\nReturns <code>true</code> if the interactive carets must be used for …\nAn Ui node that renders the edit caret visual.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nCaret opacity.\nShaped text overflow info.\nShaped text used as suffix when <code>shaped_text</code> overflows.\nComputed <code>OVERLINE_THICKNESS_VAR</code>.\nList of overline segments, defining origin and width of …\nText modification is scheduled, caret info will only be …\nLayout that needs to be recomputed as identified by the …\nCaret index when IME started.\nSelection index when IME started.\nThe intersection of a source flags value with the …\nAn Ui node that renders the default IME preview underline …\nInfo about the last text render or render update.\nAn Ui node that renders the default overline visual using …\nAn Ui node that renders the text selection background.\nAn Ui node that renders the default strikethrough visual …\nAn UI node that renders the parent <code>LaidoutText</code>.\nAn Ui node that renders the default underline visual using …\nWrite lock the current contextual resolved text to edit …\nAn UI node that resolves the text context vars, applies …\nRead lock the current contextual resolved text.\nRender scale factor of the text.\nText transformed, white space corrected and segmented.\nShow interactive carets.\nGets the character range of the selection if both <code>index</code> …\nSecond index that defines the start or end of a selection …\nGets the selection range if both <code>index</code> and <code>selection_index</code> …\nIf the selection toolbar is open.\nImplements the selection toolbar.\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nSet the char byte index and update the index version.\nSet the char byte index of the selection start, end and …\nSet the index and update the index version.\nSet the caret <em>hotspot</em> that marks the middle of the caret …\nSets the selection start, end and update the index version.\nLayout text.\nVersion updated every time the <code>shaped_text</code> is reshaped.\nDon’t scroll to new caret position on the next update.\nComputed <code>STRIKETHROUGH_THICKNESS_VAR</code>.\nList of strikethrough segments, defining origin and width …\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nFont synthesis allowed by the text context and required to …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nRender transform of the text, in the window space.\nRead lock the current contextual laidout text if called in …\nRead lock the current contextual resolved text if called …\nThe text source variable.\nThe inserted text.\nComputed <code>UNDERLINE_THICKNESS_VAR</code>.\nList of underline segments, defining origin and width of …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nIf the index was set by using the <code>caret_retained_x</code>.\nLatest layout viewport.")