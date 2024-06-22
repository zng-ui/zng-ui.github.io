searchState.loadedDescShard("zng_wgt_layer", 0, "Window layers and popup.\nThe layer for <em>adorner</em> display items.\nDefines what properties the layered widget takes from the …\nRepresents two points that position a layer widget with …\nOptions for <code>AnchorMode</code> size constraints.\nOptions for <code>AnchorMode::transform</code>.\nThe layer widget is translated to follow the cursor …\nThe layer widget is translated on the first layout to be …\nThe default layer, just above the normal window content.\nThe available size and final size is the anchor widget’s …\nThe layer widget is translated so that a point in the …\nThe full inner transform of the anchor object is applied …\nThe layer widget is translated so that a point in the …\nThe available size and final size is the anchor widget’s …\nThe full inner transform of the anchor object is applied …\nWindows layers.\nRepresents a layer in a window.\nWidget does not copy any position from the anchor widget.\nThe layer widget is translated so that a point in the …\nThe available size and final size is the anchor widget’s …\nThe full outer transform of the anchor object is applied …\nThe top-most layer.\nWidget does not copy any size from the anchor widget, the …\nWidget does not copy any size from the anchor widget, the …\nP  Custom layered foreground.\nP  Custom layered foreground generated using a <code>WidgetFn&lt;()&gt;</code>…\nGets a read-only var that tracks the anchor widget in a …\nLayer widget is centered on the anchor widget.\nMode where the widget behaves like a context-menu anchored …\nMode where the widget behaves like a context-menu anchored …\nThe widget’s corner radius is set for the layer.\nTransform <code>InnerOffset</code> top-left, size infinite, copy …\nMode where the widget behaves like a <code>foreground</code> to the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\n<code>(place, origin)</code>.\n<code>InnerOffset</code>.\n<code>InnerOffset</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCustom transform and size, all else default.\nTransform <code>InnerOffset</code>, all else default.\nCustom transform, all else default.\nLayer widget is horizontally centered on the anchor widget …\nLayer widget bottom-left corner aligns with the anchor …\nLayer widget bottom-right corner aligns with the anchor …\nLayer widget is vertically centered on the anchor widget …\nLayer widget is vertically centered on the anchor widget …\nLayer widget is horizontally centered on the anchor widget …\nLayer widget top-left corner aligns with the anchor widget …\nLayer widget top-right corner aligns with the anchor …\nInsert the <code>widget</code> in the layer identified by a <code>LayerIndex</code>.\nInsert the <code>widget</code> in the layer and <em>anchor</em> it to the …\nLike <code>insert_anchored</code>, but does not fail if <code>maybe_widget</code> is …\nLike <code>insert</code>, but does not fail if <code>maybe_widget</code> is not a …\nThe widget <code>interactivity</code> is set to the same as the anchor …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nTransform <code>InnerOffset</code>, all else default.\n<code>InnerOffset</code>.\nCustom transform, all else default.\nNode that implements the layers, must be inserted in the …\nWhat size is copied from the anchor widget and used as the …\nWhat size is copied from the anchor widget and used as the …\nGets the const name of this value.\nNew place and origin points from same <code>point</code>.\nPoint in the layer widget.\nLayer widget is horizontally centered on the anchor widget …\nLayer widget top-left corner aligns with anchor widget …\nLayer widget top-right corner aligns with anchor widget …\nLayer widget top-right corner aligns with anchor widget …\nLayer widget bottom-right corner aligns with anchor widget …\nLayer widget is vertically centered on the anchor widget …\nLayer widget bottom-right corner aligns with anchor widget …\nLayer widget top-right corner aligns with anchor widget …\nLayer widget is vertically centered on the anchor widget …\nLayer widget bottom-left corner aligns with anchor widget …\nLayer widget top-left corner aligns with anchor widget …\nLayer widget is horizontally centered on the anchor widget …\nLayer widget bottom-left corner aligns with anchor widget …\nLayer widget bottom-right corner aligns with anchor widget …\nLayer widget bottom-right corner aligns with anchor widget …\nLayer widget bottom-left corner aligns with anchor widget …\nPoint in the anchor widget.\nPopup widget.\nMode where widget behaves like a flyout menu for the …\nRemove the widget in the next update.\nRemove the widget in the next update.\nCompute <code>self + other</code> saturating at the <code>TOP_MOST</code> bound …\nCompute <code>self - other</code> saturating at the <code>DEFAULT</code> bound …\nMode where the widget behaves like a tooltip anchored to …\nMode where the widget behaves like a tooltip anchored to …\nWhat transforms are copied from the anchor widget and …\nAfter the <code>transform</code> and <code>size</code> are resolved the transform is …\nIf the widget is only layout if the anchor widget is not …\nMode where widget behaves like an unanchored widget, …\nReturns the mode with <code>corner_radius</code> set.\nReturns the mode with <code>interactivity</code> set.\nReturns the mode with <code>max_size</code> set.\nReturns the mode with <code>min_size</code> set.\nReturns the mode with <code>min_size</code> and <code>max_size</code> set.\nReturns the mode with <code>transform</code> set.\nReturns the mode with <code>viewport_bound</code> set.\nReturns the mode with <code>visibility</code> set.\nIf set defines the offset from the anchor widget inner …\nIf set defines the offset from the anchor widget inner …\nIf the latest touch position counts as a cursor.\nIf the latest touch position counts as a cursor.\nThe anchor offset place point is resolved in the cursor …\nThe anchor offset place point is resolved in the cursor …\nPopup anchor mode.\nIf popup will close when it no longer contains the focused …\nPopup context capture.\nBuild/instantiation context is captured and blended with …\nPopup is closed.\nDefines if a <code>Popup!</code> captures the build/instantiation …\nW  Popup default style.\nCalls <code>POPUP.force_close</code>.\nNo context capture or blending, the popup will have the …\nPopup is open and can close itself, or be closed using the …\nPopup will open on the next update.\nPopup service.\nClose the popup.\nClosing popup event.\nW  An overlay container.\nOptional parameter for <code>POPUP_CLOSE_CMD</code>.\nArguments for <code>POPUP_CLOSE_REQUESTED_EVENT</code>.\nIdentifies the lifetime state of a popup managed by <code>POPUP</code>.\nCalls <code>POPUP.close</code>.\nContextual style variable.\nGets a read-only var that tracks the anchor widget in a …\nP  Defines the popup placement and size for popups open by …\nClose the popup widget when <code>state</code> is not already closed.\nP  Delay awaited before actually closing when popup close …\nP  Delay awaited before actually closing when popup close …\nClose the popup widget by known ID.\nP  Popup behavior when it loses focus.\nP  Defines if the popup captures the local context to load …\nCaptures all context-vars by default, and blend then over …\nP  Popup focus behavior when it or a descendant receives a …\nClose the popup widget when <code>state</code> is not already closed, …\nClose the popup widget without notifying the request event.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nP  If close was requested for this layered widget and it …\nP  If close was requested for this layered widget and it …\nNew args from values that convert into the argument types.\nArguments for event that happened now (<code>INSTANT.now</code>).\nP  Closing popup event.\nP Preview <code>on_popup_close_requested</code> event.\nOpen the <code>popup</code> using the current context config vars.\nOpen the <code>popup</code> using the custom config vars.\nThe popup that has close requested.\nP  Extends or replaces the widget style.\nP  Extends or replaces the widget style.\nInstant the event happened.\nStart building a new instance.\nStart building a new instance.\nGets the widget type info.\nGets the widget type info.\nWhat context values are captured.\nIf the captured context is blended over or under the node …")