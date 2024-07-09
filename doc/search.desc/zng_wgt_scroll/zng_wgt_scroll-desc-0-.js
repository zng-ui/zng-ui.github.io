searchState.loadedDescShard("zng_wgt_scroll", 0, "Scroll widgets, properties and nodes.\nScroll unit multiplier used when alternate scrolling.\nExtra space added to the viewport auto-hide rectangle.\nAuto scroll icon/indicator node. The node is child of the …\nIf auto-scrolling on middle click is enabled.\nArguments for the <code>auto_scroll_indicator</code> closure.\nIf a scroll widget defines its viewport size as the …\nNode always loaded.\nNode lazy loaded.\nContent can be any width and scrolls horizontally if …\nHorizontal offset added when the <code>SCROLL_RIGHT_CMD</code> runs and …\nHorizontal offset added when the <code>PAGE_RIGHT_CMD</code> runs and …\nWidget function for creating the vertical scrollbar of an …\nHorizontal offset multiplied by the …\nLazy loading mode of a widget.\nMaximum scale allowed when <code>ScrollMode::ZOOM</code> is enabled.\nMinimum scale allowed when <code>ScrollMode::ZOOM</code> is enabled.\nContent size is constrained by the viewport and is not …\nColor of the overscroll indicator.\nContent can be any size and scrolls if overflow.\nScroll amount added to the offset already rendered, this …\nControls the parent scroll.\nWidget function for the little square that joins the two …\nScroll to mode used when scrolling to make the focused …\nSmooth scrolling config for an scroll widget.\nW  A container that can pan and zoom a child of any size.\nArguments for scrollbar widget functions.\nDefines a scroll delta and to what value source it is …\nShared reference to the viewport bounds of a scroll.\nWhat dimensions are scrollable in a widget.\nm  Properties that define scroll units.\nW  Scrollbar widget.\nm  Properties that defines the scrollbar widget used in …\nSmooth scrolling config.\nW  Scrollbar thumb widget.\nContent can be any height and scrolls vertically if …\nVertical offset added when the <code>SCROLL_DOWN_CMD</code> runs and …\nVertical offset added when the <code>PAGE_DOWN_CMD</code> runs and …\nWidget function for creating the vertical scrollbar of an …\nVertical offset multiplied by the …\nScroll amount added to the offset var current value, if …\nScroll amount added to the value the offset var is …\nScroll extensions for <code>WidgetInfo</code>.\nContent can be any size and scrolls if overflow (<code>PAN</code>) and …\nCenter point of zoom scaling done using the touch <em>pinch</em> …\nCenter point of zoom scaling done using the mouse scroll …\nScale delta added or removed from the zoom scale by …\nGet a flags value with all known bits set.\nP  Scroll unit multiplier used when alternate scrolling.\nP  Scroll unit multiplier used when alternate scrolling.\nP  Extra space added to the viewport auto-hide rectangle.\nP  Extra space added to the viewport auto-hide rectangle.\nP  Enables or disables auto scroll on mouse middle click.\nAnimate scroll at the direction and velocity (in DIPs per …\nP  Enables or disables auto scroll on mouse middle click.\nP  Auto scroll icon/indicator node.\nP  Auto scroll icon/indicator node.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nGet the underlying bits value.\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nGets a var that is <code>true</code> when the content height is greater …\nGets a var that is <code>true</code> when the content width is greater …\nGets a var that is <code>true</code> when the content width is greater …\nGets a var that is <code>true</code> when the content width is greater …\nGets a var that is <code>true</code> when the content height is greater …\nGets a var that is <code>true</code> when the content height is greater …\nReturns <code>true</code> if the content can be scaled and the current …\nReturns <code>true</code> if the content can be scaled and the current …\nSet the horizontal offset to a new offset derived from the …\nSet the vertical offset to a new offset derived from the …\nSet the zoom scale to a new scale derived from the last …\nP  Content alignment when it is smaller then the viewport.\nQuick ease horizontal overscroll to zero.\nQuick ease vertical overscroll to zero.\nP  Clip content to only be visible within the scroll …\nc  Clip content to only be visible within the viewport, …\nc  Clip content to only be visible within the viewport, …\nCommands that control the scoped scroll widget.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nNew node that holds data for the <code>SCROLL</code> context.\nWhether all set bits in a source flags value are also set …\nLatest content offset and size.\nGets the context variable that gets if the scrollbar …\nLatest computed content size of the parent scroll.\nInsert the context values used by <code>SCROLL</code> in the <code>set</code>.\nP  If the scroll defines its viewport size as the …\nP  If the scroll defines its viewport size as the …\nThe intersection of a source flags value with the …\nNo smooth scrolling, scroll position updates immediately.\nChase transition duration.\nChase transition easing function.\nGet a flags value with all bits unset.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nP  Enables keyboard controls.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns <code>ZOOM</code> for <code>true</code> and <code>NONE</code> for <code>false</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nLinear duration of smooth transition.\nReturns the argument unchanged.\nReturns default config for <code>true</code>, <code>disabled</code> for <code>false</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nConvert from a bits value.\nConvert from a bits value exactly.\nConvert from a bits value, unsetting any unknown bits.\nThe bitwise or (<code>|</code>) of the bits in each flags value.\nGet a flags value with the bits of a flag with the given …\nP  Horizontal offset added when the <code>SCROLL_RIGHT_CMD</code> runs …\nP  Horizontal offset added when the <code>SCROLL_RIGHT_CMD</code> runs …\nP  Horizontal offset added when the <code>PAGE_RIGHT_CMD</code> runs …\nP  Horizontal offset added when the <code>PAGE_RIGHT_CMD</code> runs …\nP  Horizontal scrollbar function for all scroll widget …\nP  Horizontal scrollbar function for all scroll widget …\nP  Horizontal offset added when the mouse wheel is …\nP  Horizontal offset added when the mouse wheel is …\nIf the horizontal scrollbar should be visible.\nP  Binds the <code>horizontal_offset</code> scroll var to the property …\nHorizontal offset of the parent scroll.\nP  Binds the <code>horizontal_offset</code> scroll var to the property …\nExtra horizontal offset requested that could not be …\nRatio of the scroll parent viewport width to its content.\nGets the ID of the scroll ancestor represented by the …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nThe bitwise and (<code>&amp;</code>) of the bits in two flags values.\nWhether any set bits in a source flags value are also set …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether all known bits in this flags value are set.\nIf this config represents <code>disabled</code>.\nIf lazy init is disabled.\nWhether all bits in this flags value are unset.\nIf lazy init is mode.\nReturns <code>true</code> if the widget is a <code>Scroll!</code>.\nYield a set of contained flags values.\nYield a set of contained named flags values.\nGets the layout size of both scroll-bars.\nP  Enables lazy init for the widget.\nEnable lazy mode with a node that estimates the widget …\nLike <code>lazy</code>, but only considers the width and horizontal …\nLike <code>lazy</code>, but only considers the height and vertical …\nP  Horizontal and vertical offsets used when scrolling.\nP  Horizontal and vertical offsets used when scrolling.\nP  Maximum scale allowed when <code>ScrollMode::ZOOM</code> is enabled.\nP  Maximum scale allowed when <code>ScrollMode::ZOOM</code> is enabled.\nP  Minimum scale allowed when <code>ScrollMode::ZOOM</code> is enabled.\nP  Minimum scale allowed when <code>ScrollMode::ZOOM</code> is enabled.\nc  Scroll mode.\nScroll mode of the parent scroll.\nc  Scroll mode.\nP  Scroll by grabbing and dragging the content with the …\nP  Scroll by grabbing and dragging the content with the …\nArguments from scroll context.\nNew custom smooth scrolling config.\nUI nodes used for building the scroll widget.\nThe bitwise negation (<code>!</code>) of the bits in a flags value, …\nGets the context variable that gets and sets the offset …\nLike <code>lazy</code> but the widget stays inited after the first, …\nLike <code>once</code>, but only considers the width and horizontal …\nLike <code>once</code>, but only considers the height and vertical …\nScrollbar orientation.\nP  Color of the overscroll indicator.\nP  Color of the overscroll indicator.\nP  Horizontal and vertical offsets used when …\nP  Horizontal and vertical offsets used when …\nThe intersection of a source flags value with the …\nLatest rendered offset.\nLatest rendered zoom scale factor.\nApplies the <code>delta</code> to the horizontal offset.\nApplies the <code>delta</code> to the horizontal offset, but clamps the …\nApplies the <code>delta</code> to the horizontal offset without smooth …\nAnimates to <code>delta</code> over <code>duration</code>.\nReturns a reference to the viewport bounds if the widget …\nScroll the <code>WIDGET</code> into view.\nP  Scroll-to mode used by scroll widgets when scrolling to …\nP  Scroll-to mode used by scroll widgets when scrolling to …\nScroll the <code>WIDGET</code> into view and adjusts the zoom scale.\nApplies the <code>delta</code> to the vertical offset.\nApplies the <code>delta</code> to the vertical offset, but clamps the …\nApplies the <code>delta</code> to the vertical offset without smooth …\nAnimates to <code>delta</code> over <code>duration</code>.\nScrollbar widget, properties and nodes..\nP  Scrollbar function for both orientations applicable to …\nP  Scrollbar function for both orientations applicable to …\nP  Widget function for the little square in the corner …\nP  Widget function for the little square in the corner …\nCall <code>insert</code> when <code>value</code> is <code>true</code> or <code>remove</code> when <code>value</code> is …\nP  Smooth scrolling config.\nP  Smooth scrolling config.\nThe intersection of a source flags value with the …\nThe intersection of a source flags value with the …\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nThumb widget, properties and nodes..\nThe bitwise exclusive-or (<code>^</code>) of the bits in two flags …\nGets the ID of the scroll ancestor represented by the …\nThe bitwise or (<code>|</code>) of the bits in two flags values.\nP  Vertical offset added when the <code>SCROLL_DOWN_CMD</code> runs and …\nP  Vertical offset added when the <code>SCROLL_DOWN_CMD</code> runs and …\nP  Vertical offset added when the <code>PAGE_DOWN_CMD</code> runs and …\nP  Vertical offset added when the <code>PAGE_DOWN_CMD</code> runs and …\nP  Vertical scrollbar function for all scroll widget …\nP  Vertical scrollbar function for all scroll widget …\nP  Vertical offset added when the mouse wheel is scrolling …\nP  Vertical offset added when the mouse wheel is scrolling …\nIf the vertical scrollbar should be visible.\nP  Binds the <code>vertical_offset</code> scroll var to the property …\nVertical offset of the parent scroll.\nP  Binds the <code>vertical_offset</code> scroll var to the property …\nExtra vertical offset, requested by touch gesture, that …\nRatio of the scroll parent viewport height to its content.\nGets the viewport bounds relative to the scroll widget …\nGets the viewport bounds in the window space.\nGets the context variable that gets the viewport/content …\nLatest computed viewport size of the parent scroll.\nGets the layout size of the viewport.\nGets the render transform of the viewport.\nP  Horizontal and vertical offsets used when mouse wheel …\nP  Horizontal and vertical offsets used when mouse wheel …\nStart building a new instance.\nGets the widget type info.\nZoom in or out keeping the <code>origin</code> point in the viewport …\nP  Center point of zoom scaling done using mouse scroll …\nP  Center point of zoom scaling done using mouse scroll …\nP  Binds the <code>zoom_scale</code> scroll var to the property value.\nZoom scale factor of the parent scroll.\nLatest zoom scale.\nP  Binds the <code>zoom_scale</code> scroll var to the property value.\nApplies the <code>scale</code> to the current zoom scale without smooth …\nP  Center point of zoom scaling done using the touch <em>pinch</em> …\nP  Center point of zoom scaling done using the touch <em>pinch</em> …\nP  Center point of zoom scaling done using the mouse …\nP  Center point of zoom scaling done using the mouse …\nP  Scale delta added when the mouse wheel is zooming by …\nP  Scale delta added when the mouse wheel is zooming by …\nIf the node is deinited when is moved out of the viewport.\nThe scroll directions that are considered for intersection …\nFunction that instantiates the node that replaces the …\nRepresents the <strong>auto scroll</strong> toggle.\nScroll so that the point relative to the widget inner …\nWidget (inner bounds) that will be scrolled into view.\nScroll will change only just enough so that the widget …\nRepresents the <strong>page down</strong> by one <code>v_page_unit</code> action.\nRepresents the <strong>page left</strong> by one <code>h_page_unit</code> action.\nRepresents the <strong>page right</strong> by one <code>h_page_unit</code> action.\nRepresents the <strong>page up</strong> by one <code>v_page_unit</code> action.\nRectangle in the content space that will be scrolled into …\nRepresents the <strong>scroll down</strong> by one <code>v_line_unit</code> action.\nRepresents the <strong>scroll left</strong> by one <code>h_line_unit</code> action.\nRepresents the <strong>scroll right</strong> by one <code>h_line_unit</code> action.\nRepresents the <strong>scroll to bottom</strong> action.\nRepresents the action of scrolling until a child widget is …\nRepresents the <strong>scroll to leftmost</strong> action.\nRepresents the <strong>scroll to rightmost</strong> action.\nRepresents the <strong>scroll to top</strong> action.\nRepresents the <strong>scroll up</strong> by one <code>v_line_unit</code> action.\nParameters for the scroll and page commands.\nDefines how much the <code>SCROLL_TO_CMD</code> will scroll to showcase …\nParameters for the <code>SCROLL_TO_CMD</code>.\nTarget for the <code>SCROLL_TO_CMD</code>.\nProvides a target for scroll-to command methods.\nRepresents the <strong>zoom in</strong> action.\nRepresents the <strong>zoom out</strong> action.\nRepresents the <strong>reset zoom</strong> action.\nRepresents the <strong>zoom to fit</strong> action.\nIf the alt factor should be applied to the base scroll …\nScroll at the direction and velocity (dip/sec) until the …\nNew <code>Center</code> mode using the center points of widget and …\nNew <code>Center</code> mode.\nOnly scroll within this inclusive range. The range is …\nMinimal with margin 10.\nFind the target info.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nExtract a clone of the request from <code>CommandArgs::param</code> if …\nExtract a clone of the request from <code>CommandArgs::param</code> if …\nExtract a clone of the request from the command parameter …\nExtract a clone of the request from the command parameter …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nNew <code>Minimal</code> mode.\nNew <code>Minimal</code> mode.\nHow much the scroll position will change to showcase the …\nScroll all parent <code>is_scroll</code> widgets of <code>target</code> so that it …\nLike <code>scroll_to</code>, but also adjusts the zoom scale.\nArea that will be scrolled into view.\nPack the request into a command parameter.\nPack the request into a command parameter.\nOptional zoom scale target.\nExtra margin added so that the widget is touching the …\nA point relative to the scroll viewport.\nA point relative to the target widget inner size.\nCreate a node that converts <code>ACCESS_SCROLL_EVENT</code> to command …\nCreate a note that spawns the auto scroller on middle …\nRenders a white circle with arrows that indicate what …\nCreate a node that generates and presents the horizontal …\nOverscroll visual indicator.\nCreate a node that implements <code>PAGE_UP_CMD</code>, <code>PAGE_DOWN_CMD</code>, …\nCreate a node that implements <code>SCROLL_UP_CMD</code>, …\nCreate a node that implements <code>SCROLL_TO_TOP_CMD</code>, …\nCreate a node that implements <code>SCROLL_TO_CMD</code> scoped on the …\nCreate a node that implements scroll by touch gestures for …\nCreate a node that implements scroll-wheel handling for …\nCreate a node that generates and presents the scrollbar …\nCreate a node that generates and presents the vertical …\nThe actual content presenter.\nCreate a node that implements <code>ZOOM_IN_CMD</code>, <code>ZOOM_OUT_CMD</code>, …\nBar fills the in the <em><strong>x</strong></em> dimension and scrolls left-right.\nOrientation of a scrollbar.\nContext scrollbar info.\nW  Scrollbar widget.\nBar fills the in the <em><strong>y</strong></em> dimension and scrolls top-bottom.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nc  Scrollbar orientation.\nGets the context scrollbar orientation.\nc  Scrollbar orientation.\nc  Thumb widget.\nc  Thumb widget.\nStyle variables and properties.\nStart building a new instance.\nGets the widget type info.\nScrollbar track background color\nW  Scrollbar thumb widget.\nc  Width if orientation is vertical, otherwise height if …\nc  Width if orientation is vertical, otherwise height if …\nc  Content offset.\nc  Content offset.\nc  Viewport/content ratio.\nc  Viewport/content ratio.\nStart building a new instance.\nGets the widget type info.")