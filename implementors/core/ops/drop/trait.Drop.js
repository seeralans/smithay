(function() {var implementors = {};
implementors["smithay"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/drm/atomic/struct.AtomicDrmDevice.html\" title=\"struct smithay::backend::drm::atomic::AtomicDrmDevice\">AtomicDrmDevice</a>&lt;A&gt;","synthetic":false,"types":["smithay::backend::drm::atomic::AtomicDrmDevice"]},{"text":"impl&lt;B, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/drm/egl/struct.EglDevice.html\" title=\"struct smithay::backend::drm::egl::EglDevice\">EglDevice</a>&lt;B, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"smithay/backend/egl/native/trait.Backend.html\" title=\"trait smithay::backend::egl::native::Backend\">Backend</a>&lt;Surface = &lt;D as <a class=\"trait\" href=\"smithay/backend/drm/trait.Device.html\" title=\"trait smithay::backend::drm::Device\">Device</a>&gt;::<a class=\"type\" href=\"smithay/backend/drm/trait.Device.html#associatedtype.Surface\" title=\"type smithay::backend::drm::Device::Surface\">Surface</a>&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"smithay/backend/drm/trait.Device.html\" title=\"trait smithay::backend::drm::Device\">Device</a> + <a class=\"trait\" href=\"smithay/backend/egl/native/trait.NativeDisplay.html\" title=\"trait smithay::backend::egl::native::NativeDisplay\">NativeDisplay</a>&lt;B, Arguments = Handle&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;D as <a class=\"trait\" href=\"smithay/backend/drm/trait.Device.html\" title=\"trait smithay::backend::drm::Device\">Device</a>&gt;::<a class=\"type\" href=\"smithay/backend/drm/trait.Device.html#associatedtype.Surface\" title=\"type smithay::backend::drm::Device::Surface\">Surface</a>: <a class=\"trait\" href=\"smithay/backend/egl/native/trait.NativeSurface.html\" title=\"trait smithay::backend::egl::native::NativeSurface\">NativeSurface</a>,&nbsp;</span>","synthetic":false,"types":["smithay::backend::drm::egl::EglDevice"]},{"text":"impl&lt;D:&nbsp;<a class=\"trait\" href=\"smithay/backend/drm/trait.RawDevice.html\" title=\"trait smithay::backend::drm::RawDevice\">RawDevice</a> + ControlDevice + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/drm/gbm/struct.GbmDevice.html\" title=\"struct smithay::backend::drm::gbm::GbmDevice\">GbmDevice</a>&lt;D&gt;","synthetic":false,"types":["smithay::backend::drm::gbm::GbmDevice"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/drm/legacy/struct.LegacyDrmDevice.html\" title=\"struct smithay::backend::drm::legacy::LegacyDrmDevice\">LegacyDrmDevice</a>&lt;A&gt;","synthetic":false,"types":["smithay::backend::drm::legacy::LegacyDrmDevice"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/egl/context/struct.EGLContext.html\" title=\"struct smithay::backend::egl::context::EGLContext\">EGLContext</a>","synthetic":false,"types":["smithay::backend::egl::context::EGLContext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/egl/display/struct.EGLBufferReader.html\" title=\"struct smithay::backend::egl::display::EGLBufferReader\">EGLBufferReader</a>","synthetic":false,"types":["smithay::backend::egl::display::EGLBufferReader"]},{"text":"impl&lt;N:&nbsp;<a class=\"trait\" href=\"smithay/backend/egl/native/trait.NativeSurface.html\" title=\"trait smithay::backend::egl::native::NativeSurface\">NativeSurface</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/egl/surface/struct.EGLSurface.html\" title=\"struct smithay::backend::egl::surface::EGLSurface\">EGLSurface</a>&lt;N&gt;","synthetic":false,"types":["smithay::backend::egl::surface::EGLSurface"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/egl/struct.EGLImages.html\" title=\"struct smithay::backend::egl::EGLImages\">EGLImages</a>","synthetic":false,"types":["smithay::backend::egl::EGLImages"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/session/logind/struct.LogindSessionNotifier.html\" title=\"struct smithay::backend::session::logind::LogindSessionNotifier\">LogindSessionNotifier</a>","synthetic":false,"types":["smithay::backend::session::dbus::logind::LogindSessionNotifier"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/session/direct/struct.DirectSession.html\" title=\"struct smithay::backend::session::direct::DirectSession\">DirectSession</a>","synthetic":false,"types":["smithay::backend::session::direct::DirectSession"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"smithay/backend/udev/trait.UdevHandler.html\" title=\"trait smithay::backend::udev::UdevHandler\">UdevHandler</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/backend/udev/struct.UdevBackend.html\" title=\"struct smithay::backend::udev::UdevBackend\">UdevBackend</a>&lt;T&gt;","synthetic":false,"types":["smithay::backend::udev::UdevBackend"]},{"text":"impl&lt;WM:&nbsp;<a class=\"trait\" href=\"smithay/xwayland/trait.XWindowManager.html\" title=\"trait smithay::xwayland::XWindowManager\">XWindowManager</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"smithay/xwayland/struct.XWayland.html\" title=\"struct smithay::xwayland::XWayland\">XWayland</a>&lt;WM&gt;","synthetic":false,"types":["smithay::xwayland::xserver::XWayland"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()