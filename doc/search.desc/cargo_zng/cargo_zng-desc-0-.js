searchState.loadedDescShard("cargo_zng", 0, "Zng project management.\nFormat code and macros\nLocalization text scraper\nNew project from a Zng template repository.\nBuild resources\nCommand.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLocalization text scrapper.\nInitialize a new project from a Zng template repository\nUtilities for implementing <code>cargo-zng-res-{tool}</code> …\nOnly check if files are formatted\nFormat all files matched by glob\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nFormat the crate identified by Cargo.toml\nFormat the workspace crate identified by package name\nFormat the stdin to the stdout.\nOnly verify that the generated files are the same\nReturns the argument unchanged.\nRust files glob or directory\nCalls <code>U::from(self)</code>.\nCustom l10n macro names, comma separated\nPath to Cargo.toml of crate to scrap and copy dependencies\nDon’t copy dependencies localization\nDon’t scrap <code>#.#.#-local</code> dependencies\nL10n resources dir\nPackage to scrap and copy dependencies\nGenerate pseudo locale from dir/lang\nGenerate pseudo mirrored locale\nGenerate pseudo wide locale\nLocalization text scraping.\nRepresents one call to <code>l10n!</code> or similar macro in a Rust …\nRepresents a standalone note, declared using …\nRepresents all calls to <code>l10n!</code> or similar macro scraped …\nAttribute name.\nComments in the line before the macro call or the same …\nScraped entries.\nAppend <code>other</code> to <code>self</code>.\nLocalization file name pattern where the note must be …\nFile name.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nMessage identifier.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe resource template/fallback.\nThe note.\nScraped standalone note comments.\nScrapes all use of the <code>l10n!</code> macro in Rust files selected …\nResource file section, <code>// l10n-## </code>.\nSort by file, section, id and attribute. Attributes on …\nWrite all entries to new FLT files.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nClone repository, if it is a template return the …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nShow all possible values that can be set on the template\nSet a template value\nZng template\nSet template values by position\nBuilt-in tools\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nTOML file that that defines metadata uses by tools …\nWrites the metadata extracted the workspace or –metadata\nCopy all static files to the target dir\nNumber of build passes allowed before final\nResources source dir\nResources target dir\nPrints the full help for a tool\nTools cache dir\nSearch for <code>zng-res-{tool}</code> in this directory first\nPrints help for all tools available\nEnv var set to package.metadata.zng.about.app or …\nEnv var set to dir that the tool can use to store …\nEnv var set to package.name in snake_case\nEnv var set to package.description\nEnv var set when it is running a tool that requested …\nEnv var set when it needs the tool print the help text …\nEnv var set to package.homepage\nEnv var set to package.license\nEnv var set to package.metadata.zng.about.org or the first …\nEnv var set to package.authors\nEnv var set to package.name\nEnv var set to package.metadata.zng.about.qualifier\nEnv var set to the request file that called the tool.\nEnv var set to the request file parent dir.\nEnv var set to the resources source directory.\nEnv var set to the target file implied by the request file …\nEnv var set to the target file parent dir.\nEnv var set to the resources build target directory.\nEnv var set to package.version\nEnv var set to the Cargo workspace directory that is …\nFormat the path in the standard way used by cargo-zng.\nReturns the argument unchanged.\nReturns the argument unchanged.\nPrint the help and exit if is help request.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nGet a <code>ZR_</code> path var.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nVisit in the <code>ToolKind</code> order.\nEnv var set to package.metadata.zng.about.app or …\nEnv var set to dir that the tool can use to store …\nEnv var set to package.name in snake_case\nEnv var set to package.description\nEnv var set when it is running a tool that requested …\nEnv var set when it needs the tool print the help text …\nEnv var set to package.homepage\nEnv var set to package.license\nEnv var set to package.metadata.zng.about.org or the first …\nEnv var set to package.authors\nEnv var set to package.name\nEnv var set to package.metadata.zng.about.qualifier\nEnv var set to the request file that called the tool.\nEnv var set to the request file parent dir.\nEnv var set to the resources source directory.\nEnv var set to the target file implied by the request file …\nEnv var set to the target file parent dir.\nEnv var set to the resources build target directory.\nEnv var set to package.version\nEnv var set to the Cargo workspace directory that is …\nFormat the path in the standard way used by cargo-zng.\nGet a <code>ZR_</code> path var.\nRun the command with args, inherits stdout and stderr.\nRun the command with args.\nWorkspace root and dependencies of manifest_path\nPrint error message and flags the current process as …\nExit the current process, with error code <code>102</code> if …\nPrint error message and exit the current process with …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nGets if the current process will exit with error code.\nSets if the current process will exit with error code.\nPrint warning message.\nWorkspace crates Cargo.toml paths.")