searchState.loadedDescShard("zng_ext_image", 0, "Image loading and cache.\nAlpha channel.\nDecoded A8.\nAllow all requests of this type.\nAllow all requests of this type.\nAllow all requests of this type.\nBlue channel.\nDecoded BGRA8.\nBlock all requests of this type.\nBlock all requests of this type.\nBlock all requests of this type.\nLoad and cache using the replacement source.\nGets a cached image or loads the image and caches it.\nCustom filter, returns <code>true</code> to allow a request, <code>false</code> to …\nCustom filter, returns <code>true</code> to allow a request, <code>false</code> to …\nCustom filter, returns <code>true</code> to allow a request, <code>false</code> to …\nShared reference to bytes for an encoded or decoded image.\nA uri to an image resource downloaded using HTTP GET with …\nThe image is encoded, a file extension that maybe …\nImage is downscaled so that at least one dimension fits …\nImage is downscaled so that both dimensions fit inside the …\nGreen channel.\nImage loading, cache and render service.\nImages render window hook.\nControls properties of the render window used by …\nDon’t hit the cache, just loads the image.\nReturn the image instead of hitting the cache.\nAlready loaded image.\nCache mode of <code>IMAGES</code>.\nA custom proxy in <code>IMAGES</code>.\nFormat of the image bytes.\nDefines how an image is downscaled after decoding.\nA 256-bit hash for image entries.\nHasher that computes a <code>ImageHash</code>.\nLimits for image loading and decoding.\nApplication extension that provides an image cache.\nDefines how the A8 image mask pixels are to be derived …\nPixels-per-inch of each dimension of an image.\nArguments for the <code>ImageSource::Render</code> closure.\nImplemented for the root window type.\nReference to a windows manager service that <code>IMAGES</code> can use …\nThe different sources of an image resource.\nRepresents a <code>PathFilter</code> and <code>UriFilter</code>.\nRepresents an <code>Img</code> tracked by the <code>IMAGES</code> cache.\nState of an <code>ImageVar</code>.\nRelative luminance.\nThe image is encoded, MIME type that maybe identifies the …\nProxy does not intercept the request.\nProxy does not intercept the request.\nRepresents a <code>ImageSource::Read</code> path request filter.\nResult of an <code>ImageCacheProxy</code> <em>get</em> redirect.\nResult of an <code>ImageCacheProxy</code> <em>remove</em> redirect.\nRed channel.\nA path to an image file in the file system.\nReloads the cache image or loads the image and caches it.\nRemoves another cached entry.\nConsider the request fulfilled.\nA boxed closure that instantiates a <code>WindowRoot</code> that draws …\nCache or reload if the cached image is an error.\nStatic bytes for an encoded or decoded image.\nThe image is encoded, a decoder will be selected using the …\nRepresents a <code>ImageSource::Download</code> path request filter.\nAllow any file inside the <code>env::current_dir</code> or …\nAllow any file inside the <code>env::current_dir</code> or …\nAllow any file inside <code>dir</code> or sub-directories of <code>dir</code>.\nAllow any file inside <code>dir</code> or sub-directories of <code>dir</code>.\nAllow any file inside the current executable directory or …\nAllow any file inside the current executable directory or …\nAllow any path with the <code>ext</code> extension.\nAllow any path with the <code>ext</code> extension.\nAllow any file from the <code>host</code> site.\nAllow any file from the <code>host</code> site.\nFilter for <code>ImageSource::Read</code> paths.\nFilter for <code>ImageSource::Download</code> URIs.\nReturns <code>true</code> if the filter allows the request.\nCombine <code>self</code> with <code>other</code>, if they both are <code>Custom</code>, …\nImage format decoders implemented by the current …\nImage format encoders implemented by the current …\nGet a cached image or add it to the cache.\nGets the cache key of an image.\nCalculate a layout size for the image.\nRemove the image from the cache, if it is only held by the …\nClear cached images that are not referenced outside of the …\nCalled when the cache is cleaned or purged.\nClone the service reference.\nClose the window, does nothing if the window is not found.\nCompute the hash for <code>data</code>.\nCopy the <code>rect</code> selection from <code>pixels</code>.\nNew <code>Custom</code> filter.\n100 megabytes encoded and 4096 megabytes decoded (BMP max).\n96.0\nReturns an image that is not cached.\nGet a cached <code>uri</code> or download it.\nReturns a dummy image that reports it is loaded or an …\nCreate a dummy image in the loaded or error state.\nEnable frame capture for the window.\nEncode the image to the format.\nReturns an error message if the image failed to load.\nFinish computing the hash.\nNew image data from solid color.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nFrom encoded data of <code>Unknown</code> format.\nFrom encoded data of <code>Unknown</code> format.\nFrom encoded data of known format.\nReturns the argument unchanged.\nConverts <code>http://</code> and <code>https://</code> to <code>Download</code>, <code>file://</code> to <code>Read</code> …\nFrom encoded data of <code>Unknown</code> format.\nFrom encoded data of known format.\nFrom encoded data of known format.\nFrom encoded data of known format.\nFrom (URI, HTTP-ACCEPT).\nSame as conversion from <code>&amp;str</code>.\nFrom encoded data of <code>Unknown</code> format.\nSame as conversion from <code>&amp;str</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nFit splat\nFit\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet a cached image from shared data.\nNew source from data.\nGet a cached image from <code>&amp;&#39;static [u8]</code> data.\nNew source from static data.\nIntercept a get request.\nIntercept a get request.\nReturns the image hash, unless the source is <code>Img</code>.\nCompute hash for a borrowed <code>Static</code> or <code>Data</code> image.\nCompute hash for a borrowed <code>Download</code> URI and HTTP-ACCEPT.\nCompute hash for a borrowed <code>Read</code> path.\nCompute hash for a borrowed <code>Render</code> source.\nStart a new <code>ImageHasher</code>.\nSets the windows service used to manage the headless …\nGet or load an image.\nAdd a cache proxy.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCast to <code>Box&lt;dyn Any&gt;</code>.\nIf the image is cached.\nIf the image failed to load.\nIf the current context is an <code>IMAGES.render</code> closure, window …\nIf the image is successfully loaded in the view-process.\nReturns <code>true</code> if the is still acquiring or decoding the …\nReturns <code>true</code> if the image pixels are a single channel (A8).\nReturns <code>true</code> if the image is fully opaque or it is not …\nCalculate an <em>ideal</em> layout size for the image.\nDefault loading and decoding limits for each image.\nIf should still download/read image bytes in …\nMaximum decoded file size allowed.\nMaximum encoded file size allowed.\nNew default hasher.\nNew from existing <code>ViewImage</code>.\nCreate a window root that presents the node.\nNo size limits, allow all paths and URIs.\nReturns the rendered frame image if it is ready for …\nOpen the window.\nCombine <code>self</code> with <code>other</code>, if they both are <code>Custom</code>, …\nWindow that will render the image.\nReference the decoded pre-multiplied BGRA8 pixel buffer or …\nReturns the image pixel-per-inch metadata if the image is …\nRemove the image from the cache, even if it is still …\nClear all cached images, including images that are still …\nCache or load an image file from a file system <code>path</code>.\nAssociate the <code>image</code> with the <code>key</code> in the cache.\nLoad an image, if it was already cached update the cached …\nIntercept a remove request.\nIntercept a remove request.\nRender the <em>window</em> generated by <code>render</code> to an image.\nNew image from a function that generates a headless window.\nRender an <code>UiNode</code> to an image.\nNew image from a function that generates a new <code>UiNode</code>.\nP  If the render task is kept alive after a frame is …\nP  If the render task is kept alive after a frame is …\nCompute the expected final size if the downscale is …\nIf the render task is kept alive after a frame is …\nGet a cached image or add it to the cache or retry if the …\nEncode and write the image to <code>path</code>.\nEncode and write the image to <code>path</code>.\nSet parent window for the headless render window.\nReturns the image size in pixels, or zero if it is not …\nNew equal in both dimensions.\nUnset the property.\nProcess data, updating the internal state.\nConnection to the image resource, if it is loaded.\nReturns a future that awaits until this image is loaded or …\nSet the <code>allow_path</code>.\nSet the <code>allow_uri</code>.\nSet the <code>max_decoded_len</code>.\nSet the <code>max_encoded_len</code>.\nPixels-per-inch in the X dimension.\nPixels-per-inch in the Y dimension.\nPixels-per-inch of the image.\nSize in pixels.\nSize in pixels.")