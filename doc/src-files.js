var srcIndex = new Map(JSON.parse('[["cargo_zng",["",[["l10n",[],["pseudo.rs","scraper.rs"]],["res",[],["about.rs","built_in.rs","tool.rs"]]],["fmt.rs","l10n.rs","main.rs","new.rs","res.rs","util.rs"]]],["zng",["",[],["access.rs","ansi_text.rs","app.rs","button.rs","checkerboard.rs","clipboard.rs","color.rs","config.rs","container.rs","data_context.rs","data_view.rs","dialog.rs","drag_drop.rs","env.rs","event.rs","focus.rs","font.rs","fs_watcher.rs","gesture.rs","grid.rs","handler.rs","hot_reload.rs","icon.rs","image.rs","keyboard.rs","l10n.rs","label.rs","layer.rs","layout.rs","lib.rs","markdown.rs","menu.rs","mouse.rs","panel.rs","pointer_capture.rs","popup.rs","progress.rs","render.rs","rule_line.rs","scroll.rs","selectable.rs","slider.rs","stack.rs","state_map.rs","style.rs","task.rs","text.rs","text_input.rs","third_party.rs","timer.rs","tip.rs","toggle.rs","touch.rs","undo.rs","update.rs","var.rs","view_process.rs","widget.rs","window.rs","wrap.rs"]]],["zng_app",["",[["event",[],["args.rs","channel.rs","command.rs","events.rs"]],["view_process",[],["raw_device_events.rs","raw_events.rs"]],["widget",[["info",[],["access.rs","builder.rs","hit.rs","iter.rs","path.rs","tree.rs"]],["node",[],["adopt.rs","arc.rs","extend.rs","list.rs","match_node.rs","when.rs"]]],["base.rs","border.rs","builder.rs","easing.rs","info.rs","inspector.rs","node.rs"]]],["access.rs","crash_handler.rs","event.rs","handler.rs","lib.rs","render.rs","running.rs","shortcut.rs","third_party.rs","timer.rs","update.rs","view_process.rs","widget.rs","window.rs"]]],["zng_app_context",["",[],["lib.rs"]]],["zng_app_proc_macros",["",[],["lib.rs","property.rs","ui_node.rs","util.rs","wgt_property_attrs.rs","widget.rs","widget_util.rs"]]],["zng_clone_move",["",[],["lib.rs"]]],["zng_color",["",[],["colors.rs","filter.rs","gradient.rs","lib.rs","mix.rs","web_colors.rs"]]],["zng_color_proc_macros",["",[],["hex_color.rs","lib.rs"]]],["zng_env",["",[],["lib.rs","process.rs"]]],["zng_env_proc_macros",["",[],["lib.rs"]]],["zng_ext_clipboard",["",[],["lib.rs"]]],["zng_ext_config",["",[],["fallback.rs","json.rs","lib.rs","ron.rs","settings.rs","swap.rs","switch.rs","sync.rs","toml.rs","yaml.rs"]]],["zng_ext_font",["",[],["emoji_util.rs","font_features.rs","hyphenation.rs","lib.rs","ligature_util.rs","query_util.rs","segmenting.rs","shaping.rs","unicode_bidi_util.rs","unit.rs"]]],["zng_ext_fs_watcher",["",[],["lib.rs","lock.rs","service.rs"]]],["zng_ext_hot_reload",["",[],["cargo.rs","lib.rs","node.rs","util.rs"]]],["zng_ext_hot_reload_proc_macros",["",[],["hot_node.rs","lib.rs","util.rs"]]],["zng_ext_image",["",[],["lib.rs","render.rs","types.rs"]]],["zng_ext_input",["",[["focus",[],["cmd.rs","focus_info.rs","iter.rs"]]],["drag_drop.rs","focus.rs","gesture.rs","keyboard.rs","lib.rs","mouse.rs","pointer_capture.rs","touch.rs"]]],["zng_ext_l10n",["",[["sources",[],["dir.rs","nil.rs","swap.rs","tar.rs"]]],["lib.rs","service.rs","sources.rs","types.rs"]]],["zng_ext_l10n_proc_macros",["",[],["l10n.rs","lang.rs","lib.rs","util.rs"]]],["zng_ext_single_instance",["",[],["lib.rs"]]],["zng_ext_svg",["",[],["lib.rs"]]],["zng_ext_undo",["",[],["lib.rs"]]],["zng_ext_window",["",[],["cmd.rs","control.rs","ime.rs","lib.rs","monitor.rs","service.rs","types.rs","vars.rs"]]],["zng_handle",["",[],["lib.rs"]]],["zng_layout",["",[["unit",[],["alignment.rs","constraints.rs","factor.rs","grid.rs","length.rs","line.rs","point.rs","rect.rs","resolution.rs","side_offsets.rs","size.rs","transform.rs","vector.rs"]]],["context.rs","lib.rs","unit.rs"]]],["zng_state_map",["",[],["lib.rs"]]],["zng_task",["",[["http",[],["cache.rs","util.rs"]]],["channel.rs","crate_util.rs","http.rs","io.rs","ipc.rs","lib.rs","progress.rs","rayon_ctx.rs","ui.rs"]]],["zng_task_proc_macros",["",[],["any_all.rs","lib.rs","util.rs"]]],["zng_time",["",[],["lib.rs"]]],["zng_tp_licenses",["",[],["lib.rs"]]],["zng_txt",["",[],["lib.rs"]]],["zng_unique_id",["",[],["hot_reload.rs","lib.rs","named.rs"]]],["zng_unit",["",[],["angle.rs","byte.rs","color.rs","corner_radius.rs","distance_key.rs","factor.rs","float_eq.rs","lib.rs","orientation.rs","px_dip.rs","side_offsets.rs","time.rs","transform.rs"]]],["zng_var",["",[["animation",[],["easing.rs"]]],["animation.rs","arc.rs","boxed.rs","context.rs","contextualized.rs","cow.rs","expr.rs","flat_map.rs","future.rs","impls.rs","lib.rs","local.rs","map_ref.rs","merge.rs","read_only.rs","response.rs","util.rs","vars.rs","vec.rs","when.rs"]]],["zng_var_proc_macros",["",[],["expr_var.rs","lib.rs","merge_var.rs","transitionable.rs","util.rs","when_var.rs"]]],["zng_view",["",[["config",[],["dconf.rs","other.rs"]]],["config.rs","display_list.rs","extensions.rs","gl.rs","image_cache.rs","lib.rs","low_memory.rs","platform.rs","px_wr.rs","surface.rs","util.rs","window.rs"]]],["zng_view_api",["",[],["access.rs","api_extension.rs","app_process.rs","clipboard.rs","config.rs","dialog.rs","display_list.rs","drag_drop.rs","font.rs","image.rs","ipc.rs","keyboard.rs","lib.rs","mouse.rs","touch.rs","types.rs","view_process.rs","window.rs"]]],["zng_view_prebuilt",["",[],["lib.rs"]]],["zng_wgt",["",[],["border_props.rs","clip_props.rs","color_props.rs","func.rs","hit_test_props.rs","interactivity_props.rs","layout_props.rs","lib.rs","node.rs","node_events.rs","panel_props.rs","parallel_prop.rs","visibility_props.rs","wgt.rs"]]],["zng_wgt_access",["",[],["events.rs","lib.rs","meta.rs"]]],["zng_wgt_ansi_text",["",[],["lib.rs"]]],["zng_wgt_button",["",[],["lib.rs"]]],["zng_wgt_checkerboard",["",[],["lib.rs"]]],["zng_wgt_container",["",[],["lib.rs"]]],["zng_wgt_data",["",[],["lib.rs"]]],["zng_wgt_data_view",["",[],["lib.rs"]]],["zng_wgt_dialog",["",[],["backdrop.rs","lib.rs"]]],["zng_wgt_fill",["",[],["lib.rs","node.rs"]]],["zng_wgt_filter",["",[],["lib.rs"]]],["zng_wgt_grid",["",[],["lib.rs"]]],["zng_wgt_image",["",[],["border.rs","image_properties.rs","lib.rs","mask.rs","node.rs"]]],["zng_wgt_input",["",[],["cmd.rs","drag_drop.rs","focus.rs","gesture.rs","keyboard.rs","lib.rs","misc.rs","mouse.rs","pointer_capture.rs","state.rs","touch.rs","touch_props.rs"]]],["zng_wgt_inspector",["",[["live",[],["data_model.rs","inspector_window.rs"]]],["crash_handler.rs","debug.rs","lib.rs","live.rs"]]],["zng_wgt_layer",["",[],["lib.rs","popup.rs"]]],["zng_wgt_markdown",["",[],["lib.rs","resolvers.rs","view_fn.rs"]]],["zng_wgt_material_icons",["",[],["lib.rs"]]],["zng_wgt_menu",["",[],["context.rs","lib.rs","popup.rs","sub.rs"]]],["zng_wgt_panel",["",[],["lib.rs"]]],["zng_wgt_progress",["",[],["lib.rs"]]],["zng_wgt_rule_line",["",[],["lib.rs"]]],["zng_wgt_scroll",["",[],["cmd.rs","lazy_prop.rs","lib.rs","node.rs","scroll_properties.rs","scrollbar.rs","thumb.rs","types.rs","zoom_size.rs"]]],["zng_wgt_settings",["",[],["lib.rs","view_fn.rs"]]],["zng_wgt_size_offset",["",[],["lib.rs"]]],["zng_wgt_slider",["",[],["lib.rs","thumb.rs"]]],["zng_wgt_stack",["",[],["lib.rs","types.rs"]]],["zng_wgt_style",["",[],["lib.rs"]]],["zng_wgt_text",["",[["node",[],["caret.rs","layout.rs","render.rs","resolve.rs"]]],["cmd.rs","icon.rs","lib.rs","node.rs","text_properties.rs"]]],["zng_wgt_text_input",["",[],["label.rs","lib.rs","selectable.rs","text_input.rs"]]],["zng_wgt_toggle",["",[],["cmd.rs","lib.rs"]]],["zng_wgt_tooltip",["",[],["lib.rs"]]],["zng_wgt_transform",["",[],["lib.rs"]]],["zng_wgt_undo",["",[],["lib.rs"]]],["zng_wgt_undo_history",["",[],["lib.rs"]]],["zng_wgt_webrender_debug",["",[],["lib.rs"]]],["zng_wgt_window",["",[],["events.rs","fallback_chrome.rs","lib.rs","window_properties.rs"]]],["zng_wgt_wrap",["",[],["crate_util.rs","lib.rs"]]]]'));
createSrcSidebar();
//{"start":36,"fragment_lengths":[166,769,587,39,133,38,96,60,44,43,41,137,185,65,73,78,60,182,126,78,47,35,36,116,34,238,37,159,67,32,39,31,64,199,288,116,216,263,41,249,60,41,38,44,41,36,41,52,46,38,36,91,180,132,48,68,46,69,37,40,41,147,53,43,49,48,37,147,85,47,39,41,36,44,47,94,52]}