// Components bundle — 2 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 8:716 _Play button (24 variants)
const __venc_PlayButton = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_PlayButton = p => "size=" + __venc_PlayButton(p.size) + '|' + "style2=" + __venc_PlayButton(p.style2) + '|' + "state=" + __venc_PlayButton(p.state);
function PlayButton(_p = {}) {
  const props = {
    ..._p,
    size: _p.size ?? "xs",
    style2: _p.style2 ?? "glassmorphism",
    state: _p.state ?? "default"
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      backdropFilter: "blur(16px)",
      position: "relative",
      color: "rgba(255,255,255,0.3)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 64,
    height: 64,
    viewBox: "0 0 64 64",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 64,
      height: 64
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32 0 C 49.673 0 64 14.327 64 32 C 64 49.673 49.673 64 32 64 C 14.327 64 0 49.673 0 32 C 0 14.327 14.327 0 32 0 Z M 27 20.263 C 25.667 19.517 24 20.449 24 21.939 L 24 42.061 C 24 43.551 25.667 44.483 27 43.737 L 45 33.677 C 46.333 32.932 46.333 31.068 45 30.323 L 27 20.263 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      borderRadius: 44,
      backdropFilter: "blur(16px)",
      boxShadow: "inset 0 0 0 3px rgb(255,255,255)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 24,
    viewBox: "0 0 22 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 24,
      top: 20,
      width: 22,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21 10.323 C 22.333 11.068 22.333 12.932 21 13.677 L 3 23.738 C 1.667 24.483 0 23.551 0 22.061 L 0 1.939 C 0 0.449 1.667 -0.483 3 0.262 L 21 10.323 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 72,
      height: 72,
      backdropFilter: "blur(16px)",
      position: "relative",
      color: "rgba(255,255,255,0.3)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 72,
    height: 72,
    viewBox: "0 0 72 72",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 72,
      height: 72
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 36 0 C 55.882 0 72 16.118 72 36 C 72 55.882 55.882 72 36 72 C 16.118 72 0 55.882 0 36 C 0 16.118 16.118 0 36 0 Z M 30.375 22.795 C 28.875 21.957 27 23.005 27 24.682 L 27 47.318 C 27 48.995 28.875 50.043 30.375 49.205 L 50.625 37.887 C 52.125 37.048 52.125 34.952 50.625 34.113 L 30.375 22.795 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 72,
      height: 72,
      borderRadius: 44,
      backdropFilter: "blur(16px)",
      boxShadow: "inset 0 0 0 3px rgb(255,255,255)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.750,
    height: 27,
    viewBox: "0 0 24.750 27",
    fill: "none",
    style: {
      position: "absolute",
      left: 27,
      top: 22.5,
      width: 24.75,
      height: 27
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.625 11.614 C 25.125 12.452 25.125 14.548 23.625 15.386 L 3.375 26.705 C 1.875 27.543 0 26.495 0 24.819 L 0 2.181 C 0 0.505 1.875 -0.543 3.375 0.295 L 23.625 11.614 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 80,
      height: 80,
      backdropFilter: "blur(16px)",
      position: "relative",
      color: "rgba(255,255,255,0.3)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 80,
    height: 80,
    viewBox: "0 0 80 80",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 80,
      height: 80
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40 0 C 62.091 0 80 17.909 80 40 C 80 62.091 62.091 80 40 80 C 17.909 80 0 62.091 0 40 C 0 17.909 17.909 0 40 0 Z M 33.75 25.328 C 32.083 24.397 30 25.561 30 27.424 L 30 52.576 C 30 54.439 32.083 55.603 33.75 54.672 L 56.25 42.096 C 57.916 41.164 57.916 38.836 56.25 37.904 L 33.75 25.328 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 80,
      height: 80,
      borderRadius: 44,
      backdropFilter: "blur(16px)",
      boxShadow: "inset 0 0 0 3px rgb(255,255,255)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 27.500,
    height: 30,
    viewBox: "0 0 27.500 30",
    fill: "none",
    style: {
      position: "absolute",
      left: 30,
      top: 25,
      width: 27.5,
      height: 30
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 26.25 12.904 C 27.917 13.836 27.917 16.164 26.25 17.096 L 3.75 29.672 C 2.083 30.604 0 29.439 0 27.576 L 0 2.424 C 0 0.561 2.083 -0.604 3.75 0.328 L 26.25 12.904 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body6 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 88,
      height: 88,
      backdropFilter: "blur(16px)",
      position: "relative",
      color: "rgba(255,255,255,0.3)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 88,
    height: 88,
    viewBox: "0 0 88 88",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 88,
      height: 88
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 44 0 C 68.301 0 88 19.699 88 44 C 88 68.301 68.301 88 44 88 C 19.699 88 0 68.301 0 44 C 0 19.699 19.699 0 44 0 Z M 37.125 27.86 C 35.292 26.836 33 28.117 33 30.166 L 33 57.834 C 33 59.883 35.292 61.164 37.125 60.14 L 61.875 46.306 C 63.708 45.281 63.708 42.719 61.875 41.694 L 37.125 27.86 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body7 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 88,
      height: 88,
      borderRadius: 44,
      backdropFilter: "blur(16px)",
      boxShadow: "inset 0 0 0 3px rgb(255,255,255)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 30.250,
    height: 33,
    viewBox: "0 0 30.250 33",
    fill: "none",
    style: {
      position: "absolute",
      left: 33,
      top: 27.5,
      width: 30.25,
      height: 33
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 28.875 14.194 C 30.708 15.219 30.708 17.781 28.875 18.806 L 4.125 32.639 C 2.292 33.664 0 32.383 0 30.334 L 0 2.666 C 0 0.617 2.292 -0.664 4.125 0.361 L 28.875 14.194 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body8 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 56,
      height: 56,
      backdropFilter: "blur(16px)",
      position: "relative",
      color: "rgba(255,255,255,0.3)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 56,
    height: 56,
    viewBox: "0 0 56 56",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 56,
      height: 56
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 28 0 C 43.464 0 56 12.536 56 28 C 56 43.464 43.464 56 28 56 C 12.536 56 0 43.464 0 28 C 0 12.536 12.536 0 28 0 Z M 23.625 17.729 C 22.458 17.077 21 17.892 21 19.196 L 21 36.804 C 21 38.108 22.458 38.923 23.625 38.271 L 39.375 29.467 C 40.541 28.815 40.541 27.185 39.375 26.533 L 23.625 17.729 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body9 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 48,
      backdropFilter: "blur(16px)",
      position: "relative",
      color: "rgba(255,255,255,0.3)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 48
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24 0 C 37.255 0 48 10.745 48 24 C 48 37.255 37.255 48 24 48 C 10.745 48 0 37.255 0 24 C 0 10.745 10.745 0 24 0 Z M 20.25 15.196 C 19.25 14.638 18 15.336 18 16.454 L 18 31.546 C 18 32.664 19.25 33.362 20.25 32.804 L 33.75 25.258 C 34.75 24.699 34.75 23.301 33.75 22.742 L 20.25 15.196 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body10 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 56,
      height: 56,
      borderRadius: 44,
      backdropFilter: "blur(16px)",
      boxShadow: "inset 0 0 0 3px rgb(255,255,255)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.250,
    height: 21,
    viewBox: "0 0 19.250 21",
    fill: "none",
    style: {
      position: "absolute",
      left: 21,
      top: 17.5,
      width: 19.25,
      height: 21
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.375 9.033 C 19.542 9.685 19.542 11.315 18.375 11.967 L 2.625 20.77 C 1.458 21.423 0 20.607 0 19.303 L 0 1.697 C 0 0.393 1.458 -0.423 2.625 0.23 L 18.375 9.033 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body11 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 49,
      borderRadius: 44,
      backdropFilter: "blur(16px)",
      boxShadow: "inset 0 0 0 3px rgb(255,255,255)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.500,
    height: 18.375,
    viewBox: "0 0 16.500 18.375",
    fill: "none",
    style: {
      position: "absolute",
      left: 18,
      top: 15.313,
      width: 16.5,
      height: 18.375
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.75 7.904 C 16.75 8.474 16.75 9.901 15.75 10.471 L 2.25 18.174 C 1.25 18.745 0 18.032 0 16.89 L 0 1.485 C 0 0.343 1.25 -0.37 2.25 0.201 L 15.75 7.904 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body12 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      backdropFilter: "blur(16px)",
      position: "relative",
      color: "rgba(255,255,255,0.5)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 64,
    height: 64,
    viewBox: "0 0 64 64",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 64,
      height: 64
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32 0 C 49.673 0 64 14.327 64 32 C 64 49.673 49.673 64 32 64 C 14.327 64 0 49.673 0 32 C 0 14.327 14.327 0 32 0 Z M 27 20.263 C 25.667 19.517 24 20.449 24 21.939 L 24 42.061 C 24 43.551 25.667 44.483 27 43.737 L 45 33.677 C 46.333 32.932 46.333 31.068 45 30.323 L 27 20.263 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body13 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 64,
      height: 64,
      borderRadius: 44,
      backgroundColor: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(16px)",
      boxShadow: "inset 0 0 0 3px rgb(255,255,255)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 24,
    viewBox: "0 0 22 24",
    fill: "none",
    style: {
      position: "absolute",
      left: 24,
      top: 20,
      width: 22,
      height: 24
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 21 10.323 C 22.333 11.068 22.333 12.932 21 13.677 L 3 23.738 C 1.667 24.483 0 23.551 0 22.061 L 0 1.939 C 0 0.449 1.667 -0.483 3 0.262 L 21 10.323 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body14 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 72,
      height: 72,
      backdropFilter: "blur(16px)",
      position: "relative",
      color: "rgba(255,255,255,0.5)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 72,
    height: 72,
    viewBox: "0 0 72 72",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 72,
      height: 72
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 36 0 C 55.882 0 72 16.118 72 36 C 72 55.882 55.882 72 36 72 C 16.118 72 0 55.882 0 36 C 0 16.118 16.118 0 36 0 Z M 30.375 22.795 C 28.875 21.957 27 23.005 27 24.682 L 27 47.318 C 27 48.995 28.875 50.043 30.375 49.205 L 50.625 37.887 C 52.125 37.048 52.125 34.952 50.625 34.113 L 30.375 22.795 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body15 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 72,
      height: 72,
      borderRadius: 44,
      backgroundColor: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(16px)",
      boxShadow: "inset 0 0 0 3px rgb(255,255,255)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24.750,
    height: 27,
    viewBox: "0 0 24.750 27",
    fill: "none",
    style: {
      position: "absolute",
      left: 27,
      top: 22.5,
      width: 24.75,
      height: 27
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 23.625 11.614 C 25.125 12.452 25.125 14.548 23.625 15.386 L 3.375 26.705 C 1.875 27.543 0 26.495 0 24.819 L 0 2.181 C 0 0.505 1.875 -0.543 3.375 0.295 L 23.625 11.614 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body16 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 80,
      height: 80,
      backdropFilter: "blur(16px)",
      position: "relative",
      color: "rgba(255,255,255,0.5)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 80,
    height: 80,
    viewBox: "0 0 80 80",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 80,
      height: 80
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 40 0 C 62.091 0 80 17.909 80 40 C 80 62.091 62.091 80 40 80 C 17.909 80 0 62.091 0 40 C 0 17.909 17.909 0 40 0 Z M 33.75 25.328 C 32.083 24.397 30 25.561 30 27.424 L 30 52.576 C 30 54.439 32.083 55.603 33.75 54.672 L 56.25 42.096 C 57.916 41.164 57.916 38.836 56.25 37.904 L 33.75 25.328 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body17 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 80,
      height: 80,
      borderRadius: 44,
      backgroundColor: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(16px)",
      boxShadow: "inset 0 0 0 3px rgb(255,255,255)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 27.500,
    height: 30,
    viewBox: "0 0 27.500 30",
    fill: "none",
    style: {
      position: "absolute",
      left: 30,
      top: 25,
      width: 27.5,
      height: 30
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 26.25 12.904 C 27.917 13.836 27.917 16.164 26.25 17.096 L 3.75 29.672 C 2.083 30.604 0 29.439 0 27.576 L 0 2.424 C 0 0.561 2.083 -0.604 3.75 0.328 L 26.25 12.904 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body18 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 88,
      height: 88,
      backdropFilter: "blur(16px)",
      position: "relative",
      color: "rgba(255,255,255,0.5)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 88,
    height: 88,
    viewBox: "0 0 88 88",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 88,
      height: 88
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 44 0 C 68.301 0 88 19.699 88 44 C 88 68.301 68.301 88 44 88 C 19.699 88 0 68.301 0 44 C 0 19.699 19.699 0 44 0 Z M 37.125 27.86 C 35.292 26.836 33 28.117 33 30.166 L 33 57.834 C 33 59.883 35.292 61.164 37.125 60.14 L 61.875 46.306 C 63.708 45.281 63.708 42.719 61.875 41.694 L 37.125 27.86 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body19 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 88,
      height: 88,
      borderRadius: 44,
      backgroundColor: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(16px)",
      boxShadow: "inset 0 0 0 3px rgb(255,255,255)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 30.250,
    height: 33,
    viewBox: "0 0 30.250 33",
    fill: "none",
    style: {
      position: "absolute",
      left: 33,
      top: 27.5,
      width: 30.25,
      height: 33
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 28.875 14.194 C 30.708 15.219 30.708 17.781 28.875 18.806 L 4.125 32.639 C 2.292 33.664 0 32.383 0 30.334 L 0 2.666 C 0 0.617 2.292 -0.664 4.125 0.361 L 28.875 14.194 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body20 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 56,
      height: 56,
      backdropFilter: "blur(16px)",
      position: "relative",
      color: "rgba(255,255,255,0.5)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 56,
    height: 56,
    viewBox: "0 0 56 56",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 56,
      height: 56
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 28 0 C 43.464 0 56 12.536 56 28 C 56 43.464 43.464 56 28 56 C 12.536 56 0 43.464 0 28 C 0 12.536 12.536 0 28 0 Z M 23.625 17.729 C 22.458 17.077 21 17.892 21 19.196 L 21 36.804 C 21 38.108 22.458 38.923 23.625 38.271 L 39.375 29.467 C 40.541 28.815 40.541 27.185 39.375 26.533 L 23.625 17.729 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body21 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 48,
      backdropFilter: "blur(16px)",
      position: "relative",
      color: "rgba(255,255,255,0.5)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 48,
    height: 48,
    viewBox: "0 0 48 48",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 48,
      height: 48
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 24 0 C 37.255 0 48 10.745 48 24 C 48 37.255 37.255 48 24 48 C 10.745 48 0 37.255 0 24 C 0 10.745 10.745 0 24 0 Z M 20.25 15.196 C 19.25 14.638 18 15.336 18 16.454 L 18 31.546 C 18 32.664 19.25 33.362 20.25 32.804 L 33.75 25.258 C 34.75 24.699 34.75 23.301 33.75 22.742 L 20.25 15.196 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body22 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 56,
      height: 56,
      borderRadius: 44,
      backgroundColor: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(16px)",
      boxShadow: "inset 0 0 0 3px rgb(255,255,255)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.250,
    height: 21,
    viewBox: "0 0 19.250 21",
    fill: "none",
    style: {
      position: "absolute",
      left: 21,
      top: 17.5,
      width: 19.25,
      height: 21
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.375 9.033 C 19.542 9.685 19.542 11.315 18.375 11.967 L 2.625 20.77 C 1.458 21.423 0 20.607 0 19.303 L 0 1.697 C 0 0.393 1.458 -0.423 2.625 0.23 L 18.375 9.033 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __body23 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 48,
      height: 48,
      borderRadius: 44,
      backgroundColor: "rgba(255,255,255,0.1)",
      backdropFilter: "blur(16px)",
      boxShadow: "inset 0 0 0 3px rgb(255,255,255)",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.500,
    height: 18,
    viewBox: "0 0 16.500 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 18,
      top: 15,
      width: 16.5,
      height: 18
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 15.75 7.742 C 16.75 8.301 16.75 9.699 15.75 10.258 L 2.25 17.803 C 1.25 18.362 0 17.664 0 16.546 L 0 1.454 C 0 0.336 1.25 -0.362 2.25 0.197 L 15.75 7.742 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })));
  const __impls = {
    // figma: Size=md, Style=Glassmorphism, State=Default
    "size=md|style2=glassmorphism|state=default": __body0,
    // figma: Size=md, Style=Outline, State=Default
    "size=md|style2=outline|state=default": __body1,
    // figma: Size=lg, Style=Glassmorphism, State=Default
    "size=lg|style2=glassmorphism|state=default": __body2,
    // figma: Size=lg, Style=Outline, State=Default
    "size=lg|style2=outline|state=default": __body3,
    // figma: Size=xl, Style=Glassmorphism, State=Default
    "size=xl|style2=glassmorphism|state=default": __body4,
    // figma: Size=xl, Style=Outline, State=Default
    "size=xl|style2=outline|state=default": __body5,
    // figma: Size=2xl, Style=Glassmorphism, State=Default
    "size=2xl|style2=glassmorphism|state=default": __body6,
    // figma: Size=2xl, Style=Outline, State=Default
    "size=2xl|style2=outline|state=default": __body7,
    // figma: Size=sm, Style=Glassmorphism, State=Default
    "size=sm|style2=glassmorphism|state=default": __body8,
    // figma: Size=xs, Style=Glassmorphism, State=Default
    "size=xs|style2=glassmorphism|state=default": __body9,
    // figma: Size=sm, Style=Outline, State=Default
    "size=sm|style2=outline|state=default": __body10,
    // figma: Size=xs, Style=Outline, State=Default
    "size=xs|style2=outline|state=default": __body11,
    // figma: Size=md, Style=Glassmorphism, State=Hover
    "size=md|style2=glassmorphism|state=hover": __body12,
    // figma: Size=md, Style=Outline, State=Hover
    "size=md|style2=outline|state=hover": __body13,
    // figma: Size=lg, Style=Glassmorphism, State=Hover
    "size=lg|style2=glassmorphism|state=hover": __body14,
    // figma: Size=lg, Style=Outline, State=Hover
    "size=lg|style2=outline|state=hover": __body15,
    // figma: Size=xl, Style=Glassmorphism, State=Hover
    "size=xl|style2=glassmorphism|state=hover": __body16,
    // figma: Size=xl, Style=Outline, State=Hover
    "size=xl|style2=outline|state=hover": __body17,
    // figma: Size=2xl, Style=Glassmorphism, State=Hover
    "size=2xl|style2=glassmorphism|state=hover": __body18,
    // figma: Size=2xl, Style=Outline, State=Hover
    "size=2xl|style2=outline|state=hover": __body19,
    // figma: Size=sm, Style=Glassmorphism, State=Hover
    "size=sm|style2=glassmorphism|state=hover": __body20,
    // figma: Size=xs, Style=Glassmorphism, State=Hover
    "size=xs|style2=glassmorphism|state=hover": __body21,
    // figma: Size=sm, Style=Outline, State=Hover
    "size=sm|style2=outline|state=hover": __body22,
    // figma: Size=xs, Style=Outline, State=Hover
    "size=xs|style2=outline|state=hover": __body23
  };
  return (__impls[__vkey_PlayButton(props)] ?? __body9)();
}

// figma node: 36:5 home screen 
function HomeScreen(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1920,
      height: 9525,
      overflow: "hidden",
      background: "linear-gradient(167.295deg, rgb(255,255,255) 10.13%, rgb(255,255,255) 100.00%)",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1920,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 120,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1920,
    height: 120,
    viewBox: "0 0 1920 120",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 1920,
      height: 120,
      overflow: "hidden",
      filter: "drop-shadow(0px 10px 50px rgba(0,0,0,0.05))",
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 1920 0 L 1920 120 L 0 120 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-560adf04f26cdaf6-a84b0544",
    style: {
      position: "absolute",
      left: 200,
      top: 35,
      width: 247,
      height: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 678,
      top: 49,
      display: "flex",
      flexDirection: "row",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Benefits"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "How it works"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Features"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Pricing"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "FAQ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1386,
      top: 33,
      width: 160,
      height: 54,
      borderRadius: 12,
      backgroundColor: "rgba(0,136,255,0.2)",
      boxShadow: "inset 0 0 0 1px rgb(0,136,255)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 30,
      top: 16,
      width: 101,
      height: 22,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "var(--accents-blue)"
    }
  }, "Contact us")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1560,
      top: 33,
      width: 160,
      height: 54,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(244,124,32)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 28,
      top: 16,
      width: 105,
      height: 22,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(255,255,255)"
    }
  }, "Get Started"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 848,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-fcfb090e9a3b5174",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(-1,0,0,1,1963,0)",
      transformOrigin: "0 0",
      width: 1483,
      height: 848
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1331,
      top: 362,
      width: 124,
      height: 124,
      color: "rgba(255,255,255,0.5)"
    }
  }, /*#__PURE__*/React.createElement(PlayButton, {
    style: {
      transform: "scale(1.722, 1.722)",
      transformOrigin: "0 0",
      color: "rgba(255,255,255,0.5)"
    },
    size: "lg",
    style2: "glassmorphism",
    state: "default"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 907.625,
    height: 1144.957,
    viewBox: "0 0 907.625 1144.957",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0.986,-0.166,0.166,0.986,-166.813,-58.746)",
      transformOrigin: "0 0",
      width: 907.625,
      height: 1144.957,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 907.625 0 L 907.625 1144.957 L 0 1144.957 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 201,
      top: 254,
      width: 558,
      height: 419,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 558,
      height: 210,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 64,
      lineHeight: "70px",
      color: "rgb(0,0,0)",
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "Replace Guesswork with "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "AI Guided Growth.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 300,
      top: 363,
      borderRadius: 12,
      backgroundColor: "rgba(0,136,255,0.2)",
      boxShadow: "inset 0 0 0 1px rgb(0,136,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 29px 16px 29px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 16,
    viewBox: "0 0 14 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 4,
      width: 14,
      height: 16,
      color: "rgb(0,136,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0.496 -0.868 C 0.187 -1.045 -0.194 -1.044 -0.502 -0.865 C -0.81 -0.686 -1 -0.356 -1 0 L 0 0 Z M 14 8 L 14.496 8.868 C 14.808 8.69 15 8.359 15 8 C 15 7.641 14.808 7.31 14.496 7.132 L 14 8 Z M 0 16 L -1 16 C -1 16.356 -0.81 16.686 -0.502 16.865 C -0.194 17.044 0.187 17.045 0.496 16.868 L 0 16 Z M 0 0 L -0.496 0.868 L 13.504 8.868 L 14 8 L 14.496 7.132 L 0.496 -0.868 L 0 0 Z M 14 8 L 13.504 7.132 L -0.496 15.132 L 0 16 L 0.496 16.868 L 14.496 8.868 L 14 8 Z M 0 16 L 1 16 L 1 0 L 0 0 L -1 0 L -1 16 L 0 16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "var(--accents-blue)",
      flexShrink: 0
    }
  }, "See how it works")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 363,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(0,136,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 27px 16px 27px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Replace Guess Work Today")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 234,
      width: 405,
      height: 44,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(0,0,0)"
    }
  }, "TopSyllabus makes exam readiness truly measurable every chapter, every week.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -232,
      top: -183,
      width: 497,
      height: 497,
      borderRadius: "50%",
      background: "radial-gradient(182.829px 182.829px at 50.00% 50.00%, rgba(250,130,25,0.24) 0.00%, rgba(250,130,25,0) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1577,
      top: 584,
      width: 586,
      height: 586,
      borderRadius: "50%",
      background: "radial-gradient(215.569px 215.569px at 50.00% 50.00%, rgba(0,136,255,0.8) 0.00%, rgba(0,136,255,0) 100.00%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 335,
      backgroundColor: "rgb(249,249,249)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1520,
      borderRadius: 24,
      display: "flex",
      flexDirection: "row",
      gap: 24,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "8px 8px 16px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 40,
      padding: "24px 40px 24px 40px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 115,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.003,
      top: 26,
      width: 85,
      height: 63,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 45,
    height: 63,
    viewBox: "0 0 45 63",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 45,
      height: 63,
      color: "rgb(27,61,139)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 43.11 5.872 L 7.848 0.09 C 6.881 -0.069 5.892 -0.016 4.947 0.245 C 4.003 0.507 3.128 0.971 2.381 1.605 C 1.634 2.239 1.034 3.028 0.623 3.917 C 0.212 4.806 -0.001 5.774 0 6.753 L 0 50.568 C 0 52.177 0.575 53.734 1.621 54.956 C 2.667 56.179 4.116 56.988 5.706 57.236 L 42.404 62.973 C 42.724 63.023 43.052 63.003 43.365 62.914 C 43.677 62.826 43.967 62.67 44.213 62.459 C 44.46 62.248 44.658 61.986 44.794 61.691 C 44.93 61.396 45 61.075 45 60.75 L 45 8.09 C 44.999 7.556 44.809 7.04 44.463 6.633 C 44.116 6.227 43.637 5.957 43.11 5.872 Z M 7.11 4.531 L 40.5 10.002 L 40.5 58.118 L 6.404 52.782 C 5.874 52.7 5.391 52.431 5.042 52.024 C 4.693 51.618 4.501 51.1 4.5 50.564 L 4.5 6.753 C 4.5 6.427 4.57 6.105 4.707 5.809 C 4.843 5.513 5.043 5.25 5.291 5.039 C 5.539 4.827 5.831 4.672 6.145 4.585 C 6.459 4.497 6.788 4.479 7.11 4.531 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 45,
    height: 63,
    viewBox: "0 0 45 63",
    fill: "none",
    style: {
      position: "absolute",
      left: 40,
      top: 0,
      width: 45,
      height: 63,
      color: "rgb(27,61,139)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 38.246 0 C 37.879 0 37.513 0.03 37.152 0.09 L 1.885 5.864 C 1.359 5.95 0.881 6.22 0.536 6.627 C 0.19 7.033 0 7.549 0 8.082 L 0 60.75 C 0 61.075 0.07 61.396 0.206 61.691 C 0.342 61.986 0.54 62.248 0.787 62.459 C 1.033 62.67 1.323 62.826 1.635 62.914 C 1.948 63.003 2.276 63.023 2.596 62.973 L 39.294 57.236 C 40.884 56.987 42.333 56.178 43.379 54.955 C 44.425 53.732 45 52.176 45 50.567 L 45 6.75 C 45 5.863 44.825 4.985 44.486 4.166 C 44.146 3.347 43.649 2.602 43.021 1.975 C 42.394 1.349 41.649 0.851 40.83 0.513 C 40.011 0.174 39.132 -0.001 38.246 0 Z M 38.592 52.785 L 4.495 58.127 L 4.495 9.999 L 37.886 4.527 C 38.207 4.475 38.537 4.493 38.851 4.581 C 39.165 4.669 39.456 4.824 39.704 5.035 C 39.953 5.247 40.152 5.509 40.289 5.806 C 40.425 6.102 40.496 6.424 40.496 6.75 L 40.496 50.567 C 40.494 51.103 40.302 51.62 39.953 52.027 C 39.604 52.434 39.121 52.703 38.592 52.785 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 60,
      lineHeight: 1.2000000476837158,
      color: "var(--grays-black)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 60
    }
  }, "12"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(244,124,32)",
      fontSize: 60
    }
  }, "k+")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 20,
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "AI-powered lessons"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "8px 8px 16px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 40,
      padding: "24px 40px 24px 40px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 115,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.5,
      top: 19,
      width: 85,
      height: 77.5,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 56.932,
    height: 51.870,
    viewBox: "0 0 56.932 51.870",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.034,
      top: 0,
      width: 56.932,
      height: 51.87,
      color: "rgb(27,61,139)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 46.93 5 L 10.001 5 C 9.284 5 8.576 5.154 7.924 5.451 C 7.272 5.749 6.691 6.183 6.222 6.725 C 5.752 7.266 5.405 7.902 5.203 8.59 C 5.001 9.278 4.949 10.001 5.051 10.71 L 8.236 32.96 C 8.286 33.333 8.389 33.693 8.546 34.04 C 16.316 51.145 40.615 51.145 48.38 34.04 C 48.536 33.696 48.642 33.333 48.695 32.96 L 51.88 10.71 C 51.982 10.001 51.93 9.278 51.728 8.59 C 51.526 7.902 51.178 7.266 50.709 6.725 C 50.24 6.183 49.659 5.749 49.007 5.451 C 48.355 5.154 47.647 5 46.93 5 Z M 10.001 0 C 8.568 0 7.152 0.308 5.848 0.903 C 4.545 1.498 3.384 2.366 2.445 3.448 C 1.507 4.53 0.811 5.802 0.407 7.177 C 0.002 8.551 -0.102 9.997 0.101 11.415 L 3.286 33.67 C 3.409 34.513 3.646 35.325 3.996 36.105 C 13.541 57.125 43.395 57.125 52.935 36.105 C 53.285 35.325 53.522 34.513 53.645 33.67 L 56.83 11.42 C 57.034 10.001 56.93 8.555 56.526 7.18 C 56.122 5.805 55.427 4.533 54.488 3.45 C 53.549 2.367 52.388 1.498 51.084 0.903 C 49.78 0.308 48.364 0 46.93 0 L 10.001 0 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5,
    height: 12.500,
    viewBox: "0 0 5 12.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 40.001,
      top: 50,
      width: 5,
      height: 12.5,
      color: "rgb(27,61,139)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.5 L 0 0 L 5 0 L 5 12.5 L 0 12.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 62.938,
    height: 66.250,
    viewBox: "0 0 62.938 66.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.001,
      top: 11.25,
      width: 62.938,
      height: 66.25,
      color: "rgb(27,61,139)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 57.93 61.25 L 53.965 57.285 C 50.924 54.244 46.8 52.536 42.5 52.536 C 38.2 52.536 34.076 54.244 31.035 57.285 L 27.07 61.25 L 57.93 61.25 Z M 57.5 53.75 C 53.521 49.772 48.126 47.537 42.5 47.537 C 36.874 47.537 31.478 49.772 27.5 53.75 L 23.535 57.715 C 20.385 60.865 22.615 66.25 27.07 66.25 L 57.93 66.25 C 62.38 66.25 64.615 60.865 61.465 57.715 L 57.5 53.75 Z M 17.5 2.5 C 17.5 3.163 17.237 3.799 16.768 4.268 C 16.299 4.737 15.663 5 15 5 L 2.5 5 C 1.837 5 1.201 4.737 0.732 4.268 C 0.263 3.799 0 3.163 0 2.5 C 0 1.837 0.263 1.201 0.732 0.732 C 1.201 0.263 1.837 0 2.5 0 L 15 0 C 15.663 0 16.299 0.263 16.768 0.732 C 17.237 1.201 17.5 1.837 17.5 2.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 85,
    height: 24.975,
    viewBox: "0 0 85 24.975",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 11.25,
      width: 85,
      height: 24.975,
      color: "rgb(27,61,139)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 19.645 24.975 C 8.89 23.425 0.775 14.36 0.065 3.595 L 0.005 2.665 C -0.038 2.004 0.183 1.352 0.62 0.853 C 1.057 0.354 1.674 0.049 2.335 0.005 C 2.997 -0.038 3.649 0.183 4.148 0.62 C 4.647 1.057 4.952 1.674 4.995 2.335 L 5.055 3.265 C 5.615 11.75 12.01 18.825 20.355 20.025 L 19.645 24.975 Z M 67.5 2.5 C 67.5 3.163 67.763 3.799 68.232 4.268 C 68.701 4.737 69.337 5 70 5 L 82.5 5 C 83.163 5 83.799 4.737 84.268 4.268 C 84.737 3.799 85 3.163 85 2.5 C 85 1.837 84.737 1.202 84.268 0.733 C 83.799 0.264 83.163 0 82.5 0 L 70 0 C 69.337 0 68.701 0.264 68.232 0.733 C 67.763 1.202 67.5 1.837 67.5 2.5 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 20.353,
    height: 24.944,
    viewBox: "0 0 20.353 24.944",
    fill: "none",
    style: {
      position: "absolute",
      left: 64.645,
      top: 11.281,
      width: 20.353,
      height: 24.944,
      color: "rgb(27,61,139)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.71 24.944 C 11.28 23.424 19.56 15.214 20.24 4.364 L 20.35 2.624 C 20.383 1.967 20.155 1.324 19.717 0.834 C 19.278 0.343 18.664 0.046 18.008 0.005 C 17.352 -0.036 16.706 0.184 16.21 0.616 C 15.714 1.048 15.409 1.658 15.36 2.314 L 15.25 4.049 C 14.735 12.349 8.42 18.784 0 19.999 L 0.71 24.944 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 60,
      lineHeight: 1.2000000476837158,
      color: "var(--grays-black)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 60
    }
  }, "99"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(244,124,32)",
      fontSize: 60
    }
  }, "%")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 20,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "Exam prep accuracy"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "8px 8px 16px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "row",
      gap: 40,
      padding: "24px 40px 24px 40px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 115,
      overflow: "hidden",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 85,
    height: 63,
    viewBox: "0 0 85 63",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.334,
      top: 26,
      width: 85,
      height: 63,
      color: "rgb(27,61,139)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.387 0 C 3.224 0 2.108 0.457 1.285 1.269 C 0.462 2.082 0 3.184 0 4.333 C 0 5.483 0.462 6.585 1.285 7.397 C 2.108 8.21 3.224 8.667 4.387 8.667 C 5.551 8.667 6.667 8.21 7.489 7.397 C 8.312 6.585 8.774 5.483 8.774 4.333 C 8.774 3.184 8.312 2.082 7.489 1.269 C 6.667 0.457 5.551 0 4.387 0 Z M 19.742 0 C 18.578 0 17.463 0.457 16.64 1.269 C 15.817 2.082 15.355 3.184 15.355 4.333 C 15.355 5.483 15.817 6.585 16.64 7.397 C 17.463 8.21 18.578 8.667 19.742 8.667 L 63.613 8.667 C 64.776 8.667 65.892 8.21 66.715 7.397 C 67.538 6.585 68 5.483 68 4.333 C 68 3.184 67.538 2.082 66.715 1.269 C 65.892 0.457 64.776 0 63.613 0 L 19.742 0 Z M 20.181 21.667 C 18.901 21.667 17.673 22.169 16.768 23.063 C 15.863 23.957 15.355 25.169 15.355 26.433 C 15.355 27.698 15.863 28.91 16.768 29.804 C 17.673 30.698 18.901 31.2 20.181 31.2 L 45.626 31.2 C 46.906 31.2 48.133 30.698 49.038 29.804 C 49.943 28.91 50.452 27.698 50.452 26.433 C 50.452 25.169 49.943 23.957 49.038 23.063 C 48.133 22.169 46.906 21.667 45.626 21.667 L 20.181 21.667 Z M 15.355 47.667 C 15.355 46.517 15.817 45.415 16.64 44.603 C 17.463 43.79 18.578 43.333 19.742 43.333 L 32.903 43.333 C 34.067 43.333 35.183 43.79 36.005 44.603 C 36.828 45.415 37.29 46.517 37.29 47.667 C 37.29 48.816 36.828 49.918 36.005 50.731 C 35.183 51.543 34.067 52 32.903 52 L 19.742 52 C 18.578 52 17.463 51.543 16.64 50.731 C 15.817 49.918 15.355 48.816 15.355 47.667 Z M 0 26 C 0 24.851 0.462 23.749 1.285 22.936 C 2.108 22.123 3.224 21.667 4.387 21.667 C 5.551 21.667 6.667 22.123 7.489 22.936 C 8.312 23.749 8.774 24.851 8.774 26 C 8.774 27.149 8.312 28.251 7.489 29.064 C 6.667 29.877 5.551 30.333 4.387 30.333 C 3.224 30.333 2.108 29.877 1.285 29.064 C 0.462 28.251 0 27.149 0 26 Z M 4.387 43.333 C 3.224 43.333 2.108 43.79 1.285 44.603 C 0.462 45.415 0 46.517 0 47.667 C 0 48.816 0.462 49.918 1.285 50.731 C 2.108 51.543 3.224 52 4.387 52 C 5.551 52 6.667 51.543 7.489 50.731 C 8.312 49.918 8.774 48.816 8.774 47.667 C 8.774 46.517 8.312 45.415 7.489 44.603 C 6.667 43.79 5.551 43.333 4.387 43.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 71.875 32.375 C 71.875 31.215 71.414 30.102 70.594 29.281 C 69.773 28.461 68.66 28 67.5 28 C 66.34 28 65.227 28.461 64.406 29.281 C 63.586 30.102 63.125 31.215 63.125 32.375 L 63.125 41.344 L 54.375 41.344 C 53.215 41.344 52.102 41.805 51.281 42.625 C 50.461 43.446 50 44.558 50 45.719 C 50 46.879 50.461 47.992 51.281 48.812 C 52.102 49.633 53.215 50.094 54.375 50.094 L 63.125 50.094 L 63.125 58.625 C 63.125 59.785 63.586 60.898 64.406 61.719 C 65.227 62.539 66.34 63 67.5 63 C 68.66 63 69.773 62.539 70.594 61.719 C 71.414 60.898 71.875 59.785 71.875 58.625 L 71.875 50.094 L 80.625 50.094 C 81.785 50.094 82.898 49.633 83.719 48.812 C 84.539 47.992 85 46.879 85 45.719 C 85 44.558 84.539 43.446 83.719 42.625 C 82.898 41.805 81.785 41.344 80.625 41.344 L 71.875 41.344 L 71.875 32.375 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "\"Plus Jakarta Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 60,
      lineHeight: 1.2000000476837158,
      color: "var(--grays-black)",
      flexShrink: 0,
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 60
    }
  }, "100"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "rgb(244,124,32)",
      fontSize: 60
    }
  }, "+")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 20,
      lineHeight: "100%",
      color: "rgb(0,0,0)",
      flexShrink: 0
    }
  }, "AI tests \xB7 5 subjects"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 40,
      padding: "100px 80px 100px 80px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -321,
      top: -28,
      width: 713,
      height: 948,
      borderRadius: "50%",
      background: "radial-gradient(262.288px 348.737px at 50.00% 50.00%, rgba(250,130,25,0.42) 0.00%, rgba(250,130,25,0) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1394,
      top: 326,
      width: 891,
      height: 1299,
      borderRadius: "50%",
      background: "radial-gradient(445.500px 649.500px at 50.00% 50.00%, rgba(73,171,242,0.4) 0.00%, rgba(179,218,249,0) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(248,248,246)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 28px 8px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.060em",
      color: "rgb(14,120,233)",
      flexShrink: 0
    }
  }, "Features we offer")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 48,
      textAlign: "center",
      lineHeight: 1.2000000476837158,
      color: "rgb(15,23,42)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Everything you need to\xA0pass"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 18,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(45,52,54)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Forget generic study guides. We map your weak spots and target themrelentlessly \u2014 until they become your strongest assets.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 40,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 40,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      backgroundColor: "rgba(248,248,246,0.7)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240), 0px 53px 32px 0px rgba(0,0,0,0.02), 0px 23px 23px 0px rgba(0,0,0,0.04), 0px 6px 13px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "50px 50px 50px 50px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 80,
      height: 80,
      borderRadius: 100,
      backgroundColor: "rgb(0,136,255)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 33.333,
    height: 27.010,
    viewBox: "0 0 33.333 27.010",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.333,
      top: 6.323,
      width: 33.333,
      height: 27.01,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 32.5 2.234 C 32.724 2.363 32.916 2.543 33.058 2.76 C 33.201 2.976 33.291 3.223 33.322 3.48 L 33.333 3.677 L 33.333 25.344 C 33.333 25.636 33.256 25.924 33.11 26.177 C 32.964 26.43 32.753 26.641 32.5 26.787 C 32.247 26.933 31.959 27.01 31.667 27.01 C 31.374 27.01 31.087 26.933 30.833 26.787 C 28.945 25.697 26.818 25.086 24.639 25.009 C 22.459 24.931 20.294 25.39 18.333 26.344 L 18.333 1.054 C 20.636 0.194 23.1 -0.146 25.549 0.058 C 27.998 0.262 30.372 1.005 32.5 2.234 Z M 15 1.055 L 15.002 26.345 C 13.118 25.428 11.045 24.968 8.95 25.002 C 6.855 25.036 4.798 25.563 2.945 26.54 L 2.4 26.84 L 2.228 26.914 L 2.147 26.94 L 1.963 26.984 L 1.862 27 L 1.667 27.01 L 1.597 27.01 L 1.413 26.99 L 1.285 26.967 L 1.105 26.914 L 0.895 26.82 L 0.737 26.727 L 0.588 26.615 L 0.488 26.522 L 0.367 26.385 L 0.26 26.237 L 0.223 26.177 L 0.17 26.077 L 0.097 25.905 L 0.07 25.824 L 0.027 25.64 L 0.01 25.539 L 0.003 25.457 L 0 3.677 C 0 3.384 0.077 3.097 0.223 2.844 C 0.37 2.59 0.58 2.38 0.833 2.234 C 2.962 1.005 5.336 0.262 7.785 0.058 C 10.234 -0.145 12.698 0.195 15 1.055 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 30,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-1px",
      color: "rgb(45,52,54)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Adaptive Learning Engine"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "AI identifies and maps weak topics, adjusts practice sessions to focus on them before freestudy"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      backgroundColor: "rgba(248,248,246,0.7)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240), 0px 53px 32px 0px rgba(0,0,0,0.02), 0px 23px 23px 0px rgba(0,0,0,0.04), 0px 6px 13px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "50px 50px 50px 50px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 80,
      height: 80,
      borderRadius: 100,
      backgroundColor: "rgb(27,61,139)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 36.667,
    height: 30,
    viewBox: "0 0 36.667 30",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.667,
      top: 5,
      width: 36.667,
      height: 30,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.333 15 C 1.5 15 0 13.5 0 11.667 L 0 3.333 C 0 1.5 1.5 0 3.333 0 L 16.667 0 C 18.5 0 20 1.5 20 3.333 L 20 11.667 C 20 13.5 18.5 15 16.667 15 L 13.333 15 L 13.333 20 L 8.333 15 L 3.333 15 Z M 33.333 25 C 35.167 25 36.667 23.5 36.667 21.667 L 36.667 13.333 C 36.667 11.5 35.167 10 33.333 10 L 23.333 10 L 23.333 11.667 C 23.333 15.333 20.333 18.333 16.667 18.333 L 16.667 21.667 C 16.667 23.5 18.167 25 20 25 L 23.333 25 L 23.333 30 L 28.333 25 L 33.333 25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 30,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-1px",
      color: "rgb(45,52,54)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Instant Feedback & Explanations"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Every question comes with step-by-step explanation \u2014 not just right/wrong, understand why"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      backgroundColor: "rgba(248,248,246,0.7)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240), 0px 53px 32px 0px rgba(0,0,0,0.02), 0px 23px 23px 0px rgba(0,0,0,0.04), 0px 6px 13px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "50px 50px 50px 50px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 80,
      height: 80,
      borderRadius: 100,
      backgroundColor: "rgb(0,136,255)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 30,
    height: 33.333,
    viewBox: "0 0 30 33.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 3.333,
      width: 30,
      height: 33.333,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 33.333 L 0 10 L 6.667 10 L 6.667 33.333 L 0 33.333 Z M 11.667 33.333 L 11.667 0 L 18.333 0 L 18.333 33.333 L 11.667 33.333 Z M 23.333 33.333 L 23.333 20 L 30 20 L 30 33.333 L 23.333 33.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 30,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-1px",
      color: "rgb(45,52,54)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Progress Analytics"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Data-rich dashboards show real-time improvement and clarity on exam readiness journey")))), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 560 983",
    fill: "none",
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 24,
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 24 C 0 10.745 10.745 0 24 0 L 536 0 C 549.255 0 560 10.745 560 24 L 560 959 C 560 972.255 549.255 983 536 983 L 24 983 C 10.745 983 0 972.255 0 959 L 0 24 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 40,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      backgroundColor: "rgba(248,248,246,0.7)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240), 0px 53px 32px 0px rgba(0,0,0,0.02), 0px 23px 23px 0px rgba(0,0,0,0.04), 0px 6px 13px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "50px 50px 50px 50px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 80,
      height: 80,
      borderRadius: 100,
      backgroundColor: "rgb(27,61,139)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 27.500,
    height: 32.500,
    viewBox: "0 0 27.500 32.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.25,
      top: 3.75,
      width: 27.5,
      height: 32.5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 27.134 6.616 L 20.884 0.366 C 20.768 0.25 20.63 0.158 20.479 0.095 C 20.327 0.032 20.164 0 20 0 L 7.5 0 C 6.837 0 6.201 0.263 5.732 0.732 C 5.263 1.201 5 1.837 5 2.5 L 5 5 L 2.5 5 C 1.837 5 1.201 5.263 0.732 5.732 C 0.263 6.201 0 6.837 0 7.5 L 0 30 C 0 30.663 0.263 31.299 0.732 31.768 C 1.201 32.237 1.837 32.5 2.5 32.5 L 20 32.5 C 20.663 32.5 21.299 32.237 21.768 31.768 C 22.237 31.299 22.5 30.663 22.5 30 L 22.5 27.5 L 25 27.5 C 25.663 27.5 26.299 27.237 26.768 26.768 C 27.237 26.299 27.5 25.663 27.5 25 L 27.5 7.5 C 27.5 7.336 27.468 7.173 27.405 7.021 C 27.342 6.87 27.25 6.732 27.134 6.616 Z M 15 26.25 L 7.5 26.25 C 7.168 26.25 6.851 26.118 6.616 25.884 C 6.382 25.649 6.25 25.332 6.25 25 C 6.25 24.668 6.382 24.351 6.616 24.116 C 6.851 23.882 7.168 23.75 7.5 23.75 L 15 23.75 C 15.332 23.75 15.649 23.882 15.884 24.116 C 16.118 24.351 16.25 24.668 16.25 25 C 16.25 25.332 16.118 25.649 15.884 25.884 C 15.649 26.118 15.332 26.25 15 26.25 Z M 15 21.25 L 7.5 21.25 C 7.168 21.25 6.851 21.118 6.616 20.884 C 6.382 20.649 6.25 20.332 6.25 20 C 6.25 19.668 6.382 19.351 6.616 19.116 C 6.851 18.882 7.168 18.75 7.5 18.75 L 15 18.75 C 15.332 18.75 15.649 18.882 15.884 19.116 C 16.118 19.351 16.25 19.668 16.25 20 C 16.25 20.332 16.118 20.649 15.884 20.884 C 15.649 21.118 15.332 21.25 15 21.25 Z M 25 25 L 22.5 25 L 22.5 12.5 C 22.5 12.336 22.468 12.173 22.405 12.021 C 22.342 11.87 22.25 11.732 22.134 11.616 L 15.884 5.366 C 15.768 5.25 15.63 5.158 15.479 5.095 C 15.327 5.032 15.164 5 15 5 L 7.5 5 L 7.5 2.5 L 19.483 2.5 L 25 8.017 L 25 25 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 30,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-1px",
      color: "rgb(45,52,54)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Curriculum-Aligned Content"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "All questions mapped to official syllabus objectives \u2014 always on track, always on exam focus"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      backgroundColor: "rgba(248,248,246,0.7)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240), 0px 53px 32px 0px rgba(0,0,0,0.02), 0px 23px 23px 0px rgba(0,0,0,0.04), 0px 6px 13px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "50px 50px 50px 50px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 80,
      height: 80,
      borderRadius: 100,
      backgroundColor: "rgb(0,136,255)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 33.333,
    height: 33.333,
    viewBox: "0 0 33.333 33.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.333,
      top: 3.333,
      width: 33.333,
      height: 33.333,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.667 20 C 16.996 20 17.319 19.902 17.593 19.719 C 17.867 19.536 18.08 19.276 18.206 18.971 C 18.333 18.667 18.366 18.331 18.301 18.008 C 18.237 17.685 18.078 17.388 17.845 17.155 C 17.612 16.922 17.315 16.763 16.992 16.699 C 16.669 16.634 16.333 16.667 16.029 16.794 C 15.724 16.92 15.464 17.133 15.281 17.407 C 15.098 17.681 15 18.004 15 18.333 C 15 18.775 15.176 19.199 15.488 19.512 C 15.801 19.824 16.225 20 16.667 20 Z M 25 20 C 25.33 20 25.652 19.902 25.926 19.719 C 26.2 19.536 26.414 19.276 26.54 18.971 C 26.666 18.667 26.699 18.331 26.635 18.008 C 26.57 17.685 26.412 17.388 26.179 17.155 C 25.945 16.922 25.648 16.763 25.325 16.699 C 25.002 16.634 24.667 16.667 24.362 16.794 C 24.058 16.92 23.797 17.133 23.614 17.407 C 23.431 17.681 23.333 18.004 23.333 18.333 C 23.333 18.775 23.509 19.199 23.821 19.512 C 24.134 19.824 24.558 20 25 20 Z M 16.667 26.667 C 16.996 26.667 17.319 26.569 17.593 26.386 C 17.867 26.203 18.08 25.942 18.206 25.638 C 18.333 25.333 18.366 24.998 18.301 24.675 C 18.237 24.352 18.078 24.055 17.845 23.821 C 17.612 23.588 17.315 23.43 16.992 23.365 C 16.669 23.301 16.333 23.334 16.029 23.46 C 15.724 23.586 15.464 23.8 15.281 24.074 C 15.098 24.348 15 24.67 15 25 C 15 25.442 15.176 25.866 15.488 26.179 C 15.801 26.491 16.225 26.667 16.667 26.667 Z M 25 26.667 C 25.33 26.667 25.652 26.569 25.926 26.386 C 26.2 26.203 26.414 25.942 26.54 25.638 C 26.666 25.333 26.699 24.998 26.635 24.675 C 26.57 24.352 26.412 24.055 26.179 23.821 C 25.945 23.588 25.648 23.43 25.325 23.365 C 25.002 23.301 24.667 23.334 24.362 23.46 C 24.058 23.586 23.797 23.8 23.614 24.074 C 23.431 24.348 23.333 24.67 23.333 25 C 23.333 25.442 23.509 25.866 23.821 26.179 C 24.134 26.491 24.558 26.667 25 26.667 Z M 8.333 20 C 8.663 20 8.985 19.902 9.259 19.719 C 9.533 19.536 9.747 19.276 9.873 18.971 C 9.999 18.667 10.032 18.331 9.968 18.008 C 9.904 17.685 9.745 17.388 9.512 17.155 C 9.279 16.922 8.982 16.763 8.658 16.699 C 8.335 16.634 8 16.667 7.696 16.794 C 7.391 16.92 7.131 17.133 6.948 17.407 C 6.764 17.681 6.667 18.004 6.667 18.333 C 6.667 18.775 6.842 19.199 7.155 19.512 C 7.467 19.824 7.891 20 8.333 20 Z M 28.333 3.333 L 26.667 3.333 L 26.667 1.667 C 26.667 1.225 26.491 0.801 26.179 0.488 C 25.866 0.176 25.442 0 25 0 C 24.558 0 24.134 0.176 23.821 0.488 C 23.509 0.801 23.333 1.225 23.333 1.667 L 23.333 3.333 L 10 3.333 L 10 1.667 C 10 1.225 9.824 0.801 9.512 0.488 C 9.199 0.176 8.775 0 8.333 0 C 7.891 0 7.467 0.176 7.155 0.488 C 6.842 0.801 6.667 1.225 6.667 1.667 L 6.667 3.333 L 5 3.333 C 3.674 3.333 2.402 3.86 1.464 4.798 C 0.527 5.735 0 7.007 0 8.333 L 0 28.333 C 0 29.659 0.527 30.931 1.464 31.869 C 2.402 32.807 3.674 33.333 5 33.333 L 28.333 33.333 C 29.659 33.333 30.931 32.807 31.869 31.869 C 32.807 30.931 33.333 29.659 33.333 28.333 L 33.333 8.333 C 33.333 7.007 32.807 5.735 31.869 4.798 C 30.931 3.86 29.659 3.333 28.333 3.333 Z M 30 28.333 C 30 28.775 29.824 29.199 29.512 29.512 C 29.199 29.824 28.775 30 28.333 30 L 5 30 C 4.558 30 4.134 29.824 3.821 29.512 C 3.509 29.199 3.333 28.775 3.333 28.333 L 3.333 13.333 L 30 13.333 L 30 28.333 Z M 30 10 L 3.333 10 L 3.333 8.333 C 3.333 7.891 3.509 7.467 3.821 7.155 C 4.134 6.842 4.558 6.667 5 6.667 L 28.333 6.667 C 28.775 6.667 29.199 6.842 29.512 7.155 C 29.824 7.467 30 7.891 30 8.333 L 30 10 Z M 8.333 26.667 C 8.663 26.667 8.985 26.569 9.259 26.386 C 9.533 26.203 9.747 25.942 9.873 25.638 C 9.999 25.333 10.032 24.998 9.968 24.675 C 9.904 24.352 9.745 24.055 9.512 23.821 C 9.279 23.588 8.982 23.43 8.658 23.365 C 8.335 23.301 8 23.334 7.696 23.46 C 7.391 23.586 7.131 23.8 6.948 24.074 C 6.764 24.348 6.667 24.67 6.667 25 C 6.667 25.442 6.842 25.866 7.155 26.179 C 7.467 26.491 7.891 26.667 8.333 26.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 30,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-1px",
      color: "rgb(45,52,54)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Study On Your Schedule"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Mobile-first design — study for 5 minutes, any time,\n any space"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      backgroundColor: "rgba(248,248,246,0.7)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240), 0px 53px 32px 0px rgba(0,0,0,0.02), 0px 23px 23px 0px rgba(0,0,0,0.04), 0px 6px 13px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "50px 50px 50px 50px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 80,
      height: 80,
      borderRadius: 100,
      backgroundColor: "rgb(27,61,139)",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      height: 40,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 33.333,
    height: 23.333,
    viewBox: "0 0 33.333 23.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.333,
      top: 8.333,
      width: 33.333,
      height: 23.333,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 16.667 0 C 15.341 0 14.069 0.527 13.131 1.464 C 12.193 2.402 11.667 3.674 11.667 5 C 11.667 6.326 12.193 7.598 13.131 8.536 C 14.069 9.473 15.341 10 16.667 10 C 17.993 10 19.265 9.473 20.202 8.536 C 21.14 7.598 21.667 6.326 21.667 5 C 21.667 3.674 21.14 2.402 20.202 1.464 C 19.265 0.527 17.993 0 16.667 0 Z M 18.333 11.667 L 15 11.667 C 10.4 11.667 6.667 15.4 6.667 20 L 6.667 20.833 C 6.667 22.217 7.783 23.333 9.167 23.333 L 24.167 23.333 C 25.55 23.333 26.667 22.217 26.667 20.833 L 26.667 20 C 26.667 15.4 22.933 11.667 18.333 11.667 Z M 7.5 10 C 8.283 10 9 9.8 9.617 9.45 C 8.918 8.337 8.49 7.075 8.369 5.767 C 8.247 4.458 8.435 3.139 8.917 1.917 C 8.483 1.767 8 1.667 7.5 1.667 C 5.1 1.667 3.333 3.433 3.333 5.833 C 3.333 8.233 5.1 10 7.5 10 Z M 6.85 11.667 L 5.833 11.667 C 2.617 11.667 0 14.283 0 17.5 L 0 19.167 C 0 19.633 0.367 20 0.833 20 L 3.333 20 C 3.333 16.733 4.683 13.783 6.85 11.667 Z M 25.833 10 C 28.233 10 30 8.233 30 5.833 C 30 3.433 28.233 1.667 25.833 1.667 C 25.317 1.667 24.85 1.767 24.417 1.917 C 24.899 3.139 25.086 4.458 24.965 5.767 C 24.843 7.075 24.416 8.337 23.717 9.45 C 24.333 9.8 25.033 10 25.833 10 Z M 27.5 11.667 L 26.483 11.667 C 27.597 12.75 28.482 14.046 29.086 15.477 C 29.69 16.908 30.001 18.446 30 20 L 32.5 20 C 32.967 20 33.333 19.633 33.333 19.167 L 33.333 17.5 C 33.333 14.283 30.717 11.667 27.5 11.667 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 30,
      textAlign: "center",
      lineHeight: "100%",
      letterSpacing: "-1px",
      color: "rgb(45,52,54)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Community & Peer Support"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Join thousands revising for the same exam \u2014 study communities during exam season")))))), /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-93ca7798df4f3d32-3ffc451f",
    style: {
      position: "relative",
      boxShadow: "0px 4px 4px 0px rgba(0,0,0,0.25)",
      display: "flex",
      flexDirection: "column",
      gap: 40,
      padding: "100px 80px 100px 80px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1.2000000476837158,
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "How it works"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 18,
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Forget generic study guides. We map your weak spots and target themrelentlessly \u2014 until they become your strongest assets.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 40,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      display: "flex",
      flexDirection: "row",
      gap: 44,
      padding: "0px 20px 0px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 460,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 160,
      lineHeight: 1.2000000476837158,
      flexShrink: 0
    }
  }, "01"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 36,
      lineHeight: "56px",
      letterSpacing: "-1px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Choose your Smart-Alex Q-Pilot"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Lorem ipsum dolor sit amet consectetur. Pretium ultrices dolor montes auctor urna. Ut in porttitor pulvinar urna malesuada sed felis lacus turpis. At euismod pellentesque consectetur posuere. Mi massa volutpat augue sed. Tellus sagittis integer pellentesque porta ornare porta pellentesque aenean nibh. Cursus lectus dictum mauris dictum donec accumsan. Eu nunc cursus amet consectetur sed. Donec sit interdum ultricies bibendum neque."))), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 1760 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(240,240,240)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 1760 0 L 1760 -0.5 L 1760 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      display: "flex",
      flexDirection: "row",
      gap: 44,
      padding: "0px 20px 0px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 36,
      lineHeight: "56px",
      letterSpacing: "-1px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Practice with AI"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Lorem ipsum dolor sit amet consectetur. Pretium ultrices dolor montes auctor urna. Ut in porttitor pulvinar urna malesuada sed felis lacus turpis. At euismod pellentesque consectetur posuere. Mi massa volutpat augue sed. Tellus sagittis integer pellentesque porta ornare porta pellentesque aenean nibh. Cursus lectus dictum mauris dictum donec accumsan. Eu nunc cursus amet consectetur sed. Donec sit interdum ultricies bibendum neque.")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 291,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 160,
      textAlign: "right",
      lineHeight: 1.2000000476837158,
      flexShrink: 0
    }
  }, "02")), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 1760 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(240,240,240)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 1760 0 L 1760 -0.5 L 1760 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      display: "flex",
      flexDirection: "row",
      gap: 44,
      padding: "0px 20px 0px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 460,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 160,
      lineHeight: 1.2000000476837158,
      flexShrink: 0
    }
  }, "03"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 36,
      lineHeight: "56px",
      letterSpacing: "-1px",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Track progress\xA0"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Lorem ipsum dolor sit amet consectetur. Pretium ultrices dolor montes auctor urna. Ut in porttitor pulvinar urna malesuada sed felis lacus turpis. At euismod pellentesque consectetur posuere. Mi massa volutpat augue sed. Tellus sagittis integer pellentesque porta ornare porta pellentesque aenean nibh. Cursus lectus dictum mauris dictum donec accumsan. Eu nunc cursus amet consectetur sed. Donec sit interdum ultricies bibendum neque."))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 40,
      padding: "100px 80px 100px 80px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -108,
      top: 92,
      width: 950,
      height: 950,
      borderRadius: "50%",
      background: "radial-gradient(349.473px 349.473px at 50.00% 50.00%, rgba(0,136,255,0.4) 0.00%, rgba(0,136,255,0) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 661,
      top: 453,
      width: 900,
      height: 900,
      borderRadius: "50%",
      background: "radial-gradient(331.079px 331.079px at 50.00% 50.00%, rgba(250,130,25,0.42) 0.00%, rgba(250,130,25,0) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1327,
      top: 49,
      width: 730,
      height: 730,
      borderRadius: "50%",
      background: "radial-gradient(268.542px 268.542px at 50.00% 50.00%, rgba(0,136,255,0.4) 0.00%, rgba(0,136,255,0) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(248,248,246)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 28px 8px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.060em",
      color: "rgb(14,120,233)",
      flexShrink: 0
    }
  }, "Platform Features")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 48,
      textAlign: "center",
      lineHeight: 1.2000000476837158,
      color: "rgb(15,23,42)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Built for serious\xA0students"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 18,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(45,52,54)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Every feature designed around one question: what\xA0actually helps\xA0students pass exams?")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 40,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 400,
      overflow: "hidden",
      borderRadius: 24,
      backgroundColor: "rgba(248,248,246,0.7)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240), 0px 53px 32px 0px rgba(0,0,0,0.02), 0px 23px 23px 0px rgba(0,0,0,0.04), 0px 6px 13px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-f2981a87e986add1",
    style: {
      position: "relative",
      height: 300,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(248,248,246)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 20px 24px 20px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 28px 8px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.060em",
      color: "rgb(14,120,233)",
      flexShrink: 0
    }
  }, "Live \xB7 Core AI")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(15,23,42)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Smart AI Co-Pilot"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 3,
      overflow: "hidden",
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Our AI understands your board curriculum and generates chapter-wise, board-pattern questions tailored to your exact learning needs \u2014 adapting as you progress week by week.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 400,
      overflow: "hidden",
      borderRadius: 24,
      backgroundColor: "rgba(248,248,246,0.7)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-90146f896a3c231d",
    style: {
      position: "relative",
      height: 300,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(248,248,246)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 20px 24px 20px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 28px 8px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.060em",
      color: "rgb(14,120,233)",
      flexShrink: 0
    }
  }, "Live \xB7 Analytics")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(15,23,42)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Detailed Performance Analytics"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 3,
      overflow: "hidden",
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Track performance across subjects, chapters, and difficulty levels. Parents and teachers get their own dashboards \u2014 identify weak areas before they become problems.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 400,
      overflow: "hidden",
      borderRadius: 24,
      backgroundColor: "rgba(248,248,246,0.7)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-b460a4cb5ddf3741",
    style: {
      position: "relative",
      height: 300,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(248,248,246)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 20px 24px 20px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 28px 8px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.060em",
      color: "rgb(14,120,233)",
      flexShrink: 0
    }
  }, "Live \xB7 Practice")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(15,23,42)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Continuous Weekly Practice"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 3,
      overflow: "hidden",
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Weekly revision cycles ensure concepts stay fresh. Structured 15\u201320 minute daily sessions \u2014 no last-minute cramming, no guesswork.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 400,
      overflow: "hidden",
      borderRadius: 24,
      backgroundColor: "rgba(248,248,246,0.7)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-e0859cadf55fae69",
    style: {
      position: "relative",
      height: 300,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(248,248,246)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 20px 24px 20px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 28px 8px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.060em",
      color: "rgb(14,120,233)",
      flexShrink: 0
    }
  }, "Live \xB7 Multi-User")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(15,23,42)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Multi-User Dashboards"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 3,
      overflow: "hidden",
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexGrow: 1
    }
  }, "Students, parents, and teachers each get a dedicated view with relevant insights and controls \u2014 a school-wide admin panel is available for institutions.")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 79,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 400,
      overflow: "hidden",
      borderRadius: 24,
      backgroundColor: "rgba(248,248,246,0.7)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-ce0ec71d497358c1-7040a204",
    style: {
      position: "relative",
      height: 300,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(248,248,246)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 20px 24px 20px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 28px 8px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.060em",
      color: "rgb(14,120,233)",
      flexShrink: 0
    }
  }, "Live \xB7 NEP 2020")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(15,23,42)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "NEP 2020 Aligned"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 3,
      overflow: "hidden",
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Questions designed to test conceptual understanding and application \u2014 aligned to the revised NCERT 2026-27 curriculum across CBSE, ICSE, and State Boards.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 400,
      overflow: "hidden",
      borderRadius: 24,
      backgroundColor: "rgba(248,248,246,0.7)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-d91745dbb6c685a5",
    style: {
      position: "relative",
      height: 300,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(248,248,246)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 20px 24px 20px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 28px 8px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.060em",
      color: "rgb(102,102,102)",
      flexShrink: 0
    }
  }, "Coming Soon")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(15,23,42)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Predictive Readiness Score"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 3,
      overflow: "hidden",
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Our AI will analyse your practice history and predict your exam score \u2014 so you always know if you're on track to reach your goal before exam day.")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 400,
      overflow: "hidden",
      borderRadius: 24,
      backgroundColor: "rgba(248,248,246,0.7)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-dc791d4285575c13-41b2d52d",
    style: {
      position: "relative",
      height: 300,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgb(248,248,246)",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      padding: "20px 20px 24px 20px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 28px 8px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.060em",
      color: "rgb(102,102,102)",
      flexShrink: 0
    }
  }, "Coming Soon")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(15,23,42)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Competitive Exam Prep"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 3,
      overflow: "hidden",
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "The same AI engine, extended to India's most high-stakes entrance exams. Competitive exam preparation \u2014 built on the foundation students already trust.")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -108,
      top: -105,
      width: 197,
      height: 197,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 30px rgb(255,238,198)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "rgb(27,61,139)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "100px 80px 100px 80px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1158.710,
    height: 1294.799,
    viewBox: "0 0 1158.710 1294.799",
    fill: "none",
    style: {
      position: "absolute",
      left: 1079,
      top: 245,
      width: 1158.71,
      height: 1294.799,
      color: "rgba(248,248,246,0.7)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 632.836 756.873 C 632.277 756.873 631.723 756.785 631.179 756.584 C 630.371 756.285 629.771 755.753 629.534 755.125 C 629.298 754.504 629.403 753.821 629.532 753.176 C 630.407 748.81 632.319 744.585 635.059 740.96 C 637.663 737.517 640.12 734.268 645.217 736.305 C 646.71 736.905 647.798 737.625 648.54 738.511 C 649.404 739.542 649.861 740.886 649.861 742.397 C 649.861 743.786 649.469 745.238 648.753 746.487 C 647.357 748.931 644.974 750.709 642.607 752.266 C 641.091 753.263 639.524 754.224 637.946 755.122 C 636.363 756.021 634.581 756.873 632.836 756.873 Z M 642.277 735.775 C 639.102 735.775 637.165 738.338 635.139 741.02 C 632.407 744.633 630.502 748.843 629.629 753.195 C 629.503 753.827 629.399 754.493 629.628 755.09 C 629.856 755.69 630.433 756.201 631.214 756.49 C 633.411 757.303 635.825 756.213 637.897 755.034 C 639.472 754.138 641.039 753.179 642.552 752.182 C 644.909 750.632 647.28 748.864 648.667 746.438 C 650.448 743.326 649.81 740.18 648.464 738.576 C 647.732 737.704 646.657 736.991 645.18 736.399 C 644.103 735.965 643.143 735.775 642.277 735.775 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 629.19 770.349 C 628.393 770.349 627.643 770.26 626.923 770.053 C 625.825 769.738 624.87 769.247 624 768.555 C 623.053 767.793 622.388 766.895 622.076 765.955 C 621.581 764.457 621.376 762.892 621.179 761.377 L 621.141 761.083 C 619.974 752.197 618.978 745.135 618.006 738.856 L 617.998 738.801 C 617.652 736.586 617.262 734.075 618.305 731.754 C 618.529 731.256 618.82 730.781 619.102 730.323 C 619.304 729.992 619.513 729.65 619.696 729.303 C 620.714 727.358 620.781 725.254 620.763 723.434 C 620.755 722.638 620.789 721.714 621.095 720.902 C 621.428 720.02 622.027 719.402 622.927 719.013 C 623.971 718.563 625.065 718.476 626.121 718.392 L 626.352 718.373 C 629.404 718.131 632.443 717.565 635.659 716.966 C 639.168 716.313 642.797 715.637 646.639 715.36 C 647.007 715.334 647.375 715.304 647.742 715.275 C 648.599 715.207 649.485 715.136 650.349 715.105 C 651.729 715.049 652.897 715.073 654.077 715.346 C 655.063 715.578 656.458 716.104 657.5 717.289 C 658.346 718.251 658.872 719.574 659.064 721.222 C 659.165 722.093 659.169 722.981 659.175 723.839 C 659.178 724.346 659.182 724.869 659.203 725.39 C 659.324 728.185 660.019 731.058 661.161 733.481 C 661.346 733.871 661.544 734.257 661.736 734.632 C 662.432 735.986 663.091 737.267 663.175 738.822 C 663.232 739.829 663.026 740.972 662.563 742.221 C 660.53 747.696 656.346 751.798 651.491 756.216 C 648.115 759.289 644.461 762.347 640.319 765.563 C 638.804 766.742 637.088 768.078 635.247 769.092 C 634.618 769.439 633.92 769.692 633.17 769.845 C 631.702 770.147 630.393 770.349 629.19 770.349 Z M 651.427 715.183 C 651.083 715.183 650.727 715.192 650.355 715.205 C 649.493 715.237 648.609 715.308 647.753 715.375 C 647.385 715.404 647.018 715.434 646.649 715.46 C 642.811 715.736 639.185 716.411 635.679 717.064 C 632.459 717.664 629.417 718.23 626.361 718.472 L 626.131 718.491 C 625.082 718.574 623.997 718.66 622.968 719.104 C 621.092 719.914 620.849 721.664 620.865 723.433 C 620.883 725.264 620.813 727.383 619.785 729.349 C 619.602 729.7 619.391 730.042 619.188 730.374 C 618.907 730.83 618.618 731.302 618.398 731.794 C 617.367 734.088 617.738 736.476 618.098 738.784 L 618.107 738.839 C 619.078 745.119 620.074 752.183 621.241 761.069 L 621.279 761.364 C 621.475 762.874 621.678 764.434 622.173 765.924 C 622.478 766.845 623.131 767.728 624.064 768.477 C 624.923 769.162 625.868 769.645 626.952 769.957 C 628.736 770.47 630.722 770.245 633.154 769.749 C 633.893 769.598 634.583 769.348 635.202 769.006 C 637.035 767.995 638.75 766.662 640.262 765.486 C 644.401 762.271 648.053 759.214 651.428 756.143 C 656.273 751.735 660.448 747.641 662.473 742.187 C 662.931 740.952 663.135 739.822 663.079 738.829 C 662.995 737.294 662.342 736.023 661.65 734.679 C 661.457 734.303 661.257 733.915 661.074 733.525 C 659.927 731.09 659.227 728.203 659.106 725.395 C 659.084 724.873 659.081 724.348 659.077 723.841 C 659.072 722.985 659.067 722.1 658.967 721.235 C 658.778 719.607 658.26 718.302 657.428 717.357 C 656.403 716.191 655.028 715.673 654.056 715.445 C 653.204 715.248 652.359 715.183 651.427 715.183 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 628.058 785.425 C 625.696 785.425 623.581 784.928 621.856 783.957 C 620.543 783.218 619.399 782.287 618.357 781.113 C 617.255 779.862 616.485 778.554 616.066 777.226 C 615.369 775.015 614.893 772.743 614.433 770.547 L 614.188 769.38 C 611.506 756.79 608.307 744.788 604.677 733.709 C 603.462 730.009 602.084 725.814 603.658 721.827 C 603.99 720.985 604.448 720.205 604.891 719.45 C 605.206 718.91 605.533 718.352 605.803 717.788 C 607.309 714.63 607.043 711.05 606.584 707.965 C 606.126 704.819 606.165 701.425 609.925 700.092 C 611.71 699.459 613.557 699.528 615.342 699.596 L 615.992 699.618 C 623.745 699.874 631.432 698.204 639.556 696.436 C 642.9 695.709 646.357 694.956 649.839 694.343 L 651.534 694.04 C 653.021 693.771 654.556 693.494 656.063 693.275 C 658.092 692.98 660.263 692.721 662.498 693.045 C 664.988 693.41 667.151 694.504 668.589 696.124 C 670.081 697.804 670.919 700.144 671.083 703.082 C 671.159 704.448 671.091 705.821 671.025 707.148 C 670.976 708.145 670.925 709.175 670.936 710.194 C 670.984 714.817 672.366 719.675 674.725 723.524 C 675.155 724.226 675.621 724.908 676.085 725.588 C 677.502 727.662 678.968 729.808 679.33 732.442 C 679.571 734.174 679.325 736.125 678.579 738.406 C 675.594 747.525 668.703 754.736 662.478 760.779 C 655.801 767.261 648.584 773.201 643.044 777.65 C 640.247 779.895 637.356 782.217 634.11 783.998 C 632.834 784.697 631.547 785.129 630.281 785.282 C 629.523 785.379 628.779 785.425 628.058 785.425 Z M 613.672 700.456 C 612.501 700.456 611.331 700.55 610.227 700.941 C 607.089 702.054 607.049 704.913 607.475 707.836 C 607.953 711.054 608.226 714.801 606.616 718.178 L 606.616 718.179 C 606.33 718.777 605.993 719.352 605.667 719.907 C 605.224 720.665 604.803 721.382 604.497 722.159 C 603.041 725.844 604.365 729.875 605.533 733.43 C 609.173 744.54 612.381 756.573 615.068 769.194 L 615.314 770.364 C 615.769 772.54 616.24 774.789 616.924 776.957 C 617.305 778.165 618.014 779.363 619.031 780.518 C 620.005 781.616 621.073 782.485 622.297 783.174 C 624.38 784.346 627.103 784.768 630.176 784.394 C 631.326 784.254 632.505 783.857 633.681 783.213 C 636.858 781.471 639.717 779.174 642.483 776.953 C 648.009 772.515 655.204 766.594 661.854 760.137 C 668.003 754.169 674.805 747.055 677.727 738.131 C 678.43 735.983 678.664 734.163 678.442 732.57 C 678.107 730.145 676.766 728.18 675.344 726.1 C 674.871 725.407 674.397 724.712 673.959 723.998 C 671.517 720.015 670.089 714.987 670.037 710.207 C 670.026 709.161 670.078 708.117 670.128 707.107 C 670.193 705.802 670.258 704.454 670.186 703.134 C 670.036 700.443 669.252 698.226 667.917 696.724 C 666.62 695.261 664.649 694.272 662.369 693.938 C 660.254 693.63 658.159 693.882 656.193 694.169 C 654.702 694.386 653.174 694.661 651.695 694.928 L 649.996 695.233 C 646.531 695.842 643.083 696.592 639.748 697.318 C 631.568 699.097 623.839 700.777 615.964 700.521 L 615.309 700.498 C 614.767 700.476 614.22 700.456 613.672 700.456 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 626.005 799.887 C 622.73 799.887 619.652 798.906 617.221 797.067 C 615.779 795.976 614.513 794.661 613.349 793.046 C 612.192 791.427 611.35 789.783 610.852 788.161 C 610.008 785.412 609.32 782.593 608.654 779.866 C 608.453 779.046 608.253 778.227 608.049 777.412 C 603.745 760.186 598.393 743.634 592.143 728.214 C 590.203 723.439 587.789 717.496 589.792 712.097 C 590.21 710.967 590.818 709.907 591.407 708.881 C 591.843 708.119 592.297 707.332 592.667 706.523 C 594.787 701.884 594.143 696.719 593.232 692.279 C 592.371 688.03 592.17 683.465 597.222 681.831 C 599.612 681.059 602.143 681.272 604.594 681.483 C 604.943 681.512 605.29 681.542 605.638 681.569 C 618.066 682.542 630.15 679.586 642.947 676.455 C 646.301 675.634 649.769 674.785 653.216 674.021 C 653.841 673.882 654.464 673.743 655.086 673.603 C 657.333 673.1 659.656 672.58 661.93 672.145 C 664.753 671.605 667.768 671.107 670.846 671.442 C 674.241 671.817 677.177 673.221 679.115 675.396 C 681.626 678.213 682.254 682.116 682.339 684.893 C 682.396 686.73 682.26 688.585 682.13 690.379 C 682.023 691.86 681.91 693.392 681.904 694.913 C 681.883 701.548 683.974 708.467 687.643 713.895 C 688.325 714.904 689.079 715.898 689.807 716.859 C 691.927 719.651 694.118 722.539 694.731 726.083 C 695.139 728.429 694.866 731.023 693.872 734.251 C 690.156 746.321 681.618 756.006 672.945 764.674 C 664.167 773.449 654.473 781.562 645.305 789.021 C 641.338 792.25 637.236 795.588 632.628 798.109 C 630.755 799.134 629.025 799.698 627.338 799.834 C 626.891 799.87 626.446 799.887 626.005 799.887 Z M 601.146 681.387 C 599.828 681.387 598.518 681.517 597.253 681.926 C 592.274 683.536 592.477 688.053 593.328 692.259 C 594.242 696.715 594.891 701.9 592.758 706.564 C 592.385 707.378 591.932 708.167 591.492 708.931 C 590.906 709.953 590.299 711.01 589.885 712.132 C 587.895 717.494 590.199 723.169 592.234 728.177 C 598.488 743.601 603.84 760.158 608.146 777.389 C 608.349 778.203 608.549 779.023 608.75 779.843 C 609.416 782.568 610.104 785.386 610.948 788.132 C 611.443 789.743 612.278 791.377 613.43 792.987 C 614.586 794.593 615.846 795.901 617.281 796.986 C 620.018 799.057 623.589 800.031 627.328 799.733 C 629.001 799.599 630.719 799.039 632.578 798.02 C 637.18 795.503 641.276 792.168 645.24 788.942 C 654.405 781.485 664.097 773.376 672.873 764.603 C 681.536 755.944 690.065 746.27 693.773 734.221 C 694.763 731.009 695.036 728.429 694.63 726.1 C 694.023 722.579 691.838 719.702 689.727 716.919 C 688.997 715.957 688.242 714.962 687.559 713.951 C 683.879 708.505 681.781 701.565 681.802 694.912 C 681.807 693.387 681.919 691.853 682.028 690.371 C 682.158 688.579 682.292 686.726 682.237 684.895 C 682.152 682.133 681.529 678.255 679.039 675.46 C 677.117 673.304 674.203 671.911 670.833 671.539 C 667.77 671.205 664.763 671.702 661.948 672.24 C 659.675 672.675 657.352 673.195 655.107 673.698 C 654.484 673.838 653.861 673.977 653.237 674.116 C 649.792 674.88 646.323 675.728 642.969 676.549 C 630.161 679.682 618.061 682.637 605.628 681.666 C 605.28 681.64 604.932 681.609 604.583 681.58 C 603.448 681.486 602.294 681.387 601.146 681.387 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 622.647 814.843 C 619.213 814.843 615.568 813.295 612.399 810.445 C 610.785 808.993 609.363 807.265 608.05 805.164 C 606.801 803.152 605.863 801.124 605.264 799.136 C 604.315 795.992 603.468 792.779 602.65 789.673 C 602.285 788.285 601.907 786.85 601.527 785.446 C 595.597 763.567 588.096 742.476 579.23 722.761 C 576.487 716.668 573.073 709.085 575.557 702.139 C 576.075 700.691 576.843 699.334 577.587 698.024 C 578.14 697.048 578.711 696.041 579.175 695.003 C 581.861 688.986 580.841 682.309 579.49 676.569 C 578.94 674.22 578.384 671.191 578.972 668.59 C 579.596 665.831 581.369 664.039 584.391 663.112 C 587.461 662.169 590.725 662.534 593.881 662.885 C 594.355 662.938 594.828 662.99 595.3 663.038 C 602.922 663.826 611.214 663.425 620.652 661.813 C 629.086 660.374 637.695 658.115 646.018 655.928 C 649.456 655.026 653.011 654.092 656.529 653.222 C 657.12 653.076 657.711 652.929 658.301 652.782 C 661.4 652.012 664.605 651.216 667.744 650.536 C 671.388 649.747 675.281 649.009 679.251 649.361 C 683.647 649.758 687.443 651.52 689.942 654.32 C 693.182 657.947 693.935 662.999 693.996 666.597 C 694.035 668.931 693.833 671.285 693.638 673.562 C 693.47 675.516 693.297 677.537 693.275 679.545 C 693.183 688.124 695.964 697.028 700.906 703.976 C 701.836 705.285 702.868 706.572 703.866 707.817 C 706.713 711.367 709.656 715.038 710.529 719.586 C 711.107 722.576 710.794 725.93 709.546 730.139 C 704.918 745.736 693.88 758.422 683.692 768.776 C 672.2 780.455 659.669 790.912 647.818 800.622 C 642.66 804.848 637.327 809.218 631.34 812.489 C 629.434 813.53 627.244 814.231 624.449 814.698 C 623.859 814.794 623.255 814.842 622.647 814.843 Z M 588.862 662.611 C 587.357 662.611 585.866 662.763 584.42 663.207 C 577.878 665.214 578.306 671.076 579.587 676.545 C 580.942 682.301 581.966 688.999 579.268 695.043 C 578.802 696.086 578.229 697.096 577.675 698.072 C 576.933 699.38 576.166 700.732 575.652 702.172 C 573.18 709.081 576.587 716.644 579.323 722.72 C 588.19 742.441 595.694 763.536 601.624 785.421 C 602.005 786.824 602.383 788.26 602.748 789.648 C 603.566 792.754 604.412 795.965 605.361 799.107 C 605.959 801.087 606.892 803.107 608.136 805.112 C 609.443 807.205 610.86 808.925 612.466 810.372 C 616.177 813.708 620.54 815.248 624.435 814.598 C 627.217 814.134 629.397 813.436 631.292 812.401 C 637.271 809.134 642.601 804.767 647.756 800.544 C 659.604 790.837 672.133 780.382 683.622 768.706 C 693.802 758.361 704.831 745.686 709.451 730.11 C 710.694 725.918 711.006 722.58 710.432 719.606 C 709.563 715.082 706.627 711.421 703.788 707.88 C 702.789 706.634 701.756 705.346 700.824 704.035 C 695.871 697.071 693.083 688.144 693.176 679.544 C 693.198 677.532 693.371 675.51 693.539 673.554 C 693.734 671.279 693.936 668.928 693.897 666.6 C 693.836 663.018 693.088 657.992 689.869 654.387 C 687.387 651.606 683.613 649.857 679.242 649.461 C 675.287 649.11 671.404 649.847 667.766 650.634 C 664.628 651.314 661.423 652.11 658.326 652.88 C 657.735 653.026 657.143 653.174 656.552 653.32 C 653.037 654.189 649.482 655.123 646.044 656.025 C 637.719 658.212 629.107 660.473 620.669 661.912 C 611.222 663.525 602.922 663.925 595.29 663.138 C 594.817 663.09 594.344 663.037 593.87 662.984 C 592.216 662.798 590.531 662.611 588.862 662.611 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 619.969 829.736 C 615.741 829.736 611.308 827.667 607.581 823.902 C 605.792 822.095 604.214 819.956 602.754 817.36 C 601.423 814.979 600.39 812.565 599.68 810.186 C 598.672 806.811 597.725 803.37 596.811 800.041 C 596.225 797.911 595.62 795.709 595.008 793.556 C 587.453 767.016 577.803 741.387 566.323 717.382 C 562.776 709.973 558.359 700.751 561.328 692.254 C 561.945 690.481 562.878 688.824 563.779 687.222 C 564.444 686.039 565.132 684.817 565.688 683.556 C 568.952 676.093 567.435 667.545 565.749 660.933 C 565.019 658.053 564.268 654.336 564.951 651.137 C 565.672 647.754 567.836 645.573 571.563 644.467 C 575.321 643.353 579.318 643.865 583.18 644.359 C 583.766 644.434 584.372 644.511 584.966 644.582 C 594.622 645.728 605.113 645.268 617.04 643.173 C 627.691 641.303 638.526 638.322 649.005 635.44 C 652.555 634.463 656.226 633.455 659.846 632.499 L 661.419 632.083 C 665.404 631.029 669.525 629.94 673.564 629.001 C 678.033 627.962 682.799 626.983 687.664 627.355 C 693.057 627.775 697.714 629.892 700.776 633.318 C 704.747 637.758 705.624 643.958 705.66 648.378 C 705.682 651.209 705.414 654.065 705.154 656.825 C 704.926 659.251 704.69 661.76 704.651 664.252 C 704.487 674.772 707.958 685.663 714.172 694.133 C 715.352 695.738 716.66 697.318 717.926 698.844 C 721.501 703.153 725.197 707.611 726.332 713.165 C 727.077 716.803 726.725 720.912 725.224 726.098 C 722.771 734.572 718.695 742.83 712.76 751.345 C 708.091 758.043 702.272 764.908 694.444 772.949 C 680.664 787.102 665.716 799.637 650.335 812.294 C 643.988 817.516 637.427 822.916 630.056 826.94 C 627.497 828.336 624.641 829.243 621.56 829.635 C 621.035 829.703 620.503 829.736 619.969 829.736 Z M 576.641 643.902 C 574.93 643.902 573.237 644.076 571.591 644.563 C 567.901 645.657 565.761 647.814 565.047 651.159 C 564.37 654.338 565.117 658.039 565.846 660.908 C 566.985 665.376 567.574 668.989 567.698 672.281 C 567.862 676.572 567.233 680.273 565.78 683.597 C 565.221 684.862 564.532 686.086 563.866 687.271 C 562.967 688.871 562.037 690.524 561.422 692.288 C 558.469 700.746 562.873 709.947 566.413 717.34 C 577.896 741.35 587.549 766.983 595.103 793.529 C 595.716 795.682 596.322 797.886 596.907 800.015 C 597.822 803.342 598.767 806.784 599.775 810.157 C 600.483 812.529 601.514 814.936 602.842 817.311 C 604.297 819.898 605.87 822.031 607.652 823.832 C 611.828 828.049 616.889 830.125 621.548 829.537 C 624.614 829.146 627.461 828.243 630.007 826.853 C 637.37 822.832 643.93 817.436 650.271 812.216 C 665.651 799.561 680.597 787.029 694.373 772.879 C 702.197 764.842 708.015 757.981 712.679 751.287 C 718.608 742.781 722.68 734.532 725.13 726.07 C 726.626 720.899 726.978 716.804 726.236 713.183 C 725.106 707.654 721.418 703.206 717.85 698.906 C 716.583 697.379 715.273 695.799 714.093 694.19 C 707.864 685.704 704.388 674.791 704.552 664.249 C 704.591 661.754 704.827 659.243 705.056 656.815 C 705.315 654.056 705.583 651.204 705.561 648.376 C 705.525 643.975 704.652 637.8 700.703 633.383 C 697.657 629.977 693.024 627.871 687.657 627.453 C 682.807 627.079 678.049 628.059 673.589 629.096 C 669.55 630.036 665.43 631.124 661.445 632.177 L 659.872 632.592 C 656.253 633.548 652.582 634.557 649.032 635.533 C 638.552 638.416 627.714 641.397 617.058 643.268 C 605.12 645.364 594.617 645.826 584.956 644.678 C 584.362 644.608 583.755 644.53 583.168 644.455 C 581.01 644.182 578.813 643.902 576.641 643.902 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 617.258 844.638 C 614.826 844.638 612.359 844.03 609.904 842.823 C 607.347 841.565 604.88 839.674 602.765 837.351 C 600.801 835.196 599.065 832.644 597.461 829.55 C 596.055 826.827 594.922 824.029 594.094 821.231 C 593.091 817.844 592.119 814.396 591.179 811.061 C 590.308 807.973 589.408 804.78 588.49 801.66 C 579.31 770.453 567.51 740.286 553.416 711.998 C 549.066 703.27 543.65 692.409 547.099 682.365 C 547.815 680.277 548.906 678.326 549.961 676.439 C 550.742 675.041 551.552 673.597 552.202 672.107 C 556.034 663.255 554.112 653.127 552.01 645.292 C 551.099 641.881 550.151 637.478 550.927 633.681 C 551.745 629.674 554.299 627.102 558.734 625.82 C 563.174 624.537 567.903 625.193 572.474 625.829 C 573.182 625.928 573.915 626.029 574.633 626.122 C 586.319 627.634 599.005 627.112 613.412 624.527 C 626.27 622.219 639.322 618.511 651.943 614.924 C 655.619 613.88 659.419 612.8 663.163 611.77 L 664.335 611.447 C 669.273 610.088 674.379 608.682 679.386 607.463 C 684.675 606.174 690.32 604.95 696.078 605.345 C 702.47 605.788 707.986 608.263 711.61 612.314 C 716.312 617.566 717.313 624.914 717.324 630.153 C 717.331 633.483 716.996 636.84 716.673 640.086 C 716.384 642.984 716.085 645.98 716.028 648.955 C 715.794 661.421 719.954 674.299 727.442 684.285 C 728.869 686.188 730.455 688.057 731.989 689.865 C 736.292 694.935 740.742 700.178 742.137 706.739 C 743.337 712.369 742.008 718.177 740.904 722.056 C 738.072 732.014 733.356 741.715 726.489 751.714 C 721.027 759.665 714.261 767.738 705.196 777.121 C 689.146 793.732 671.279 808.758 652.854 823.964 C 645.317 830.185 637.523 836.615 628.773 841.391 C 625.526 843.162 622.127 844.232 618.671 844.571 C 618.204 844.615 617.731 844.638 617.258 844.638 Z M 564.447 625.182 C 562.522 625.182 560.617 625.378 558.763 625.915 C 554.369 627.186 551.836 629.733 551.026 633.701 C 550.255 637.478 551.199 641.866 552.107 645.266 C 553.526 650.554 554.274 654.837 554.461 658.745 C 554.706 663.828 553.997 668.212 552.294 672.145 C 551.642 673.64 550.832 675.087 550.049 676.487 C 548.995 678.37 547.906 680.317 547.192 682.397 C 543.757 692.401 549.162 703.242 553.505 711.952 C 567.602 740.246 579.405 770.419 588.586 801.632 C 589.504 804.752 590.405 807.945 591.276 811.033 C 592.216 814.368 593.188 817.816 594.19 821.201 C 595.018 823.993 596.148 826.787 597.549 829.504 C 599.151 832.59 600.88 835.135 602.839 837.284 C 604.945 839.596 607.403 841.48 609.948 842.732 C 612.861 844.165 615.792 844.751 618.662 844.468 C 622.104 844.131 625.49 843.065 628.725 841.3 C 637.467 836.529 645.257 830.101 652.79 823.885 C 671.213 808.68 689.078 793.656 705.124 777.048 C 714.186 767.67 720.948 759.601 726.406 751.655 C 733.267 741.666 737.978 731.974 740.808 722.026 C 743.107 713.948 742.612 709.443 742.039 706.757 C 740.648 700.22 736.207 694.987 731.912 689.926 C 730.377 688.117 728.789 686.247 727.361 684.342 C 719.86 674.337 715.692 661.438 715.927 648.949 C 715.984 645.97 716.283 642.971 716.572 640.072 C 716.895 636.829 717.23 633.474 717.223 630.149 C 717.211 624.927 716.215 617.606 711.534 612.377 C 707.979 608.404 702.343 605.876 696.068 605.441 C 695.322 605.39 694.577 605.366 693.835 605.366 C 688.867 605.366 684.003 606.437 679.407 607.557 C 674.402 608.776 669.297 610.181 664.359 611.54 L 663.188 611.862 C 659.443 612.893 655.643 613.973 651.968 615.017 C 639.344 618.604 626.289 622.313 613.427 624.62 C 599.008 627.208 586.315 627.728 574.617 626.217 C 573.898 626.124 573.165 626.023 572.456 625.923 C 569.813 625.558 567.112 625.182 564.447 625.182 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 614.632 859.942 C 608.728 859.942 602.46 856.686 597.647 851.059 C 595.484 848.53 593.576 845.538 591.81 841.912 C 590.326 838.847 589.086 835.641 588.128 832.384 C 587.206 829.248 586.307 826.109 585.406 822.973 C 584.174 818.669 582.897 814.22 581.589 809.875 C 570.792 774.024 556.852 739.343 540.154 706.792 C 534.965 696.683 528.506 684.1 532.491 672.344 C 533.316 669.904 534.577 667.644 535.796 665.456 C 536.689 663.853 537.612 662.195 538.349 660.493 C 542.699 650.369 540.387 638.747 537.887 629.753 C 535.408 620.809 534.068 610.113 545.799 606.78 C 551.004 605.3 556.507 606.111 561.827 606.895 C 562.672 607.02 563.516 607.144 564.354 607.258 C 594.849 611.441 625.292 602.577 654.737 594.009 C 658.615 592.88 662.492 591.752 666.374 590.651 L 666.808 590.528 C 672.811 588.825 679.019 587.063 685.111 585.53 C 691.252 583.983 697.81 582.517 704.518 582.928 C 711.906 583.394 718.548 586.349 722.745 591.034 C 728.263 597.191 729.404 605.792 729.391 611.922 C 729.383 615.773 728.98 619.641 728.591 623.382 C 728.242 626.741 727.881 630.216 727.808 633.658 C 727.503 647.977 732.323 662.749 741.032 674.187 C 742.699 676.377 744.558 678.532 746.356 680.616 C 751.421 686.485 756.658 692.554 758.335 700.22 C 759.774 706.787 758.246 713.578 756.973 718.116 C 749.569 744.481 731.316 765.872 716.24 781.562 C 697.878 800.673 677.927 817.494 655.63 835.936 C 646.894 843.162 637.862 850.633 627.685 856.185 C 623.706 858.355 619.712 859.604 615.818 859.897 C 615.423 859.927 615.029 859.942 614.632 859.942 Z M 552.266 606.857 C 550.154 606.857 548.069 607.071 546.045 607.645 C 535.14 610.745 536.239 620.438 538.754 629.512 C 541.294 638.648 543.637 650.466 539.175 660.849 C 538.421 662.593 537.486 664.272 536.582 665.894 C 535.383 668.045 534.143 670.27 533.343 672.632 C 529.481 684.027 535.843 696.421 540.955 706.381 C 557.676 738.98 571.638 773.712 582.451 809.614 C 583.761 813.965 585.037 818.418 586.271 822.723 C 587.169 825.857 588.07 828.994 588.991 832.128 C 589.935 835.338 591.155 838.497 592.618 841.517 C 594.349 845.074 596.219 848.003 598.331 850.472 C 603.281 856.26 609.789 859.456 615.747 858.998 C 619.515 858.715 623.384 857.502 627.251 855.393 C 637.352 849.883 646.352 842.44 655.054 835.242 C 677.329 816.818 697.259 800.014 715.59 780.938 C 730.592 765.323 748.756 744.043 756.105 717.871 C 757.353 713.428 758.852 706.783 757.456 700.413 C 755.827 692.969 750.667 686.988 745.675 681.204 C 743.867 679.11 742 676.944 740.315 674.732 C 731.487 663.135 726.599 648.157 726.908 633.638 C 726.983 630.158 727.346 626.666 727.697 623.288 C 728.083 619.569 728.482 615.723 728.491 611.919 C 728.504 605.946 727.401 597.578 722.076 591.633 C 718.035 587.122 711.617 584.276 704.464 583.825 C 697.877 583.417 691.403 584.872 685.332 586.401 C 679.253 587.93 673.052 589.69 667.055 591.392 L 666.622 591.514 C 662.742 592.616 658.865 593.743 654.991 594.871 C 625.454 603.466 594.917 612.353 564.234 608.148 C 563.393 608.033 562.547 607.908 561.698 607.783 C 558.578 607.326 555.393 606.857 552.266 606.857 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 611.872 874.455 C 608.55 874.455 605.203 873.534 601.906 871.71 C 598.704 869.939 595.672 867.356 593.135 864.242 C 590.815 861.392 588.769 858.016 586.877 853.92 C 585.341 850.583 584.013 847.013 582.929 843.309 C 582.181 840.753 581.429 838.154 580.702 835.64 C 579.011 829.796 577.263 823.753 575.455 817.856 C 563.024 777.313 546.924 738.071 527.604 701.218 C 524.244 694.812 521.068 688.537 519.143 682.199 C 516.877 674.74 516.713 668.322 518.641 662.578 C 519.554 659.855 520.964 657.316 522.328 654.86 C 523.344 653.035 524.393 651.146 525.229 649.195 C 530.195 637.571 527.466 624.279 524.534 613.999 C 522.808 607.939 521.224 600.277 524.305 594.771 C 525.979 591.779 528.932 589.672 533.081 588.51 C 538.891 586.883 545.08 587.833 551.065 588.752 C 552.018 588.898 553.003 589.05 553.966 589.187 C 562.401 590.394 570.966 590.772 580.151 590.34 C 588.336 589.957 596.831 588.937 606.12 587.221 C 623.381 584.033 640.845 578.858 657.732 573.852 C 661.688 572.68 665.776 571.468 669.8 570.3 C 676.701 568.296 683.839 566.225 691.028 564.37 C 697.217 562.774 703.779 561.24 710.484 561.24 C 711.289 561.24 712.096 561.262 712.906 561.309 C 716.776 561.534 720.596 562.394 723.951 563.796 C 727.679 565.354 730.816 567.537 733.279 570.286 C 739.441 577.161 740.691 586.807 740.653 593.686 C 740.63 598.017 740.161 602.378 739.711 606.596 C 739.299 610.433 738.875 614.401 738.783 618.341 C 738.405 634.694 743.943 651.544 753.979 664.571 C 755.901 667.066 758.042 669.515 760.112 671.885 C 765.872 678.478 771.83 685.295 773.747 693.871 C 775.387 701.193 773.687 708.839 772.266 713.954 C 768.672 726.884 762.68 739.47 753.947 752.433 C 746.902 762.891 738.245 773.381 726.703 785.446 C 706.077 807.006 683.336 826.209 657.891 847.287 C 647.982 855.497 637.737 863.986 626.208 870.272 C 621.536 872.819 617.183 874.177 612.896 874.423 C 612.558 874.445 612.216 874.455 611.872 874.455 Z M 540.094 587.726 C 537.729 587.726 535.39 587.966 533.111 588.605 C 528.988 589.76 526.055 591.851 524.395 594.819 C 521.332 600.293 522.913 607.929 524.633 613.97 C 526.611 620.903 527.678 626.525 527.991 631.663 C 528.398 638.332 527.526 644.079 525.323 649.232 C 524.483 651.188 523.433 653.079 522.418 654.907 C 521.056 657.359 519.647 659.894 518.737 662.607 C 516.815 668.332 516.981 674.73 519.24 682.168 C 521.161 688.498 524.336 694.768 527.693 701.17 C 547.016 738.028 563.119 777.277 575.551 817.825 C 577.36 823.723 579.107 829.766 580.797 835.611 C 581.524 838.125 582.277 840.723 583.025 843.28 C 584.108 846.978 585.434 850.544 586.968 853.878 C 588.856 857.966 590.898 861.335 593.214 864.179 C 595.74 867.283 598.764 869.857 601.955 871.622 C 605.574 873.625 609.26 874.535 612.893 874.325 C 617.164 874.079 621.504 872.725 626.161 870.185 C 637.682 863.904 647.923 855.417 657.828 847.211 C 683.271 826.134 706.009 806.934 726.632 785.378 C 743.484 767.763 763.89 743.723 772.172 713.928 C 775.133 703.271 774.435 697.39 773.651 693.894 C 771.74 685.342 765.791 678.535 760.039 671.952 C 757.968 669.583 755.826 667.132 753.901 664.634 C 743.852 651.59 738.305 634.716 738.685 618.341 C 738.776 614.396 739.201 610.426 739.612 606.587 C 740.063 602.371 740.531 598.013 740.555 593.688 C 740.591 586.825 739.347 577.206 733.206 570.354 C 730.753 567.616 727.627 565.441 723.914 563.889 C 720.569 562.491 716.76 561.634 712.901 561.409 C 705.37 560.973 697.979 562.681 691.054 564.468 C 683.866 566.32 676.73 568.393 669.828 570.396 C 665.805 571.564 661.716 572.776 657.761 573.948 C 640.87 578.955 623.405 584.131 606.14 587.32 C 596.845 589.037 588.346 590.057 580.156 590.441 C 570.959 590.87 562.391 590.493 553.953 589.287 C 552.988 589.149 552.004 588.998 551.051 588.851 C 547.431 588.294 543.733 587.726 540.094 587.726 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 609.172 889.369 C 605.406 889.369 601.622 888.288 597.909 886.15 C 594.384 884.121 591.068 881.194 588.323 877.685 C 585.821 874.487 583.617 870.698 581.586 866.102 C 579.994 862.49 578.567 858.535 577.347 854.344 C 576.883 852.753 576.421 851.161 575.959 849.571 C 573.704 841.807 571.373 833.779 568.938 825.95 C 554.882 780.74 536.635 736.96 514.7 695.824 C 510.89 688.682 507.286 681.682 505.085 674.591 C 502.497 666.262 502.279 659.095 504.414 652.679 C 505.426 649.641 506.995 646.808 508.514 644.068 C 509.646 642.027 510.815 639.917 511.746 637.735 C 517.281 624.722 514.146 609.851 510.799 598.348 C 508.828 591.565 507.006 582.989 510.443 576.828 C 512.307 573.486 515.609 571.14 520.258 569.851 C 526.752 568.052 533.672 569.15 540.368 570.21 C 541.441 570.38 542.552 570.556 543.636 570.716 C 553.156 572.122 562.82 572.573 573.185 572.099 C 582.417 571.675 591.997 570.519 602.471 568.565 C 621.929 564.934 641.592 559.021 660.609 553.303 C 664.711 552.07 668.952 550.794 673.125 549.562 C 681.563 547.069 689.172 544.841 696.854 542.822 C 704.609 540.785 712.891 538.83 721.323 539.29 C 725.654 539.525 729.928 540.475 733.682 542.033 C 737.854 543.765 741.365 546.2 744.119 549.272 C 751.011 556.96 752.384 567.752 752.322 575.453 C 752.283 580.284 751.75 585.148 751.234 589.853 C 750.762 594.16 750.273 598.614 750.164 603.036 C 749.716 621.333 755.944 640.17 767.253 654.717 C 769.424 657.508 771.842 660.247 774.179 662.896 C 780.668 670.25 787.379 677.855 789.557 687.439 C 791.395 695.518 789.664 703.689 787.95 709.905 C 783.975 724.321 777.346 738.35 767.679 752.795 C 759.844 764.505 750.241 776.203 737.458 789.609 C 714.522 813.667 690.038 834.377 660.414 858.95 C 649.313 868.157 637.836 877.679 624.927 884.715 C 619.573 887.634 614.695 889.151 610.013 889.352 C 609.734 889.362 609.453 889.369 609.172 889.369 Z M 527.93 568.994 C 525.341 568.994 522.78 569.256 520.284 569.947 C 515.662 571.228 512.38 573.559 510.53 576.877 C 507.112 583.005 508.928 591.556 510.895 598.32 C 513.151 606.073 514.378 612.364 514.755 618.12 C 515.242 625.581 514.289 632.01 511.837 637.773 C 510.904 639.959 509.733 642.073 508.602 644.116 C 507.085 646.851 505.517 649.68 504.509 652.71 C 502.379 659.106 502.599 666.253 505.18 674.562 C 507.379 681.645 510.979 688.639 514.786 695.778 C 536.726 736.919 554.976 780.706 569.034 825.921 C 571.469 833.751 573.799 841.779 576.055 849.544 C 576.516 851.135 576.979 852.726 577.443 854.317 C 578.662 858.503 580.088 862.454 581.677 866.061 C 583.705 870.65 585.904 874.431 588.401 877.623 C 591.139 881.122 594.444 884.041 597.959 886.064 C 601.656 888.192 605.425 889.268 609.172 889.268 C 609.451 889.268 609.732 889.262 610.01 889.25 C 614.677 889.05 619.54 887.536 624.88 884.625 C 637.779 877.593 649.255 868.076 660.351 858.872 C 689.973 834.3 714.453 813.593 737.386 789.539 C 750.164 776.137 759.765 764.442 767.596 752.737 C 777.255 738.302 783.883 724.282 787.854 709.876 C 789.565 703.672 791.293 695.518 789.46 687.459 C 787.288 677.9 780.586 670.306 774.104 662.961 C 771.766 660.312 769.349 657.571 767.177 654.776 C 755.854 640.211 749.617 621.351 750.067 603.033 C 750.176 598.605 750.664 594.149 751.135 589.841 C 751.651 585.139 752.185 580.277 752.224 575.452 C 752.284 567.769 750.916 557.002 744.046 549.338 C 741.302 546.277 737.802 543.851 733.646 542.125 C 729.901 540.57 725.637 539.624 721.318 539.389 C 712.904 538.938 704.628 540.882 696.88 542.919 C 689.198 544.938 681.591 547.165 673.153 549.657 C 668.981 550.889 664.74 552.165 660.638 553.398 C 641.618 559.117 621.953 565.031 602.49 568.663 C 592.011 570.618 582.427 571.774 573.19 572.198 C 562.823 572.673 553.15 572.221 543.625 570.815 C 542.538 570.655 541.427 570.478 540.354 570.308 C 536.246 569.659 532.054 568.994 527.93 568.994 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 606.5 904.283 C 598.307 904.283 589.756 899.404 583.51 891.126 C 580.805 887.565 578.511 883.484 576.294 878.282 C 574.652 874.421 573.13 870.079 571.766 865.379 L 571.732 865.262 C 568.753 854.998 565.674 844.385 562.422 834.043 C 546.741 784.164 526.344 735.845 501.796 690.429 C 497.535 682.551 493.505 674.828 491.025 666.983 C 488.118 657.783 487.844 649.866 490.189 642.779 C 491.298 639.424 493.028 636.295 494.702 633.269 C 495.949 631.015 497.238 628.685 498.263 626.274 C 504.365 611.874 500.827 595.421 497.064 582.697 C 494.842 575.179 492.783 565.677 496.583 558.862 C 498.639 555.176 502.29 552.595 507.435 551.192 C 514.591 549.212 522.234 550.458 529.622 551.66 C 530.833 551.857 532.084 552.061 533.308 552.246 C 543.913 553.852 554.677 554.378 566.219 553.858 C 576.499 553.394 587.163 552.102 598.821 549.908 C 620.475 545.834 642.339 539.181 663.482 532.747 C 667.732 531.455 672.126 530.118 676.447 528.823 C 685.337 526.161 694.031 523.58 702.68 521.274 C 710.451 519.2 718.701 517.203 727.125 517.203 C 727.995 517.203 728.867 517.224 729.742 517.269 C 734.531 517.515 739.26 518.553 743.416 520.269 C 748.03 522.174 751.912 524.862 754.956 528.256 C 762.578 536.755 764.076 548.696 763.99 557.218 C 763.935 562.548 763.336 567.915 762.758 573.105 C 762.224 577.882 761.673 582.822 761.546 587.728 C 761.025 607.969 767.944 628.792 780.526 644.857 C 782.945 647.946 785.638 650.974 788.244 653.903 C 795.463 662.018 802.927 670.41 805.365 681.002 C 807.421 689.923 805.518 698.968 803.633 705.852 C 799.279 721.753 792.01 737.226 781.411 753.153 C 772.786 766.115 762.237 779.022 748.216 793.77 C 720.997 822.397 690.151 848.011 662.938 870.61 C 650.649 880.813 637.943 891.363 623.651 899.154 C 617.529 902.489 612.281 904.117 607.132 904.275 C 606.92 904.28 606.71 904.283 606.5 904.283 Z M 515.766 550.252 C 512.953 550.252 510.171 550.537 507.46 551.287 C 502.341 552.683 498.711 555.248 496.669 558.91 C 492.887 565.692 494.944 575.169 497.159 582.667 C 499.695 591.242 501.081 598.204 501.521 604.574 C 502.091 612.828 501.055 619.938 498.354 626.312 C 497.327 628.727 496.037 631.061 494.789 633.317 C 493.117 636.338 491.391 639.463 490.284 642.809 C 487.945 649.875 488.219 657.773 491.12 666.952 C 493.598 674.79 497.625 682.507 501.883 690.382 C 526.435 735.803 546.836 784.128 562.518 834.014 C 565.771 844.357 568.849 854.97 571.828 865.235 L 571.862 865.352 C 573.224 870.048 574.747 874.385 576.386 878.244 C 578.6 883.438 580.89 887.513 583.591 891.066 C 589.818 899.319 598.339 904.183 606.5 904.184 C 606.71 904.184 606.917 904.18 607.125 904.174 C 612.258 904.016 617.494 902.393 623.602 899.065 C 637.885 891.278 650.588 880.732 662.872 870.533 C 690.085 847.935 720.929 822.323 748.143 793.701 C 762.161 778.956 772.706 766.055 781.328 753.097 C 791.92 737.179 799.184 721.716 803.537 705.824 C 805.419 698.953 807.318 689.924 805.268 681.024 C 802.835 670.457 795.38 662.076 788.169 653.969 C 785.563 651.039 782.867 648.009 780.448 644.919 C 767.851 628.835 760.924 607.989 761.445 587.726 C 761.573 582.815 762.125 577.874 762.658 573.094 C 763.237 567.906 763.836 562.542 763.89 557.217 C 763.976 548.713 762.483 536.798 754.882 528.322 C 751.848 524.939 747.978 522.261 743.377 520.36 C 739.232 518.649 734.515 517.614 729.734 517.368 C 728.864 517.323 727.992 517.303 727.125 517.303 C 718.71 517.303 710.471 519.297 702.703 521.369 C 694.055 523.676 685.362 526.256 676.474 528.918 C 672.153 530.213 667.759 531.55 663.51 532.842 C 642.364 539.277 620.496 545.93 598.836 550.006 C 587.175 552.2 576.507 553.493 566.221 553.957 C 554.674 554.478 543.903 553.95 533.29 552.345 C 532.066 552.16 530.815 551.955 529.604 551.758 C 525.029 551.012 520.357 550.252 515.766 550.252 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 603.787 919.6 C 594.67 919.6 585.203 914.098 578.375 904.802 C 575.464 900.863 573.003 896.354 570.633 890.614 C 568.956 886.539 567.374 881.93 565.8 876.524 C 561.841 862.744 558.672 852.175 555.526 842.255 C 538.229 787.735 515.691 734.902 488.54 685.224 C 480.577 670.66 469.672 650.712 475.582 632.752 C 476.802 629.043 478.701 625.605 480.538 622.278 C 481.895 619.819 483.301 617.276 484.411 614.654 C 491.029 598.984 487.103 581.039 482.944 567.156 C 480.455 558.842 478.141 548.323 482.37 540.722 C 484.67 536.587 488.752 533.701 494.502 532.143 C 502.432 529.972 510.849 531.368 518.99 532.72 C 520.344 532.945 521.693 533.168 523.036 533.376 C 571.599 540.875 619.702 526.097 666.225 511.803 C 670.701 510.428 675.175 509.053 679.649 507.697 C 688.9 504.894 698.74 501.94 708.396 499.333 C 717.823 496.787 727.898 494.337 738.175 494.845 C 749.499 495.398 759.673 499.818 766.089 506.969 C 774.529 516.376 776.167 529.571 776.055 538.983 C 775.984 544.834 775.318 550.712 774.674 556.397 C 774.081 561.636 773.467 567.054 773.323 572.426 C 772.732 594.519 780.31 617.234 794.109 634.747 C 796.768 638.121 799.734 641.435 802.602 644.639 C 810.583 653.554 818.836 662.772 821.559 674.471 C 823.851 684.315 821.769 694.299 819.701 701.898 C 808.666 742.414 781.602 774.646 759.258 798.201 C 729.557 829.512 695.638 857.702 665.711 882.572 C 652.221 893.783 638.272 905.376 622.559 913.939 C 615.691 917.681 609.875 919.478 604.253 919.594 C 604.099 919.598 603.943 919.6 603.787 919.6 Z M 503.607 531.917 C 500.599 531.917 497.628 532.221 494.739 533.013 C 489.23 534.506 485.335 537.247 483.156 541.161 C 479.092 548.468 481.368 558.754 483.805 566.899 C 488.008 580.926 491.97 599.071 485.239 615.005 C 484.11 617.669 482.694 620.235 481.325 622.714 C 479.509 626.003 477.63 629.404 476.437 633.033 C 470.648 650.623 481.006 669.568 489.329 684.792 C 516.509 734.521 539.069 787.408 556.384 841.983 C 559.533 851.911 562.704 862.486 566.665 876.273 C 568.229 881.646 569.802 886.225 571.466 890.27 C 573.808 895.94 576.234 900.388 579.102 904.267 C 585.872 913.486 595.313 918.867 604.234 918.694 C 609.708 918.582 615.393 916.819 622.129 913.148 C 637.766 904.627 651.681 893.063 665.137 881.88 C 695.044 857.025 728.944 828.854 758.609 797.581 C 780.88 774.102 807.853 741.982 818.835 701.661 C 820.877 694.164 822.932 684.322 820.685 674.674 C 818.016 663.199 809.842 654.07 801.937 645.239 C 799.059 642.024 796.083 638.7 793.406 635.303 C 779.479 617.627 771.833 594.7 772.427 572.402 C 772.573 566.991 773.189 561.553 773.784 556.295 C 774.426 550.632 775.089 544.776 775.158 538.972 C 775.268 529.72 773.669 516.762 765.424 507.571 C 759.168 500.596 749.221 496.286 738.136 495.744 C 727.983 495.247 717.992 497.676 708.634 500.203 C 698.989 502.806 689.157 505.759 679.914 508.56 C 675.44 509.915 670.967 511.289 666.493 512.664 C 619.871 526.988 571.662 541.801 522.902 534.266 C 521.555 534.059 520.203 533.833 518.846 533.609 C 513.802 532.772 508.653 531.917 503.607 531.917 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 601.704 934.119 C 601.589 934.119 601.475 934.118 601.359 934.116 C 596.12 934.045 590.923 932.444 585.917 929.361 C 581.37 926.561 577.21 922.633 573.886 918.005 C 570.809 913.739 568.212 908.858 565.714 902.64 C 563.984 898.327 562.36 893.497 560.604 887.444 C 556.506 873.16 552.945 861.334 549.393 850.227 C 530.463 791.012 505.766 733.618 475.987 679.635 C 470.827 670.282 465.944 661.113 462.909 651.762 C 459.359 640.822 458.975 631.406 461.736 622.976 C 463.043 618.986 465.092 615.269 467.076 611.674 C 468.555 608.992 470.084 606.219 471.297 603.348 C 478.533 586.172 474.188 566.558 469.592 551.389 C 467.777 545.39 466.792 540.616 466.492 536.362 C 466.109 530.911 466.883 526.532 468.857 522.975 C 471.292 518.588 475.642 515.525 481.784 513.87 C 490.313 511.546 499.423 513.085 508.228 514.572 C 509.678 514.816 511.178 515.07 512.646 515.299 C 525.343 517.293 538.224 517.97 552.034 517.37 C 564.331 516.835 577.084 515.29 591.018 512.646 C 616.902 507.736 643.004 499.683 668.248 491.896 C 673.112 490.395 678.143 488.843 683.089 487.339 C 692.294 484.506 703.205 481.2 714.328 478.168 C 724.549 475.38 735.46 472.703 746.575 473.221 C 752.284 473.489 757.922 474.703 762.878 476.734 C 768.378 478.987 773.006 482.178 776.63 486.218 C 785.714 496.34 787.458 510.578 787.323 520.74 C 787.238 527.071 786.508 533.442 785.802 539.604 C 785.146 545.322 784.467 551.233 784.305 557.104 C 783.642 581.232 791.94 606.028 807.07 625.133 C 809.984 628.813 813.231 632.42 816.372 635.908 C 825.049 645.547 834.021 655.513 836.979 668.122 C 839.456 678.664 837.221 689.485 835 697.735 C 832.351 707.448 828.692 717.258 824.13 726.893 C 819.913 735.798 814.773 744.869 808.851 753.853 C 798.766 769.152 785.969 784.927 769.727 802.082 C 737.576 836.041 700.602 866.791 667.981 893.92 C 653.316 906.115 638.152 918.726 621.091 928.023 C 615.545 931.044 608.92 934.119 601.704 934.119 Z M 491.452 512.778 C 488.186 512.778 484.96 513.108 481.81 513.965 C 475.695 515.613 471.367 518.661 468.945 523.024 C 466.979 526.563 466.211 530.923 466.592 536.355 C 466.891 540.601 467.875 545.369 469.688 551.36 C 472.783 561.577 474.488 569.878 475.055 577.481 C 475.786 587.319 474.587 595.794 471.388 603.387 C 470.174 606.262 468.643 609.038 467.163 611.723 C 465.182 615.314 463.134 619.026 461.831 623.007 C 459.076 631.415 459.46 640.812 463.004 651.731 C 466.035 661.073 470.917 670.238 476.074 679.587 C 505.855 733.575 530.555 790.977 549.487 850.196 C 553.039 861.304 556.602 873.131 560.7 887.417 C 562.456 893.467 564.078 898.293 565.807 902.604 C 568.3 908.814 570.894 913.689 573.967 917.948 C 577.282 922.567 581.433 926.485 585.969 929.278 C 590.959 932.351 596.138 933.946 601.36 934.018 C 601.474 934.019 601.589 934.02 601.704 934.02 C 608.897 934.02 615.509 930.953 621.041 927.938 C 638.094 918.646 653.254 906.039 667.914 893.847 C 700.533 866.719 737.505 835.971 769.651 802.017 C 785.888 784.867 798.682 769.095 808.763 753.801 C 814.683 744.822 819.823 735.755 824.036 726.855 C 828.596 717.225 832.252 707.421 834.901 697.713 C 837.12 689.474 839.349 678.668 836.878 668.149 C 833.925 655.565 824.962 645.608 816.294 635.979 C 813.151 632.489 809.902 628.88 806.987 625.199 C 791.842 606.075 783.539 581.256 784.203 557.105 C 784.365 551.229 785.042 545.315 785.698 539.596 C 786.405 533.436 787.137 527.067 787.221 520.741 C 787.356 510.597 785.613 496.386 776.552 486.287 C 772.938 482.259 768.323 479.076 762.836 476.828 C 757.891 474.803 752.265 473.591 746.567 473.323 C 735.461 472.805 724.564 475.482 714.349 478.266 C 703.229 481.299 692.32 484.604 683.115 487.437 C 678.169 488.941 673.138 490.493 668.273 491.994 C 643.028 499.782 616.922 507.836 591.034 512.747 C 577.094 515.391 564.338 516.937 552.034 517.472 C 538.219 518.071 525.33 517.395 512.627 515.401 C 511.16 515.17 509.658 514.917 508.207 514.672 C 502.669 513.734 497.009 512.778 491.452 512.778 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 598.93 949.439 C 598.776 949.439 598.621 949.437 598.467 949.435 C 587.558 949.25 576.448 942.61 568.747 931.67 C 565.466 927.029 562.703 921.72 560.052 914.962 C 558.265 910.399 556.596 905.348 554.638 898.584 C 550.403 883.798 546.43 870.665 542.495 858.436 C 521.948 794.579 495.113 732.67 462.733 674.429 C 453.248 657.371 440.256 634.011 447.128 612.948 C 448.545 608.605 450.764 604.576 452.91 600.679 C 454.5 597.792 456.145 594.807 457.443 591.727 C 465.195 573.283 460.461 552.176 455.47 535.849 C 452.49 526.09 449.702 513.745 454.642 504.834 C 457.322 499.999 462.103 496.629 468.853 494.817 C 478.15 492.302 488.033 493.994 497.591 495.627 C 499.191 495.902 500.786 496.174 502.374 496.427 C 559.672 505.555 616.307 487.948 671.078 470.921 C 676.151 469.344 681.222 467.768 686.291 466.212 C 696.266 463.122 708.076 459.519 720.042 456.229 C 731.112 453.183 742.929 450.253 755.007 450.796 C 768.3 451.395 780.239 456.546 787.763 464.929 C 797.661 475.96 799.547 491.452 799.388 502.506 C 799.286 509.358 798.49 516.242 797.718 522.9 C 797.002 529.079 796.262 535.466 796.083 541.802 C 795.35 567.78 804.304 594.468 820.651 615.021 C 823.804 618.987 827.323 622.878 830.727 626.642 C 840.167 637.08 849.928 647.872 853.171 661.589 C 855.886 673.061 853.471 684.82 851.065 693.782 C 837.896 742.285 804.637 781.348 780.766 806.512 C 746.721 842.662 708.101 874.801 670.752 905.881 C 654.885 919.084 638.479 932.737 619.997 942.807 C 613.965 946.096 606.758 949.438 598.93 949.439 Z M 479.293 494.439 C 475.833 494.439 472.417 494.787 469.089 495.687 C 462.583 497.432 457.987 500.657 455.431 505.271 C 450.656 513.886 453.405 525.998 456.333 535.586 C 461.367 552.059 466.138 573.365 458.273 592.077 C 456.957 595.201 455.301 598.207 453.699 601.114 C 451.573 604.973 449.375 608.965 447.984 613.227 C 441.234 633.916 454.115 657.079 463.52 673.992 C 495.927 732.284 522.787 794.248 543.352 858.161 C 547.29 870.4 551.263 883.541 555.503 898.336 C 557.451 905.071 559.113 910.099 560.89 914.635 C 563.514 921.323 566.243 926.572 569.482 931.153 C 577.018 941.859 587.861 948.357 598.484 948.536 C 606.266 948.689 613.518 945.315 619.57 942.019 C 637.974 931.993 654.346 918.369 670.179 905.193 C 707.508 874.13 746.107 842.009 780.117 805.897 C 829.82 753.501 843.918 716.685 850.198 693.549 C 852.578 684.691 854.966 673.074 852.299 661.798 C 849.109 648.307 839.427 637.601 830.065 627.248 C 826.651 623.473 823.122 619.57 819.95 615.583 C 803.473 594.866 794.446 567.966 795.185 541.778 C 795.367 535.403 796.109 528.995 796.828 522.798 C 797.596 516.162 798.392 509.3 798.49 502.493 C 798.648 491.6 796.801 476.346 787.096 465.531 C 779.733 457.326 768.023 452.283 754.969 451.695 C 743.01 451.166 731.286 454.069 720.283 457.096 C 708.331 460.383 696.527 463.984 686.557 467.073 C 681.489 468.629 676.419 470.205 671.349 471.781 C 616.479 488.839 559.745 506.476 502.236 497.316 C 500.645 497.063 499.046 496.79 497.441 496.515 C 491.438 495.488 485.302 494.439 479.293 494.439 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 596.153 963.959 C 595.965 963.959 595.779 963.957 595.591 963.953 C 589.677 963.837 583.57 961.865 577.927 958.252 C 572.745 954.934 568.02 950.309 564.261 944.877 C 560.81 939.907 557.909 934.225 555.133 926.992 C 552.831 920.99 550.964 914.783 549.441 909.503 C 544.982 893.923 540.705 879.824 536.362 866.402 C 514.181 797.849 485.185 731.378 450.178 668.835 C 444.118 658.01 438.382 647.395 434.791 636.534 C 430.599 623.853 430.104 612.939 433.282 603.167 C 434.785 598.544 437.155 594.237 439.447 590.073 C 441.158 586.963 442.928 583.747 444.328 580.417 C 452.698 560.465 447.544 537.689 442.118 520.075 C 439.974 513.112 438.805 507.566 438.436 502.622 C 437.965 496.292 438.845 491.209 441.129 487.082 C 443.944 481.995 448.992 478.448 456.132 476.541 C 466.03 473.878 476.604 475.706 486.825 477.475 C 488.518 477.768 490.268 478.071 491.98 478.346 C 506.862 480.746 521.964 481.577 538.137 480.879 C 552.544 480.261 567.481 478.439 583.797 475.31 C 614.101 469.498 644.625 459.947 674.146 450.709 C 679.253 449.11 684.536 447.457 689.729 445.852 C 700.414 442.521 713.078 438.633 725.971 435.06 C 736.906 432.03 748.525 429.105 760.388 429.105 C 761.392 429.105 762.396 429.126 763.404 429.169 C 770.032 429.457 776.579 430.849 782.336 433.194 C 788.725 435.796 794.097 439.491 798.302 444.176 C 808.846 455.922 810.839 472.457 810.654 484.26 C 810.54 491.593 809.677 498.973 808.844 506.11 C 808.065 512.764 807.26 519.645 807.063 526.478 C 806.256 554.493 815.932 583.261 833.612 605.408 C 837.021 609.679 840.821 613.865 844.497 617.913 C 849.563 623.492 854.8 629.261 859.102 635.346 C 863.927 642.173 867.031 648.682 868.592 655.242 C 871.503 667.469 868.931 680.038 866.363 689.621 C 863.325 700.862 859.132 712.215 853.895 723.362 C 849.048 733.683 843.14 744.186 836.335 754.581 C 824.659 772.413 809.906 790.67 791.234 810.394 C 754.663 849.256 713.158 883.812 673.02 917.23 C 655.979 931.418 638.357 946.089 618.526 956.891 C 612.091 960.398 604.419 963.959 596.153 963.959 Z M 467.14 475.298 C 463.422 475.298 459.746 475.672 456.159 476.637 C 449.047 478.538 444.02 482.069 441.218 487.131 C 438.945 491.239 438.067 496.305 438.537 502.614 C 438.905 507.55 440.073 513.089 442.215 520.046 C 447.646 537.675 452.804 560.474 444.421 580.456 C 443.02 583.791 441.249 587.009 439.535 590.122 C 437.246 594.281 434.879 598.584 433.379 603.198 C 430.208 612.949 430.701 623.843 434.887 636.503 C 438.475 647.355 444.209 657.966 450.267 668.786 C 485.275 731.335 514.274 797.812 536.458 866.371 C 540.8 879.795 545.079 893.894 549.538 909.475 C 551.061 914.752 552.928 920.957 555.228 926.956 C 558.001 934.18 560.898 939.856 564.344 944.819 C 568.095 950.239 572.811 954.855 577.982 958.166 C 583.609 961.77 589.7 963.736 595.594 963.853 C 595.779 963.857 595.968 963.858 596.154 963.858 C 604.399 963.859 612.055 960.303 618.482 956.802 C 638.302 946.005 655.921 931.337 672.958 917.153 C 713.094 883.736 754.596 849.182 791.164 810.325 C 809.832 790.604 824.581 772.352 836.253 754.524 C 843.055 744.134 848.961 733.635 853.807 723.319 C 859.039 712.176 863.232 700.83 866.269 689.594 C 868.832 680.022 871.403 667.469 868.496 655.264 C 866.937 648.715 863.839 642.219 859.021 635.402 C 854.724 629.323 849.489 623.556 844.424 617.979 C 840.747 613.929 836.945 609.743 833.534 605.469 C 815.841 583.305 806.158 554.512 806.966 526.475 C 807.163 519.636 807.967 512.753 808.745 506.097 C 809.579 498.962 810.442 491.585 810.557 484.257 C 810.742 472.472 808.752 455.964 798.231 444.241 C 794.036 439.567 788.676 435.882 782.302 433.285 C 776.555 430.945 770.02 429.555 763.404 429.267 C 762.398 429.224 761.393 429.203 760.391 429.203 C 748.539 429.203 736.93 432.126 726 435.154 C 713.107 438.727 700.445 442.615 689.76 445.946 C 684.568 447.551 679.285 449.205 674.177 450.802 C 644.656 460.04 614.128 469.593 583.818 475.406 C 567.497 478.536 552.557 480.358 538.144 480.977 C 521.964 481.668 506.855 480.842 491.967 478.443 C 490.255 478.167 488.504 477.864 486.811 477.571 C 480.306 476.449 473.659 475.298 467.14 475.298 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 593.372 978.88 C 593.149 978.88 592.929 978.877 592.706 978.872 C 586.419 978.733 579.927 976.599 573.931 972.697 C 568.432 969.119 563.424 964.145 559.449 958.314 C 555.81 952.992 552.758 946.909 549.842 939.168 C 547.528 933.022 545.599 926.579 543.859 920.532 C 539.174 904.144 534.589 889.084 529.844 874.49 C 506.038 801.268 474.893 730.259 437.273 663.433 C 430.764 651.871 424.6 640.532 420.733 628.92 C 416.218 615.368 415.671 603.704 419.056 593.261 C 420.658 588.321 423.187 583.721 425.632 579.273 C 427.46 575.948 429.351 572.51 430.844 568.95 C 439.782 547.612 434.223 523.255 428.382 504.418 C 426.074 496.973 424.813 491.042 424.409 485.752 C 423.893 478.982 424.828 473.547 427.266 469.136 C 430.272 463.698 435.668 459.91 443.307 457.875 C 453.895 455.041 465.202 457.017 476.136 458.928 C 477.947 459.244 479.82 459.572 481.65 459.869 C 497.625 462.471 513.83 463.374 531.194 462.633 C 546.656 461.973 562.683 460.012 580.191 456.64 C 612.705 450.375 645.443 440.073 677.101 430.109 C 682.33 428.463 687.736 426.762 693.05 425.107 C 704.504 421.518 718.067 417.334 731.796 413.505 C 743.52 410.234 755.976 407.077 768.695 407.077 C 769.737 407.077 770.778 407.098 771.822 407.142 C 778.909 407.441 785.91 408.921 792.067 411.423 C 798.898 414.198 804.643 418.145 809.138 423.152 C 820.411 435.711 822.529 453.393 822.32 466.016 C 822.19 473.849 821.261 481.731 820.365 489.353 C 819.524 496.478 818.657 503.845 818.442 511.162 C 817.563 541.121 827.927 571.876 846.88 595.542 C 850.537 600.108 854.615 604.584 858.56 608.913 C 863.989 614.872 869.602 621.034 874.214 627.535 C 879.388 634.83 882.718 641.785 884.397 648.798 C 887.526 661.869 884.784 675.311 882.044 685.561 C 878.815 697.563 874.348 709.685 868.772 721.589 C 863.61 732.611 857.315 743.828 850.065 754.929 C 837.62 773.98 821.894 793.482 801.989 814.548 C 762.892 856.12 718.484 893.111 675.541 928.882 C 657.312 944.067 638.463 959.767 617.247 971.322 C 610.365 975.075 602.169 978.879 593.372 978.88 Z M 430.936 568.991 C 429.441 572.555 427.549 575.996 425.72 579.323 C 423.277 583.767 420.749 588.363 419.152 593.295 C 415.772 603.717 416.322 615.361 420.828 628.891 C 424.693 640.495 430.853 651.83 437.361 663.387 C 474.983 730.218 506.132 801.234 529.94 874.461 C 534.685 889.057 539.27 904.118 543.956 920.507 C 545.695 926.552 547.624 932.992 549.936 939.135 C 552.849 946.867 555.899 952.944 559.532 958.259 C 563.5 964.08 568.499 969.044 573.987 972.614 C 579.966 976.505 586.441 978.635 592.708 978.773 C 592.93 978.778 593.152 978.78 593.373 978.78 C 602.148 978.78 610.327 974.981 617.199 971.237 C 638.406 959.686 657.253 943.989 675.477 928.808 C 718.419 893.037 762.825 856.049 801.917 814.482 C 821.818 793.419 837.539 773.922 849.982 754.877 C 857.231 743.78 863.522 732.567 868.683 721.549 C 874.256 709.651 878.719 697.534 881.951 685.538 C 884.685 675.299 887.427 661.873 884.302 648.824 C 882.626 641.823 879.301 634.88 874.134 627.597 C 869.527 621.1 863.915 614.941 858.487 608.984 C 854.544 604.654 850.464 600.177 846.805 595.608 C 827.836 571.924 817.464 541.145 818.344 511.163 C 818.559 503.843 819.426 496.473 820.266 489.346 C 821.163 481.726 822.093 473.847 822.223 466.019 C 822.432 453.415 820.318 435.758 809.065 423.223 C 804.581 418.227 798.849 414.289 792.031 411.52 C 785.883 409.022 778.895 407.544 771.82 407.246 C 770.779 407.202 769.735 407.181 768.698 407.181 C 755.987 407.181 743.543 410.335 731.825 413.604 C 718.096 417.432 704.535 421.617 693.081 425.206 C 687.766 426.86 682.361 428.563 677.133 430.208 C 645.471 440.173 612.732 450.477 580.211 456.741 C 562.698 460.115 546.667 462.076 531.199 462.737 C 513.828 463.476 497.617 462.575 481.636 459.972 C 479.805 459.673 477.932 459.346 476.12 459.03 C 465.194 457.12 453.897 455.148 443.334 457.975 C 435.723 460.002 430.347 463.775 427.355 469.187 C 424.926 473.581 423.995 478.998 424.509 485.747 C 424.911 491.029 426.172 496.954 428.478 504.391 C 434.324 523.243 439.886 547.623 430.936 568.991 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 590.595 993.801 C 590.337 993.801 590.081 993.798 589.823 993.791 C 583.163 993.63 576.286 991.331 569.938 987.144 C 564.12 983.307 558.829 977.985 554.637 971.752 C 550.811 966.077 547.607 959.593 544.552 951.346 C 542.113 944.757 540.115 937.961 538.279 931.564 C 533.424 914.578 528.395 898.097 523.329 882.581 C 497.898 804.69 464.603 729.143 424.369 658.036 C 417.41 645.739 410.82 633.677 406.674 621.309 C 401.839 606.887 401.236 594.474 404.83 583.36 C 406.53 578.102 409.22 573.207 411.821 568.472 C 413.764 564.934 415.774 561.276 417.361 557.487 C 426.866 534.759 420.903 508.822 414.646 488.763 C 412.174 480.836 410.82 474.519 410.382 468.884 C 409.822 461.675 410.81 455.888 413.404 451.192 C 414.947 448.397 417.092 445.993 419.781 444.048 C 422.666 441.96 426.266 440.333 430.483 439.214 C 441.755 436.21 453.795 438.329 465.438 440.383 C 467.37 440.723 469.367 441.075 471.32 441.396 C 488.387 444.201 505.702 445.181 524.248 444.391 C 540.766 443.689 557.883 441.589 576.581 437.973 C 611.305 431.257 646.251 420.203 680.047 409.513 C 685.401 407.82 690.933 406.07 696.373 404.366 C 708.561 400.529 722.993 396.053 737.62 391.953 C 750.138 388.443 763.435 385.055 777.011 385.055 C 778.086 385.055 779.161 385.076 780.24 385.12 C 787.786 385.429 795.241 386.998 801.8 389.656 C 809.076 392.606 815.193 396.804 819.977 402.135 C 831.982 415.505 834.222 434.336 833.99 447.78 C 833.844 456.115 832.849 464.501 831.888 472.611 C 830.987 480.204 830.055 488.055 829.823 495.853 C 828.875 527.756 839.929 560.497 860.156 585.682 C 864.061 590.545 868.417 595.311 872.628 599.92 C 878.422 606.259 884.411 612.815 889.333 619.733 C 894.854 627.494 898.411 634.896 900.207 642.361 C 903.555 656.28 900.643 670.591 897.729 681.505 C 894.305 694.269 889.57 707.159 883.654 719.82 C 878.176 731.544 871.495 743.474 863.798 755.283 C 850.583 775.554 833.885 796.3 812.747 818.706 C 771.117 862.999 723.811 902.418 678.063 940.539 C 658.646 956.719 638.569 973.448 615.969 985.759 C 608.636 989.751 599.919 993.8 590.595 993.801 Z M 442.831 437.818 C 438.66 437.818 434.534 438.236 430.508 439.309 C 426.304 440.426 422.714 442.047 419.839 444.128 C 417.162 446.064 415.026 448.457 413.49 451.239 C 410.907 455.918 409.923 461.687 410.481 468.876 C 410.918 474.504 412.271 480.814 414.741 488.733 C 421.003 508.807 426.97 534.768 417.452 557.525 C 415.863 561.319 413.852 564.979 411.907 568.519 C 409.308 573.249 406.622 578.141 404.925 583.39 C 401.337 594.483 401.94 606.875 406.768 621.276 C 410.911 633.635 417.499 645.693 424.456 657.986 C 464.692 729.098 497.991 804.652 523.424 882.549 C 528.49 898.068 533.52 914.549 538.373 931.536 C 540.21 937.931 542.208 944.725 544.646 951.31 C 547.698 959.55 550.898 966.028 554.719 971.695 C 558.904 977.917 564.184 983.23 569.99 987.059 C 576.324 991.237 583.182 993.53 589.823 993.691 C 590.081 993.697 590.339 993.7 590.594 993.7 C 599.896 993.7 608.599 989.657 615.917 985.67 C 638.508 973.364 658.583 956.638 677.995 940.462 C 723.74 902.342 771.044 862.925 812.669 818.637 C 833.803 796.235 850.498 775.494 863.709 755.228 C 871.404 743.423 878.083 731.497 883.56 719.777 C 889.473 707.122 894.207 694.236 897.63 681.479 C 900.539 670.577 903.448 656.28 900.107 642.383 C 898.315 634.931 894.762 627.54 889.248 619.789 C 884.331 612.877 878.343 606.323 872.552 599.986 C 868.339 595.376 863.983 590.609 860.075 585.743 C 839.835 560.54 828.771 527.774 829.721 495.847 C 829.953 488.046 830.885 480.193 831.786 472.597 C 832.747 464.49 833.742 456.106 833.888 447.776 C 834.12 434.351 831.883 415.545 819.901 402.2 C 815.126 396.881 809.023 392.691 801.76 389.747 C 795.213 387.093 787.769 385.526 780.234 385.218 C 765.549 384.62 751.146 388.263 737.646 392.047 C 723.021 396.148 708.589 400.623 696.401 404.46 C 690.961 406.163 685.427 407.914 680.076 409.606 C 646.277 420.297 611.328 431.353 576.599 438.07 C 557.896 441.687 540.773 443.787 524.251 444.49 C 505.693 445.278 488.376 444.299 471.303 441.494 C 469.349 441.173 467.352 440.82 465.419 440.479 C 457.952 439.164 450.318 437.818 442.831 437.818 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 587.815 1008.722 C 587.523 1008.722 587.231 1008.718 586.938 1008.71 C 579.904 1008.526 572.644 1006.064 565.942 1001.589 C 559.808 997.493 554.234 991.822 549.825 985.189 C 545.815 979.166 542.459 972.281 539.262 963.524 C 536.817 956.816 534.761 949.795 532.697 942.593 C 527.612 924.78 522.268 907.311 516.814 890.669 C 489.757 808.107 454.313 728.023 411.465 652.636 C 404.057 639.603 397.039 626.817 392.615 613.697 C 387.458 598.405 386.802 585.242 390.603 573.456 C 392.402 567.882 395.249 562.691 398.005 557.673 C 400.066 553.921 402.195 550.041 403.876 546.022 C 413.948 521.911 407.581 494.39 400.909 473.108 C 398.273 464.699 396.826 457.997 396.354 452.015 C 395.75 444.367 396.792 438.227 399.539 433.246 C 401.174 430.281 403.449 427.733 406.301 425.671 C 409.361 423.458 413.182 421.734 417.656 420.549 C 429.611 417.376 442.384 419.642 454.734 421.834 C 456.788 422.198 458.912 422.576 460.987 422.919 C 479.149 425.926 497.567 426.982 517.302 426.146 C 534.874 425.402 553.084 423.164 572.973 419.303 C 609.908 412.134 647.065 400.327 682.998 388.909 C 688.471 387.17 694.13 385.372 699.692 383.621 C 712.638 379.53 727.96 374.759 743.442 370.397 C 757.77 366.36 773.063 362.479 788.654 363.092 C 796.659 363.411 804.569 365.07 811.528 367.885 C 819.247 371.009 825.734 375.459 830.81 381.112 C 843.544 395.294 845.911 415.273 845.653 429.537 C 845.494 438.372 844.432 447.261 843.406 455.856 C 842.445 463.919 841.45 472.256 841.2 480.538 C 840.178 514.384 851.922 549.112 873.423 575.817 C 877.575 580.975 882.207 586.029 886.686 590.918 C 892.844 597.639 899.212 604.588 904.445 611.922 C 910.315 620.151 914.099 628.001 916.01 635.918 C 919.576 650.679 916.492 665.865 913.407 677.446 C 909.79 690.97 904.784 704.631 898.529 718.048 C 892.735 730.473 885.668 743.118 877.524 755.633 C 863.54 777.123 845.867 799.113 823.497 822.861 C 779.339 869.87 729.133 911.72 680.581 952.193 C 659.976 969.369 638.667 987.13 614.685 1000.192 C 606.909 1004.428 597.666 1008.722 587.815 1008.722 Z M 430.678 419.078 C 426.28 419.078 421.93 419.518 417.684 420.645 C 413.22 421.828 409.411 423.545 406.361 425.752 C 403.522 427.806 401.257 430.343 399.63 433.294 C 396.892 438.258 395.854 444.379 396.456 452.007 C 396.927 457.981 398.372 464.676 401.007 473.078 C 407.684 494.376 414.055 521.918 403.97 546.061 C 402.287 550.085 400.158 553.967 398.095 557.721 C 395.341 562.736 392.495 567.921 390.699 573.488 C 386.904 585.253 387.562 598.394 392.711 613.666 C 397.133 626.777 404.146 639.558 411.553 652.589 C 454.404 727.981 489.85 808.072 516.909 890.64 C 522.362 907.284 527.708 924.754 532.793 942.568 C 534.857 949.768 536.912 956.787 539.356 963.491 C 542.549 972.241 545.903 979.119 549.909 985.137 C 554.31 991.759 559.875 997.42 565.997 1001.509 C 572.685 1005.974 579.927 1008.43 586.94 1008.613 C 587.232 1008.621 587.523 1008.624 587.815 1008.624 C 597.645 1008.625 606.872 1004.337 614.64 1000.106 C 638.614 987.048 659.917 969.292 680.518 952.119 C 729.068 911.648 779.271 869.8 823.427 822.795 C 845.793 799.052 863.461 777.067 877.443 755.581 C 885.586 743.07 892.649 730.43 898.44 718.009 C 904.695 704.597 909.698 690.942 913.315 677.424 C 916.396 665.854 919.475 650.684 915.915 635.945 C 914.006 628.041 910.227 620.203 904.365 611.984 C 899.135 604.654 892.771 597.708 886.615 590.989 C 882.135 586.099 877.503 581.044 873.347 575.884 C 851.832 549.16 840.079 514.408 841.102 480.538 C 841.352 472.254 842.347 463.914 843.31 455.848 C 844.336 447.255 845.396 438.37 845.555 429.539 C 845.813 415.294 843.453 395.341 830.74 381.183 C 825.674 375.541 819.199 371.1 811.494 367.982 C 804.546 365.171 796.647 363.515 788.653 363.196 C 787.544 363.152 786.434 363.131 785.328 363.131 C 770.903 363.131 756.772 366.75 743.473 370.497 C 727.992 374.859 712.67 379.629 699.724 383.721 C 694.162 385.472 688.505 387.27 683.033 389.008 C 647.096 400.427 609.935 412.236 572.995 419.405 C 553.1 423.266 534.887 425.505 517.31 426.25 C 497.569 427.085 479.141 426.03 460.974 423.021 C 458.897 422.678 456.773 422.3 454.72 421.936 C 446.77 420.52 438.645 419.078 430.678 419.078 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 585.036 1023.643 C 584.708 1023.643 584.383 1023.639 584.054 1023.629 C 576.646 1023.423 569.002 1020.797 561.947 1016.035 C 555.494 1011.68 549.638 1005.659 545.013 998.626 C 540.815 992.25 537.307 984.965 533.971 975.699 C 531.331 968.364 529.189 960.87 527.116 953.623 C 521.791 934.963 516.134 916.503 510.299 898.757 C 481.616 811.527 444.021 726.902 398.561 647.236 C 390.702 633.465 383.258 619.955 378.557 606.083 C 373.079 589.921 372.367 576.009 376.378 563.552 C 378.273 557.661 381.283 552.178 384.193 546.875 C 386.37 542.908 388.62 538.806 390.393 534.556 C 401.034 509.056 394.262 479.954 387.173 457.45 C 384.374 448.559 382.833 441.471 382.327 435.145 C 381.68 427.057 382.774 420.565 385.677 415.299 C 387.404 412.166 389.809 409.473 392.824 407.293 C 396.06 404.955 400.1 403.135 404.835 401.884 C 417.475 398.538 430.979 400.951 444.038 403.285 C 446.212 403.674 448.461 404.075 450.659 404.442 C 469.913 407.651 489.441 408.781 510.359 407.9 C 528.986 407.113 548.286 404.736 569.367 400.631 C 608.512 393.009 647.879 380.449 685.951 368.303 C 691.545 366.518 697.331 364.673 703.016 362.874 C 716.735 358.523 732.958 353.455 749.268 348.841 C 764.419 344.555 780.589 340.427 797.073 341.065 C 805.539 341.395 813.903 343.14 821.263 346.114 C 829.426 349.412 836.286 354.114 841.653 360.091 C 855.118 375.084 857.607 396.212 857.325 411.296 C 857.15 420.63 856.023 430.021 854.934 439.102 C 853.911 447.636 852.852 456.46 852.583 465.224 C 851.49 501.014 863.923 537.729 886.698 565.953 C 891.099 571.407 896.009 576.751 900.755 581.919 C 907.276 589.021 914.021 596.363 919.565 604.114 C 925.784 612.81 929.792 621.106 931.823 629.475 C 935.606 645.078 932.352 661.138 929.095 673.386 C 925.284 687.671 920.008 702.102 913.411 716.276 C 907.304 729.402 899.85 742.761 891.259 755.983 C 876.505 778.691 857.86 801.926 834.255 827.014 C 787.557 876.75 734.457 921.027 683.106 963.845 C 661.313 982.017 638.778 1000.808 613.409 1014.623 C 605.182 1019.105 595.417 1023.643 585.036 1023.643 Z M 418.527 400.337 C 413.9 400.337 409.327 400.799 404.859 401.981 C 400.138 403.229 396.108 405.044 392.882 407.375 C 389.879 409.546 387.486 412.227 385.766 415.348 C 382.872 420.597 381.782 427.07 382.427 435.138 C 382.934 441.456 384.471 448.536 387.27 457.421 C 394.362 479.941 401.138 509.064 390.486 534.595 C 388.711 538.85 386.458 542.953 384.28 546.923 C 381.372 552.222 378.367 557.7 376.473 563.583 C 372.469 576.018 373.18 589.909 378.651 606.051 C 383.349 619.915 390.792 633.42 398.647 647.188 C 444.112 726.859 481.709 811.489 510.394 898.726 C 516.228 916.473 521.887 934.934 527.211 953.596 C 529.284 960.841 531.427 968.333 534.065 975.666 C 537.398 984.924 540.904 992.202 545.096 998.571 C 549.714 1005.593 555.56 1011.603 562.003 1015.952 C 569.042 1020.703 576.668 1023.323 584.056 1023.529 C 584.383 1023.538 584.709 1023.543 585.034 1023.543 C 595.394 1023.543 605.143 1019.011 613.359 1014.537 C 638.718 1000.726 661.25 981.938 683.039 963.77 C 734.388 920.954 787.484 876.679 834.182 826.947 C 857.781 801.863 876.423 778.633 891.173 755.929 C 899.761 742.711 907.213 729.356 913.32 716.235 C 919.914 702.066 925.188 687.641 928.997 673.362 C 932.25 661.125 935.502 645.081 931.724 629.5 C 929.698 621.143 925.693 612.859 919.482 604.173 C 913.943 596.427 907.201 589.087 900.68 581.988 C 895.932 576.818 891.023 571.473 886.62 566.016 C 863.831 537.773 851.388 501.034 852.484 465.22 C 852.751 456.452 853.81 447.626 854.833 439.09 C 855.922 430.012 857.048 420.623 857.224 411.294 C 857.506 396.229 855.021 375.127 841.578 360.157 C 836.221 354.192 829.373 349.499 821.224 346.207 C 813.875 343.238 805.523 341.494 797.07 341.165 C 780.602 340.519 764.439 344.653 749.297 348.938 C 732.989 353.552 716.766 358.621 703.047 362.971 C 697.362 364.769 691.576 366.615 685.982 368.399 C 647.909 380.547 608.538 393.107 569.387 400.73 C 548.302 404.835 528.995 407.213 510.364 408.001 C 489.435 408.883 469.902 407.752 450.643 404.541 C 448.444 404.175 446.194 403.773 444.02 403.385 C 435.59 401.877 426.973 400.337 418.527 400.337 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 582.313 1038.965 C 581.927 1038.965 581.542 1038.959 581.156 1038.947 C 565.904 1038.527 550.469 1028.558 539.865 1012.28 C 535.461 1005.523 531.789 997.811 528.305 988.009 C 525.672 980.601 523.468 972.887 521.337 965.427 L 521.148 964.763 C 515.584 945.249 509.613 925.806 503.401 906.97 C 473.103 815.096 433.371 725.959 385.308 642.034 C 371.255 617.497 352.01 583.892 361.769 553.524 C 363.776 547.279 366.955 541.484 370.028 535.879 C 372.315 531.707 374.681 527.394 376.541 522.935 C 387.697 496.167 380.539 465.575 373.058 441.914 C 368.602 427.822 364.394 410 371.465 397.159 C 375.285 390.221 382.163 385.402 391.907 382.833 C 405.319 379.289 419.605 381.86 433.419 384.346 C 435.751 384.765 438.077 385.184 440.393 385.573 C 524.987 399.761 608.253 373.102 688.779 347.32 C 694.594 345.458 700.406 343.596 706.216 341.752 C 720.669 337.153 737.765 331.794 754.984 326.903 C 770.985 322.358 788.062 317.959 805.505 318.641 C 824.703 319.373 841.937 326.721 852.786 338.802 C 867.068 354.706 869.698 377.088 869.389 393.063 C 869.199 402.921 868.005 412.828 866.85 422.409 C 865.767 431.4 864.647 440.698 864.362 449.923 C 863.201 487.565 876.293 526.169 900.281 555.839 C 904.922 561.579 910.102 567.207 915.112 572.651 C 928.926 587.659 943.208 603.177 948.016 622.942 C 952.038 639.475 948.604 656.472 945.162 669.433 C 926.617 739.136 879.289 795.279 845.302 831.446 C 796.052 883.921 740.045 930.634 685.882 975.809 C 662.885 994.99 639.104 1014.824 612.318 1029.411 C 603.597 1034.159 593.258 1038.965 582.313 1038.965 Z M 406.374 381.997 C 401.55 381.997 396.784 382.478 392.136 383.704 C 382.639 386.208 375.949 390.881 372.252 397.595 C 365.268 410.277 369.856 428.808 373.914 441.644 C 381.443 465.452 388.64 496.246 377.37 523.283 C 375.492 527.787 373.115 532.122 370.816 536.314 C 367.762 541.881 364.606 547.638 362.626 553.801 C 352.988 583.791 372.119 617.197 386.089 641.588 C 434.181 725.565 473.939 814.758 504.256 906.69 C 510.471 925.537 516.445 944.993 522.013 964.517 L 522.202 965.181 C 524.329 972.627 526.529 980.327 529.151 987.709 C 532.61 997.442 536.253 1005.095 540.618 1011.789 C 551.059 1027.82 566.223 1037.637 581.181 1038.048 C 592.317 1038.397 602.964 1033.479 611.886 1028.619 C 638.594 1014.075 662.34 994.27 685.304 975.117 C 739.447 929.959 795.432 883.263 844.643 830.829 C 915.469 755.462 935.435 702.49 944.292 669.202 C 947.705 656.344 951.113 639.49 947.139 623.154 C 942.386 603.615 928.184 588.183 914.448 573.259 C 909.427 567.806 904.237 562.166 899.579 556.405 C 875.457 526.569 862.292 487.748 863.461 449.895 C 863.747 440.63 864.87 431.312 865.956 422.301 C 867.107 412.742 868.298 402.859 868.487 393.045 C 868.794 377.232 866.201 355.09 852.115 339.403 C 841.425 327.503 824.424 320.262 805.469 319.539 C 788.169 318.889 771.159 323.242 755.229 327.767 C 738.021 332.655 720.934 338.012 706.489 342.608 C 700.679 344.453 694.867 346.314 689.052 348.175 C 623.976 369.011 557.095 390.42 489.13 390.423 C 472.889 390.424 456.6 389.202 440.243 386.458 C 437.924 386.069 435.595 385.65 433.259 385.23 C 424.365 383.631 415.272 381.997 406.374 381.997 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 579.5 1053.487 C 579.095 1053.487 578.69 1053.48 578.284 1053.467 C 574.075 1053.341 569.808 1052.509 565.607 1050.993 C 561.646 1049.565 557.726 1047.525 553.956 1044.931 C 546.87 1040.057 540.448 1033.337 535.388 1025.499 C 530.815 1018.416 527.002 1010.33 523.391 1000.052 C 520.774 992.604 518.568 984.859 516.432 977.368 L 515.953 975.681 C 510.144 955.305 503.858 934.866 497.266 914.932 C 465.332 818.362 423.44 724.661 372.751 636.436 C 363.992 621.192 355.697 606.236 350.439 590.855 C 344.319 572.952 343.497 557.541 347.923 543.742 C 350.017 537.217 353.345 531.145 356.564 525.273 C 358.971 520.877 361.462 516.333 363.424 511.623 C 375.198 483.35 367.618 451.086 359.701 426.137 C 356.573 416.28 354.848 408.422 354.272 401.405 C 353.536 392.438 354.738 385.242 357.951 379.406 C 359.861 375.935 362.522 372.953 365.865 370.541 C 369.451 367.951 373.931 365.939 379.182 364.558 C 393.195 360.867 408.165 363.575 422.643 366.192 C 425.057 366.629 427.553 367.08 429.995 367.492 C 451.434 371.107 473.178 372.386 496.467 371.413 C 517.203 370.542 538.688 367.886 562.148 363.293 C 605.714 354.764 649.503 340.698 691.848 327.095 C 697.687 325.22 703.724 323.281 709.656 321.389 C 724.862 316.538 742.845 310.885 760.916 305.735 C 776.588 301.267 793.248 296.949 810.255 296.949 C 811.471 296.949 812.686 296.97 813.904 297.016 C 823.288 297.367 832.562 299.289 840.721 302.578 C 849.771 306.223 857.375 311.43 863.323 318.051 C 878.249 334.667 880.986 358.092 880.655 374.817 C 880.45 385.154 879.192 395.551 877.975 405.606 C 876.829 415.079 875.644 424.873 875.34 434.599 C 874.104 474.278 887.917 514.965 913.24 546.229 C 918.136 552.274 923.598 558.197 928.88 563.924 C 936.131 571.786 943.628 579.917 949.793 588.501 C 956.709 598.133 961.172 607.322 963.435 616.597 C 967.654 633.889 964.061 651.694 960.459 665.273 C 956.263 681.081 950.445 697.049 943.168 712.737 C 936.429 727.265 928.203 742.053 918.721 756.689 C 902.427 781.835 881.833 807.559 855.763 835.328 C 804.001 890.501 745.104 939.639 688.146 987.158 C 663.978 1007.321 638.987 1028.171 610.846 1043.495 C 601.724 1048.459 590.912 1053.486 579.5 1053.487 Z M 394.223 362.856 C 389.141 362.856 384.116 363.362 379.208 364.655 C 373.97 366.033 369.5 368.041 365.924 370.623 C 362.595 373.026 359.943 375.998 358.039 379.455 C 354.837 385.273 353.638 392.451 354.372 401.398 C 354.948 408.407 356.672 416.258 359.798 426.108 C 367.721 451.073 375.304 483.359 363.518 511.664 C 361.555 516.379 359.063 520.926 356.651 525.323 C 353.435 531.191 350.109 537.259 348.02 543.775 C 343.599 557.552 344.421 572.942 350.535 590.824 C 355.79 606.197 364.083 621.149 372.839 636.389 C 423.531 724.62 465.427 818.327 497.362 914.904 C 503.953 934.84 510.24 955.28 516.047 975.657 L 516.529 977.344 C 518.662 984.832 520.869 992.576 523.484 1000.022 C 527.093 1010.293 530.901 1018.373 535.471 1025.448 C 540.526 1033.275 546.937 1039.985 554.012 1044.852 C 557.776 1047.441 561.689 1049.476 565.642 1050.902 C 569.833 1052.414 574.086 1053.244 578.286 1053.37 C 578.69 1053.383 579.096 1053.389 579.5 1053.389 C 590.891 1053.39 601.685 1048.368 610.797 1043.408 C 638.929 1028.089 663.916 1007.242 688.08 987.083 C 745.036 939.564 803.932 890.429 855.69 835.261 C 881.754 807.496 902.344 781.778 918.635 756.636 C 928.116 742.004 936.338 727.221 943.075 712.697 C 950.349 697.015 956.165 681.052 960.359 665.25 C 963.958 651.682 967.548 633.894 963.334 616.623 C 961.074 607.362 956.617 598.183 949.709 588.562 C 943.548 579.982 936.053 571.855 928.804 563.995 C 923.521 558.265 918.058 552.342 913.159 546.294 C 887.822 515.013 874 474.301 875.238 434.598 C 875.541 424.867 876.726 415.072 877.873 405.597 C 879.09 395.544 880.348 385.149 880.553 374.818 C 880.884 358.111 878.15 334.714 863.246 318.121 C 857.309 311.512 849.717 306.314 840.68 302.674 C 832.531 299.391 823.27 297.471 813.898 297.12 C 812.682 297.075 811.464 297.053 810.253 297.053 C 793.255 297.053 776.607 301.369 760.938 305.835 C 742.87 310.985 724.889 316.639 709.684 321.489 C 703.75 323.381 697.713 325.319 691.875 327.195 C 649.525 340.799 605.734 354.865 562.164 363.395 C 538.697 367.99 517.208 370.646 496.467 371.517 C 473.168 372.496 451.421 371.211 429.975 367.594 C 427.534 367.183 425.036 366.732 422.621 366.295 C 413.234 364.592 403.632 362.856 394.223 362.856 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 576.694 1068.407 C 576.263 1068.407 575.833 1068.4 575.4 1068.386 C 570.997 1068.245 566.536 1067.362 562.142 1065.762 C 557.999 1064.254 553.902 1062.104 549.961 1059.373 C 542.555 1054.239 535.852 1047.173 530.576 1038.937 C 520.93 1023.876 515.931 1006.289 511.099 989.28 C 510.856 988.424 510.613 987.568 510.37 986.713 C 475.059 862.766 424.416 743.1 359.847 631.038 C 350.639 615.058 341.915 599.377 336.38 583.243 C 329.939 564.47 329.061 548.31 333.696 533.84 C 335.888 526.999 339.378 520.632 342.75 514.476 C 345.275 509.866 347.886 505.1 349.941 500.16 C 362.282 470.498 354.298 436.654 345.964 410.483 C 342.672 400.144 340.855 391.9 340.244 384.538 C 339.464 375.131 340.721 367.583 344.087 361.463 C 346.089 357.823 348.881 354.695 352.385 352.166 C 356.147 349.452 360.848 347.342 366.357 345.895 C 381.058 342.035 396.759 344.887 411.946 347.646 C 414.481 348.106 417.102 348.582 419.664 349.017 C 442.197 352.836 465.047 354.197 489.523 353.169 C 511.313 352.257 533.89 349.461 558.543 344.623 C 604.318 335.64 650.317 320.82 694.802 306.488 C 718.395 298.887 742.789 291.028 766.74 284.18 C 784.354 279.144 803.156 274.28 822.323 274.99 C 832.166 275.351 841.893 277.363 850.453 280.807 C 859.948 284.627 867.924 290.085 874.16 297.029 C 889.815 314.458 892.679 339.03 892.323 356.575 C 892.103 367.412 890.779 378.313 889.498 388.855 C 888.29 398.796 887.042 409.076 886.721 419.285 C 885.414 460.907 899.917 503.581 926.513 536.365 C 931.656 542.705 937.394 548.917 942.943 554.923 C 950.558 563.166 958.433 571.69 964.909 580.692 C 972.174 590.791 976.862 600.428 979.242 610.155 C 983.68 628.291 979.917 646.968 976.143 661.214 C 971.754 677.782 965.665 694.521 958.048 710.965 C 950.993 726.194 942.383 741.696 932.453 757.038 C 915.39 783.404 893.823 810.372 866.521 839.482 C 842.193 865.421 814.229 892.355 781.034 921.823 C 751.365 948.161 720.509 973.91 690.669 998.81 C 665.315 1019.968 639.097 1041.846 609.567 1057.926 C 599.999 1063.135 588.662 1068.407 576.694 1068.407 Z M 382.072 344.116 C 376.761 344.116 371.511 344.644 366.383 345.992 C 360.886 347.435 356.196 349.54 352.445 352.247 C 348.953 354.768 346.171 357.884 344.176 361.511 C 340.82 367.613 339.566 375.143 340.345 384.529 C 340.954 391.883 342.771 400.121 346.061 410.452 C 351.668 428.062 354.809 442.387 355.945 455.534 C 356.636 463.544 356.555 471.189 355.702 478.258 C 354.764 486.033 352.856 493.416 350.034 500.199 C 347.977 505.143 345.365 509.912 342.838 514.524 C 339.468 520.676 335.983 527.039 333.793 533.872 C 329.164 548.32 330.041 564.46 336.475 583.212 C 342.008 599.337 350.729 615.013 359.934 630.988 C 424.508 743.057 475.155 862.731 510.467 986.686 C 510.711 987.541 510.954 988.397 511.197 989.253 C 516.027 1006.255 521.021 1023.835 530.66 1038.883 C 535.928 1047.108 542.623 1054.164 550.018 1059.29 C 553.953 1062.017 558.042 1064.162 562.176 1065.668 C 566.56 1067.265 571.01 1068.146 575.404 1068.286 C 575.835 1068.3 576.263 1068.307 576.693 1068.307 C 588.641 1068.307 599.963 1063.041 609.518 1057.838 C 639.038 1041.763 665.25 1019.888 690.602 998.734 C 750.36 948.867 812.153 897.301 866.446 839.414 C 893.744 810.308 915.307 783.345 932.367 756.984 C 942.294 741.645 950.903 726.148 957.956 710.923 C 965.57 694.484 971.656 677.751 976.044 661.189 C 979.815 646.955 983.575 628.293 979.143 610.179 C 976.768 600.465 972.083 590.839 964.826 580.75 C 958.354 571.754 950.482 563.232 942.87 554.991 C 937.32 548.983 931.58 542.77 926.433 536.428 C 899.823 503.626 885.311 460.928 886.62 419.282 C 886.94 409.069 888.189 398.787 889.397 388.843 C 890.677 378.304 892 367.405 892.221 356.574 C 892.578 339.048 889.718 314.502 874.084 297.096 C 867.857 290.164 859.893 284.715 850.414 280.901 C 841.865 277.461 832.148 275.452 822.317 275.09 C 821.066 275.044 819.815 275.022 818.568 275.022 C 800.714 275.022 783.222 279.572 766.765 284.277 C 742.818 291.125 718.422 298.984 694.83 306.585 C 650.344 320.918 604.342 335.738 558.56 344.723 C 533.902 349.562 511.321 352.358 489.525 353.271 C 465.04 354.292 442.185 352.937 419.644 349.117 C 417.081 348.682 414.461 348.206 411.926 347.746 C 402.055 345.95 391.961 344.116 382.072 344.116 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 576.42 1073.792 C 567.371 1073.792 558.345 1071.972 549.528 1068.365 C 540.156 1064.53 531.263 1058.679 523.812 1051.445 C 518.34 1046.121 513.258 1040.043 508.28 1032.863 C 505.134 1028.343 502.887 1024.644 500.996 1020.869 C 497.491 1013.867 495.444 1005.796 493.464 997.99 C 493.318 997.414 493.171 996.839 493.025 996.266 C 483.638 959.432 471.965 923.898 460.749 890.985 C 445.581 846.481 429.984 806.387 413.069 768.414 C 394.484 726.699 372.488 683.738 345.823 637.077 C 337.623 622.728 328.437 605.969 323.222 588.637 C 319.735 577.047 318.003 565.505 318.076 554.332 C 318.15 542.93 320.103 531.543 323.885 520.488 C 324.865 517.625 326.033 514.596 327.564 510.956 C 330.446 504.098 333.799 497.314 337.042 490.752 C 338.842 487.112 340.703 483.348 342.464 479.61 C 355.743 451.417 350.591 419.436 343.799 391.87 C 340.214 377.183 337.123 358.649 345.124 345.571 C 347.323 341.975 350.302 338.905 353.978 336.445 C 357.934 333.797 362.825 331.768 368.516 330.416 C 383.627 326.824 399.72 329.872 415.284 332.819 C 417.764 333.289 420.331 333.775 422.839 334.223 C 443.685 337.945 464.742 339.8 487.214 339.894 C 487.806 339.896 488.401 339.897 488.995 339.897 C 508.641 339.897 528.852 338.543 550.716 335.765 C 584.659 331.452 620.464 323.509 666.805 310.011 C 682.954 305.259 699.319 300.167 715.143 295.243 C 735.205 289.001 755.948 282.546 776.304 276.771 C 782.615 274.98 790.074 272.923 797.537 271.244 C 809.651 268.52 819.974 267.224 829.697 267.224 C 830.805 267.224 831.904 267.242 832.998 267.275 C 843.141 267.577 853.106 269.561 861.813 273.012 C 871.515 276.857 879.618 282.412 885.899 289.524 C 901.706 307.479 903.498 332.793 902.216 350.867 C 901.513 360.781 899.877 370.766 898.295 380.424 C 896.46 391.617 894.564 403.192 894.082 414.823 C 893.235 435.456 896.814 456.719 904.72 478.019 C 908.428 488.009 913.088 497.951 918.57 507.566 C 923.909 516.93 930.055 526.036 936.839 534.631 C 940.719 539.555 944.865 544.441 948.878 549.167 C 952.153 553.024 955.539 557.015 958.74 560.979 C 963.852 567.265 970.383 575.649 975.56 584.76 C 980.67 593.755 983.924 602.456 985.505 611.362 C 986.909 619.248 987.026 627.799 985.859 637.502 C 984.743 646.794 982.609 655.862 980.67 663.508 C 973.355 692.185 964.033 717.504 952.167 740.91 C 942.922 759.133 931.256 777.761 917.49 796.278 C 905.247 812.748 890.911 829.704 874.881 846.675 C 856.066 866.633 835.403 886.627 811.711 907.8 C 792.344 925.109 771.051 943.132 744.7 964.521 C 733.831 973.347 722.72 982.245 711.974 990.848 C 706.774 995.011 701.398 999.317 696.115 1003.561 C 694.885 1004.549 693.654 1005.539 692.422 1006.529 C 686.832 1011.022 681.053 1015.669 675.325 1020.2 C 656.69 1034.939 636.401 1050.269 614.328 1062.543 C 601.935 1069.434 590.801 1073.077 580.289 1073.68 C 578.999 1073.754 577.708 1073.792 576.42 1073.792 Z M 383.447 328.888 C 378.408 328.888 373.423 329.354 368.54 330.514 C 362.861 331.864 357.979 333.887 354.034 336.529 C 350.371 338.981 347.401 342.041 345.21 345.624 C 337.228 358.671 340.315 377.18 343.897 391.848 C 350.693 419.431 355.848 451.433 342.553 479.655 C 340.793 483.392 338.932 487.157 337.132 490.799 C 333.889 497.358 330.536 504.142 327.655 510.997 C 326.126 514.635 324.958 517.662 323.978 520.523 C 320.201 531.567 318.249 542.943 318.175 554.335 C 318.103 565.498 319.833 577.029 323.318 588.609 C 328.53 605.93 337.711 622.684 345.909 637.029 C 372.576 683.693 394.573 726.656 413.16 768.374 C 430.076 806.351 445.673 846.447 460.841 890.953 C 472.06 923.869 483.736 959.406 493.122 996.242 C 493.267 996.815 493.414 997.39 493.56 997.966 C 495.539 1005.768 497.585 1013.834 501.086 1020.825 C 502.974 1024.596 505.219 1028.291 508.362 1032.807 C 513.338 1039.982 518.414 1046.055 523.881 1051.373 C 531.322 1058.6 540.204 1064.443 549.565 1068.272 C 559.623 1072.386 569.958 1074.17 580.281 1073.581 C 590.779 1072.978 601.898 1069.34 614.278 1062.456 C 636.346 1050.186 656.63 1034.859 675.26 1020.123 C 680.99 1015.592 686.768 1010.945 692.359 1006.452 C 693.59 1005.463 694.822 1004.473 696.052 1003.484 C 701.335 999.24 706.711 994.934 711.911 990.771 C 722.656 982.167 733.766 973.271 744.635 964.444 C 770.984 943.056 792.276 925.035 811.643 907.727 C 835.332 886.555 855.993 866.563 874.807 846.608 C 890.834 829.638 905.167 812.685 917.409 796.219 C 931.172 777.706 942.836 759.082 952.076 740.866 C 963.938 717.466 973.26 692.153 980.571 663.483 C 982.51 655.841 984.643 646.777 985.759 637.491 C 986.924 627.798 986.809 619.257 985.407 611.381 C 983.826 602.486 980.578 593.795 975.474 584.811 C 970.299 575.705 963.771 567.326 958.66 561.042 C 955.461 557.079 952.076 553.09 948.8 549.232 C 944.788 544.505 940.64 539.619 936.76 534.694 C 929.974 526.094 923.823 516.985 918.483 507.617 C 912.998 497.997 908.336 488.051 904.628 478.055 C 896.718 456.741 893.136 435.465 893.983 414.82 C 894.464 403.182 896.362 391.604 898.198 380.408 C 899.779 370.754 901.414 360.771 902.117 350.86 C 903.396 332.805 901.609 307.52 885.826 289.591 C 879.554 282.491 871.464 276.944 861.776 273.106 C 853.079 269.659 843.128 267.677 832.995 267.376 C 822.309 267.052 811.046 268.311 797.559 271.343 C 790.098 273.022 782.641 275.078 776.331 276.868 C 755.976 282.642 735.232 289.097 715.172 295.34 C 699.347 300.264 682.984 305.357 666.833 310.108 C 620.486 323.608 584.679 331.552 550.729 335.866 C 528.862 338.644 508.645 339.999 488.996 339.999 C 488.4 339.999 487.809 339.998 487.214 339.995 C 464.737 339.901 443.674 338.046 422.822 334.322 C 420.313 333.874 417.747 333.388 415.266 332.919 C 404.744 330.926 393.98 328.888 383.447 328.888 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 572.047 1079.51 C 552.344 1079.51 533.396 1074.034 517.594 1063.612 C 510.287 1058.778 503.389 1053.142 496.502 1046.383 C 492.982 1042.945 489.289 1039.09 486.128 1034.218 C 481.07 1026.421 478.803 1016.62 476.611 1007.143 C 476.482 1006.587 476.354 1006.033 476.225 1005.481 C 467.857 969.483 456.414 933.738 445.349 899.169 C 430.034 851.315 415.508 811.931 399.637 775.225 C 382.361 735.29 360.977 693.204 332.343 642.78 C 322.11 624.759 312.025 605.36 307.565 585.61 C 304.619 572.562 303.879 559.557 305.305 545.852 C 306.591 533.496 309.637 520.723 314.617 506.801 C 315.917 503.167 317.307 499.594 318.86 495.634 C 323.837 482.949 329.445 470.531 335.528 458.725 C 342.037 446.093 345.432 431.925 345.909 415.41 C 346.344 400.382 344.266 385.499 342.177 372.923 C 340.412 362.294 338.871 348.647 342.662 337.369 C 344.565 331.708 347.715 326.981 352.023 323.318 C 356.841 319.223 363.299 316.291 371.216 314.602 C 386.77 311.289 403.264 314.535 419.216 317.673 C 421.625 318.148 424.116 318.638 426.552 319.095 C 447.711 323.058 469.1 325.341 491.941 326.073 C 512.375 326.729 533.422 326.118 556.28 324.205 C 575.537 322.593 594.805 319.9 615.185 315.974 C 633.582 312.43 652.992 307.848 674.523 301.969 C 694.867 296.412 715.435 290.176 735.326 284.146 C 752.081 279.066 769.406 273.813 786.409 269.027 C 793.2 267.116 800.523 265.111 808.067 263.4 C 820.671 260.545 831.373 259.191 841.471 259.191 C 842.391 259.191 843.304 259.203 844.215 259.225 C 854.66 259.468 864.861 261.424 873.714 264.882 C 883.622 268.752 891.855 274.405 898.182 281.685 C 914.182 300.206 914.883 326.243 912.654 344.823 C 911.551 354.012 909.638 363.273 907.789 372.229 C 905.26 384.476 902.642 397.14 901.988 410.027 C 899.532 458.956 925.497 503.669 947.711 532.563 C 950.422 536.103 953.237 539.654 955.958 543.088 C 960.396 548.686 964.983 554.474 969.143 560.24 C 975.929 569.649 980.749 577.521 984.31 585.013 C 988.661 594.171 991.281 603.074 992.315 612.233 C 994.344 630.089 989.774 648.882 985.743 665.464 C 979.468 691.009 972.024 718.283 960.154 744.655 C 943.908 780.693 918.214 817.325 883.787 853.532 C 864.824 873.541 843.903 893.423 819.829 914.311 C 800.059 931.465 778.372 949.137 751.578 969.925 C 742.62 976.884 733.466 983.898 724.612 990.68 C 717.229 996.336 709.595 1002.184 702.107 1007.975 C 698.886 1010.464 695.613 1013.006 692.445 1015.464 C 688.697 1018.373 684.82 1021.381 680.995 1024.334 C 661.942 1039.024 641.51 1054.406 619.633 1066.821 C 608.341 1073.228 596.931 1077.203 585.719 1078.634 C 581.141 1079.221 576.574 1079.51 572.047 1079.51 Z M 335.574 458.748 L 335.618 458.77 C 329.537 470.575 323.93 482.99 318.955 495.671 C 317.402 499.63 316.012 503.202 314.712 506.834 C 309.735 520.748 306.691 533.515 305.406 545.862 C 303.981 559.556 304.719 572.55 307.664 585.588 C 312.121 605.324 322.202 624.715 332.431 642.731 C 361.068 693.159 382.452 735.248 399.731 775.186 C 415.603 811.894 430.129 851.282 445.447 899.138 C 456.512 933.709 467.955 969.456 476.325 1005.457 C 476.453 1006.01 476.582 1006.564 476.71 1007.12 C 478.9 1016.59 481.165 1026.381 486.214 1034.163 C 489.369 1039.027 493.059 1042.876 496.574 1046.31 C 503.456 1053.065 510.35 1058.697 517.65 1063.527 C 537.06 1076.333 561.229 1081.664 585.708 1078.537 C 596.908 1077.107 608.305 1073.137 619.586 1066.735 C 641.458 1054.324 661.887 1038.945 680.937 1024.256 C 684.762 1021.304 688.638 1018.296 692.385 1015.387 C 695.554 1012.929 698.828 1010.387 702.049 1007.898 C 709.537 1002.107 717.171 996.258 724.554 990.603 C 733.407 983.821 742.56 976.807 751.521 969.849 C 778.313 949.061 799.997 931.39 819.766 914.238 C 843.837 893.351 864.756 873.472 883.717 853.466 C 918.136 817.267 943.823 780.645 960.065 744.616 C 971.934 718.251 979.375 690.982 985.648 665.442 C 989.677 648.868 994.245 630.083 992.217 612.246 C 991.184 603.098 988.57 594.205 984.221 585.057 C 980.662 577.57 975.848 569.704 969.065 560.299 C 964.908 554.534 960.32 548.747 955.883 543.151 C 953.161 539.715 950.346 536.165 947.633 532.624 C 925.409 503.717 899.435 458.982 901.893 410.022 C 902.547 397.128 905.164 384.46 907.695 372.209 C 909.544 363.255 911.457 353.996 912.558 344.811 C 914.785 326.251 914.086 300.245 898.11 281.752 C 891.794 274.483 883.576 268.84 873.682 264.977 C 864.839 261.523 854.651 259.569 844.217 259.326 C 833.307 259.058 821.836 260.385 808.091 263.499 C 800.55 265.21 793.229 267.214 786.44 269.124 C 769.437 273.911 752.113 279.163 735.359 284.243 C 715.468 290.274 694.9 296.511 674.552 302.066 C 653.018 307.947 633.607 312.529 615.208 316.074 C 594.823 320.002 575.552 322.694 556.292 324.306 C 533.432 326.219 512.379 326.829 491.941 326.175 C 469.094 325.442 447.701 323.158 426.538 319.194 C 424.1 318.737 421.609 318.247 419.2 317.773 C 403.256 314.635 386.767 311.39 371.241 314.701 C 363.34 316.386 356.896 319.311 352.092 323.395 C 347.797 327.045 344.658 331.758 342.761 337.402 C 338.977 348.659 340.516 362.29 342.279 372.908 C 344.368 385.488 346.446 400.377 346.012 415.413 C 345.533 431.944 342.135 446.127 335.619 458.771 L 335.574 458.748 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 562.328 1085.802 C 558.117 1085.802 553.974 1085.618 549.906 1085.248 C 536.135 1083.996 523.286 1080.619 511.716 1075.21 C 502.532 1070.9 493.815 1065.707 485.066 1059.333 C 479.707 1055.452 475.366 1051.869 471.6 1047 C 464.961 1038.415 462.493 1026.868 460.105 1015.7 C 459.993 1015.176 459.88 1014.652 459.768 1014.131 C 452.743 981.415 442.956 948.887 433.492 917.43 C 432.426 913.881 431.358 910.334 430.296 906.788 C 415.016 855.806 401.525 817.156 386.549 781.472 C 377.548 760.039 367.19 737.912 354.878 713.825 C 344.75 694.007 333.415 673.064 319.207 647.918 C 307.513 627.219 296.154 604.909 292.253 582.02 C 289.801 567.63 290.003 552.842 292.875 536.811 C 295.176 523.962 299.13 510.311 305.693 492.548 C 306.552 490.222 307.44 487.873 308.298 485.602 C 309.025 483.683 309.776 481.699 310.5 479.749 C 315.955 465.079 321.471 450.792 328.936 437.275 C 335.831 424.791 339.919 410.82 341.435 394.564 C 342.806 379.867 341.878 365.615 340.901 353.41 C 340.03 342.531 339.75 329.996 344.293 319.509 C 346.615 314.148 350.092 309.694 354.626 306.27 C 359.698 302.44 366.306 299.733 374.264 298.225 C 390.267 295.192 407.184 298.642 423.544 301.979 C 425.865 302.453 428.267 302.942 430.615 303.403 C 452.089 307.606 473.809 310.319 497.019 311.696 C 517.694 312.923 539.012 313.048 562.192 312.082 C 582.158 311.25 601.713 309.283 621.976 306.069 C 641.043 303.046 660.868 298.889 682.583 293.362 C 706.076 287.383 729.783 280.355 752.71 273.558 C 767.19 269.264 782.164 264.826 796.859 260.719 C 803.801 258.779 811.282 256.742 818.942 254.992 C 831.892 252.036 843.292 250.592 853.706 250.592 C 854.401 250.592 855.091 250.599 855.779 250.612 C 866.524 250.796 876.962 252.724 885.962 256.189 C 896.076 260.083 904.437 265.834 910.81 273.283 C 927.038 292.404 926.633 319.147 923.435 338.215 C 921.993 346.822 919.831 355.5 917.74 363.892 C 914.464 377.047 911.074 390.651 910.238 404.667 C 909.601 415.491 910.486 426.765 912.868 438.173 C 915.053 448.64 918.565 459.531 923.305 470.543 C 931.378 489.303 943.03 508.729 958.927 529.931 C 960.4 531.905 961.902 533.9 963.355 535.828 C 969.028 543.356 974.893 551.141 979.893 558.94 C 986.01 568.485 990.307 576.668 993.414 584.696 C 997.011 593.985 998.99 603.094 999.466 612.544 C 1000.281 628.402 996.355 644.941 992.558 660.933 C 992.097 662.878 991.62 664.888 991.159 666.862 C 990.389 670.116 989.622 673.39 988.881 676.556 C 983.051 701.461 977.544 724.986 968.484 747.841 C 960.763 767.275 950.031 787.066 936.584 806.664 C 924.266 824.618 909.615 842.506 893.036 859.829 C 873.93 879.888 852.75 899.655 828.292 920.263 C 808.128 937.251 786.047 954.573 758.802 974.772 C 750.805 980.71 742.633 986.694 734.731 992.479 C 726.103 998.795 717.182 1005.327 708.445 1011.831 C 702.175 1016.495 695.803 1021.291 689.64 1025.929 L 687.008 1027.909 C 667.399 1042.652 647.124 1057.897 625.281 1070.542 C 614.784 1076.62 603.416 1080.822 591.491 1083.032 C 581.526 1084.875 571.762 1085.802 562.328 1085.802 Z M 387.465 297.154 C 383.022 297.154 378.616 297.5 374.28 298.321 C 366.337 299.827 359.745 302.527 354.685 306.347 C 350.165 309.761 346.698 314.202 344.383 319.547 C 339.849 330.014 340.128 342.533 340.997 353.4 C 341.975 365.609 342.905 379.866 341.533 394.571 C 340.016 410.842 335.923 424.825 329.021 437.322 C 321.559 450.833 316.046 465.116 310.591 479.782 C 309.866 481.732 309.116 483.717 308.389 485.635 C 307.531 487.907 306.643 490.255 305.784 492.581 C 299.223 510.337 295.27 523.983 292.97 536.826 C 290.102 552.847 289.898 567.623 292.349 582 C 296.247 604.875 307.603 627.176 319.293 647.867 C 333.501 673.014 344.836 693.958 354.965 713.777 C 367.277 737.867 377.636 759.997 386.638 781.431 C 401.615 817.119 415.108 855.772 430.389 906.757 C 431.452 910.304 432.519 913.851 433.587 917.399 C 443.051 948.859 452.837 981.389 459.863 1014.108 C 459.975 1014.629 460.087 1015.153 460.199 1015.678 C 462.585 1026.834 465.052 1038.37 471.678 1046.938 C 475.435 1051.797 479.77 1055.375 485.122 1059.251 C 493.866 1065.621 502.578 1070.811 511.757 1075.118 C 523.317 1080.521 536.154 1083.895 549.914 1085.146 C 563.087 1086.343 577.069 1085.596 591.471 1082.927 C 603.384 1080.719 614.74 1076.521 625.227 1070.448 C 647.065 1057.805 667.339 1042.562 686.945 1027.821 L 689.578 1025.841 C 695.74 1021.203 702.112 1016.407 708.383 1011.743 C 717.12 1005.238 726.042 998.707 734.669 992.391 C 742.572 986.605 750.742 980.622 758.74 974.684 C 785.983 954.486 808.063 937.166 828.224 920.179 C 852.68 899.574 873.857 879.808 892.961 859.753 C 909.535 842.433 924.185 824.55 936.5 806.6 C 949.94 787.008 960.671 767.223 968.388 747.796 C 977.445 724.947 982.953 701.427 988.781 676.525 C 989.523 673.359 990.289 670.085 991.058 666.83 C 991.518 664.857 991.996 662.847 992.457 660.902 C 996.252 644.916 1000.177 628.385 999.362 612.542 C 998.886 603.102 996.909 594.003 993.316 584.725 C 990.21 576.704 985.917 568.526 979.803 558.988 C 974.806 551.191 968.943 543.408 963.271 535.882 C 961.818 533.952 960.315 531.958 958.841 529.984 C 942.94 508.775 931.283 489.342 923.207 470.576 C 918.465 459.557 914.952 448.659 912.766 438.186 C 910.383 426.769 909.496 415.487 910.134 404.654 C 910.97 390.629 914.361 377.02 917.639 363.86 C 919.729 355.47 921.891 346.795 923.333 338.192 C 926.526 319.144 926.932 292.432 910.729 273.34 C 904.368 265.904 896.021 260.162 885.922 256.275 C 876.933 252.815 866.508 250.888 855.773 250.705 C 844.812 250.504 832.769 251.933 818.96 255.084 C 811.303 256.834 803.823 258.87 796.883 260.81 C 782.188 264.916 767.214 269.356 752.734 273.649 C 729.807 280.446 706.1 287.475 682.606 293.455 C 660.886 298.982 641.057 303.139 621.987 306.163 C 601.72 309.378 582.161 311.345 562.192 312.177 C 539.009 313.144 517.687 313.017 497.009 311.791 C 473.794 310.414 452.069 307.701 430.591 303.496 C 428.241 303.036 425.84 302.546 423.518 302.072 C 411.607 299.644 399.398 297.154 387.465 297.154 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 549.232 1092.793 C 533.672 1092.793 519.12 1090.547 505.958 1086.113 C 495.038 1082.416 484.202 1077.529 473.749 1071.588 C 468.403 1068.569 462.275 1064.864 457.192 1059.087 C 453.498 1054.888 450.588 1049.462 448.297 1042.498 C 446.273 1036.349 444.968 1029.8 443.705 1023.466 L 443.43 1022.084 C 437.243 991.155 428.535 960.363 420.115 930.586 C 418.551 925.054 416.933 919.334 415.36 913.711 C 404.711 875.653 391.421 830.841 373.579 787.023 C 354.241 739.575 329.762 694.26 306.189 652.359 C 293.022 628.953 280.379 603.712 277.057 577.732 C 275.98 569.311 275.796 560.906 276.494 552.038 C 277.121 544.075 278.451 535.909 280.558 527.074 C 284.361 511.14 289.961 495.886 296.885 477.598 L 297.525 475.91 C 299.109 471.734 300.746 467.417 302.26 463.164 C 302.76 461.761 303.257 460.356 303.754 458.952 C 308.981 444.203 314.384 428.952 322.463 415.128 C 329.683 402.773 334.45 388.992 337.037 372.999 C 339.217 359.525 339.56 346.483 339.741 333.197 C 339.883 322.742 340.743 310.734 346.042 300.953 C 351.885 290.17 362.15 283.691 377.426 281.147 C 393.907 278.406 411.262 282.063 428.043 285.602 C 430.259 286.07 432.55 286.553 434.792 287.011 C 456.582 291.454 478.637 294.599 502.217 296.623 C 522.863 298.396 544.169 299.258 567.318 299.258 C 567.619 299.258 567.919 299.258 568.219 299.258 C 608.751 299.218 646.545 294.529 690.763 284.055 C 717 277.84 743.43 270.154 768.989 262.719 C 781.596 259.052 794.633 255.26 807.428 251.71 C 814.535 249.738 822.18 247.668 829.934 245.884 C 843.37 242.794 855.174 241.287 865.951 241.287 C 866.457 241.287 866.959 241.29 867.461 241.297 C 878.682 241.423 889.072 243.268 898.344 246.781 C 908.677 250.697 917.159 256.551 923.555 264.177 C 940.055 283.855 938.526 311.324 934.337 330.905 C 932.598 339.034 930.211 347.232 927.901 355.16 C 923.836 369.116 919.63 383.548 918.607 398.603 C 917.868 409.64 918.833 421.166 921.474 432.861 C 923.854 443.403 927.694 454.492 932.886 465.82 C 943.449 488.864 958.409 510.405 970.26 526.596 L 971.006 527.62 C 978.26 537.585 985.112 546.996 990.758 556.936 C 996.186 566.489 1000.073 575.234 1002.638 583.67 C 1005.495 593.064 1006.836 602.38 1006.737 612.148 C 1006.612 626.244 1003.049 640.974 999.604 655.218 C 998.625 659.26 997.615 663.44 996.695 667.551 C 994.721 676.217 992.965 684.791 991.268 693.084 C 987.2 712.955 983.357 731.725 976.933 750.318 C 970.001 770.323 959.737 790.696 946.422 810.87 C 934.126 829.502 919.316 847.855 902.404 865.419 C 883.152 885.524 861.716 905.18 836.873 925.506 C 816.315 942.324 793.842 959.294 766.145 978.909 C 758.686 984.2 751.066 989.527 743.698 994.679 C 734.24 1001.29 724.461 1008.128 714.898 1014.977 C 708.596 1019.487 701.682 1024.507 693.14 1030.775 C 691.282 1032.137 689.424 1033.502 687.568 1034.867 C 669.442 1048.182 650.698 1061.952 631.047 1073.554 C 621.224 1079.355 609.898 1083.784 597.383 1086.722 C 580.653 1090.647 564.829 1092.688 550.354 1092.787 C 549.98 1092.792 549.604 1092.793 549.232 1092.793 Z M 389.665 280.288 C 385.552 280.288 381.473 280.575 377.441 281.247 C 362.199 283.785 351.957 290.246 346.129 301.001 C 340.84 310.763 339.983 322.756 339.84 333.199 C 339.659 346.489 339.316 359.535 337.135 373.015 C 334.546 389.02 329.775 402.812 322.548 415.178 C 314.474 428.994 309.072 444.241 303.848 458.985 C 303.351 460.389 302.853 461.794 302.353 463.197 C 300.838 467.451 299.202 471.769 297.618 475.945 L 296.978 477.633 C 290.054 495.917 284.456 511.168 280.655 527.097 C 278.548 535.927 277.219 544.088 276.593 552.045 C 275.895 560.906 276.079 569.305 277.156 577.719 C 280.475 603.681 293.113 628.911 306.276 652.31 C 329.849 694.213 354.33 739.532 373.67 786.986 C 391.514 830.808 404.806 875.625 415.455 913.684 C 417.029 919.307 418.646 925.027 420.211 930.559 C 428.632 960.338 437.34 991.132 443.527 1022.065 L 443.803 1023.447 C 446.371 1036.333 449.027 1049.656 457.265 1059.021 C 462.338 1064.788 468.458 1068.486 473.796 1071.5 C 484.244 1077.438 495.074 1082.323 505.987 1086.019 C 519.138 1090.449 533.682 1092.694 549.229 1092.694 C 549.604 1092.694 549.977 1092.693 550.352 1092.69 C 564.82 1092.589 580.634 1090.549 597.357 1086.627 C 609.863 1083.692 621.18 1079.266 630.995 1073.471 C 650.641 1061.872 669.383 1048.104 687.507 1034.789 C 689.364 1033.425 691.222 1032.06 693.08 1030.698 C 701.622 1024.429 708.536 1019.409 714.839 1014.898 C 724.401 1008.049 734.182 1001.212 743.64 994.6 C 751.008 989.449 758.627 984.122 766.085 978.83 C 793.78 959.217 816.252 942.249 836.808 925.432 C 861.649 905.108 883.081 885.455 902.331 865.353 C 919.238 847.793 934.044 829.446 946.339 810.818 C 959.648 790.651 969.909 770.286 976.839 750.289 C 983.26 731.702 987.102 712.936 991.169 693.068 C 992.866 684.774 994.622 676.199 996.596 667.533 C 997.516 663.42 998.527 659.24 999.505 655.198 C 1002.948 640.959 1006.51 626.235 1006.635 612.15 C 1006.735 602.391 1005.395 593.087 1002.54 583.702 C 999.977 575.272 996.094 566.534 990.67 556.987 C 985.026 547.052 978.177 537.642 970.924 527.68 L 970.18 526.656 C 958.323 510.461 943.362 488.915 932.794 465.863 C 927.599 454.528 923.757 443.432 921.375 432.884 C 918.731 421.18 917.766 409.645 918.506 398.599 C 919.53 383.532 923.736 369.095 927.803 355.133 C 930.113 347.207 932.5 339.011 934.24 330.885 C 938.424 311.327 939.953 283.89 923.479 264.243 C 917.094 256.629 908.625 250.786 898.307 246.876 C 889.047 243.366 878.667 241.524 867.458 241.398 C 866.958 241.391 866.455 241.388 865.951 241.388 C 855.18 241.388 843.386 242.895 829.956 245.983 C 822.204 247.767 814.561 249.837 807.455 251.807 C 794.66 255.358 781.623 259.149 769.016 262.816 C 743.456 270.251 717.024 277.938 690.786 284.154 C 646.56 294.63 608.759 299.319 568.219 299.359 C 567.919 299.36 567.617 299.36 567.318 299.36 C 544.166 299.36 522.86 298.497 502.209 296.724 C 478.625 294.7 456.566 291.554 434.774 287.11 C 432.531 286.652 430.24 286.169 428.024 285.702 C 415.355 283.029 402.361 280.288 389.665 280.288 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 535.253 1100.417 C 522.846 1100.417 511.266 1099.083 500.165 1096.392 C 487.38 1093.273 474.674 1088.84 462.4 1083.219 C 456.036 1080.323 448.745 1076.718 442.751 1070.551 C 438.323 1065.992 434.904 1059.951 432.298 1052.08 C 430.001 1045.14 428.613 1037.716 427.271 1030.536 L 427.061 1029.416 C 421.499 999.728 413.65 970.127 406.057 941.5 C 404.189 934.455 402.258 927.172 400.395 920.012 C 395.758 902.2 389.533 878.772 382.479 855.505 C 375.378 832.073 368.213 811.284 360.577 791.951 C 341.435 743.539 315.732 696.483 293.141 656.177 C 278.495 630.046 264.565 601.862 261.831 572.821 C 261.032 564.329 261.111 555.85 262.072 546.899 C 262.931 538.9 264.482 530.685 266.815 521.785 C 271.159 505.218 277.424 489.212 284.057 472.267 C 285.368 468.918 286.723 465.456 288.047 462.027 C 290.02 456.917 292.106 451.432 293.987 445.957 C 294.914 443.262 295.838 440.514 296.731 437.857 C 301.907 422.466 307.258 406.553 315.958 392.359 C 323.275 380.421 328.622 367.206 332.305 351.958 C 335.505 338.697 337 325.776 338.319 314.376 L 338.552 312.365 C 339.774 301.844 341.736 290.855 347.766 281.779 C 354.492 271.656 365.219 265.661 380.56 263.45 C 397.551 261.005 415.368 264.881 432.599 268.63 C 434.681 269.083 436.832 269.552 438.941 269.999 C 461.049 274.685 483.439 278.263 507.387 280.938 C 528.55 283.303 550.411 284.898 574.216 285.815 C 595.568 286.635 615.698 286.124 635.763 284.248 C 655.88 282.366 676.536 279.057 698.914 274.13 C 727.601 267.814 756.453 259.561 784.356 251.579 C 795.379 248.426 806.779 245.165 817.967 242.083 C 825.219 240.084 833.016 237.983 840.897 236.157 C 854.824 232.931 867.036 231.36 878.185 231.36 C 878.496 231.36 878.803 231.361 879.111 231.364 C 890.639 231.429 901.26 233.246 910.679 236.766 C 921.221 240.705 929.83 246.657 936.27 254.454 C 943.536 263.255 947.773 274.335 948.862 287.389 C 949.76 298.162 948.531 310.136 945.207 322.978 C 943.204 330.711 940.607 338.511 938.097 346.053 C 933.211 360.726 928.16 375.899 926.945 391.924 C 925.347 413.288 930.415 435.713 942.438 460.48 C 952.859 481.946 966.892 502.134 981.564 522.644 C 988.688 532.667 996.102 543.369 1001.595 554.317 C 1011.501 574.063 1015.32 591.588 1013.976 611.14 C 1013.125 623.772 1009.918 636.386 1006.525 649.741 C 1005.038 655.591 1003.5 661.641 1002.199 667.63 C 999.664 679.302 997.752 690.755 995.903 701.832 C 992.996 719.249 990.25 735.701 985.351 752.186 C 979.218 772.748 969.42 793.702 956.229 814.465 C 943.976 833.753 929.008 852.571 911.743 870.398 C 892.347 890.551 870.654 910.092 845.424 930.138 C 824.478 946.781 801.609 963.399 773.457 982.435 C 766.352 987.249 759.095 992.091 752.076 996.773 C 741.971 1003.514 731.523 1010.485 721.323 1017.512 C 714.325 1022.329 707.102 1027.406 699.242 1033.031 C 695.435 1035.752 691.575 1038.536 687.843 1041.229 C 671.404 1053.087 654.406 1065.349 636.784 1075.955 C 627.399 1081.605 616.429 1086.134 603.244 1089.799 C 583.814 1095.2 566.65 1098.46 550.77 1099.764 C 545.449 1100.198 540.281 1100.417 535.253 1100.417 Z M 316.003 392.384 L 316.046 392.41 C 307.353 406.594 302.001 422.503 296.827 437.887 C 295.933 440.545 295.01 443.293 294.082 445.99 C 292.201 451.467 290.114 456.951 288.142 462.062 C 286.817 465.493 285.462 468.956 284.151 472.303 C 277.52 489.246 271.255 505.249 266.914 521.811 C 264.581 530.707 263.03 538.917 262.172 546.911 C 261.212 555.855 261.133 564.328 261.932 572.812 C 264.664 601.833 278.59 630.006 293.23 656.128 C 315.822 696.437 341.527 743.496 360.671 791.914 C 368.308 811.25 375.474 832.041 382.576 855.475 C 389.629 878.744 395.855 902.173 400.491 919.986 C 402.355 927.146 404.286 934.429 406.155 941.473 C 413.747 970.102 421.597 999.705 427.16 1029.398 L 427.37 1030.517 C 428.712 1037.693 430.099 1045.114 432.395 1052.048 C 434.995 1059.903 438.406 1065.934 442.824 1070.48 C 448.805 1076.634 456.086 1080.235 462.441 1083.126 C 474.711 1088.746 487.411 1093.176 500.189 1096.293 C 515.779 1100.073 532.32 1101.174 550.762 1099.66 C 566.635 1098.356 583.793 1095.098 603.216 1089.699 C 616.393 1086.036 627.356 1081.511 636.734 1075.865 C 654.351 1065.261 671.346 1053.001 687.784 1041.144 C 691.516 1038.451 695.376 1035.666 699.182 1032.945 C 707.044 1027.32 714.268 1022.244 721.266 1017.426 C 731.466 1010.398 741.914 1003.427 752.021 996.686 C 759.039 992.004 766.296 987.163 773.4 982.349 C 801.55 963.314 824.417 946.698 845.362 930.056 C 870.589 910.013 892.278 890.474 911.671 870.324 C 928.933 852.504 943.896 833.69 956.146 814.408 C 969.332 793.652 979.126 772.707 985.256 752.153 C 990.152 735.676 992.898 719.226 995.805 701.812 C 997.654 690.734 999.566 679.279 1002.102 667.605 C 1003.403 661.616 1004.941 655.565 1006.428 649.713 C 1009.821 636.363 1013.027 623.753 1013.877 611.13 C 1015.22 591.597 1011.404 574.088 1001.506 554.358 C 996.017 543.417 988.605 532.718 981.483 522.699 C 966.809 502.185 952.774 481.993 942.349 460.52 C 930.318 435.737 925.246 413.295 926.846 391.912 C 928.063 375.875 933.115 360.696 938.003 346.018 C 940.513 338.477 943.109 330.679 945.11 322.949 C 954.499 286.682 945.443 265.716 936.194 254.515 C 929.766 246.731 921.171 240.789 910.646 236.856 C 901.238 233.339 890.629 231.524 879.112 231.46 C 878.804 231.458 878.496 231.456 878.187 231.456 C 867.043 231.456 854.841 233.027 840.921 236.251 C 833.041 238.077 825.245 240.178 817.995 242.175 C 806.807 245.258 795.407 248.519 784.384 251.672 C 756.48 259.654 727.625 267.906 698.935 274.224 C 676.555 279.152 655.893 282.461 635.773 284.344 C 615.706 286.221 595.569 286.737 574.213 285.911 C 550.405 284.995 528.542 283.399 507.375 281.034 C 483.423 278.357 461.031 274.779 438.919 270.093 C 436.811 269.646 434.659 269.177 432.577 268.724 C 415.354 264.976 397.548 261.101 380.572 263.546 C 365.261 265.752 354.557 271.733 347.848 281.831 C 341.83 290.89 339.871 301.863 338.651 312.373 L 338.418 314.383 C 337.1 325.786 335.604 338.711 332.401 351.978 C 328.717 367.237 323.367 380.461 316.044 392.409 L 316.003 392.384 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 521.841 1108.494 C 512.284 1108.494 503.133 1107.734 494.243 1106.214 C 479.605 1103.693 465.03 1099.716 450.921 1094.394 C 443.544 1091.63 435.096 1088.131 428.184 1081.558 C 423.001 1076.633 419.065 1069.958 416.146 1061.152 C 413.574 1053.397 412.109 1045.078 410.693 1037.032 L 410.564 1036.294 C 405.514 1007.633 398.418 979.006 391.553 951.321 C 389.484 942.973 387.344 934.342 385.297 925.857 C 375.214 884.043 363.984 839.605 347.447 796.424 C 339.202 774.924 328.995 752.207 316.244 726.977 C 305.305 705.331 293.829 684.363 279.963 659.541 C 263.835 630.669 248.615 599.53 246.477 567.457 C 245.9 558.811 246.2 550.181 247.392 541.074 C 248.456 532.941 250.218 524.597 252.775 515.563 C 257.535 498.755 264.173 482.592 271.202 465.48 C 273.812 459.125 276.512 452.552 279.081 445.998 C 281.859 438.916 283.866 433.456 285.587 428.295 C 286.797 424.675 287.98 420.977 289.124 417.399 C 294.376 400.997 299.806 384.036 309.327 369.132 C 316.472 357.948 322.196 345.704 326.827 331.702 C 330.859 319.512 333.512 307.659 335.852 297.202 C 336.328 295.077 336.777 293.07 337.234 291.072 C 339.533 281.028 342.59 270.574 349.363 262.148 C 356.965 252.69 368.152 247.176 383.564 245.294 C 401.091 243.148 419.401 247.255 437.107 251.224 C 439.028 251.655 441.013 252.1 442.958 252.528 C 484.676 261.689 529.529 268.03 580.084 271.913 C 624.332 275.313 662.27 272.868 706.934 263.744 C 737.881 257.422 768.959 248.662 799.016 240.191 C 808.646 237.477 818.602 234.671 828.375 231.997 C 835.794 229.967 843.756 227.831 851.728 225.971 C 866.159 222.608 878.784 220.971 890.307 220.971 C 890.415 220.971 890.523 220.971 890.631 220.972 C 902.466 220.975 913.318 222.765 922.885 226.293 C 933.633 230.256 942.37 236.305 948.854 244.273 C 956.25 253.363 960.352 264.788 961.044 278.229 C 961.615 289.289 959.898 301.524 955.945 314.591 C 953.705 321.993 950.914 329.459 948.214 336.679 C 942.484 352.001 936.563 367.846 935.151 384.783 C 934.255 395.681 935.216 407.07 938.009 418.633 C 940.516 429.006 944.449 439.603 950.031 451.029 C 960.349 472.151 974.443 492.2 988.07 511.589 C 989.605 513.774 991.193 516.031 992.734 518.235 C 999.855 528.481 1007.154 539.572 1012.298 551.237 C 1020.976 570.916 1023.685 588.937 1021.082 609.67 C 1019.697 620.842 1016.667 631.979 1013.459 643.77 C 1011.376 651.426 1009.223 659.342 1007.57 667.247 C 1004.671 681.117 1002.961 694.659 1001.307 707.755 C 999.312 723.568 997.425 738.505 993.636 753.59 C 988.308 774.698 978.979 796.235 965.904 817.599 C 953.708 837.527 938.583 856.811 920.948 874.915 C 901.409 895.114 879.458 914.543 853.841 934.31 C 832.797 950.548 808.852 967.292 780.635 985.501 C 773.76 989.948 766.735 994.417 759.943 998.738 C 749.315 1005.499 738.326 1012.49 727.615 1019.587 C 720.271 1024.446 712.734 1029.573 705.211 1034.825 C 699.526 1038.788 693.781 1042.875 688.227 1046.827 C 673.419 1057.361 658.109 1068.253 642.391 1077.894 C 633.367 1083.43 622.747 1088.044 608.971 1092.415 C 586.758 1099.462 568.357 1103.884 551.063 1106.329 C 540.856 1107.772 531.156 1108.494 521.841 1108.494 Z M 393.626 244.807 C 390.254 244.807 386.9 244.988 383.574 245.395 C 368.191 247.275 357.025 252.776 349.44 262.212 C 342.68 270.622 339.626 281.064 337.331 291.095 C 336.874 293.093 336.426 295.101 335.949 297.226 C 333.608 307.685 330.955 319.54 326.921 331.736 C 322.288 345.746 316.56 357.997 309.41 369.188 C 299.896 384.08 294.468 401.034 289.219 417.431 C 288.073 421.007 286.891 424.705 285.682 428.327 C 283.96 433.49 281.953 438.952 279.174 446.036 C 276.604 452.59 273.904 459.162 271.293 465.518 C 264.266 482.627 257.629 498.788 252.871 515.59 C 250.315 524.618 248.555 532.958 247.49 541.086 C 246.299 550.186 246 558.81 246.576 567.45 C 248.714 599.503 263.928 630.629 280.051 659.491 C 293.917 684.314 305.395 705.282 316.335 726.931 C 329.087 752.164 339.293 774.884 347.54 796.388 C 364.081 839.574 375.31 884.015 385.395 925.832 C 387.44 934.316 389.58 942.948 391.65 951.296 C 398.513 978.982 405.611 1007.61 410.66 1036.275 L 410.792 1037.014 C 412.207 1045.056 413.672 1053.371 416.24 1061.119 C 419.154 1069.909 423.083 1076.571 428.251 1081.484 C 435.151 1088.044 443.589 1091.538 450.956 1094.298 C 465.06 1099.618 479.629 1103.594 494.262 1106.114 C 511.802 1109.112 530.375 1109.151 551.049 1106.227 C 568.338 1103.782 586.734 1099.362 608.943 1092.316 C 622.711 1087.949 633.323 1083.337 642.339 1077.805 C 658.055 1068.165 673.364 1057.275 688.169 1046.742 C 693.725 1042.79 699.47 1038.703 705.156 1034.739 C 712.679 1029.487 720.216 1024.359 727.56 1019.499 C 738.272 1012.402 749.261 1005.411 759.891 998.65 C 766.682 994.329 773.706 989.86 780.581 985.413 C 808.797 967.206 832.74 950.463 853.781 934.226 C 879.393 914.462 901.341 895.038 920.876 874.84 C 938.506 856.741 953.628 837.463 965.82 817.541 C 978.889 796.186 988.215 774.659 993.54 753.561 C 997.328 738.482 999.214 723.548 1001.209 707.739 C 1002.863 694.64 1004.573 681.096 1007.474 667.223 C 1009.127 659.315 1011.281 651.397 1013.365 643.74 C 1016.571 631.953 1019.601 620.819 1020.984 609.655 C 1023.586 588.94 1020.878 570.935 1012.208 551.275 C 1007.066 539.617 999.771 528.532 992.654 518.289 C 991.112 516.087 989.524 513.828 987.99 511.644 C 974.359 492.252 960.263 472.2 949.941 451.071 C 944.356 439.638 940.422 429.035 937.914 418.655 C 935.118 407.082 934.154 395.683 935.052 384.774 C 936.466 367.822 942.391 351.971 948.121 336.642 C 950.819 329.424 953.61 321.96 955.85 314.56 C 959.8 301.504 961.515 289.282 960.946 278.232 C 960.255 264.813 956.16 253.408 948.777 244.334 C 942.304 236.38 933.582 230.341 922.852 226.385 C 913.295 222.862 902.455 221.072 890.633 221.07 C 890.526 221.07 890.417 221.07 890.31 221.07 C 878.792 221.07 866.177 222.705 851.753 226.067 C 843.781 227.926 835.818 230.062 828.402 232.091 C 818.628 234.766 808.672 237.572 799.042 240.286 C 768.984 248.757 737.904 257.516 706.953 263.84 C 662.279 272.966 624.332 275.408 580.076 272.011 C 529.516 268.128 484.659 261.786 442.936 252.624 C 440.991 252.196 439.004 251.751 437.085 251.32 C 422.749 248.109 408.016 244.807 393.626 244.807 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 508.73 1116.882 C 501.706 1116.882 494.858 1116.494 488.137 1115.722 C 471.65 1113.809 455.203 1110.286 439.255 1105.253 C 430.871 1102.625 421.271 1099.236 413.428 1092.25 C 407.48 1086.952 403.017 1079.628 399.783 1069.859 C 396.938 1061.268 395.405 1052.036 393.921 1043.106 L 393.879 1042.854 C 389.275 1015.132 382.867 987.393 376.672 960.567 C 374.463 951.001 372.179 941.109 370.016 931.387 C 365.346 910.385 360.29 887.999 354.362 865.515 C 347.965 841.259 341.348 820.019 334.132 800.582 C 316.815 754.007 293.303 710.531 266.601 662.589 C 248.992 630.969 232.482 596.871 230.939 561.778 C 230.546 552.84 231.05 543.924 232.482 534.521 C 233.76 526.126 235.756 517.519 238.585 508.208 C 243.845 490.888 251 474.288 258.576 456.714 C 262.375 447.901 266.304 438.789 269.93 429.656 C 272.871 422.253 275.118 416.108 277.002 410.318 C 278.432 405.925 279.809 401.427 281.138 397.079 C 286.516 379.508 292.074 361.339 302.508 345.595 C 309.324 335.312 315.232 324.17 320.566 311.533 C 325.219 300.513 328.83 289.794 332.015 280.337 C 333.297 276.53 334.509 272.936 335.733 269.47 C 339.102 259.925 343.258 250.017 350.781 242.211 C 359.251 233.422 370.896 228.39 386.383 226.827 C 404.491 224.999 423.326 229.342 441.543 233.541 C 443.297 233.945 445.048 234.349 446.794 234.746 C 489.12 244.356 534.58 251.864 585.771 257.698 C 608.788 260.323 628.903 261.238 649.081 260.589 C 670.044 259.911 691.532 257.444 714.77 253.048 C 747.83 246.793 780.982 237.572 813.042 228.655 C 821.425 226.324 830.094 223.913 838.602 221.599 C 846.189 219.535 854.32 217.366 862.378 215.472 C 877.191 211.997 890.141 210.295 901.97 210.267 C 902.163 210.266 902.358 210.265 902.55 210.265 C 914.464 210.265 925.349 212.029 934.909 215.507 C 945.862 219.493 954.725 225.641 961.256 233.779 C 968.784 243.163 972.75 254.931 973.044 268.758 C 973.286 280.115 971.085 292.609 966.501 305.893 C 964.043 313.015 961.069 320.198 958.193 327.144 C 951.602 343.065 944.786 359.527 943.175 377.334 C 942.23 387.919 943.052 398.501 945.69 409.683 C 948.026 419.593 951.734 429.713 957.029 440.62 C 966.826 460.806 980.391 480.141 993.51 498.838 C 996.899 503.668 1000.403 508.663 1003.725 513.512 C 1010.42 523.357 1017.925 535.135 1022.823 547.847 C 1030.37 567.438 1031.969 585.955 1028.01 607.888 C 1026.254 617.712 1023.372 627.482 1020.323 637.825 C 1017.57 647.159 1014.724 656.81 1012.763 666.551 C 1009.646 682.048 1008.366 697.132 1007.128 711.72 C 1005.873 726.513 1004.688 740.486 1001.743 754.683 C 997.225 776.33 988.362 798.446 975.398 820.418 C 963.271 840.975 947.986 860.725 929.972 879.118 C 910.292 899.363 888.083 918.679 862.079 938.167 C 840.654 954.223 816.303 970.605 787.634 988.253 C 780.922 992.395 774.066 996.551 767.434 1000.57 C 756.347 1007.292 744.883 1014.241 733.726 1021.347 C 726.083 1026.209 718.439 1031.242 711 1036.305 C 703.512 1041.396 695.983 1046.699 688.7 1051.828 C 675.454 1061.158 661.757 1070.806 647.812 1079.518 C 636.63 1086.508 624.146 1091.312 614.518 1094.716 C 589.88 1103.426 569.756 1109.118 551.188 1112.63 C 536.174 1115.471 522.132 1116.882 508.73 1116.882 Z M 302.549 345.623 L 302.591 345.65 C 292.164 361.382 286.607 379.545 281.233 397.109 C 279.904 401.459 278.526 405.956 277.097 410.35 C 275.212 416.142 272.965 422.289 270.023 429.694 C 266.395 438.828 262.465 447.941 258.666 456.755 C 251.091 474.326 243.937 490.924 238.678 508.238 C 235.853 517.544 233.858 526.146 232.579 534.536 C 231.148 543.932 230.644 552.843 231.037 561.774 C 232.58 596.846 249.083 630.931 266.688 662.541 C 278.725 684.156 291.46 707.208 303.179 730.487 C 316.037 756.029 326.192 778.946 334.224 800.548 C 341.442 819.988 348.06 841.231 354.457 865.49 C 360.386 887.976 365.441 910.363 370.112 931.366 C 372.275 941.088 374.559 950.979 376.768 960.545 C 382.965 987.373 389.371 1015.114 393.977 1042.839 L 394.017 1043.091 C 395.5 1052.016 397.034 1061.244 399.875 1069.828 C 403.104 1079.579 407.559 1086.89 413.492 1092.176 C 421.32 1099.149 430.909 1102.533 439.282 1105.157 C 455.225 1110.188 471.665 1113.71 488.146 1115.622 C 507.678 1117.868 528.294 1116.858 551.167 1112.533 C 569.73 1109.021 589.85 1103.331 614.482 1094.623 C 624.105 1091.22 636.585 1086.419 647.757 1079.435 C 661.699 1070.723 675.396 1061.076 688.64 1051.747 C 695.922 1046.618 703.453 1041.313 710.94 1036.224 C 718.38 1031.16 726.028 1026.126 733.671 1021.264 C 744.827 1014.157 756.292 1007.206 767.38 1000.486 C 774.011 996.466 780.868 992.31 787.579 988.168 C 816.246 970.523 840.596 954.142 862.018 938.088 C 888.018 918.603 910.222 899.291 929.898 879.049 C 947.907 860.661 963.186 840.918 975.31 820.368 C 988.268 798.405 997.128 776.299 1001.643 754.663 C 1004.586 740.472 1005.771 726.502 1007.026 711.712 C 1008.263 697.122 1009.544 682.035 1012.664 666.532 C 1014.625 656.787 1017.471 647.134 1020.224 637.798 C 1023.273 627.458 1026.153 617.691 1027.91 607.872 C 1031.866 585.958 1030.266 567.457 1022.727 547.884 C 1017.834 535.183 1010.333 523.41 1003.641 513.571 C 1000.32 508.723 996.814 503.728 993.425 498.898 C 980.305 480.198 966.737 460.861 956.936 440.667 C 951.639 429.753 947.927 419.627 945.589 409.71 C 942.951 398.518 942.128 387.926 943.073 377.328 C 944.685 359.507 951.504 343.037 958.097 327.109 C 960.973 320.165 963.948 312.983 966.404 305.863 C 970.983 292.592 973.182 280.109 972.941 268.764 C 972.647 254.959 968.688 243.211 961.174 233.845 C 954.656 225.721 945.806 219.583 934.871 215.605 C 925.321 212.129 914.448 210.369 902.547 210.369 C 902.354 210.369 902.16 210.369 901.966 210.37 C 890.146 210.398 877.203 212.1 862.398 215.573 C 854.341 217.466 846.21 219.636 838.624 221.698 C 830.115 224.012 821.447 226.423 813.064 228.755 C 781.001 237.673 747.846 246.895 714.784 253.15 C 691.541 257.547 670.048 260.015 649.078 260.693 C 628.897 261.348 608.776 260.427 585.755 257.802 C 534.562 251.967 489.098 244.458 446.769 234.848 C 445.022 234.451 443.271 234.047 441.517 233.643 C 423.308 229.446 404.486 225.107 386.389 226.931 C 370.927 228.491 359.302 233.513 350.849 242.285 C 343.34 250.077 339.19 259.973 335.824 269.508 C 334.6 272.973 333.389 276.568 332.107 280.373 C 328.922 289.832 325.31 300.553 320.656 311.577 C 315.318 324.22 309.408 335.366 302.59 345.654 L 302.549 345.623 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 496.653 1125.951 C 491.326 1125.951 486.415 1125.735 481.799 1125.413 C 463.44 1124.111 445.099 1121.04 427.284 1116.283 C 417.85 1113.781 407.047 1110.486 398.212 1103.032 C 383.025 1090.218 379.611 1068.46 376.599 1049.262 C 372.401 1022.513 366.652 995.691 361.094 969.751 C 358.777 958.942 356.383 947.767 354.141 936.782 C 345.772 895.756 336.284 849.256 320.237 804.66 C 302.359 755.052 275.969 707.538 252.685 665.617 C 233.568 631.195 215.746 594.078 214.794 555.893 C 213.829 517.113 229.255 482.88 245.583 446.638 C 250.521 435.68 255.627 424.349 260.203 412.949 C 263.32 405.188 265.815 398.337 267.831 392.004 C 269.452 386.911 270.987 381.684 272.471 376.628 C 278.001 357.788 283.72 338.307 295.158 321.613 C 309.194 301.125 318.078 281.487 325.918 264.162 C 328.599 258.236 331.132 252.639 333.668 247.472 C 342.797 228.88 354.586 210.498 388.965 207.744 C 407.759 206.237 427.206 210.841 446.009 215.294 L 450.516 216.357 C 493.518 226.432 539.572 235.106 591.308 242.873 C 638.901 250.018 676.861 249.688 722.333 241.739 C 757.385 235.612 792.498 225.961 826.455 216.627 C 833.818 214.603 841.172 212.581 848.518 210.597 C 856.266 208.503 864.561 206.299 872.732 204.369 C 887.824 200.808 901.029 199.034 913.102 198.947 C 939.825 198.709 961.375 207.167 973.766 222.822 C 992.574 246.584 984.008 279.573 977.227 297.122 C 974.563 304.016 971.412 310.963 968.367 317.681 C 960.911 334.126 953.201 351.131 951.396 369.705 C 947.292 412.445 974.223 450.54 1000.268 487.381 C 1005.147 494.282 1010.193 501.419 1014.844 508.349 C 1024.181 522.361 1029.941 533.389 1033.521 544.11 C 1040.056 563.684 1040.548 582.765 1035.12 605.979 C 1033.125 614.574 1030.387 623.088 1027.487 632.102 C 1023.986 642.984 1020.366 654.235 1018.141 665.714 C 1014.896 682.464 1014.185 698.75 1013.498 714.501 C 1012.881 728.633 1012.299 741.982 1010.039 755.621 C 1002.815 798.867 977.613 844.24 939.076 883.384 C 902.676 920.646 858.126 953.877 794.63 991.131 C 788.031 995.014 781.288 998.905 774.769 1002.669 C 763.274 1009.303 751.388 1016.163 739.841 1023.232 C 731.951 1028.056 724.201 1032.992 716.805 1037.902 C 707.581 1044.017 698.359 1050.472 689.44 1056.715 C 677.687 1064.942 665.535 1073.447 653.247 1081.267 C 642.57 1088.063 630.962 1092.93 620.007 1097.177 C 559.311 1120.702 522.929 1125.951 496.653 1125.951 Z M 295.9 322.123 C 284.544 338.699 278.845 358.11 273.335 376.884 C 271.85 381.944 270.314 387.176 268.689 392.28 C 266.667 398.634 264.165 405.506 261.04 413.288 C 256.456 424.704 251.347 436.044 246.405 447.011 C 230.118 483.157 214.735 517.298 215.695 555.874 C 216.641 593.863 234.41 630.86 253.472 665.182 C 276.772 707.133 303.182 754.681 321.085 804.358 C 337.152 849.014 346.645 895.548 355.022 936.605 C 357.263 947.584 359.658 958.758 361.974 969.565 C 367.535 995.516 373.286 1022.351 377.487 1049.126 C 380.475 1068.166 383.861 1089.748 398.793 1102.347 C 407.485 1109.681 418.178 1112.939 427.517 1115.416 C 445.277 1120.158 463.561 1123.22 481.864 1124.517 C 486.391 1124.834 490.923 1124.985 495.44 1124.985 C 539.419 1124.987 582.615 1110.708 619.68 1096.34 C 630.592 1092.111 642.154 1087.265 652.763 1080.51 C 665.035 1072.701 677.18 1064.201 688.924 1055.982 C 697.848 1049.736 707.076 1043.277 716.309 1037.156 C 723.714 1032.24 731.474 1027.299 739.372 1022.468 C 750.928 1015.394 762.819 1008.53 774.319 1001.893 C 780.837 998.131 787.58 994.241 794.174 990.36 C 857.599 953.147 902.091 919.962 938.435 882.758 C 976.844 843.743 1001.958 798.542 1009.151 755.478 C 1011.403 741.892 1011.984 728.57 1012.599 714.465 C 1013.289 698.683 1014 682.363 1017.258 665.546 C 1019.491 654.015 1023.12 642.736 1026.629 631.83 C 1029.524 622.834 1032.257 614.338 1034.243 605.778 C 1039.63 582.735 1039.144 563.804 1032.666 544.398 C 1029.112 533.756 1023.384 522.794 1014.094 508.853 C 1009.449 501.933 1004.407 494.801 999.531 487.904 C 973.391 450.929 946.362 412.695 950.497 369.622 C 952.316 350.899 960.06 333.824 967.547 317.313 C 970.588 310.607 973.731 303.671 976.386 296.801 C 983.098 279.431 991.591 246.795 973.06 223.384 C 960.845 207.952 939.568 199.578 913.107 199.851 C 901.102 199.937 887.964 201.703 872.938 205.248 C 864.78 207.177 856.494 209.379 848.753 211.471 C 841.409 213.455 834.056 215.476 826.693 217.5 C 792.716 226.839 757.583 236.496 722.487 242.631 C 676.914 250.599 638.869 250.928 591.174 243.769 C 539.412 235.998 493.336 227.32 450.31 217.24 L 445.802 216.176 C 427.066 211.74 407.699 207.158 389.036 208.647 C 355.129 211.36 343.491 229.511 334.477 247.871 C 331.945 253.024 329.415 258.615 326.737 264.535 C 318.883 281.894 309.98 301.57 295.9 322.123 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 482.556 1134.266 C 480.132 1134.266 477.725 1134.226 475.324 1134.147 C 455.146 1133.466 434.96 1130.854 415.328 1126.381 C 410.31 1125.245 404.405 1123.789 398.648 1121.59 C 392.608 1119.283 387.595 1116.488 383.322 1113.045 C 375.895 1107.062 370.411 1098.555 366.56 1087.04 C 363.062 1076.587 361.318 1064.833 359.914 1055.388 C 356.098 1029.67 350.982 1003.837 346.035 978.856 C 343.633 966.726 341.15 954.183 338.857 941.859 C 330.646 897.713 322.155 852.065 306.902 808.31 C 289.771 759.245 264.1 712.909 239.276 668.098 C 218.701 630.957 199.612 590.924 199.259 549.831 C 199.176 540.111 200.068 530.424 201.986 520.217 C 203.699 511.109 206.197 501.781 209.624 491.701 C 215.998 472.957 224.768 454.244 233.248 436.147 C 239.302 423.23 245.562 409.872 251.028 396.384 C 254.378 388.117 257.06 380.722 259.23 373.776 C 261.03 368.016 262.703 362.094 264.322 356.368 C 267.16 346.319 270.096 335.928 273.811 326.069 C 277.978 315.012 282.708 305.807 288.272 297.927 C 300.335 280.845 309.578 264.511 317.734 250.099 C 322.737 241.26 327.46 232.913 332.13 225.672 C 338.452 215.869 344.425 208.051 353.026 201.757 C 363.199 194.313 375.758 190.239 391.421 189.302 C 410.836 188.144 430.878 193.008 450.257 197.717 C 451.46 198.009 452.661 198.301 453.862 198.591 C 497.829 209.2 544.499 219.043 596.536 228.681 C 620.896 233.193 641.573 235.532 661.607 236.039 C 683.62 236.601 705.299 235.017 729.839 231.062 C 766.839 225.102 803.844 215.039 839.63 205.307 C 845.802 203.628 852.183 201.893 858.451 200.21 C 865.859 198.22 874.484 195.926 883.074 193.884 C 898.385 190.249 911.786 188.411 924.044 188.267 C 924.659 188.258 925.272 188.253 925.881 188.253 C 937.906 188.253 948.82 189.965 958.352 193.347 C 969.714 197.378 978.832 203.722 985.456 212.201 C 993.251 222.178 996.946 234.635 996.44 249.226 C 996.031 261.03 992.771 274.404 987.011 287.903 C 984.161 294.583 980.849 301.318 977.643 307.831 C 969.282 324.826 960.636 342.399 958.622 361.841 C 954.312 403.923 981.047 441.257 1006.901 477.361 C 1013.052 485.949 1019.411 494.83 1025.101 503.475 C 1034.293 517.542 1040.064 529.297 1043.263 540.471 C 1046.264 550.952 1047.468 561.293 1046.945 572.087 C 1046.477 581.722 1044.671 591.776 1041.257 603.73 C 1039.15 611.157 1036.568 618.499 1033.833 626.27 C 1029.491 638.612 1025.002 651.373 1022.54 664.566 C 1019.212 682.407 1019.156 699.718 1019.102 716.461 C 1019.058 730.13 1019.016 743.041 1017.349 756.274 C 1014.459 778.978 1006.53 802.257 993.782 825.466 C 987.791 836.372 980.749 847.192 972.852 857.622 C 965.146 867.801 956.588 877.663 947.415 886.933 C 927.451 907.269 904.729 926.358 877.949 945.289 C 855.762 960.975 830.6 976.634 801.026 993.163 C 794.487 996.828 787.805 1000.498 781.343 1004.046 C 769.489 1010.554 757.233 1017.284 745.343 1024.276 C 737.252 1029.028 729.388 1033.872 721.971 1038.674 C 711.06 1045.728 700.227 1053.287 689.75 1060.597 C 679.436 1067.794 668.771 1075.237 658.055 1082.179 C 647.257 1089.177 635.335 1094.392 625.007 1098.73 C 596.113 1110.866 572.566 1119.145 550.898 1124.788 C 526.483 1131.149 504.04 1134.265 482.556 1134.266 Z M 397.359 189.229 C 395.376 189.229 393.397 189.285 391.426 189.403 C 375.783 190.339 363.242 194.407 353.086 201.84 C 344.497 208.124 338.531 215.935 332.215 225.729 C 327.547 232.966 322.823 241.313 317.822 250.15 C 309.664 264.564 300.419 280.901 288.354 297.988 C 282.794 305.86 278.069 315.057 273.905 326.106 C 270.191 335.96 267.256 346.35 264.417 356.397 C 262.799 362.124 261.126 368.046 259.327 373.807 C 257.156 380.756 254.473 388.155 251.12 396.423 C 245.654 409.913 239.393 423.273 233.339 436.191 C 224.86 454.285 216.091 472.996 209.719 491.734 C 206.293 501.809 203.796 511.132 202.085 520.236 C 200.168 530.437 199.276 540.118 199.359 549.832 C 199.712 590.901 218.795 630.921 239.364 668.05 C 264.19 712.864 289.862 759.204 306.996 808.278 C 322.253 852.041 330.743 897.693 338.954 941.842 C 341.249 954.165 343.731 966.707 346.133 978.837 C 351.08 1003.82 356.197 1029.653 360.014 1055.375 C 361.415 1064.815 363.159 1076.564 366.655 1087.009 C 370.501 1098.506 375.972 1106.997 383.383 1112.968 C 387.649 1116.405 392.655 1119.196 398.685 1121.498 C 404.436 1123.694 410.336 1125.149 415.349 1126.284 C 434.976 1130.755 455.156 1133.367 475.328 1134.048 C 477.725 1134.127 480.135 1134.166 482.556 1134.166 C 504.035 1134.167 526.464 1131.052 550.877 1124.694 C 572.54 1119.052 596.085 1110.774 624.973 1098.641 C 635.297 1094.304 647.215 1089.091 658.005 1082.098 C 668.72 1075.157 679.384 1067.715 689.698 1060.518 C 700.175 1053.207 711.008 1045.648 721.922 1038.593 C 729.341 1033.79 737.205 1028.945 745.297 1024.193 C 757.189 1017.2 769.445 1010.469 781.299 1003.961 C 787.761 1000.413 794.443 996.744 800.982 993.078 C 830.553 976.551 855.712 960.893 877.896 945.211 C 904.672 926.282 927.39 907.197 947.349 886.865 C 956.518 877.598 965.073 867.74 972.777 857.564 C 980.671 847.137 987.711 836.322 993.698 825.419 C 1006.44 802.222 1014.367 778.955 1017.255 756.264 C 1018.921 743.036 1018.962 730.128 1019.006 716.461 C 1019.061 699.715 1019.116 682.398 1022.446 664.55 C 1024.909 651.349 1029.399 638.583 1033.742 626.238 C 1036.475 618.468 1039.058 611.128 1041.165 603.704 C 1044.575 591.758 1046.381 581.71 1046.849 572.083 C 1047.371 561.301 1046.17 550.97 1043.172 540.499 C 1039.974 529.336 1034.208 517.589 1025.021 503.53 C 1019.331 494.886 1012.973 486.007 1006.824 477.42 C 980.959 441.301 954.214 403.952 958.526 361.832 C 960.542 342.372 969.192 324.79 977.557 307.788 C 980.76 301.276 984.074 294.543 986.922 287.865 C 992.677 274.377 995.935 261.015 996.344 249.223 C 996.849 234.656 993.159 222.221 985.38 212.264 C 978.768 203.799 969.663 197.467 958.321 193.442 C 948.801 190.064 937.896 188.355 925.884 188.355 C 925.274 188.355 924.662 188.359 924.047 188.368 C 911.797 188.514 898.402 190.349 883.1 193.983 C 874.511 196.024 865.888 198.318 858.479 200.307 C 852.211 201.991 845.831 203.726 839.659 205.405 C 803.87 215.137 766.863 225.201 729.857 231.163 C 705.31 235.116 683.62 236.694 661.607 236.14 C 641.567 235.632 620.884 233.293 596.519 228.78 C 544.479 219.142 497.809 209.3 453.84 198.69 C 452.639 198.4 451.438 198.108 450.234 197.815 C 432.829 193.586 414.895 189.229 397.359 189.229 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 469.134 1146.557 C 468.974 1146.557 468.816 1146.556 468.655 1146.556 C 446.643 1146.498 424.589 1144.34 403.099 1140.142 C 397.604 1139.076 391.134 1137.687 384.81 1135.473 C 378.184 1133.154 372.688 1130.264 368.005 1126.638 C 359.848 1120.323 353.858 1111.245 349.697 1098.89 C 346.141 1088.335 344.345 1076.767 342.671 1064.853 C 339.224 1040.313 334.725 1015.619 330.375 991.737 C 327.899 978.148 325.34 964.097 323.016 950.292 L 322.44 946.87 C 318.783 925.122 314.999 902.635 310.393 880.673 C 305.229 856.049 299.548 834.688 293.027 815.37 C 276.582 766.737 250.924 720.312 226.11 675.416 L 225.354 674.05 C 216.069 657.249 204.335 635.043 195.932 612.255 C 187.227 588.643 183.048 567.315 183.16 547.056 C 183.216 536.889 184.296 526.761 186.458 516.093 C 188.388 506.575 191.145 496.834 194.888 486.311 C 201.846 466.745 211.306 447.245 220.455 428.387 C 227.61 413.64 235.009 398.39 241.316 382.947 C 244.9 374.172 247.768 366.242 250.085 358.703 C 252.05 352.307 253.847 345.719 255.585 339.347 C 258.505 328.64 261.524 317.568 265.43 307.09 C 269.811 295.338 274.868 285.591 280.895 277.292 C 289.708 265.153 297.602 253.337 304.565 242.911 C 313.862 228.994 321.891 216.975 330.07 206.973 C 336.547 199.053 343.917 190.877 353.895 184.737 C 364.897 177.966 377.911 174.369 393.678 173.738 C 395.091 173.681 396.508 173.654 397.927 173.654 C 416.753 173.654 435.989 178.446 454.633 183.091 L 457.134 183.713 C 502.909 195.071 550.185 206.08 601.659 217.371 C 627.025 222.935 647.365 225.895 667.609 226.968 C 689.978 228.154 712.06 226.979 737.115 223.271 C 775.985 217.519 814.81 207.062 852.357 196.949 C 857.523 195.557 862.867 194.118 868.115 192.717 C 876.058 190.596 884.538 188.353 893.164 186.291 C 908.723 182.576 922.349 180.672 934.82 180.468 C 947.88 180.219 959.651 181.904 969.813 185.467 C 981.375 189.522 990.624 195.962 997.297 204.613 C 1005.224 214.888 1008.784 227.69 1007.878 242.661 C 1007.143 254.777 1003.383 268.418 997.005 282.109 C 993.977 288.612 990.503 295.168 987.146 301.507 C 977.882 318.993 968.303 337.074 966.086 357.294 C 961.573 398.875 988.313 435.626 1014.175 471.167 C 1021.459 481.179 1028.992 491.531 1035.532 501.655 C 1044.751 516.031 1050.374 528.21 1053.226 539.982 C 1055.822 550.697 1056.492 561.358 1055.272 572.573 C 1054.231 582.149 1051.802 592.406 1047.625 604.851 C 1045.5 611.212 1043.091 617.48 1040.539 624.117 C 1035.277 637.804 1029.837 651.956 1027.173 666.775 C 1023.804 685.525 1024.463 703.707 1025.099 721.291 C 1025.562 734.071 1026.038 747.285 1024.896 760.272 C 1023.847 772.021 1021.368 784.118 1017.527 796.227 C 1013.838 807.858 1008.856 819.622 1002.719 831.19 C 996.781 842.383 989.724 853.467 981.745 864.137 C 973.948 874.562 965.246 884.623 955.883 894.041 C 935.777 914.422 912.797 933.397 885.63 952.052 C 863.063 967.548 837.495 982.846 807.468 998.82 C 800.975 1002.285 794.339 1005.749 787.921 1009.097 C 775.726 1015.462 763.114 1022.044 750.898 1028.943 C 742.487 1033.686 734.735 1038.304 727.203 1043.06 C 714.661 1050.968 702.304 1059.59 690.352 1067.927 C 681.411 1074.165 672.164 1080.616 662.922 1086.71 C 652.422 1093.637 640.898 1099.02 629.995 1103.939 C 599.331 1117.773 574.082 1127.368 550.534 1134.136 C 521.456 1142.492 494.822 1146.557 469.134 1146.557 Z M 280.934 277.321 L 280.974 277.35 C 274.954 285.642 269.901 295.381 265.523 307.124 C 261.62 317.598 258.6 328.667 255.68 339.372 C 253.943 345.744 252.146 352.333 250.18 358.73 C 247.863 366.272 244.993 374.205 241.408 382.982 C 235.099 398.428 227.7 413.68 220.545 428.429 C 211.398 447.284 201.937 466.782 194.982 486.342 C 191.242 496.86 188.485 506.599 186.556 516.11 C 184.395 526.772 183.317 536.893 183.26 547.053 C 183.149 567.301 187.324 588.617 196.027 612.218 C 204.426 634.999 216.16 657.201 225.443 673.998 L 226.198 675.365 C 251.013 720.264 276.675 766.693 293.123 815.336 C 299.646 834.657 305.327 856.022 310.492 880.649 C 315.098 902.613 318.883 925.101 322.54 946.85 L 323.116 950.272 C 325.44 964.077 328 978.127 330.474 991.716 C 334.826 1015.599 339.323 1040.294 342.771 1064.836 C 344.444 1076.745 346.24 1088.309 349.792 1098.855 C 353.948 1111.192 359.926 1120.253 368.066 1126.557 C 372.741 1130.175 378.229 1133.06 384.844 1135.376 C 391.161 1137.587 397.628 1138.975 403.118 1140.041 C 424.599 1144.238 446.649 1146.395 468.654 1146.453 C 468.813 1146.453 468.974 1146.453 469.134 1146.453 C 494.813 1146.453 521.435 1142.39 550.505 1134.035 C 574.047 1127.268 599.292 1117.675 629.951 1103.843 C 640.849 1098.926 652.37 1093.546 662.864 1086.622 C 672.104 1080.529 681.349 1074.079 690.292 1067.841 C 702.244 1059.503 714.602 1050.881 727.146 1042.972 C 734.68 1038.215 742.431 1033.596 750.844 1028.851 C 763.063 1021.952 775.674 1015.37 787.87 1009.005 C 794.287 1005.655 800.924 1002.192 807.417 998.728 C 837.44 982.756 863.005 967.459 885.57 951.966 C 912.732 933.316 935.706 914.344 955.808 893.967 C 965.168 884.552 973.866 874.494 981.66 864.072 C 989.637 853.407 996.69 842.327 1002.625 831.138 C 1008.76 819.575 1013.74 807.817 1017.428 796.192 C 1021.267 784.09 1023.745 772 1024.792 760.257 C 1025.935 747.278 1025.457 734.066 1024.995 721.289 C 1024.358 703.7 1023.7 685.512 1027.071 666.752 C 1029.735 651.923 1035.18 637.766 1040.443 624.075 C 1042.994 617.44 1045.402 611.173 1047.526 604.814 C 1051.701 592.375 1054.129 582.124 1055.17 572.555 C 1056.388 561.353 1055.719 550.703 1053.125 539.999 C 1050.276 528.238 1044.657 516.069 1035.444 501.703 C 1028.907 491.581 1021.375 481.229 1014.091 471.22 C 988.219 435.663 961.465 398.896 965.983 357.276 C 968.203 337.038 977.786 318.948 987.053 301.454 C 990.411 295.115 993.884 288.56 996.912 282.059 C 1005.35 263.946 1016.609 229.805 997.214 204.666 C 990.554 196.032 981.322 189.603 969.776 185.555 C 959.625 181.996 947.854 180.315 934.818 180.561 C 922.352 180.765 908.734 182.668 893.182 186.382 C 884.557 188.443 876.079 190.686 868.135 192.806 C 862.888 194.207 857.545 195.647 852.378 197.038 C 814.828 207.151 776 217.609 737.123 223.363 C 712.063 227.072 689.974 228.247 667.599 227.061 C 647.349 225.988 627.003 223.027 601.633 217.461 C 550.158 206.17 502.881 195.16 457.106 183.803 L 454.604 183.18 C 434.561 178.188 413.839 173.025 393.677 173.83 C 377.927 174.46 364.93 178.054 353.943 184.815 C 343.977 190.947 336.615 199.115 330.143 207.028 C 321.965 217.027 313.939 229.045 304.643 242.96 C 297.68 253.386 289.786 265.203 280.97 277.344 L 280.934 277.321 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 452.914 1159.412 C 432.042 1159.412 411.171 1157.679 390.74 1154.243 C 384.767 1153.245 377.731 1151.924 370.84 1149.696 C 363.627 1147.363 357.647 1144.38 352.556 1140.572 C 343.667 1133.923 337.171 1124.276 332.698 1111.08 C 328.808 1099.609 326.977 1087.305 325.294 1074.656 C 322.216 1051.51 318.326 1028.176 314.563 1005.609 C 312.017 990.347 309.384 974.566 307.042 959.064 C 306.724 956.952 306.405 954.839 306.089 952.728 C 302.853 931.24 299.506 909.02 295.301 887.314 C 290.584 862.974 285.259 841.862 279.019 822.769 C 263.193 774.424 237.791 728.371 213.226 683.833 L 211.298 680.339 C 200.744 661.198 188.771 638.384 179.988 614.306 C 170.776 589.05 166.505 566.254 166.927 544.617 C 167.097 533.985 168.346 523.397 170.745 512.249 C 172.884 502.305 175.898 492.13 179.96 481.143 C 187.511 460.717 197.691 440.39 207.536 420.733 C 215.801 404.232 224.347 387.169 231.471 369.844 C 235.297 360.539 238.351 352.075 240.806 343.966 C 242.929 336.951 244.84 329.711 246.688 322.709 C 249.69 311.333 252.793 299.57 256.893 288.465 C 261.492 276.008 266.885 265.714 273.382 256.993 C 276.499 252.809 279.542 248.697 282.486 244.721 C 299.144 222.208 313.531 202.767 327.876 188.611 C 335.315 181.269 343.706 173.698 354.63 168.06 C 366.447 161.961 379.914 158.837 395.803 158.51 C 396.587 158.493 397.372 158.486 398.158 158.486 C 418.427 158.486 439.111 163.767 459.14 168.881 L 460.275 169.17 C 471.838 172.116 483.331 175.046 494.737 177.954 C 533.742 187.896 570.581 197.288 606.646 206.397 C 632.678 212.971 653.291 216.623 673.476 218.234 C 696.182 220.049 718.674 219.279 744.254 215.813 C 784.947 210.3 825.541 199.462 864.798 188.981 C 869.01 187.856 873.365 186.693 877.644 185.557 C 885.762 183.403 894.415 181.124 903.117 179.032 C 918.927 175.237 932.777 173.265 945.464 173.004 C 946.512 172.98 947.552 172.968 948.582 172.968 C 960.697 172.968 971.636 174.632 981.139 177.923 C 992.907 182 1002.283 188.538 1009.005 197.359 C 1017.068 207.936 1020.491 221.082 1019.182 236.431 C 1018.121 248.862 1013.863 262.769 1006.868 276.649 C 1003.668 282.999 1000.042 289.4 996.534 295.589 C 986.359 313.542 975.839 332.106 973.417 353.083 C 972.281 362.998 972.893 372.836 975.281 383.161 C 977.406 392.342 980.896 401.684 985.953 411.724 C 995.332 430.35 1008.705 448.408 1021.639 465.87 C 1029.965 477.113 1038.577 488.739 1045.828 500.173 C 1055.095 514.886 1060.569 527.487 1063.055 539.83 C 1065.262 550.793 1065.396 561.772 1063.468 573.394 C 1061.869 583.02 1058.905 593.171 1053.857 606.308 C 1051.8 611.682 1049.484 617.208 1047.244 622.553 C 1040.982 637.491 1034.508 652.937 1031.672 669.32 C 1028.286 688.871 1029.698 707.825 1031.063 726.154 C 1032.002 738.747 1032.971 751.769 1032.307 764.604 C 1031.672 776.611 1029.518 788.995 1025.907 801.411 C 1022.439 813.332 1017.599 825.39 1011.518 837.251 C 1005.635 848.729 998.563 860.079 990.5 870.987 C 982.613 881.658 973.77 891.919 964.214 901.485 C 953.843 911.948 942.388 922.246 930.169 932.092 C 918.784 941.267 906.337 950.37 893.173 959.15 C 870.225 974.455 844.252 989.391 813.772 1004.812 C 807.302 1008.095 800.689 1011.373 794.293 1014.541 C 781.776 1020.744 768.833 1027.157 756.314 1033.943 C 747.724 1038.592 739.868 1043.119 732.298 1047.781 C 718.165 1056.47 704.358 1066.128 691.004 1075.467 C 683.38 1080.799 675.496 1086.313 667.651 1091.577 C 657.354 1098.487 646.26 1103.989 634.849 1109.48 C 602.63 1124.986 575.69 1135.911 550.063 1143.86 C 518.758 1153.57 489.905 1158.622 461.854 1159.304 C 458.875 1159.376 455.893 1159.412 452.914 1159.412 Z M 273.422 257.024 L 273.462 257.054 C 266.971 265.766 261.581 276.052 256.986 288.499 C 252.888 299.601 249.785 311.361 246.784 322.734 C 244.936 329.737 243.025 336.978 240.901 343.995 C 238.445 352.106 235.39 360.574 231.562 369.883 C 224.437 387.21 215.89 404.275 207.625 420.777 C 197.781 440.432 187.602 460.757 180.054 481.177 C 175.994 492.16 172.982 502.33 170.843 512.27 C 168.446 523.413 167.199 533.994 167.027 544.62 C 166.604 566.244 170.875 589.027 180.082 614.272 C 188.862 638.344 200.833 661.154 211.386 680.29 L 213.313 683.784 C 237.882 728.326 263.286 774.384 279.115 822.737 C 285.355 841.834 290.682 862.951 295.4 887.295 C 299.605 909.003 302.953 931.224 306.188 952.713 C 306.505 954.824 306.823 956.937 307.142 959.048 C 309.483 974.55 312.116 990.331 314.661 1005.593 C 318.426 1028.159 322.316 1051.494 325.395 1074.642 C 327.077 1087.287 328.908 1099.584 332.793 1111.047 C 337.26 1124.223 343.745 1133.855 352.617 1140.491 C 357.698 1144.292 363.669 1147.271 370.871 1149.599 C 377.757 1151.826 384.788 1153.145 390.757 1154.143 C 411.18 1157.578 432.048 1159.31 452.915 1159.31 C 455.895 1159.31 458.872 1159.275 461.851 1159.205 C 489.892 1158.522 518.736 1153.472 550.032 1143.765 C 575.654 1135.818 602.593 1124.895 634.805 1109.391 C 646.211 1103.901 657.302 1098.402 667.594 1091.494 C 675.438 1086.23 683.321 1080.718 690.945 1075.386 C 704.299 1066.046 718.109 1056.388 732.244 1047.697 C 739.815 1043.034 747.673 1038.508 756.266 1033.857 C 768.787 1027.07 781.73 1020.656 794.248 1014.454 C 800.643 1011.284 807.257 1008.008 813.727 1004.724 C 844.203 989.305 870.171 974.37 893.118 959.069 C 906.278 950.292 918.724 941.19 930.107 932.016 C 942.323 922.171 953.773 911.876 964.143 901.416 C 973.695 891.853 982.536 881.596 990.419 870.929 C 998.479 860.026 1005.547 848.679 1011.428 837.206 C 1017.505 825.351 1022.345 813.299 1025.811 801.385 C 1029.42 788.976 1031.573 776.6 1032.207 764.6 C 1032.87 751.772 1031.9 738.753 1030.963 726.164 C 1029.598 707.828 1028.186 688.868 1031.573 669.305 C 1034.41 652.911 1040.886 637.459 1047.151 622.517 C 1049.39 617.173 1051.706 611.648 1053.761 606.276 C 1058.808 593.145 1061.772 583.001 1063.368 573.381 C 1065.295 561.77 1065.16 550.803 1062.956 539.852 C 1060.474 527.522 1055.004 514.931 1045.743 500.228 C 1038.494 488.798 1029.885 477.174 1021.557 465.932 C 995.516 430.769 968.586 394.409 973.316 353.074 C 975.742 332.076 986.267 313.504 996.446 295.543 C 999.953 289.353 1003.581 282.954 1006.779 276.606 C 1013.768 262.738 1018.021 248.843 1019.081 236.424 C 1020.389 221.1 1016.972 207.978 1008.924 197.421 C 1002.214 188.617 992.855 182.09 981.107 178.02 C 970.806 174.452 958.82 172.797 945.466 173.106 C 932.787 173.368 918.943 175.339 903.141 179.132 C 894.441 181.224 885.787 183.502 877.67 185.657 C 873.392 186.792 869.036 187.955 864.826 189.08 C 825.565 199.562 784.969 210.401 744.268 215.915 C 718.682 219.382 696.182 220.15 673.468 218.336 C 653.277 216.724 632.66 213.072 606.622 206.497 C 570.557 197.388 533.716 187.996 494.712 178.053 C 483.305 175.145 471.814 172.215 460.249 169.27 L 459.115 168.98 C 439.094 163.869 418.413 158.589 398.156 158.589 C 397.37 158.589 396.59 158.597 395.803 158.612 C 379.931 158.939 366.478 162.059 354.674 168.151 C 343.762 173.783 335.379 181.347 327.945 188.683 C 313.605 202.834 299.221 222.274 282.565 244.782 C 279.624 248.76 276.579 252.872 273.462 257.056 L 273.422 257.024 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 436.099 1172.396 C 416.691 1172.396 397.315 1171.007 378.273 1168.247 C 371.802 1167.314 364.186 1166.06 356.757 1163.831 C 348.948 1161.487 342.486 1158.406 337 1154.409 C 327.367 1147.447 320.358 1137.235 315.574 1123.19 C 311.363 1110.831 309.43 1097.233 307.81 1084.364 C 305.111 1062.92 301.82 1041.263 298.637 1020.32 C 296.017 1003.079 293.306 985.251 290.96 967.741 C 290.566 964.806 290.177 961.872 289.785 958.936 C 286.949 937.632 284.016 915.604 280.184 894.08 C 275.887 869.942 270.888 849.006 264.901 830.073 C 258.058 808.469 248.607 785.449 236.008 759.697 C 224.787 736.759 212.204 713.908 200.035 691.808 C 199.067 690.049 198.099 688.291 197.132 686.534 C 185.914 666.146 173.201 641.854 163.968 616.263 C 154.269 589.378 149.891 565.115 150.585 542.086 C 150.886 530.969 152.317 519.9 154.963 508.249 C 157.321 497.858 160.602 487.231 164.986 475.758 C 173.141 454.432 184.044 433.236 194.588 412.737 C 203.937 394.563 213.605 375.77 221.516 356.649 C 225.583 346.817 228.824 337.817 231.417 329.135 C 233.695 321.511 235.712 313.626 237.663 306 C 240.746 293.949 243.935 281.488 248.23 269.75 C 253.048 256.584 258.783 245.741 265.759 236.602 C 277.789 220.843 287.539 208.814 296.445 198.744 C 306.961 186.853 316.487 177.502 325.572 170.154 C 333.518 163.725 343.26 156.457 355.254 151.295 C 367.867 145.867 381.789 143.215 397.818 143.189 C 419.798 143.153 441.914 148.938 463.303 154.534 C 516.44 168.411 568.049 182.944 611.526 195.331 C 638.219 202.935 659.099 207.276 679.23 209.41 C 702.272 211.851 725.17 211.489 751.286 208.263 C 793.758 203.02 836.073 191.811 876.996 180.97 C 880.354 180.08 883.711 179.192 887.065 178.306 C 895.387 176.11 904.242 173.788 912.961 171.681 C 929.011 167.807 943.087 165.767 955.995 165.447 C 976.613 164.886 1004.539 168.697 1020.599 190.012 C 1028.796 200.891 1032.084 214.382 1030.373 230.109 C 1028.984 242.861 1024.227 257.034 1016.618 271.097 C 1013.255 277.314 1009.477 283.578 1005.826 289.638 C 994.734 308.035 983.263 327.061 980.635 348.779 C 979.448 358.666 980.031 368.462 982.415 378.725 C 984.536 387.855 988.044 397.138 993.139 407.106 C 1002.593 425.603 1016.135 443.55 1029.229 460.906 C 1038.531 473.235 1048.151 485.983 1056.01 498.597 C 1065.34 513.666 1070.666 526.692 1072.771 539.586 C 1074.6 550.808 1074.2 562.105 1071.548 574.124 C 1068.87 586.259 1064.194 597.892 1059.974 607.673 C 1058.056 612.136 1055.97 616.713 1053.953 621.141 C 1046.62 637.241 1039.037 653.889 1036.053 671.772 C 1032.672 692.047 1034.866 711.697 1036.987 730.701 C 1038.38 743.182 1039.821 756.089 1039.604 768.844 C 1039.381 781.109 1037.554 793.78 1034.171 806.503 C 1030.926 818.711 1026.227 831.065 1020.203 843.219 C 1014.375 854.981 1007.288 866.598 999.141 877.745 C 991.164 888.66 982.177 899.121 972.428 908.837 C 961.989 919.318 950.43 929.594 938.074 939.38 C 926.556 948.501 913.948 957.51 900.6 966.155 C 877.272 981.265 850.894 995.841 819.959 1010.712 C 813.506 1013.823 806.911 1016.924 800.531 1019.922 C 787.7 1025.953 774.43 1032.189 761.615 1038.853 C 752.854 1043.401 744.893 1047.835 737.274 1052.411 C 721.602 1061.808 706.43 1072.473 691.755 1082.785 C 685.385 1087.263 678.797 1091.892 672.263 1096.351 C 662.092 1103.295 651.447 1108.874 639.583 1114.933 C 606.453 1131.85 576.987 1144.477 549.5 1153.535 C 533.582 1158.781 517.869 1162.969 502.794 1165.981 C 486.595 1169.219 470.492 1171.232 454.936 1171.961 C 448.667 1172.25 442.38 1172.396 436.099 1172.396 Z M 398.026 143.288 C 397.957 143.288 397.889 143.288 397.82 143.288 C 381.806 143.315 367.897 145.964 355.298 151.388 C 343.316 156.544 333.58 163.808 325.638 170.233 C 316.559 177.577 307.036 186.925 296.526 198.811 C 287.622 208.879 277.872 220.907 265.845 236.664 C 258.872 245.796 253.144 256.63 248.329 269.787 C 244.035 281.52 240.847 293.979 237.764 306.027 C 235.813 313.653 233.796 321.539 231.516 329.166 C 228.921 337.851 225.682 346.852 221.611 356.689 C 213.699 375.813 204.031 394.608 194.681 412.783 C 184.138 433.279 173.236 454.473 165.083 475.795 C 160.699 487.263 157.421 497.887 155.062 508.272 C 152.419 519.916 150.988 530.978 150.687 542.089 C 149.994 565.105 154.369 589.356 164.065 616.229 C 173.295 641.814 186.006 666.102 197.222 686.486 C 198.189 688.244 199.158 690.003 200.125 691.761 C 212.294 713.861 224.878 736.714 236.1 759.653 C 248.701 785.41 258.154 808.434 264.997 830.044 C 270.986 848.98 275.986 869.921 280.284 894.063 C 284.116 915.589 287.049 937.62 289.885 958.924 C 290.276 961.859 290.667 964.793 291.061 967.728 C 293.408 985.238 296.117 1003.065 298.737 1020.305 C 301.92 1041.249 305.21 1062.907 307.91 1084.353 C 309.529 1097.216 311.462 1110.808 315.671 1123.159 C 320.448 1137.183 327.444 1147.38 337.06 1154.33 C 342.537 1158.319 348.991 1161.396 356.786 1163.736 C 364.211 1165.964 371.822 1167.216 378.289 1168.148 C 403.488 1171.802 429.275 1173.05 454.941 1171.86 C 470.492 1171.131 486.587 1169.119 502.783 1165.881 C 517.854 1162.868 533.563 1158.682 549.477 1153.438 C 576.958 1144.381 606.421 1131.756 639.546 1114.841 C 651.405 1108.785 662.048 1103.207 672.214 1096.267 C 678.747 1091.808 685.334 1087.178 691.705 1082.702 C 706.38 1072.388 721.555 1061.723 737.23 1052.323 C 744.85 1047.747 752.813 1043.311 761.574 1038.763 C 774.393 1032.098 787.664 1025.861 800.495 1019.829 C 806.875 1016.831 813.47 1013.731 819.923 1010.62 C 850.853 995.75 877.229 981.178 900.552 966.069 C 913.898 957.425 926.503 948.419 938.018 939.298 C 950.372 929.515 961.927 919.241 972.365 908.764 C 982.109 899.052 991.093 888.595 999.066 877.684 C 1007.208 866.54 1014.292 854.929 1020.12 843.172 C 1026.14 831.023 1030.836 818.677 1034.079 806.475 C 1037.46 793.759 1039.286 781.096 1039.51 768.839 C 1039.725 756.09 1038.286 743.187 1036.893 730.709 C 1034.772 711.698 1032.578 692.04 1035.962 671.753 C 1038.946 653.856 1046.531 637.202 1053.868 621.096 C 1055.885 616.669 1057.969 612.092 1059.888 607.631 C 1064.107 597.855 1068.781 586.227 1071.456 574.1 C 1074.105 562.093 1074.504 550.808 1072.676 539.599 C 1070.575 526.718 1065.254 513.704 1055.932 498.647 C 1048.073 486.037 1038.454 473.29 1029.156 460.963 C 1016.057 443.604 1002.513 425.652 993.055 407.148 C 987.956 397.173 984.448 387.882 982.323 378.745 C 979.935 368.47 979.352 358.663 980.542 348.765 C 983.174 327.026 994.647 307.992 1005.745 289.584 C 1009.397 283.525 1013.174 277.262 1016.536 271.048 C 1024.141 256.995 1028.892 242.835 1030.279 230.096 C 1031.989 214.395 1028.707 200.929 1020.526 190.071 C 1005.434 170.042 979.827 165.495 959.706 165.495 C 958.448 165.495 957.215 165.514 956.003 165.546 C 943.103 165.867 929.033 167.905 912.99 171.778 C 904.271 173.884 895.417 176.206 887.094 178.403 C 883.74 179.288 880.384 180.176 877.026 181.066 C 836.1 191.907 793.781 203.118 751.302 208.362 C 725.18 211.589 702.276 211.951 679.224 209.509 C 659.087 207.375 638.201 203.031 611.503 195.426 C 568.026 183.04 516.419 168.507 463.283 154.631 C 441.966 149.053 419.925 143.288 398.026 143.288 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 419.164 1185.495 C 401.236 1185.495 383.353 1184.39 365.723 1182.184 C 358.776 1181.32 350.596 1180.134 342.595 1177.889 C 334.202 1175.534 327.255 1172.357 321.361 1168.179 C 310.993 1160.88 303.474 1150.098 298.376 1135.217 C 293.816 1121.912 291.788 1106.968 290.242 1094.004 C 287.943 1074.691 285.25 1055.156 282.646 1036.264 C 279.936 1016.617 277.137 996.3 274.796 976.349 C 274.368 972.706 273.945 969.063 273.523 965.419 C 271.069 944.243 268.53 922.347 265.052 900.946 C 261.154 876.946 256.458 856.131 250.702 837.309 C 244.094 815.741 234.82 792.778 222.35 767.108 C 211.243 744.244 198.727 721.477 186.622 699.461 C 185.376 697.193 184.13 694.927 182.885 692.661 C 171.005 671.022 157.552 645.248 147.868 618.149 C 137.679 589.635 133.195 563.905 134.16 539.485 C 134.589 527.87 136.202 516.31 139.093 504.145 C 141.672 493.296 145.216 482.205 149.931 470.234 C 158.694 447.984 170.33 425.894 181.584 404.532 C 192.014 384.732 202.799 364.258 211.48 343.385 C 215.795 333.01 219.219 323.476 221.947 314.237 C 224.376 306.012 226.493 297.49 228.542 289.248 C 231.707 276.515 234.98 263.35 239.475 250.974 C 244.514 237.093 250.594 225.7 258.059 216.141 C 269.198 201.88 280.193 189.317 290.741 178.8 C 301.757 167.816 312.673 158.675 323.189 151.631 C 331.944 145.766 342.665 139.14 355.802 134.468 C 369.188 129.706 383.568 127.525 399.753 127.798 C 422.789 128.187 446.889 134.641 466.253 139.828 C 522.566 154.887 576.035 171.447 616.325 184.192 C 644.043 192.96 664.552 197.842 684.903 200.516 C 708.277 203.586 731.58 203.627 758.237 200.642 C 802.466 195.688 846.48 184.113 889.047 172.917 C 891.501 172.272 893.954 171.627 896.405 170.982 C 905.331 168.639 914.059 166.362 922.726 164.257 C 939.022 160.303 953.324 158.196 966.448 157.817 C 967.937 157.77 969.411 157.748 970.865 157.748 C 983.055 157.748 994.011 159.368 1003.49 162.578 C 1015.661 166.698 1025.292 173.432 1032.117 182.592 C 1040.448 193.776 1043.599 207.61 1041.484 223.713 C 1040.286 232.83 1036.677 247.476 1026.29 265.472 C 1022.768 271.572 1018.846 277.72 1015.051 283.664 C 1003.035 302.491 990.61 321.959 987.776 344.401 C 986.536 354.288 987.095 364.068 989.485 374.302 C 991.613 383.408 995.151 392.659 1000.302 402.584 C 1009.864 421.006 1023.614 438.888 1036.91 456.181 C 1047.142 469.487 1057.72 483.244 1066.115 496.947 C 1070.57 504.263 1074.015 511.024 1076.646 517.62 C 1079.614 525.058 1081.497 532.138 1082.406 539.267 C 1083.87 550.758 1082.937 562.375 1079.552 574.78 C 1076.292 586.733 1071.119 598.273 1066.014 608.964 C 1064.291 612.583 1062.464 616.287 1060.699 619.869 C 1052.227 637.054 1043.468 654.823 1040.36 674.149 C 1036.995 695.086 1039.99 715.38 1042.885 735.005 C 1044.719 747.432 1046.616 760.28 1046.823 773.011 C 1047.015 785.532 1045.514 798.49 1042.359 811.522 C 1039.338 824.017 1034.778 836.665 1028.813 849.113 C 1017.373 872.979 1000.692 896.148 980.569 916.115 C 970.062 926.615 958.399 936.869 945.906 946.594 C 934.257 955.661 921.488 964.576 907.956 973.089 C 884.246 988.004 857.463 1002.217 826.076 1016.539 C 819.609 1019.499 812.997 1022.442 806.604 1025.289 C 793.487 1031.129 779.924 1037.167 766.843 1043.689 C 757.921 1048.129 749.854 1052.472 742.182 1056.965 C 725.005 1067.009 708.536 1078.666 692.609 1089.94 C 687.439 1093.599 682.091 1097.382 676.805 1101.052 C 666.661 1108.094 656.059 1113.94 644.247 1120.31 C 609.903 1138.832 578.714 1152.853 548.896 1163.172 C 532.016 1169.014 515.267 1173.747 499.112 1177.241 C 481.849 1180.975 464.634 1183.431 447.947 1184.542 C 438.367 1185.177 428.758 1185.495 419.164 1185.495 Z M 258.099 216.172 L 258.138 216.203 C 250.68 225.752 244.607 237.137 239.57 251.008 C 235.078 263.379 231.807 276.542 228.643 289.272 C 226.594 297.515 224.474 306.038 222.044 314.265 C 219.315 323.507 215.891 333.045 211.574 343.424 C 202.891 364.301 192.105 384.777 181.674 404.579 C 170.422 425.939 158.786 448.026 150.025 470.271 C 145.313 482.236 141.769 493.324 139.192 504.168 C 136.302 516.327 134.69 527.881 134.261 539.489 C 133.297 563.895 137.78 589.615 147.964 618.115 C 157.645 645.207 171.094 670.977 182.975 692.612 C 184.219 694.879 185.465 697.145 186.712 699.413 C 198.816 721.431 211.333 744.198 222.439 767.064 C 234.911 792.739 244.188 815.707 250.798 837.28 C 256.556 856.105 261.25 876.926 265.151 900.93 C 268.629 922.332 271.169 944.23 273.624 965.408 C 274.046 969.051 274.469 972.694 274.895 976.337 C 277.234 996.287 280.035 1016.604 282.743 1036.25 C 285.348 1055.143 288.04 1074.679 290.341 1093.992 C 291.885 1106.95 293.914 1121.888 298.47 1135.184 C 303.563 1150.044 311.07 1160.81 321.418 1168.096 C 327.305 1172.268 334.24 1175.439 342.621 1177.791 C 350.615 1180.035 358.792 1181.22 365.733 1182.083 C 392.792 1185.467 420.449 1186.26 447.943 1184.442 C 464.625 1183.332 481.836 1180.877 499.092 1177.143 C 515.243 1173.65 531.991 1168.917 548.867 1163.077 C 578.677 1152.76 609.861 1138.741 644.201 1120.222 C 656.009 1113.853 666.611 1108.008 676.75 1100.97 C 682.036 1097.301 687.383 1093.517 692.553 1089.858 C 708.482 1078.584 724.953 1066.925 742.133 1056.879 C 749.807 1052.384 757.876 1048.04 766.8 1043.599 C 779.885 1037.077 793.447 1031.037 806.565 1025.198 C 812.958 1022.351 819.57 1019.408 826.037 1016.447 C 857.42 1002.127 884.198 987.917 907.904 973.004 C 921.433 964.493 934.199 955.581 945.846 946.515 C 958.336 936.793 969.995 926.541 980.5 916.045 C 1000.614 896.085 1017.289 872.926 1028.724 849.07 C 1034.688 836.628 1039.244 823.987 1042.265 811.499 C 1045.415 798.475 1046.915 785.526 1046.725 773.014 C 1046.517 760.29 1044.622 747.445 1042.79 735.021 C 1039.892 715.388 1036.896 695.086 1040.264 674.135 C 1043.374 654.793 1052.138 637.017 1060.613 619.826 C 1062.379 616.244 1064.204 612.54 1065.927 608.922 C 1071.031 598.235 1076.202 586.7 1079.461 574.755 C 1082.841 562.362 1083.774 550.759 1082.311 539.28 C 1080.601 525.862 1075.429 512.427 1066.034 497.001 C 1057.642 483.303 1047.063 469.547 1036.834 456.243 C 1023.534 438.947 1009.783 421.061 1000.217 402.632 C 995.062 392.7 991.521 383.442 989.392 374.326 C 986.998 364.081 986.439 354.289 987.68 344.39 C 990.518 321.925 1002.949 302.448 1014.971 283.611 C 1018.765 277.667 1022.688 271.52 1026.208 265.422 C 1031.937 255.497 1039.222 240.203 1041.39 223.701 C 1043.502 207.625 1040.357 193.814 1032.041 182.653 C 1025.228 173.509 1015.613 166.788 1003.463 162.673 C 992.863 159.084 980.402 157.483 966.456 157.917 C 953.338 158.297 939.043 160.402 922.754 164.355 C 914.088 166.459 905.36 168.736 896.435 171.079 C 893.983 171.724 891.531 172.368 889.077 173.014 C 846.508 184.21 802.489 195.787 758.254 200.742 C 731.589 203.729 708.279 203.687 684.896 200.616 C 664.539 197.94 644.023 193.057 616.3 184.288 C 576.01 171.543 522.542 154.982 466.233 139.924 C 446.874 134.74 422.78 128.286 399.757 127.898 C 398.859 127.883 397.965 127.875 397.079 127.875 C 381.987 127.875 368.474 130.068 355.841 134.561 C 342.715 139.23 332 145.852 323.249 151.714 C 312.74 158.754 301.827 167.891 290.815 178.87 C 280.27 189.383 269.279 201.943 258.142 216.202 L 258.099 216.172 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 402.181 1198.699 C 385.727 1198.699 369.322 1197.825 353.107 1196.078 C 345.685 1195.283 336.943 1194.167 328.368 1191.905 C 319.392 1189.538 311.961 1186.267 305.656 1181.907 C 294.552 1174.271 286.522 1162.92 281.107 1147.202 C 276.191 1132.939 274.143 1117.219 272.609 1103.602 C 270.745 1087.052 268.656 1070.285 266.637 1054.071 C 263.811 1031.392 260.889 1007.942 258.565 984.916 C 258.135 980.656 257.707 976.323 257.292 972.133 C 255.204 951.039 253.046 929.228 249.907 907.906 C 246.387 883.993 241.982 863.254 236.438 844.504 C 230.051 822.943 220.939 800.009 208.58 774.389 C 197.571 751.569 185.102 728.858 173.045 706.895 C 171.553 704.177 170.063 701.462 168.574 698.747 C 156.028 675.854 141.838 648.595 131.706 619.995 C 121.028 589.853 116.437 562.655 117.673 536.845 C 118.226 524.723 120.021 512.661 123.158 499.972 C 125.955 488.659 129.767 477.092 134.811 464.615 C 144.186 441.424 156.563 418.421 168.532 396.176 C 180.041 374.786 191.941 352.668 201.38 330.081 C 205.94 319.173 209.548 309.104 212.413 299.298 C 214.99 290.478 217.204 281.323 219.345 272.47 C 222.591 259.051 225.947 245.175 230.64 232.158 C 235.905 217.558 242.333 205.613 250.292 195.639 C 261.358 181.772 273.024 169.382 284.965 158.814 C 296.692 148.436 308.728 139.773 320.738 133.067 C 334.029 125.647 344.99 120.879 356.281 117.605 C 370.413 113.507 385.242 111.791 401.622 112.368 C 423.956 113.15 446.303 118.828 469.141 125.083 C 514.124 137.386 560.977 152.17 621.06 173.017 C 649.436 182.863 670.206 188.416 690.51 191.587 C 714.208 195.286 737.919 195.73 765.125 192.982 C 811.093 188.34 856.784 176.4 900.972 164.852 L 905.682 163.622 C 915.585 161.036 923.841 158.892 932.427 156.797 C 948.968 152.763 963.494 150.589 976.837 150.151 C 991.113 149.658 1003.802 151.229 1014.563 154.833 C 1026.933 158.976 1036.694 165.807 1043.57 175.137 C 1052.037 186.624 1055.05 200.804 1052.532 217.283 C 1049.944 234.213 1042.058 249.755 1035.899 259.811 C 1032.223 265.81 1028.156 271.856 1024.222 277.703 C 1011.279 296.942 997.893 316.837 994.85 339.99 C 993.556 349.898 994.095 359.687 996.5 369.916 C 998.641 379.02 1002.219 388.262 1007.441 398.166 C 1017.137 416.557 1031.13 434.41 1044.661 451.676 C 1055.785 465.871 1067.286 480.549 1076.156 495.265 C 1080.652 502.764 1084.088 509.728 1086.659 516.555 C 1089.545 524.216 1091.285 531.53 1091.979 538.914 C 1093.086 550.684 1091.619 562.619 1087.495 575.401 C 1083.905 586.532 1078.7 597.37 1071.99 610.219 C 1070.486 613.107 1068.917 616.058 1067.4 618.911 C 1057.747 637.059 1047.766 655.826 1044.603 676.492 C 1041.222 698.048 1045.047 718.952 1048.748 739.169 C 1051.019 751.575 1053.365 764.404 1053.979 777.141 C 1054.582 789.92 1053.406 803.163 1050.484 816.504 C 1047.682 829.286 1043.267 842.229 1037.357 854.972 C 1026.016 879.426 1009.17 903.074 988.644 923.357 C 978.069 933.875 966.302 944.108 953.672 953.771 C 941.89 962.785 928.959 971.604 915.242 979.984 C 891.152 994.701 863.964 1008.552 832.123 1022.329 C 825.644 1025.141 819.02 1027.932 812.612 1030.63 C 799.211 1036.276 785.352 1042.112 772.003 1048.488 C 762.925 1052.818 754.753 1057.069 747.021 1061.485 C 728.383 1072.113 710.693 1084.747 693.583 1096.964 C 689.555 1099.842 685.39 1102.817 681.278 1105.717 C 671.064 1112.926 660.107 1119.26 648.844 1125.652 C 613.391 1145.77 580.489 1161.196 548.255 1172.809 C 530.423 1179.235 512.631 1184.507 495.371 1188.481 C 477.051 1192.699 458.721 1195.595 440.889 1197.088 C 428.005 1198.162 415.077 1198.699 402.181 1198.699 Z M 395.55 112.359 C 381.556 112.359 368.667 114.118 356.31 117.7 C 345.027 120.971 334.073 125.737 320.789 133.154 C 308.784 139.856 296.755 148.514 285.033 158.888 C 273.095 169.452 261.434 181.838 250.371 195.701 C 242.419 205.666 235.996 217.601 230.735 232.191 C 226.044 245.202 222.688 259.075 219.443 272.492 C 217.301 281.346 215.088 290.502 212.509 299.324 C 209.643 309.134 206.033 319.207 201.472 330.119 C 192.032 352.71 180.13 374.83 168.62 396.221 C 156.652 418.464 144.277 441.464 134.904 464.652 C 129.862 477.125 126.051 488.686 123.255 499.996 C 120.119 512.679 118.325 524.733 117.773 536.848 C 116.539 562.645 121.128 589.831 131.801 619.96 C 141.93 648.552 156.118 675.807 168.662 698.696 C 170.149 701.412 171.641 704.128 173.133 706.844 C 185.192 728.809 197.66 751.521 208.67 774.343 C 221.032 799.968 230.147 822.908 236.533 844.474 C 242.079 863.229 246.486 883.973 250.007 907.89 C 253.145 929.213 255.305 951.027 257.392 972.121 C 257.807 976.311 258.236 980.644 258.664 984.904 C 260.988 1007.929 263.909 1031.379 266.734 1054.056 C 268.755 1070.271 270.844 1087.038 272.708 1103.588 C 274.241 1117.199 276.288 1132.914 281.199 1147.166 C 286.608 1162.863 294.626 1174.199 305.712 1181.822 C 312.008 1186.176 319.427 1189.441 328.393 1191.805 C 336.961 1194.065 345.699 1195.181 353.117 1195.975 C 382.034 1199.09 411.565 1199.43 440.884 1196.984 C 458.71 1195.491 477.036 1192.595 495.353 1188.379 C 512.609 1184.406 530.396 1179.135 548.224 1172.711 C 580.451 1161.099 613.349 1145.676 648.797 1125.56 C 660.058 1119.17 671.013 1112.838 681.224 1105.631 C 685.333 1102.731 689.499 1099.756 693.528 1096.879 C 710.638 1084.659 728.331 1072.025 746.974 1061.395 C 754.708 1056.977 762.883 1052.725 771.963 1048.394 C 785.315 1042.016 799.173 1036.179 812.575 1030.534 C 818.982 1027.836 825.607 1025.045 832.086 1022.233 C 863.922 1008.458 891.107 994.609 915.193 979.895 C 928.906 971.516 941.832 962.699 953.612 953.687 C 966.24 944.027 978.003 933.797 988.576 923.283 C 1009.094 903.007 1025.93 879.37 1037.266 854.927 C 1043.173 842.191 1047.588 829.255 1050.386 816.48 C 1053.307 803.148 1054.483 789.914 1053.88 777.143 C 1053.266 764.413 1050.92 751.587 1048.649 739.185 C 1044.948 718.96 1041.121 698.046 1044.503 676.474 C 1047.669 655.792 1057.654 637.018 1067.311 618.862 C 1068.828 616.008 1070.397 613.058 1071.902 610.17 C 1078.609 597.326 1083.811 586.492 1087.4 575.367 C 1091.519 562.598 1092.984 550.677 1091.879 538.921 C 1091.186 531.545 1089.447 524.239 1086.565 516.587 C 1083.997 509.766 1080.564 502.808 1076.071 495.313 C 1067.205 480.603 1055.703 465.927 1044.582 451.735 C 1031.049 434.465 1017.055 416.609 1007.354 398.211 C 1002.127 388.299 998.544 379.05 996.402 369.936 C 993.995 359.696 993.454 349.895 994.75 339.974 C 997.797 316.798 1011.189 296.894 1024.139 277.645 C 1028.073 271.799 1032.139 265.754 1035.813 259.756 C 1041.968 249.707 1049.847 234.179 1052.433 217.266 C 1054.948 200.814 1051.939 186.66 1043.49 175.194 C 1036.625 165.882 1026.883 159.063 1014.531 154.926 C 1003.781 151.326 991.096 149.752 976.842 150.249 C 963.505 150.688 948.985 152.86 932.451 156.894 C 923.867 158.989 915.609 161.132 905.707 163.717 L 900.997 164.947 C 856.807 176.496 811.112 188.437 765.135 193.08 C 737.922 195.828 714.203 195.385 690.495 191.683 C 670.185 188.511 649.41 182.956 621.028 173.108 C 560.948 152.262 514.096 137.48 469.115 125.176 C 446.284 118.924 423.942 113.247 401.619 112.465 C 399.573 112.395 397.549 112.359 395.55 112.359 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 385.168 1212.404 C 370.167 1212.404 355.215 1211.719 340.401 1210.349 C 322.711 1208.722 304.322 1205.851 289.674 1195.944 C 263.487 1178.313 257.801 1143.999 254.527 1113.22 C 253.163 1100.405 251.7 1087.403 250.286 1074.829 C 247.285 1048.156 244.182 1020.575 241.885 993.493 C 241.477 988.68 241.08 983.863 240.684 979.047 C 237.222 936.965 233.643 893.451 221.737 851.786 C 207.978 803.705 183.063 758.264 158.966 714.318 C 157.262 711.211 155.56 708.105 153.862 705 C 140.644 680.834 125.705 652.068 115.117 621.948 C 103.932 590.126 99.226 561.409 100.735 534.157 C 103.552 481.508 129.755 433.725 155.093 387.516 C 167.673 364.574 180.681 340.851 190.86 316.597 C 195.66 305.162 199.449 294.571 202.443 284.221 C 205.164 274.821 207.468 265.042 209.697 255.585 C 216.359 227.314 223.249 198.081 242.164 174.86 C 263.93 148.139 290.177 127.134 318.069 114.116 C 340.175 103.799 365.816 94.522 403.462 96.511 C 426.969 97.752 450.251 103.819 472.082 109.925 C 517.835 122.709 565.269 138.597 625.883 161.439 C 676.776 180.617 715.122 190.034 771.924 184.898 C 819.582 180.589 866.911 168.292 912.685 156.4 L 914.805 155.848 C 923.219 153.662 932.753 151.184 941.979 148.92 C 958.795 144.801 973.574 142.556 987.16 142.057 C 1018.693 140.852 1042.255 149.616 1055.293 167.416 C 1063.941 179.322 1066.838 193.953 1063.902 210.905 C 1060.888 228.32 1052.388 244.135 1045.789 254.337 C 1041.96 260.256 1037.75 266.216 1033.677 271.979 C 1019.829 291.579 1005.509 311.846 1002.272 335.602 C 996.681 376.845 1025.198 412.556 1052.776 447.09 C 1064.775 462.115 1077.18 477.652 1086.491 493.346 C 1095.964 509.389 1101.004 524.161 1101.901 538.505 C 1103.536 564.606 1092.165 587.069 1078.266 611.642 C 1077.038 613.816 1075.795 615.994 1074.549 618.177 C 1063.673 637.236 1052.426 656.944 1049.19 678.865 C 1045.859 700.927 1050.502 722.359 1054.991 743.086 C 1057.686 755.529 1060.473 768.397 1061.482 781.214 C 1065.387 831.302 1041.262 887.243 996.951 930.857 C 958.625 968.795 908.204 999.81 838.276 1028.461 C 831.774 1031.133 825.129 1033.777 818.7 1036.335 C 805.025 1041.777 790.885 1047.403 777.284 1053.624 C 768.063 1057.835 759.794 1061.989 752.005 1066.327 C 731.961 1077.473 713.125 1091.069 694.909 1104.218 C 691.919 1106.375 688.93 1108.532 685.938 1110.679 C 675.487 1118.176 664.677 1124.716 653.598 1131.31 C 576.368 1177.272 504.479 1203.014 433.824 1210.006 C 417.633 1211.604 401.372 1212.403 385.168 1212.404 Z M 393.372 97.143 C 361.299 97.143 338.425 105.61 318.448 114.934 C 290.678 127.895 264.54 148.814 242.859 175.43 C 224.075 198.49 217.21 227.621 210.571 255.792 C 208.34 265.26 206.033 275.05 203.306 284.472 C 200.301 294.856 196.501 305.478 191.688 316.946 C 181.492 341.244 168.471 364.987 155.88 387.95 C 130.589 434.07 104.438 481.761 101.631 534.207 C 98.388 592.81 125.195 650.719 154.649 704.569 C 156.347 707.673 158.05 710.779 159.753 713.886 C 183.873 757.874 208.815 803.361 222.601 851.538 C 234.532 893.289 238.115 936.848 241.58 978.974 C 241.976 983.789 242.372 988.605 242.78 993.417 C 245.077 1020.486 248.179 1048.062 251.179 1074.729 C 252.593 1087.304 254.057 1100.307 255.42 1113.125 C 258.674 1143.702 264.311 1177.783 290.176 1195.198 C 304.655 1204.992 322.91 1207.837 340.482 1209.453 C 371.243 1212.299 402.617 1212.182 433.732 1209.11 C 504.253 1202.131 576.019 1176.43 653.132 1130.537 C 664.195 1123.953 674.987 1117.425 685.406 1109.949 C 688.399 1107.803 691.389 1105.645 694.377 1103.489 C 712.613 1090.325 731.471 1076.714 751.563 1065.541 C 759.372 1061.192 767.662 1057.027 776.904 1052.807 C 790.525 1046.578 804.677 1040.946 818.362 1035.5 C 824.789 1032.943 831.432 1030.299 837.93 1027.63 C 907.745 999.025 958.071 968.071 996.313 930.219 C 1040.44 886.788 1064.464 831.113 1060.58 781.286 C 1059.575 768.53 1056.794 755.693 1054.105 743.278 C 1049.599 722.472 1044.938 700.958 1048.293 678.734 C 1051.555 656.647 1062.844 636.865 1073.762 617.733 C 1075.007 615.55 1076.249 613.374 1077.476 611.202 C 1091.302 586.756 1102.616 564.418 1100.997 538.564 C 1100.107 524.364 1095.107 509.723 1085.711 493.806 C 1076.433 478.166 1064.047 462.655 1052.068 447.654 C 1024.373 412.971 995.733 377.108 1001.375 335.483 C 1004.643 311.508 1019.027 291.15 1032.939 271.461 C 1037.005 265.705 1041.212 259.754 1045.031 253.851 C 1075.613 206.58 1061.885 178.03 1054.563 167.949 C 1038.328 145.78 1008.96 142.134 987.191 142.959 C 973.666 143.456 958.946 145.692 942.191 149.798 C 932.97 152.06 923.439 154.536 915.029 156.722 L 912.907 157.273 C 867.1 169.175 819.733 181.482 772.003 185.797 C 715.025 190.95 676.578 181.508 625.565 162.283 C 564.976 139.451 517.565 123.571 471.837 110.795 C 450.055 104.701 426.828 98.649 403.414 97.412 C 399.97 97.23 396.621 97.143 393.372 97.143 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 368.137 1225.408 C 354.605 1225.408 341.116 1224.88 327.73 1223.823 C 309.023 1222.353 289.579 1219.579 274.103 1209.317 C 261.521 1201.005 252.462 1188.513 246.41 1171.127 C 241.036 1155.691 238.807 1138.756 237.201 1122.754 C 236.446 1115.235 235.667 1107.599 234.911 1100.212 C 231.622 1068.005 228.219 1034.7 225.962 1002.004 C 225.597 996.704 225.241 991.312 224.899 986.096 C 223.514 965.07 222.083 943.328 219.589 922.069 C 216.791 898.22 212.925 877.542 207.767 858.85 C 201.791 837.226 192.959 814.263 180.767 788.649 C 169.906 765.832 157.482 743.152 145.468 721.217 C 143.578 717.767 141.69 714.319 139.808 710.872 C 125.933 685.457 110.263 655.219 99.241 623.638 C 87.582 590.237 82.779 560.103 84.554 531.516 C 85.352 518.361 87.503 505.279 91.133 491.522 C 94.37 479.256 98.718 466.725 104.426 453.212 C 115.034 428.098 128.906 403.229 142.322 379.179 C 155.983 354.688 170.109 329.364 181.036 303.425 C 186.087 291.438 190.067 280.299 193.202 269.371 C 196.07 259.373 198.465 248.959 200.78 238.889 C 204.183 224.084 207.703 208.777 212.798 194.474 C 215.541 186.773 218.508 179.971 221.869 173.679 C 225.642 166.616 229.811 160.372 234.614 154.59 C 256.365 128.403 284.404 108.107 315.697 95.894 C 330.642 90.062 343.797 86.234 357.092 83.846 C 372.624 81.056 388.363 80.275 405.219 81.459 C 428.763 83.111 452.559 89.205 474.766 95.544 C 500.12 102.774 526.172 111.224 554.417 121.376 C 577.568 129.698 602.417 139.263 630.383 150.616 C 652.375 159.543 676.219 168.515 701.573 173.681 C 725.909 178.638 750.432 179.889 778.753 177.616 C 828.148 173.651 876.922 161.045 924.089 148.852 L 924.894 148.644 C 933.675 146.374 942.755 144.027 951.682 141.828 C 968.714 137.636 983.691 135.326 997.47 134.769 C 1012.336 134.144 1025.484 135.672 1036.546 139.303 C 1049.307 143.492 1059.328 150.514 1066.328 160.175 C 1070.86 166.476 1073.804 173.625 1075.078 181.425 C 1076.239 188.526 1076.031 196.25 1074.464 204.383 C 1071.037 222.148 1061.971 238.145 1054.967 248.437 C 1050.997 254.271 1046.65 260.148 1042.446 265.832 C 1027.633 285.859 1012.315 306.568 1008.857 331.112 C 1007.453 341.115 1007.961 350.97 1010.411 361.243 C 1012.594 370.391 1016.276 379.66 1021.672 389.578 C 1031.693 408.001 1046.235 425.88 1060.302 443.172 C 1073.136 458.949 1086.408 475.265 1096.094 491.843 C 1100.678 499.723 1104.097 507.091 1106.542 514.37 C 1109.267 522.482 1110.72 530.263 1110.981 538.153 C 1111.199 544.74 1110.611 551.205 1109.181 557.917 C 1107.894 563.96 1105.95 570.067 1103.238 576.59 C 1098.238 588.614 1091.477 600.048 1083.801 612.678 C 1082.885 614.185 1081.965 615.695 1081.042 617.206 C 1068.859 637.186 1056.26 657.846 1052.943 681.126 C 1051.464 691.3 1051.622 702.218 1053.428 714.506 C 1055.038 725.461 1057.779 736.459 1060.428 747.095 C 1063.537 759.578 1066.754 772.485 1068.146 785.354 C 1069.573 798.644 1069.049 812.461 1066.587 826.419 C 1064.232 839.773 1060.098 853.305 1054.302 866.638 C 1043.16 892.265 1025.991 916.868 1004.651 937.791 C 993.939 948.345 981.964 958.533 969.058 968.074 C 957.011 976.98 943.76 985.61 929.675 993.724 C 904.822 1008.041 876.823 1021.168 844.078 1033.857 C 837.544 1036.395 830.862 1038.902 824.401 1041.328 C 810.458 1046.56 796.039 1051.972 782.184 1058.035 C 772.796 1062.138 764.413 1066.206 756.554 1070.473 C 735.092 1082.11 715.157 1096.677 695.877 1110.764 C 693.945 1112.175 692.014 1113.586 690.081 1114.994 C 679.224 1122.91 667.773 1130.134 657.893 1136.282 C 620.955 1159.272 583.618 1178.062 546.918 1192.129 C 527.207 1199.684 507.311 1206.014 487.783 1210.943 C 467.363 1216.097 446.789 1219.861 426.632 1222.13 C 407.177 1224.314 387.613 1225.408 368.137 1225.408 Z M 390.314 81.025 C 378.936 81.025 367.97 81.993 357.108 83.944 C 343.819 86.33 330.671 90.157 315.733 95.987 C 284.455 108.193 256.431 128.48 234.689 154.654 C 225.732 165.437 218.602 178.473 212.89 194.507 C 207.797 208.805 204.279 224.109 200.874 238.911 C 198.559 248.983 196.165 259.397 193.296 269.398 C 190.16 280.33 186.18 291.472 181.127 303.463 C 170.198 329.406 156.069 354.734 142.407 379.227 C 128.994 403.275 115.123 428.141 104.517 453.25 C 98.81 466.759 94.463 479.285 91.228 491.546 C 87.6 505.297 85.449 518.372 84.651 531.521 C 82.877 560.095 87.679 590.215 99.334 623.604 C 110.355 655.178 126.022 685.413 139.895 710.823 C 141.777 714.27 143.665 717.719 145.555 721.168 C 157.57 743.105 169.993 765.787 180.855 788.606 C 193.051 814.225 201.885 837.194 207.862 858.823 C 213.022 877.52 216.889 898.204 219.688 922.057 C 222.182 943.319 223.613 965.062 224.998 986.089 C 225.341 991.305 225.696 996.697 226.061 1001.997 C 228.318 1034.691 231.721 1067.995 235.01 1100.202 C 235.766 1107.588 236.545 1115.225 237.3 1122.744 C 238.905 1138.74 241.132 1155.668 246.503 1171.095 C 252.549 1188.46 261.595 1200.935 274.158 1209.234 C 289.615 1219.484 309.044 1222.255 327.737 1223.724 C 360.383 1226.302 393.652 1225.733 426.62 1222.031 C 446.773 1219.763 467.344 1216.001 487.758 1210.847 C 507.282 1205.918 527.176 1199.589 546.882 1192.036 C 583.576 1177.971 620.906 1159.184 657.839 1136.198 C 667.717 1130.05 679.166 1122.827 690.023 1114.914 C 691.956 1113.506 693.885 1112.095 695.818 1110.684 C 715.099 1096.594 735.037 1082.025 756.505 1070.385 C 764.365 1066.117 772.751 1062.047 782.141 1057.944 C 795.999 1051.88 810.419 1046.468 824.365 1041.235 C 830.826 1038.81 837.508 1036.302 844.041 1033.764 C 876.782 1021.078 904.776 1007.953 929.625 993.639 C 943.706 985.526 956.953 976.898 968.997 967.993 C 981.898 958.456 993.87 948.27 1004.578 937.719 C 1025.911 916.806 1043.072 892.213 1054.208 866.598 C 1060.001 853.273 1064.133 839.748 1066.487 826.402 C 1068.947 812.453 1069.471 798.645 1068.045 785.365 C 1066.654 772.503 1063.44 759.598 1060.331 747.12 C 1057.681 736.481 1054.939 725.48 1053.328 714.52 C 1051.521 702.223 1051.362 691.295 1052.842 681.113 C 1056.161 657.811 1068.767 637.142 1080.956 617.155 C 1081.878 615.642 1082.799 614.134 1083.713 612.626 C 1091.386 600 1098.147 588.57 1103.144 576.553 C 1105.854 570.036 1107.795 563.934 1109.082 557.897 C 1110.51 551.194 1111.098 544.737 1110.88 538.159 C 1110.619 530.277 1109.168 522.507 1106.446 514.404 C 1104.003 507.131 1100.588 499.768 1096.005 491.895 C 1086.323 475.323 1073.055 459.011 1060.223 443.236 C 1046.155 425.941 1031.606 408.058 1021.581 389.628 C 1016.182 379.702 1012.495 370.425 1010.313 361.268 C 1007.86 350.984 1007.35 341.117 1008.755 331.101 C 1012.219 306.533 1027.544 285.812 1042.364 265.775 C 1046.567 260.091 1050.914 254.215 1054.883 248.382 C 1061.881 238.098 1070.942 222.113 1074.364 204.365 C 1075.93 196.244 1076.136 188.532 1074.979 181.443 C 1073.708 173.658 1070.768 166.523 1066.245 160.235 C 1059.258 150.591 1049.255 143.582 1036.514 139.399 C 1025.462 135.772 1012.325 134.251 997.474 134.87 C 983.702 135.427 968.729 137.735 951.704 141.927 C 942.779 144.125 933.7 146.473 924.919 148.743 L 924.113 148.952 C 876.941 161.144 828.166 173.752 778.76 177.718 C 750.433 179.992 725.899 178.741 701.552 173.781 C 676.191 168.615 652.341 159.64 630.346 150.712 C 602.381 139.359 577.534 129.795 554.383 121.474 C 526.141 111.322 500.089 102.872 474.738 95.643 C 452.536 89.306 428.747 83.213 405.212 81.562 C 400.154 81.203 395.195 81.025 390.314 81.025 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 351.102 1238.918 C 339.016 1238.918 326.966 1238.519 314.99 1237.717 C 295.212 1236.4 274.654 1233.71 258.273 1223.044 C 244.951 1214.394 235.375 1201.331 229.001 1183.111 C 223.258 1166.694 220.947 1148.239 219.443 1132.35 C 215.686 1092.644 211.802 1051.585 209.607 1010.57 C 209.299 1004.831 209.01 998.989 208.73 993.341 C 207.686 972.308 206.606 950.56 204.42 929.289 C 201.969 905.429 198.357 884.74 193.376 866.042 C 187.525 844.104 178.701 820.825 166.4 794.88 C 155.445 771.771 142.85 748.82 130.671 726.626 C 128.9 723.4 127.132 720.177 125.368 716.955 C 110.81 690.133 94.392 658.287 82.99 625.459 C 70.818 590.409 65.894 558.815 67.937 528.871 C 68.854 515.193 71.186 501.593 75.062 487.293 C 78.519 474.546 83.134 461.524 89.176 447.485 C 100.405 421.395 115.031 395.578 129.174 370.61 C 143.909 344.598 159.146 317.701 170.807 290.118 C 176.105 277.586 180.268 265.912 183.536 254.428 C 186.548 243.845 189.027 232.803 191.426 222.125 C 194.91 206.624 198.509 190.595 203.806 175.646 C 206.659 167.598 209.758 160.498 213.288 153.94 C 217.249 146.579 221.642 140.084 226.719 134.086 C 254.365 101.418 288.962 85.19 313.117 77.329 C 328.668 72.268 343.165 68.888 357.436 66.992 C 373.605 64.844 389.805 64.53 406.957 66.025 C 431.884 68.201 456.616 74.713 477.521 80.795 C 503.208 88.264 529.592 97.162 558.181 107.999 C 581.598 116.875 606.722 127.158 634.988 139.435 C 657.456 149.194 681.736 159.015 707.044 164.749 C 731.695 170.336 756.629 171.986 785.51 169.952 C 808.042 168.363 832.395 164.806 859.96 159.075 C 883.605 154.16 906.181 148.446 933.235 141.486 L 935.621 140.873 C 944.025 138.711 952.715 136.475 961.252 134.362 C 978.283 130.149 993.92 127.705 1007.729 127.097 C 1010.114 126.989 1012.456 126.935 1014.752 126.935 C 1027.055 126.935 1038.04 128.482 1047.488 131.551 C 1060.453 135.762 1070.599 142.882 1077.651 152.713 C 1082.254 159.17 1085.193 166.492 1086.391 174.477 C 1087.479 181.744 1087.14 189.639 1085.38 197.945 C 1081.531 216.128 1071.87 232.357 1064.443 242.77 C 1060.328 248.538 1055.844 254.347 1051.506 259.966 C 1043.656 270.134 1035.541 280.649 1029.062 291.603 C 1021.783 303.908 1017.445 315.386 1015.801 326.694 C 1014.342 336.763 1014.837 346.671 1017.317 356.986 C 1019.525 366.174 1023.268 375.475 1028.76 385.421 C 1038.964 403.896 1053.812 421.821 1068.171 439.156 C 1081.833 455.65 1095.959 472.706 1106.002 490.153 C 1110.633 498.226 1114.042 505.798 1116.423 513.299 C 1119.069 521.639 1120.377 529.652 1120.42 537.794 C 1120.456 544.558 1119.635 551.197 1117.909 558.093 C 1116.363 564.272 1114.119 570.524 1111.049 577.205 C 1105.168 590.002 1096.921 602.712 1089.645 613.926 C 1089.068 614.816 1088.49 615.707 1087.911 616.599 C 1074.399 637.415 1060.428 658.941 1057.055 683.464 C 1055.598 693.873 1055.94 705.043 1058.098 717.611 C 1060.023 728.82 1063.182 740.082 1066.238 750.972 C 1069.76 763.527 1073.401 776.509 1075.172 789.478 C 1077.011 803.024 1076.813 817.127 1074.582 831.395 C 1072.448 845.036 1068.457 858.862 1062.718 872.491 C 1051.677 898.701 1034.347 923.784 1012.597 945.027 C 1001.817 955.599 989.739 965.766 976.696 975.246 C 964.516 984.098 951.105 992.634 936.836 1000.615 C 911.603 1014.729 883.198 1027.495 850 1039.641 C 843.427 1042.051 836.707 1044.425 830.207 1046.722 C 816.003 1051.741 801.314 1056.929 787.218 1062.827 C 777.686 1066.811 769.197 1070.788 761.267 1074.984 C 738.434 1087.056 717.466 1102.588 697.19 1117.608 L 694.431 1119.652 C 683.371 1127.842 672.014 1135.351 662.364 1141.617 C 624.509 1166.196 585.438 1186.462 546.239 1201.851 C 504.109 1218.391 461.451 1229.432 419.448 1234.668 C 396.727 1237.5 373.853 1238.918 351.102 1238.918 Z M 226.758 134.119 L 226.796 134.151 C 221.725 140.144 217.335 146.633 213.378 153.989 C 209.852 160.542 206.752 167.637 203.902 175.681 C 198.607 190.623 195.007 206.65 191.525 222.149 C 189.128 232.828 186.646 243.871 183.633 254.457 C 180.365 265.944 176.199 277.622 170.9 290.158 C 159.237 317.747 143.999 344.646 129.262 370.661 C 115.119 395.626 100.496 421.441 89.27 447.526 C 83.23 461.56 78.614 474.577 75.159 487.32 C 71.284 501.613 68.955 515.207 68.037 528.879 C 65.995 558.809 70.917 590.39 83.085 625.427 C 94.483 658.248 110.901 690.09 125.457 716.908 C 127.22 720.13 128.99 723.353 130.76 726.579 C 142.94 748.774 155.534 771.726 166.491 794.838 C 178.795 820.789 187.62 844.072 193.471 866.018 C 198.452 884.721 202.067 905.414 204.519 929.281 C 206.705 950.553 207.785 972.303 208.827 993.337 C 209.107 998.986 209.397 1004.827 209.704 1010.566 C 211.9 1051.58 215.783 1092.637 219.54 1132.342 C 221.044 1148.225 223.354 1166.673 229.094 1183.079 C 235.461 1201.277 245.023 1214.323 258.326 1222.961 C 274.686 1233.615 295.23 1236.302 314.993 1237.618 C 349.509 1239.927 384.647 1238.903 419.434 1234.573 C 461.427 1229.339 504.078 1218.3 546.2 1201.762 C 585.392 1186.374 624.457 1166.112 662.306 1141.536 C 671.955 1135.271 683.311 1127.764 694.369 1119.575 L 697.129 1117.531 C 717.408 1102.509 738.379 1086.974 761.218 1074.899 C 769.152 1070.701 777.643 1066.722 787.177 1062.738 C 801.276 1056.839 815.966 1051.649 830.172 1046.63 C 836.672 1044.334 843.393 1041.959 849.963 1039.55 C 883.156 1027.405 911.557 1014.642 936.785 1000.53 C 951.052 992.55 964.458 984.016 976.635 975.167 C 989.673 965.69 1001.748 955.526 1012.525 944.957 C 1034.266 923.724 1051.589 898.652 1062.624 872.454 C 1068.361 858.833 1072.351 845.015 1074.482 831.383 C 1076.711 817.124 1076.91 803.03 1075.071 789.494 C 1073.303 776.532 1069.661 763.554 1066.14 751.002 C 1063.083 740.109 1059.924 728.844 1057.998 717.631 C 1055.838 705.052 1055.495 693.872 1056.953 683.452 C 1060.33 658.906 1074.307 637.371 1087.827 616.546 C 1088.405 615.654 1088.983 614.764 1089.56 613.873 C 1096.835 602.662 1105.079 589.956 1110.957 577.165 C 1114.024 570.489 1116.266 564.243 1117.811 558.07 C 1119.534 551.183 1120.354 544.552 1120.319 537.796 C 1120.276 529.664 1118.969 521.661 1116.326 513.331 C 1113.947 505.836 1110.542 498.271 1105.915 490.204 C 1095.876 472.764 1081.752 455.712 1068.093 439.221 C 1053.732 421.882 1038.88 403.953 1028.672 385.471 C 1023.174 375.518 1019.429 366.208 1017.218 357.011 C 1014.737 346.684 1014.24 336.763 1015.701 326.682 C 1017.347 315.361 1021.688 303.871 1028.974 291.554 C 1035.457 280.595 1043.577 270.077 1051.427 259.907 C 1055.764 254.29 1060.247 248.48 1064.36 242.714 C 1071.782 232.309 1081.435 216.092 1085.282 197.927 C 1087.039 189.633 1087.379 181.749 1086.291 174.494 C 1085.097 166.525 1082.161 159.218 1077.568 152.774 C 1070.531 142.96 1060.4 135.852 1047.457 131.648 C 1036.257 128.01 1022.899 126.516 1007.732 127.199 C 993.93 127.806 978.299 130.25 961.274 134.462 C 952.738 136.574 944.048 138.81 935.645 140.972 L 933.259 141.586 C 906.202 148.545 883.625 154.26 859.979 159.176 C 832.41 164.906 808.052 168.465 785.516 170.054 C 756.621 172.09 731.681 170.438 707.02 164.849 C 681.705 159.114 657.419 149.29 634.948 139.53 C 606.682 127.253 581.56 116.97 558.145 108.094 C 529.559 97.259 503.176 88.362 477.492 80.893 C 456.592 74.812 431.867 68.301 406.948 66.126 C 389.802 64.63 373.611 64.945 357.448 67.093 C 343.182 68.988 328.691 72.367 313.147 77.426 C 289.003 85.282 254.424 101.501 226.794 134.152 L 226.758 134.119 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 334.068 1252.545 C 323.418 1252.545 312.793 1252.249 302.221 1251.655 C 281.375 1250.49 259.702 1247.885 242.417 1236.815 C 235.053 1232.109 228.649 1225.969 223.383 1218.566 C 218.678 1211.953 214.7 1204.072 211.562 1195.141 C 205.458 1177.776 203.13 1158.529 201.66 1141.993 C 198.421 1105.604 194.887 1062.557 193.226 1019.181 C 192.992 1013.042 192.781 1006.793 192.577 1000.75 C 191.867 979.691 191.132 957.915 189.249 936.614 C 187.136 912.718 183.771 892.001 178.961 873.28 C 173.32 851.345 164.65 828.092 152.456 802.188 C 141.596 779.118 129.049 756.215 116.918 734.066 C 114.945 730.465 112.905 726.742 110.908 723.082 C 95.688 695.022 78.533 661.704 66.675 627.35 C 54.015 590.673 48.987 557.612 51.3 526.274 C 52.337 512.068 54.845 497.946 58.968 483.1 C 62.644 469.867 67.532 456.352 73.908 441.783 C 85.758 414.71 101.137 387.935 116.013 362.043 C 131.822 334.525 148.169 306.071 160.558 276.857 C 166.104 263.781 170.454 251.572 173.855 239.532 C 177.008 228.367 179.572 216.698 182.049 205.415 C 185.608 189.213 189.287 172.459 194.786 156.863 C 197.747 148.466 200.983 141.067 204.681 134.244 C 208.83 126.585 213.449 119.841 218.801 113.628 C 230.449 100.108 244.792 88.415 261.432 78.874 C 276.219 70.395 292.733 63.645 310.518 58.811 C 344.258 49.779 375.453 47.184 408.68 50.638 C 429.391 52.792 451.466 57.56 480.258 66.094 C 506.273 73.8 532.985 83.148 561.922 94.671 C 585.586 104.094 610.987 115.095 639.573 128.302 C 666.013 140.52 688.533 149.875 712.489 155.823 C 737.421 162.014 762.763 164.084 792.247 162.336 C 815.249 160.888 840.001 157.436 867.918 151.781 C 892.88 146.726 917.375 140.565 942.361 134.169 L 946.74 133.048 C 954.631 131.027 962.789 128.937 970.802 126.944 C 988.074 122.654 1003.944 120.141 1017.968 119.474 C 1033.442 118.723 1047.052 120.196 1058.41 123.847 C 1071.576 128.08 1081.852 135.298 1088.953 145.3 C 1093.625 151.914 1096.563 159.408 1097.682 167.576 C 1098.702 175.01 1098.229 183.077 1096.281 191.555 C 1092.003 210.159 1081.749 226.618 1073.9 237.151 C 1069.646 242.86 1065.025 248.61 1060.557 254.171 C 1052.238 264.524 1043.635 275.23 1036.77 286.408 C 1029.057 298.966 1024.463 310.714 1022.726 322.324 C 1021.211 332.468 1021.696 342.439 1024.206 352.806 C 1026.444 362.044 1030.251 371.387 1035.849 381.37 C 1046.245 399.917 1061.408 417.904 1076.073 435.299 C 1090.551 452.471 1105.518 470.227 1115.892 488.512 C 1120.571 496.779 1123.972 504.552 1126.286 512.278 C 1128.854 520.845 1130.018 529.091 1129.842 537.483 C 1129.697 544.392 1128.655 551.174 1126.651 558.215 C 1124.864 564.504 1122.34 570.869 1118.941 577.674 C 1112.616 590.336 1104.415 602.239 1095.733 614.843 L 1094.809 616.185 C 1079.938 637.789 1064.562 660.128 1061.145 685.85 C 1059.713 696.487 1060.238 707.899 1062.749 720.738 C 1064.99 732.191 1068.571 743.707 1072.034 754.844 C 1075.967 767.49 1080.033 780.568 1082.173 793.654 C 1084.425 807.456 1084.552 821.845 1082.552 836.423 C 1080.642 850.349 1076.792 864.47 1071.109 878.394 C 1060.174 905.188 1042.68 930.749 1020.52 952.315 C 1009.671 962.905 997.489 973.05 984.309 982.468 C 971.996 991.266 958.424 999.706 943.971 1007.556 C 918.356 1021.466 889.544 1033.87 855.896 1045.476 C 849.284 1047.761 842.522 1050.005 835.983 1052.176 C 821.519 1056.978 806.563 1061.943 792.226 1067.673 C 782.536 1071.542 773.943 1075.427 765.953 1079.55 C 741.771 1092.014 719.902 1108.459 698.752 1124.363 C 689.45 1131.357 679.001 1138.763 666.808 1147.004 C 628.066 1173.187 587.273 1194.938 545.562 1211.652 C 501.689 1229.233 456.832 1241.214 412.24 1247.259 C 386.264 1250.778 360.085 1252.545 334.068 1252.545 Z M 218.839 113.661 L 218.877 113.693 C 213.529 119.901 208.913 126.639 204.768 134.293 C 201.074 141.111 197.839 148.506 194.88 156.897 C 189.383 172.488 185.704 189.238 182.146 205.437 C 179.667 216.722 177.105 228.392 173.95 239.56 C 170.548 251.604 166.197 263.817 160.648 276.897 C 148.257 306.116 131.91 334.573 116.099 362.093 C 101.226 387.984 85.845 414.755 73.998 441.824 C 67.623 456.387 62.737 469.898 59.063 483.128 C 54.941 497.967 52.435 512.083 51.398 526.282 C 49.085 557.605 54.113 590.654 66.768 627.317 C 78.622 661.666 95.777 694.978 110.993 723.036 C 112.991 726.695 115.03 730.419 117.002 734.019 C 129.136 756.169 141.683 779.074 152.545 802.147 C 164.741 828.055 173.413 851.315 179.057 873.255 C 183.868 891.982 187.234 912.704 189.348 936.606 C 191.23 957.909 191.965 979.687 192.676 1000.748 C 192.879 1006.791 193.09 1013.04 193.324 1019.178 C 194.984 1062.551 198.518 1105.597 201.758 1141.984 C 203.229 1158.515 205.556 1177.754 211.655 1195.109 C 214.791 1204.031 218.762 1211.904 223.462 1218.508 C 228.722 1225.902 235.117 1232.032 242.471 1236.732 C 259.736 1247.79 281.393 1250.392 302.227 1251.556 C 312.793 1252.149 323.419 1252.445 334.066 1252.445 C 360.081 1252.446 386.253 1250.679 412.224 1247.16 C 456.81 1241.115 501.658 1229.138 545.523 1211.559 C 587.227 1194.846 628.013 1173.099 666.75 1146.921 C 678.943 1138.681 689.391 1131.275 698.69 1124.282 C 719.844 1108.376 741.716 1091.928 765.906 1079.459 C 773.898 1075.336 782.496 1071.449 792.188 1067.578 C 806.528 1061.848 821.485 1056.882 835.951 1052.08 C 842.49 1049.909 849.252 1047.665 855.862 1045.381 C 889.507 1033.777 918.312 1021.374 943.923 1007.467 C 958.373 999.619 971.941 991.181 984.25 982.385 C 997.426 972.971 1009.605 962.828 1020.449 952.241 C 1042.599 930.685 1060.085 905.137 1071.016 878.355 C 1076.696 864.438 1080.543 850.325 1082.453 836.408 C 1084.452 821.841 1084.324 807.461 1082.074 793.669 C 1079.935 780.59 1075.87 767.516 1071.938 754.872 C 1068.474 743.733 1064.891 732.215 1062.651 720.757 C 1060.136 707.906 1059.612 696.485 1061.045 685.836 C 1064.465 660.092 1079.849 637.742 1094.726 616.128 L 1095.651 614.785 C 1104.332 602.185 1112.529 590.285 1118.851 577.63 C 1122.249 570.83 1124.768 564.471 1126.555 558.188 C 1128.555 551.155 1129.598 544.381 1129.743 537.481 C 1129.918 529.099 1128.757 520.864 1126.191 512.306 C 1123.878 504.588 1120.48 496.822 1115.805 488.561 C 1105.435 470.285 1090.469 452.532 1075.996 435.364 C 1061.328 417.966 1046.162 399.974 1035.76 381.42 C 1030.16 371.43 1026.349 362.078 1024.109 352.831 C 1021.594 342.451 1021.109 332.468 1022.627 322.31 C 1024.367 310.687 1028.966 298.927 1036.686 286.357 C 1043.555 275.172 1052.16 264.465 1060.479 254.11 C 1064.948 248.549 1069.568 242.8 1073.821 237.092 C 1081.664 226.568 1091.911 210.12 1096.183 191.534 C 1098.13 183.068 1098.601 175.013 1097.583 167.592 C 1096.467 159.441 1093.534 151.96 1088.87 145.361 C 1081.783 135.377 1071.525 128.171 1058.38 123.945 C 1047.032 120.297 1033.438 118.827 1017.973 119.576 C 1003.955 120.242 988.092 122.755 970.825 127.044 C 962.813 129.035 954.655 131.125 946.765 133.146 L 942.387 134.268 C 917.399 140.665 892.903 146.825 867.938 151.881 C 840.017 157.535 815.26 160.988 792.253 162.437 C 762.759 164.184 737.407 162.115 712.465 155.921 C 688.502 149.972 665.978 140.614 639.531 128.394 C 610.945 115.187 585.548 104.187 561.885 94.765 C 532.95 83.244 506.24 73.897 480.228 66.191 C 451.443 57.659 429.373 52.893 408.668 50.739 C 375.447 47.282 344.269 49.88 310.543 58.908 C 292.768 63.74 276.26 70.487 261.48 78.963 C 244.85 88.498 230.516 100.184 218.876 113.695 L 218.839 113.661 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 317.036 1266.717 C 307.802 1266.717 298.59 1266.504 289.411 1266.078 C 267.44 1265.062 244.591 1262.535 226.323 1251.011 C 194.247 1230.804 186.761 1191.365 183.452 1151.754 C 179.583 1105.454 177.283 1064.937 176.42 1027.887 C 176.27 1021.385 176.152 1014.875 176.034 1008.362 C 175.27 966.142 174.481 922.485 164.132 880.702 C 152.01 831.803 126.948 785.976 102.712 741.659 C 100.492 737.6 98.274 733.545 96.067 729.49 C 63.095 668.653 28.407 597.565 34.235 523.731 C 39.048 462.335 71.297 406.916 102.483 353.322 C 119.358 324.322 136.808 294.334 149.912 263.526 C 155.701 249.912 160.23 237.183 163.757 224.614 C 167.049 212.88 169.692 200.591 172.245 188.707 C 179.527 154.833 187.058 119.806 210.556 92.992 C 238.769 60.799 279.012 46.398 307.803 39.987 C 342.19 32.416 375.757 30.764 410.418 34.94 C 432.122 37.553 455.21 42.687 483.078 51.094 C 531.198 65.605 580.922 85.898 644.304 116.895 C 693.51 140.96 733.401 157.735 798.935 154.406 C 849.354 151.717 897.795 140.199 951.359 126.549 L 957.847 124.893 C 965.318 122.987 972.776 121.082 980.225 119.224 C 997.762 114.849 1013.888 112.262 1028.157 111.536 C 1062.724 109.751 1087.081 118.572 1100.555 137.742 C 1109.756 150.875 1112.107 166.89 1107.54 185.345 C 1102.817 204.438 1091.938 221.179 1083.646 231.862 C 1079.25 237.525 1074.493 243.224 1069.893 248.737 C 1052.29 269.832 1034.086 291.644 1030.017 318.098 C 1023.51 360.478 1054.412 396.511 1084.297 431.358 C 1099.589 449.189 1115.401 467.628 1126.104 486.757 C 1135.981 504.439 1140.407 520.963 1139.636 537.274 C 1138.349 566.368 1121.108 590.043 1102.853 615.11 L 1101.594 616.839 C 1085.589 638.841 1069.039 661.592 1065.605 688.369 C 1062.484 712.476 1070.469 735.934 1078.193 758.62 C 1082.538 771.387 1087.031 784.588 1089.546 797.835 C 1094.755 825.346 1091.402 855.322 1079.849 884.524 C 1068.996 911.953 1051.308 938.041 1028.696 959.967 C 989.542 998.02 934.979 1028.049 861.891 1051.77 C 855.234 1053.933 848.427 1056.052 841.844 1058.101 C 827.13 1062.68 811.916 1067.415 797.354 1072.97 C 787.546 1076.708 778.858 1080.496 770.794 1084.55 C 745.432 1097.295 722.065 1115.135 703.291 1129.47 C 692.737 1137.529 682.026 1145.376 671.456 1152.797 C 590.616 1209.548 498.5 1246.731 405.061 1260.325 C 375.826 1264.58 346.323 1266.717 317.036 1266.717 Z M 373.602 33.6 C 351.733 33.6 330.036 36.014 307.998 40.866 C 279.339 47.248 239.286 61.575 211.233 93.586 C 187.888 120.224 180.382 155.135 173.125 188.896 C 170.567 200.793 167.923 213.095 164.624 224.856 C 161.086 237.463 156.545 250.228 150.74 263.877 C 137.615 294.737 120.15 324.75 103.261 353.774 C 72.125 407.281 39.929 462.609 35.131 523.8 C 29.322 597.39 63.947 668.336 96.858 729.06 C 99.064 733.113 101.282 737.168 103.502 741.226 C 127.766 785.593 152.856 831.471 165.005 880.484 C 175.38 922.366 176.17 966.075 176.934 1008.344 C 177.051 1014.856 177.169 1021.365 177.321 1027.865 C 178.183 1064.897 180.482 1105.397 184.349 1151.679 C 187.64 1191.057 195.061 1230.252 226.804 1250.248 C 244.895 1261.661 267.606 1264.169 289.452 1265.179 C 327.681 1266.95 366.533 1265.021 404.931 1259.436 C 498.23 1245.862 590.214 1208.733 670.938 1152.062 C 681.498 1144.648 692.201 1136.807 702.744 1128.756 C 721.549 1114.399 744.952 1096.529 770.39 1083.746 C 778.482 1079.679 787.197 1075.879 797.033 1072.129 C 811.621 1066.565 826.849 1061.826 841.576 1057.242 C 848.156 1055.194 854.961 1053.076 861.612 1050.915 C 934.566 1027.237 989.014 997.277 1028.068 959.322 C 1050.589 937.483 1068.205 911.504 1079.01 884.193 C 1090.501 855.149 1093.839 825.345 1088.661 798.003 C 1086.16 784.818 1081.677 771.648 1077.341 758.91 C 1069.585 736.127 1061.566 712.568 1064.714 688.254 C 1068.177 661.249 1084.796 638.403 1100.865 616.31 L 1102.125 614.58 C 1120.298 589.627 1137.464 566.058 1138.739 537.233 C 1139.5 521.093 1135.112 504.727 1125.32 487.197 C 1114.66 468.145 1098.878 449.742 1083.614 431.944 C 1053.597 396.943 1022.559 360.751 1029.13 317.962 C 1033.237 291.261 1051.521 269.35 1069.202 248.16 C 1073.797 242.654 1078.549 236.961 1082.935 231.31 C 1122.967 179.746 1105.978 147.052 1099.818 138.259 C 1086.533 119.359 1062.422 110.661 1028.203 112.435 C 1013.993 113.159 997.926 115.736 980.445 120.097 C 972.997 121.955 965.539 123.859 958.07 125.766 L 951.582 127.42 C 897.971 141.082 849.484 152.61 798.982 155.304 C 793.383 155.589 787.965 155.727 782.719 155.727 C 726.349 155.729 689.037 139.774 643.909 117.704 C 580.573 86.729 530.891 66.452 482.819 51.956 C 455.003 43.564 431.962 38.441 410.311 35.834 C 397.965 34.346 385.756 33.6 373.602 33.6 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 300.003 1280.258 C 292.19 1280.258 284.397 1280.112 276.622 1279.82 C 253.637 1278.959 229.734 1276.523 210.641 1264.645 C 202.512 1259.592 195.444 1252.961 189.633 1244.939 C 184.432 1237.759 180.049 1229.196 176.607 1219.487 C 169.731 1200.093 167.341 1178.345 166.028 1161.565 C 162.584 1117.554 160.743 1076.708 160.4 1036.69 C 160.341 1029.852 160.323 1022.888 160.304 1016.153 C 160.247 994.991 160.189 973.11 158.895 951.7 C 157.442 927.678 154.554 906.856 150.065 888.045 C 144.818 866.067 136.426 842.804 124.41 816.926 C 113.707 793.876 101.224 771.015 89.151 748.906 C 86.775 744.553 84.318 740.053 81.917 735.63 C 65.377 705.095 46.746 668.834 33.973 631.421 C 20.341 591.492 15.101 555.493 17.955 521.367 C 19.228 506.096 22.091 490.923 26.707 474.976 C 30.822 460.762 36.248 446.251 43.296 430.614 C 56.391 401.556 73.291 372.851 89.636 345.091 C 107.59 314.596 126.156 283.063 139.99 250.623 C 146.035 236.446 150.755 223.168 154.418 210.027 C 157.854 197.701 160.575 184.779 163.207 172.283 C 166.916 154.673 170.752 136.464 176.656 119.57 C 179.836 110.475 183.344 102.48 187.381 95.128 C 191.912 86.874 196.988 79.636 202.901 73 C 214.986 59.436 230.661 48.078 249.491 39.243 C 265.908 31.541 284.669 25.76 305.251 22.061 C 322.795 18.928 340.654 17.186 358.332 16.88 C 375.873 16.582 393.944 17.679 412.053 20.15 C 434.809 23.257 458.887 28.761 485.66 36.975 C 512.25 45.131 539.614 55.387 569.319 68.329 C 593.545 78.885 618.76 90.957 648.673 106.321 C 676.935 120.938 699.276 131.403 723.299 138.398 C 735.946 142.081 748.453 144.591 761.537 146.075 C 775.322 147.638 789.753 148.067 805.652 147.388 C 829.492 146.339 855.045 143.126 883.772 137.568 C 910.244 132.446 936.214 125.991 960.545 119.818 C 963.675 119.025 966.802 118.229 969.927 117.434 C 976.456 115.773 983.207 114.054 989.834 112.394 C 1007.579 107.948 1023.913 105.296 1038.378 104.512 C 1054.47 103.635 1068.534 105.052 1080.19 108.725 C 1093.759 113.001 1104.289 120.414 1111.49 130.759 C 1116.305 137.686 1119.235 145.526 1120.201 154.061 C 1121.079 161.828 1120.343 170.239 1118.013 179.059 C 1115.901 187.054 1112.491 195.367 1107.879 203.766 C 1103.684 211.407 1098.593 218.954 1092.749 226.197 C 1088.219 231.81 1083.331 237.463 1078.605 242.929 C 1069.344 253.64 1059.766 264.715 1052.126 276.334 C 1048.011 282.593 1044.784 288.487 1042.26 294.353 C 1039.422 300.945 1037.542 307.328 1036.511 313.867 C 1034.885 324.185 1035.349 334.305 1037.933 344.805 C 1040.236 354.163 1044.183 363.613 1050 373.694 C 1060.808 392.429 1076.636 410.581 1091.942 428.134 C 1108.015 446.567 1124.635 465.627 1135.61 485.51 C 1145.538 503.512 1149.795 520.402 1148.624 537.143 C 1148.141 544.206 1146.709 551.132 1144.25 558.316 C 1142.057 564.721 1139.089 571.189 1135.177 578.091 C 1127.905 590.917 1118.349 603.379 1109.108 615.431 C 1108.425 616.321 1107.743 617.21 1107.061 618.101 C 1097.805 630.192 1089.599 641.15 1082.911 652.827 C 1075.245 666.207 1070.782 678.662 1069.266 690.904 C 1067.886 701.975 1068.784 713.85 1072.004 727.206 C 1074.88 739.126 1079.307 751.13 1083.589 762.738 C 1088.339 775.61 1093.249 788.921 1096.12 802.285 C 1099.193 816.598 1099.973 831.56 1098.437 846.758 C 1096.971 861.253 1093.403 875.963 1087.833 890.481 C 1077.106 918.438 1059.289 944.956 1036.306 967.168 C 1025.322 977.795 1012.929 987.897 999.475 997.192 C 986.898 1005.881 973.005 1014.132 958.182 1021.716 C 931.805 1035.213 902.185 1046.894 867.63 1057.425 C 860.935 1059.467 854.084 1061.46 847.459 1063.388 C 832.482 1067.746 816.996 1072.253 802.185 1077.64 C 792.212 1081.265 783.409 1084.967 775.266 1088.956 C 750.823 1100.932 729.185 1117.125 707.333 1134.06 C 695.617 1143.143 685.742 1150.7 675.635 1158.055 C 635.198 1187.492 590.985 1212.236 544.229 1231.6 C 496.98 1251.169 447.7 1265.003 397.759 1272.72 C 365.306 1277.734 332.521 1280.258 300.003 1280.258 Z M 202.973 73.066 C 197.067 79.696 191.994 86.928 187.466 95.175 C 183.433 102.523 179.927 110.513 176.749 119.603 C 170.846 136.49 167.012 154.696 163.304 172.303 C 160.671 184.801 157.949 197.724 154.512 210.054 C 150.848 223.199 146.127 236.481 140.08 250.661 C 126.244 283.107 107.677 314.643 89.721 345.141 C 73.378 372.899 56.479 401.602 43.386 430.655 C 36.34 446.288 30.916 460.795 26.803 475.004 C 22.189 490.944 19.326 506.112 18.054 521.375 C 15.202 555.487 20.439 591.473 34.067 631.389 C 46.838 668.795 65.466 705.051 82.005 735.583 C 84.405 740.006 86.863 744.506 89.239 748.858 C 101.312 770.968 113.797 793.832 124.501 816.884 C 136.521 842.769 144.914 866.037 150.163 888.022 C 154.653 906.839 157.542 927.667 158.995 951.695 C 160.29 973.107 160.349 994.991 160.405 1016.153 C 160.423 1022.888 160.441 1029.853 160.5 1036.691 C 160.843 1076.706 162.684 1117.549 166.128 1161.558 C 167.441 1178.331 169.829 1200.072 176.702 1219.454 C 180.14 1229.153 184.518 1237.709 189.715 1244.881 C 195.518 1252.893 202.576 1259.515 210.694 1264.561 C 229.767 1276.427 253.655 1278.86 276.627 1279.721 C 316.75 1281.225 357.502 1278.839 397.739 1272.622 C 447.673 1264.907 496.944 1251.075 544.185 1231.51 C 590.935 1212.148 635.139 1187.407 675.572 1157.977 C 685.677 1150.622 695.552 1143.066 707.268 1133.983 C 729.122 1117.045 750.764 1100.847 775.217 1088.868 C 783.362 1084.877 792.17 1081.174 802.146 1077.548 C 816.961 1072.16 832.449 1067.652 847.427 1063.294 C 854.052 1061.366 860.9 1059.373 867.595 1057.331 C 902.144 1046.802 931.76 1035.124 958.133 1021.629 C 972.951 1014.047 986.84 1005.798 999.414 997.11 C 1012.862 987.818 1025.25 977.719 1036.229 967.096 C 1059.204 944.895 1077.014 918.389 1087.734 890.446 C 1093.301 875.937 1096.867 861.236 1098.332 846.75 C 1099.867 831.562 1099.089 816.61 1096.016 802.309 C 1093.146 788.951 1088.238 775.644 1083.49 762.775 C 1079.207 751.165 1074.776 739.158 1071.901 727.232 C 1068.676 713.864 1067.78 701.978 1069.16 690.895 C 1070.677 678.639 1075.146 666.171 1082.817 652.78 C 1089.509 641.097 1097.717 630.137 1106.974 618.044 C 1107.656 617.153 1108.339 616.263 1109.021 615.373 C 1118.26 603.324 1127.814 590.865 1135.083 578.045 C 1138.993 571.148 1141.958 564.686 1144.15 558.287 C 1146.606 551.111 1148.035 544.193 1148.518 537.139 C 1149.688 520.418 1145.434 503.547 1135.516 485.563 C 1124.546 465.689 1107.929 446.633 1091.86 428.204 C 1076.55 410.647 1060.72 392.492 1049.907 373.749 C 1044.086 363.659 1040.137 354.2 1037.832 344.833 C 1035.245 334.32 1034.778 324.188 1036.406 313.855 C 1037.439 307.308 1039.323 300.917 1042.162 294.318 C 1044.688 288.445 1047.92 282.546 1052.039 276.283 C 1059.684 264.659 1069.263 253.581 1078.526 242.867 C 1083.251 237.402 1088.137 231.751 1092.667 226.138 C 1098.507 218.9 1103.594 211.358 1107.786 203.722 C 1112.395 195.329 1115.802 187.025 1117.911 179.037 C 1120.239 170.228 1120.974 161.83 1120.098 154.075 C 1119.134 145.557 1116.209 137.732 1111.406 130.819 C 1097.972 111.521 1073.401 102.704 1038.381 104.615 C 1023.922 105.399 1007.596 108.05 989.857 112.495 C 983.231 114.155 976.479 115.873 969.949 117.534 C 966.825 118.329 963.699 119.125 960.57 119.919 C 936.237 126.091 910.266 132.546 883.792 137.67 C 855.059 143.23 829.5 146.442 805.655 147.491 C 789.753 148.173 775.316 147.741 761.524 146.177 C 748.435 144.694 735.922 142.181 723.27 138.496 C 711.823 135.163 699.943 130.763 686.951 125.043 C 676.245 120.33 664.426 114.584 648.626 106.413 C 618.716 91.049 593.503 78.977 569.279 68.423 C 539.578 55.483 512.216 45.228 485.63 37.072 C 458.861 28.859 434.789 23.357 412.038 20.251 C 393.934 17.779 375.867 16.675 358.333 16.981 C 340.66 17.286 322.807 19.028 305.267 22.159 C 284.694 25.856 265.942 31.635 249.533 39.334 C 230.715 48.163 215.05 59.512 202.973 73.066 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 283.369 1294.799 C 276.843 1294.799 270.318 1294.703 263.787 1294.511 C 239.678 1293.799 214.599 1291.442 194.52 1279.111 C 158.658 1257.088 150.773 1212.399 147.789 1171.59 C 144.738 1129.862 143.316 1087.49 143.562 1045.652 C 143.605 1038.5 143.696 1031.213 143.783 1024.166 C 144.313 981.685 144.859 937.757 135.204 895.727 C 123.934 846.676 98.966 800.879 74.818 756.591 C 72.219 751.825 69.624 747.064 67.047 742.302 C 31.328 676.323 -6.188 599.22 0.86 519.087 C 6.652 453.243 41.95 393.933 76.086 336.574 C 102.833 291.633 130.49 245.16 144.289 195.377 C 147.862 182.485 150.658 168.943 153.362 155.847 C 160.942 119.14 168.78 81.184 194.628 52.626 C 223.663 20.546 269.334 8.204 302.534 3.499 C 429.224 -14.451 550.99 39.774 653.388 95.191 C 702.904 121.988 740.799 139.924 801.096 139.926 C 804.753 139.926 808.485 139.861 812.315 139.727 C 870.128 137.704 927.148 123.228 982.292 109.228 C 987.945 107.793 993.591 106.36 999.229 104.942 C 1025.795 98.26 1048.995 95.546 1068.172 96.887 C 1093.655 98.663 1112.123 107.608 1123.063 123.472 C 1132.542 137.22 1134.619 153.927 1129.235 173.131 C 1124.875 188.689 1115.362 205.755 1102.451 221.188 C 1097.783 226.767 1092.762 232.382 1087.906 237.812 C 1068.413 259.611 1048.256 282.151 1043.771 309.915 C 1036.797 353.062 1069.027 389.433 1100.195 424.607 C 1130.715 459.049 1162.275 494.665 1158.383 537.22 C 1155.643 567.17 1135.453 592.264 1115.927 616.532 C 1096.868 640.218 1077.161 664.711 1073.693 693.69 C 1070.695 718.73 1080.365 743.116 1089.716 766.7 C 1094.876 779.714 1100.213 793.172 1103.453 806.72 C 1116.826 862.638 1094.216 927.155 1044.446 975.093 C 1004.614 1013.458 948.722 1042.539 873.576 1063.995 C 866.822 1065.924 859.913 1067.799 853.23 1069.612 C 828.622 1076.291 803.175 1083.197 780.066 1094.232 C 752.056 1107.607 727.544 1127.003 703.839 1145.758 C 696.154 1151.838 688.207 1158.125 680.261 1164.112 C 622.375 1207.728 556.503 1241.279 484.474 1263.831 C 418.768 1284.404 351.207 1294.799 283.369 1294.799 Z M 352.811 0.898 C 336.202 0.898 319.477 2.005 302.661 4.388 C 269.607 9.073 224.15 21.348 195.296 53.228 C 169.612 81.604 161.8 119.438 154.244 156.028 C 151.537 169.138 148.737 182.695 145.156 195.616 C 131.326 245.516 103.636 292.041 76.859 337.034 C 42.775 394.305 7.53 453.526 1.756 519.164 C -5.271 599.049 32.181 676.008 67.837 741.873 C 70.414 746.633 73.01 751.393 75.608 756.159 C 99.785 800.501 124.784 846.352 136.081 895.524 C 145.761 937.659 145.213 981.642 144.683 1024.176 C 144.595 1031.221 144.505 1038.506 144.462 1045.656 C 144.216 1087.471 145.637 1129.819 148.686 1171.522 C 151.654 1212.105 159.475 1256.532 194.991 1278.342 C 214.889 1290.563 239.828 1292.903 263.814 1293.61 C 338.109 1295.797 412.272 1285.493 484.204 1262.971 C 556.135 1240.45 621.915 1206.947 679.719 1163.392 C 687.657 1157.411 695.598 1151.127 703.279 1145.05 C 727.023 1126.263 751.577 1106.836 779.676 1093.417 C 802.86 1082.347 828.346 1075.43 852.993 1068.741 C 859.672 1066.928 866.579 1065.053 873.328 1063.127 C 948.328 1041.712 1004.097 1012.702 1043.819 974.441 C 1093.36 926.723 1115.874 862.536 1102.575 806.925 C 1099.349 793.44 1094.025 780.013 1088.877 767.028 C 1079.484 743.34 1069.774 718.846 1072.797 693.58 C 1076.296 664.345 1096.085 639.75 1115.224 615.965 C 1134.666 591.802 1154.771 566.816 1157.485 537.136 C 1161.343 494.968 1129.915 459.501 1099.521 425.201 C 1068.214 389.87 1035.84 353.337 1042.88 309.767 C 1047.407 281.744 1067.655 259.104 1087.234 237.209 C 1092.087 231.784 1097.101 226.175 1101.76 220.606 C 1114.59 205.27 1124.039 188.322 1128.366 172.884 C 1133.675 153.95 1131.639 137.496 1122.32 123.98 C 1111.544 108.352 1093.303 99.538 1068.108 97.781 C 1049.015 96.452 1025.921 99.153 999.445 105.811 C 993.81 107.229 988.165 108.662 982.511 110.097 C 927.322 124.108 870.254 138.596 812.345 140.621 C 745.153 142.983 705.608 124.471 652.959 95.978 C 564.292 47.996 461.092 0.898 352.811 0.898 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(255,239,227)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 28px 8px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.060em",
      color: "rgb(244,124,32)",
      flexShrink: 0
    }
  }, "Pricing")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 48,
      textAlign: "center",
      lineHeight: 1.2000000476837158,
      color: "rgb(226,232,240)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Invest in your\xA0future"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      textAlign: "center",
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "All plans start with a free trial. No credit card required to begin.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 24,
      padding: "20px 20px 20px 20px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 380,
      borderRadius: 24,
      backgroundColor: "rgba(255,255,255,0.9)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240), 0px 53px 32px 0px rgba(0,0,0,0.02), 0px 23px 23px 0px rgba(0,0,0,0.04), 0px 6px 13px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "24px 24px 24px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 60,
      borderRadius: 16,
      backgroundColor: "rgba(248,248,246,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4,
      width: 16,
      height: 16,
      color: "rgb(244,124,32)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8 0 C 9.061 0 10.078 0.421 10.828 1.172 C 11.579 1.922 12 2.939 12 4 C 12 5.061 11.579 6.078 10.828 6.828 C 10.078 7.579 9.061 8 8 8 C 6.939 8 5.922 7.579 5.172 6.828 C 4.421 6.078 4 5.061 4 4 C 4 2.939 4.421 1.922 5.172 1.172 C 5.922 0.421 6.939 0 8 0 Z M 8 10 C 12.42 10 16 11.79 16 14 L 16 16 L 0 16 L 0 14 C 0 11.79 3.58 10 8 10 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(244,124,32)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Essential"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 48,
      lineHeight: "56px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-1px",
      color: "rgb(45,52,54)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 48
    }
  }, "499"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 48
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 12,
      textTransform: "uppercase"
    }
  }, "/ mo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 306,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "20 questions per day")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "1 exam category")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "Basic progress tracking")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "Community access"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 9.164251327514648,
      boxShadow: "inset 0 0 0 1px rgb(0,136,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: "100%",
      color: "rgb(0,136,255)",
      flexShrink: 0
    }
  }, "Start Free"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 380,
      borderRadius: 24,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(233,236,244), 8px 8px 16px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 30,
      padding: "24px 24px 24px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 60,
      borderRadius: 16,
      backgroundColor: "rgba(248,248,246,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 18,
    viewBox: "0 0 20 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 18,
      color: "rgb(244,124,32)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3 18 L 3 16 L 17 16 L 17 18 L 3 18 Z M 3 14.5 L 1.725 6.475 C 1.692 6.475 1.654 6.479 1.612 6.488 C 1.57 6.497 1.533 6.501 1.5 6.5 C 1.083 6.5 0.729 6.354 0.438 6.062 C 0.147 5.77 0.001 5.416 0 5 C -0.001 4.584 0.145 4.23 0.438 3.938 C 0.731 3.646 1.085 3.5 1.5 3.5 C 1.915 3.5 2.27 3.646 2.563 3.938 C 2.856 4.23 3.002 4.584 3 5 C 3 5.117 2.987 5.225 2.962 5.325 C 2.937 5.425 2.908 5.517 2.875 5.6 L 6 7 L 9.125 2.725 C 8.942 2.592 8.792 2.417 8.675 2.2 C 8.558 1.983 8.5 1.75 8.5 1.5 C 8.5 1.083 8.646 0.729 8.938 0.437 C 9.23 0.145 9.584 -0.001 10 0 C 10.416 0.001 10.77 0.147 11.063 0.438 C 11.356 0.729 11.501 1.083 11.5 1.5 C 11.5 1.75 11.442 1.983 11.325 2.2 C 11.208 2.417 11.058 2.592 10.875 2.725 L 14 7 L 17.125 5.6 C 17.092 5.517 17.062 5.425 17.037 5.325 C 17.012 5.225 16.999 5.117 17 5 C 17 4.583 17.146 4.229 17.438 3.937 C 17.73 3.645 18.084 3.499 18.5 3.5 C 18.916 3.501 19.27 3.647 19.563 3.938 C 19.856 4.229 20.001 4.583 20 5 C 19.999 5.417 19.853 5.771 19.563 6.063 C 19.273 6.355 18.919 6.501 18.5 6.5 C 18.467 6.5 18.429 6.496 18.388 6.488 C 18.347 6.48 18.309 6.476 18.275 6.475 L 17 14.5 L 3 14.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(244,124,32)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Pro"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 48,
      lineHeight: "56px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-1px",
      color: "rgb(45,52,54)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 48
    }
  }, "699"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 48
    }
  }, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: 12,
      textTransform: "uppercase"
    }
  }, "/ mo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "Unlimited questions")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "All 180+ exam categories")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "Full mock exams & simulations")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "AI adaptive study plan")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "Predictive readiness score")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "Flashcards & smart notes")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "Priority support"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(0,136,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 27px 16px 27px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: "100%",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Start Pro")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 174,
      top: 0,
      width: 169,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(0,136,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 27px 10px 27px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Most Popular"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 380,
      borderRadius: 24,
      backgroundColor: "rgba(255,255,255,0.9)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240), 0px 53px 32px 0px rgba(0,0,0,0.02), 0px 23px 23px 0px rgba(0,0,0,0.04), 0px 6px 13px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "24px 24px 24px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60,
      height: 60,
      borderRadius: 16,
      backgroundColor: "rgba(248,248,246,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: 20,
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22,
    height: 18,
    viewBox: "0 0 22 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 3,
      width: 22,
      height: 18,
      color: "rgb(244,124,32)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20 16 L 22 16 L 22 18 L 0 18 L 0 16 L 2 16 L 2 1 C 2 0.735 2.105 0.48 2.293 0.293 C 2.48 0.105 2.735 0 3 0 L 13 0 C 13.265 0 13.52 0.105 13.707 0.293 C 13.895 0.48 14 0.735 14 1 L 14 16 L 16 16 L 16 6 L 19 6 C 19.265 6 19.52 6.105 19.707 6.293 C 19.895 6.48 20 6.735 20 7 L 20 16 Z M 6 8 L 6 10 L 10 10 L 10 8 L 6 8 Z M 6 4 L 6 6 L 10 6 L 10 4 L 6 4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(244,124,32)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Enterprise"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 48,
      lineHeight: "56px",
      textBox: "trim-both cap alphabetic",
      letterSpacing: "-1px",
      color: "rgb(45,52,54)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Custom ")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 306,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "Everything in Pro")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "Admin dashboard")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "Custom syllabus schedule")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "Dedicated support calendar")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "LMS integration")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 15,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 30,
      height: 30,
      borderRadius: 999,
      backgroundColor: "rgb(233,236,244)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.4,
      height: 22.4,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8.960,
    height: 6.160,
    viewBox: "0 0 8.960 6.160",
    fill: "none",
    style: {
      position: "absolute",
      left: 6.72,
      top: 7.84,
      width: 8.96,
      height: 6.16,
      color: "rgb(92,92,92)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.667 0.707 C 10.058 0.317 10.058 -0.317 9.667 -0.707 C 9.277 -1.098 8.643 -1.098 8.253 -0.707 L 8.96 0 L 9.667 0.707 Z M 2.8 6.16 L 2.093 6.867 C 2.483 7.258 3.117 7.258 3.507 6.867 L 2.8 6.16 Z M 0.707 2.653 C 0.317 2.262 -0.317 2.262 -0.707 2.653 C -1.098 3.043 -1.098 3.677 -0.707 4.067 L 0 3.36 L 0.707 2.653 Z M 8.96 0 L 8.253 -0.707 L 2.093 5.453 L 2.8 6.16 L 3.507 6.867 L 9.667 0.707 L 8.96 0 Z M 2.8 6.16 L 3.507 5.453 L 0.707 2.653 L 0 3.36 L -0.707 4.067 L 2.093 6.867 L 2.8 6.16 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "18px",
      color: "rgb(45,52,54)",
      flexGrow: 1
    }
  }, "API access"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 9.164251327514648,
      boxShadow: "inset 0 0 0 1px rgb(0,136,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: "100%",
      color: "rgb(0,136,255)",
      flexShrink: 0
    }
  }, "Contact Sales")))), /*#__PURE__*/React.createElement("svg", {
    width: 631,
    height: 705,
    viewBox: "0 0 631 705",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(1,0,0,-1,-179,309)",
      transformOrigin: "0 0",
      width: 631,
      height: 705,
      color: "rgba(248,248,246,0.7)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 344.624 412.107 C 344.32 412.107 344.018 412.059 343.722 411.949 C 343.282 411.787 342.955 411.497 342.826 411.155 C 342.698 410.817 342.755 410.445 342.825 410.094 C 343.302 407.717 344.343 405.416 345.835 403.442 C 347.253 401.568 348.591 399.799 351.367 400.908 C 352.18 401.234 352.772 401.627 353.176 402.109 C 353.647 402.67 353.896 403.402 353.896 404.225 C 353.896 404.981 353.682 405.772 353.292 406.452 C 352.532 407.783 351.234 408.751 349.945 409.598 C 349.12 410.141 348.267 410.664 347.407 411.153 C 346.545 411.643 345.574 412.107 344.624 412.107 Z M 349.766 400.619 C 348.037 400.619 346.982 402.015 345.879 403.475 C 344.391 405.442 343.353 407.735 342.878 410.104 C 342.809 410.448 342.753 410.811 342.877 411.136 C 343.001 411.463 343.316 411.741 343.741 411.898 C 344.938 412.341 346.252 411.747 347.38 411.105 C 348.238 410.618 349.092 410.095 349.915 409.553 C 351.198 408.709 352.49 407.746 353.246 406.425 C 354.215 404.731 353.868 403.018 353.135 402.144 C 352.736 401.67 352.151 401.281 351.347 400.959 C 350.76 400.723 350.237 400.619 349.766 400.619 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 342.639 419.444 C 342.205 419.444 341.796 419.396 341.404 419.283 C 340.806 419.112 340.286 418.844 339.813 418.467 C 339.297 418.053 338.935 417.564 338.765 417.052 C 338.495 416.236 338.384 415.384 338.276 414.559 L 338.255 414.399 C 337.62 409.561 337.078 405.716 336.548 402.297 L 336.544 402.267 C 336.356 401.061 336.143 399.694 336.711 398.43 C 336.833 398.159 336.991 397.9 337.145 397.651 C 337.255 397.47 337.369 397.284 337.469 397.095 C 338.023 396.036 338.059 394.891 338.05 393.9 C 338.045 393.466 338.064 392.963 338.231 392.521 C 338.412 392.041 338.738 391.704 339.228 391.493 C 339.797 391.248 340.393 391.2 340.968 391.154 L 341.093 391.144 C 342.755 391.012 344.41 390.704 346.162 390.378 C 348.073 390.022 350.049 389.654 352.141 389.504 C 352.342 389.489 352.541 389.473 352.742 389.457 C 353.208 389.42 353.691 389.382 354.161 389.365 C 354.913 389.334 355.549 389.347 356.192 389.496 C 356.729 389.622 357.488 389.909 358.056 390.554 C 358.516 391.078 358.803 391.798 358.907 392.695 C 358.962 393.17 358.965 393.653 358.968 394.12 C 358.97 394.396 358.971 394.681 358.983 394.965 C 359.049 396.487 359.428 398.051 360.049 399.37 C 360.15 399.583 360.258 399.793 360.363 399.997 C 360.742 400.734 361.1 401.432 361.146 402.278 C 361.177 402.827 361.065 403.449 360.813 404.129 C 359.706 407.11 357.427 409.344 354.783 411.749 C 352.945 413.422 350.955 415.087 348.699 416.838 C 347.874 417.48 346.939 418.208 345.937 418.76 C 345.595 418.949 345.215 419.087 344.806 419.17 C 344.007 419.334 343.294 419.444 342.639 419.444 Z M 354.749 389.407 C 354.561 389.407 354.367 389.412 354.165 389.419 C 353.695 389.437 353.213 389.475 352.747 389.512 C 352.547 389.527 352.348 389.544 352.147 389.558 C 350.057 389.708 348.082 390.076 346.173 390.431 C 344.419 390.758 342.763 391.066 341.098 391.198 L 340.973 391.208 C 340.402 391.254 339.811 391.3 339.251 391.542 C 338.229 391.983 338.097 392.936 338.105 393.899 C 338.115 394.896 338.077 396.05 337.517 397.12 C 337.418 397.311 337.303 397.498 337.192 397.678 C 337.039 397.927 336.882 398.184 336.762 398.452 C 336.2 399.701 336.402 401.001 336.599 402.258 L 336.603 402.288 C 337.132 405.707 337.675 409.553 338.31 414.391 L 338.331 414.552 C 338.438 415.374 338.548 416.224 338.818 417.035 C 338.984 417.536 339.339 418.017 339.847 418.425 C 340.315 418.798 340.83 419.061 341.42 419.231 C 342.392 419.51 343.473 419.388 344.798 419.118 C 345.2 419.035 345.576 418.899 345.913 418.713 C 346.911 418.163 347.845 417.437 348.668 416.796 C 350.922 415.046 352.911 413.381 354.749 411.709 C 357.388 409.309 359.661 407.08 360.764 404.11 C 361.013 403.438 361.124 402.823 361.094 402.282 C 361.048 401.446 360.693 400.754 360.316 400.022 C 360.211 399.818 360.102 399.607 360.002 399.394 C 359.377 398.068 358.996 396.496 358.93 394.967 C 358.918 394.683 358.917 394.397 358.914 394.121 C 358.912 393.655 358.909 393.173 358.855 392.702 C 358.752 391.816 358.47 391.105 358.017 390.591 C 357.458 389.956 356.71 389.674 356.18 389.55 C 355.716 389.443 355.256 389.407 354.749 389.407 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 342.022 427.653 C 340.736 427.653 339.584 427.382 338.645 426.854 C 337.93 426.451 337.307 425.944 336.74 425.305 C 336.139 424.624 335.72 423.912 335.492 423.189 C 335.112 421.985 334.853 420.748 334.603 419.552 L 334.469 418.917 C 333.009 412.062 331.267 405.527 329.29 399.494 C 328.628 397.48 327.878 395.196 328.735 393.025 C 328.916 392.566 329.165 392.142 329.406 391.73 C 329.578 391.436 329.756 391.133 329.903 390.826 C 330.723 389.106 330.578 387.157 330.328 385.477 C 330.079 383.764 330.1 381.916 332.148 381.19 C 333.12 380.846 334.126 380.883 335.098 380.92 L 335.452 380.932 C 339.674 381.072 343.86 380.162 348.284 379.2 C 350.105 378.804 351.988 378.394 353.884 378.06 L 354.807 377.895 C 355.616 377.749 356.453 377.598 357.273 377.479 C 358.378 377.318 359.56 377.177 360.777 377.353 C 362.133 377.552 363.311 378.148 364.094 379.03 C 364.906 379.945 365.363 381.219 365.453 382.818 C 365.493 383.562 365.457 384.31 365.421 385.032 C 365.394 385.575 365.367 386.136 365.373 386.691 C 365.399 389.208 366.151 391.853 367.436 393.949 C 367.67 394.331 367.924 394.702 368.177 395.073 C 368.948 396.202 369.747 397.37 369.944 398.804 C 370.075 399.748 369.941 400.81 369.535 402.052 C 367.909 407.017 364.157 410.943 360.767 414.234 C 357.13 417.763 353.2 420.997 350.183 423.42 C 348.66 424.642 347.086 425.906 345.318 426.876 C 344.623 427.257 343.922 427.492 343.233 427.575 C 342.82 427.628 342.415 427.653 342.022 427.653 Z M 334.188 381.389 C 333.551 381.389 332.913 381.44 332.312 381.653 C 330.603 382.259 330.582 383.815 330.814 385.407 C 331.074 387.159 331.223 389.199 330.346 391.038 L 330.346 391.038 C 330.19 391.364 330.007 391.677 329.829 391.979 C 329.587 392.392 329.358 392.782 329.192 393.206 C 328.399 395.212 329.12 397.407 329.756 399.342 C 331.738 405.392 333.485 411.943 334.948 418.815 L 335.082 419.452 C 335.33 420.637 335.587 421.862 335.959 423.042 C 336.167 423.7 336.553 424.352 337.107 424.981 C 337.637 425.579 338.219 426.052 338.885 426.427 C 340.02 427.065 341.502 427.295 343.176 427.092 C 343.802 427.015 344.444 426.799 345.085 426.449 C 346.815 425.5 348.372 424.249 349.878 423.04 C 352.887 420.624 356.805 417.4 360.427 413.884 C 363.775 410.635 367.479 406.761 369.07 401.902 C 369.453 400.732 369.581 399.742 369.46 398.874 C 369.278 397.554 368.547 396.484 367.773 395.351 C 367.515 394.974 367.257 394.596 367.019 394.207 C 365.689 392.038 364.911 389.3 364.883 386.698 C 364.877 386.128 364.905 385.56 364.933 385.01 C 364.967 384.299 365.003 383.565 364.964 382.847 C 364.882 381.381 364.455 380.174 363.728 379.357 C 363.022 378.56 361.949 378.021 360.707 377.84 C 359.555 377.672 358.414 377.809 357.344 377.965 C 356.532 378.083 355.699 378.233 354.895 378.379 L 353.969 378.545 C 352.082 378.876 350.205 379.285 348.388 379.68 C 343.934 380.649 339.725 381.563 335.436 381.424 L 335.08 381.411 C 334.785 381.399 334.487 381.389 334.188 381.389 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 340.904 435.527 C 339.121 435.527 337.444 434.993 336.12 433.992 C 335.335 433.398 334.646 432.682 334.012 431.803 C 333.382 430.921 332.924 430.026 332.653 429.143 C 332.192 427.646 331.818 426.111 331.455 424.626 C 331.346 424.18 331.237 423.734 331.126 423.29 C 328.782 413.911 325.868 404.898 322.464 396.502 C 321.407 393.902 320.093 390.667 321.183 387.727 C 321.411 387.112 321.743 386.534 322.063 385.976 C 322.301 385.561 322.548 385.132 322.749 384.692 C 323.904 382.166 323.553 379.354 323.057 376.936 C 322.588 374.623 322.479 372.137 325.23 371.247 C 326.532 370.827 327.91 370.943 329.245 371.058 C 329.435 371.074 329.624 371.09 329.813 371.105 C 336.581 371.635 343.161 370.025 350.13 368.32 C 351.957 367.873 353.846 367.411 355.723 366.995 C 356.063 366.919 356.402 366.844 356.741 366.767 C 357.965 366.494 359.23 366.21 360.468 365.974 C 362.005 365.68 363.647 365.408 365.323 365.591 C 367.172 365.795 368.771 366.559 369.827 367.744 C 371.194 369.278 371.536 371.403 371.582 372.915 C 371.613 373.915 371.539 374.925 371.468 375.902 C 371.41 376.708 371.349 377.542 371.345 378.37 C 371.334 381.983 372.473 385.75 374.47 388.706 C 374.842 389.255 375.253 389.796 375.649 390.32 C 376.803 391.84 377.996 393.412 378.33 395.342 C 378.552 396.619 378.404 398.032 377.862 399.789 C 375.839 406.361 371.19 411.635 366.467 416.354 C 361.686 421.132 356.407 425.55 351.414 429.611 C 349.254 431.369 347.021 433.187 344.511 434.559 C 343.491 435.117 342.549 435.424 341.63 435.498 C 341.386 435.518 341.145 435.527 340.904 435.527 Z M 327.366 371.006 C 326.649 371.006 325.936 371.077 325.246 371.299 C 322.536 372.176 322.646 374.635 323.11 376.925 C 323.607 379.352 323.96 382.175 322.799 384.714 C 322.595 385.157 322.349 385.587 322.11 386.003 C 321.79 386.559 321.46 387.135 321.234 387.746 C 320.15 390.665 321.405 393.755 322.513 396.482 C 325.919 404.88 328.834 413.895 331.179 423.277 C 331.29 423.721 331.398 424.167 331.507 424.614 C 331.87 426.097 332.245 427.632 332.704 429.127 C 332.974 430.004 333.429 430.894 334.056 431.77 C 334.686 432.645 335.372 433.357 336.153 433.948 C 337.644 435.075 339.588 435.606 341.625 435.443 C 342.536 435.371 343.472 435.066 344.484 434.511 C 346.99 433.14 349.221 431.324 351.379 429.568 C 356.37 425.508 361.648 421.092 366.427 416.316 C 371.145 411.601 375.789 406.334 377.809 399.773 C 378.348 398.024 378.496 396.619 378.276 395.351 C 377.945 393.434 376.755 391.868 375.605 390.352 C 375.208 389.829 374.796 389.287 374.424 388.736 C 372.42 385.771 371.278 381.992 371.29 378.37 C 371.293 377.54 371.353 376.704 371.412 375.897 C 371.483 374.922 371.557 373.913 371.527 372.916 C 371.48 371.412 371.141 369.3 369.785 367.779 C 368.739 366.605 367.152 365.846 365.316 365.644 C 363.648 365.462 362.011 365.732 360.478 366.025 C 359.24 366.262 357.975 366.545 356.752 366.819 C 356.413 366.895 356.073 366.971 355.734 367.047 C 353.858 367.463 351.969 367.924 350.142 368.371 C 343.168 370.077 336.578 371.686 329.808 371.158 C 329.618 371.143 329.429 371.127 329.239 371.111 C 328.621 371.06 327.992 371.006 327.366 371.006 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 339.076 443.671 C 337.206 443.671 335.221 442.828 333.495 441.276 C 332.616 440.485 331.842 439.545 331.127 438.401 C 330.447 437.305 329.936 436.201 329.609 435.118 C 329.093 433.407 328.631 431.657 328.186 429.966 C 327.987 429.21 327.781 428.429 327.574 427.664 C 324.345 415.752 320.26 404.268 315.432 393.533 C 313.938 390.216 312.079 386.087 313.432 382.305 C 313.714 381.516 314.132 380.778 314.537 380.064 C 314.839 379.533 315.15 378.985 315.402 378.419 C 316.865 375.143 316.309 371.508 315.573 368.382 C 315.274 367.103 314.971 365.454 315.292 364.038 C 315.631 362.536 316.596 361.56 318.242 361.055 C 319.915 360.542 321.692 360.741 323.411 360.932 C 323.669 360.961 323.926 360.989 324.183 361.015 C 328.334 361.444 332.85 361.226 337.989 360.348 C 342.582 359.564 347.27 358.334 351.803 357.144 C 353.675 356.652 355.611 356.144 357.526 355.67 C 357.849 355.591 358.171 355.511 358.492 355.431 C 360.18 355.011 361.925 354.578 363.634 354.208 C 365.619 353.778 367.739 353.376 369.901 353.568 C 372.295 353.784 374.362 354.744 375.723 356.268 C 377.487 358.243 377.897 360.994 377.93 362.953 C 377.952 364.224 377.842 365.505 377.735 366.745 C 377.644 367.809 377.55 368.909 377.538 370.003 C 377.488 374.674 379.002 379.522 381.693 383.305 C 382.2 384.018 382.762 384.719 383.305 385.396 C 384.856 387.329 386.458 389.328 386.934 391.805 C 387.248 393.433 387.078 395.259 386.398 397.551 C 383.878 406.043 377.867 412.95 372.319 418.588 C 366.061 424.947 359.237 430.641 352.783 435.927 C 349.974 438.228 347.07 440.608 343.81 442.389 C 342.772 442.956 341.579 443.337 340.057 443.592 C 339.736 443.644 339.407 443.67 339.076 443.671 Z M 320.677 360.782 C 319.858 360.782 319.046 360.865 318.258 361.107 C 314.696 362.2 314.929 365.392 315.627 368.369 C 316.364 371.503 316.922 375.15 315.453 378.441 C 315.199 379.009 314.887 379.559 314.585 380.09 C 314.181 380.803 313.764 381.539 313.484 382.323 C 312.137 386.085 313.993 390.203 315.483 393.511 C 320.311 404.249 324.398 415.735 327.627 427.651 C 327.835 428.415 328.041 429.197 328.239 429.952 C 328.685 431.644 329.146 433.392 329.662 435.103 C 329.988 436.181 330.496 437.281 331.174 438.372 C 331.885 439.512 332.657 440.448 333.532 441.236 C 335.552 443.053 337.928 443.891 340.049 443.537 C 341.564 443.285 342.752 442.905 343.784 442.341 C 347.04 440.562 349.942 438.184 352.749 435.885 C 359.202 430.6 366.024 424.907 372.281 418.55 C 377.824 412.917 383.83 406.016 386.347 397.535 C 387.024 395.252 387.194 393.435 386.881 391.815 C 386.408 389.352 384.809 387.359 383.263 385.431 C 382.719 384.752 382.156 384.051 381.649 383.337 C 378.951 379.545 377.433 374.685 377.484 370.002 C 377.496 368.907 377.59 367.806 377.682 366.741 C 377.788 365.502 377.898 364.222 377.876 362.954 C 377.843 361.004 377.436 358.267 375.683 356.305 C 374.331 354.79 372.276 353.838 369.896 353.622 C 367.742 353.431 365.627 353.833 363.646 354.261 C 361.937 354.631 360.192 355.065 358.506 355.484 C 358.184 355.564 357.861 355.644 357.539 355.724 C 355.625 356.197 353.689 356.705 351.817 357.196 C 347.283 358.387 342.594 359.618 337.999 360.402 C 332.854 361.28 328.334 361.498 324.178 361.069 C 323.92 361.043 323.663 361.014 323.404 360.986 C 322.503 360.884 321.586 360.782 320.677 360.782 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 337.617 451.78 C 335.315 451.78 332.901 450.653 330.871 448.603 C 329.897 447.619 329.038 446.455 328.243 445.041 C 327.518 443.745 326.955 442.43 326.568 441.135 C 326.019 439.297 325.504 437.424 325.006 435.611 C 324.687 434.451 324.358 433.252 324.024 432.08 C 319.91 417.63 314.655 403.675 308.403 390.605 C 306.471 386.57 304.066 381.549 305.683 376.923 C 306.019 375.957 306.527 375.055 307.018 374.183 C 307.38 373.539 307.755 372.873 308.058 372.187 C 309.835 368.123 309.009 363.469 308.091 359.869 C 307.693 358.301 307.284 356.277 307.656 354.535 C 308.049 352.693 309.227 351.505 311.256 350.903 C 313.303 350.297 315.48 350.576 317.583 350.844 C 317.902 350.885 318.232 350.927 318.556 350.966 C 323.814 351.59 329.527 351.339 336.022 350.199 C 341.823 349.181 347.723 347.557 353.43 345.988 C 355.363 345.456 357.361 344.907 359.333 344.387 L 360.19 344.16 C 362.36 343.586 364.604 342.994 366.804 342.482 C 369.237 341.917 371.833 341.383 374.482 341.586 C 377.419 341.815 379.955 342.967 381.623 344.833 C 383.785 347.25 384.263 350.626 384.282 353.033 C 384.294 354.574 384.148 356.129 384.007 357.632 C 383.883 358.953 383.754 360.319 383.733 361.676 C 383.643 367.404 385.534 373.334 388.918 377.946 C 389.56 378.82 390.273 379.68 390.962 380.511 C 392.909 382.857 394.922 385.284 395.54 388.308 C 395.945 390.289 395.754 392.527 394.936 395.35 C 393.6 399.964 391.38 404.461 388.149 409.097 C 385.606 412.744 382.437 416.482 378.174 420.86 C 370.67 428.566 362.53 435.391 354.154 442.283 C 350.697 445.126 347.125 448.066 343.111 450.257 C 341.717 451.017 340.161 451.511 338.484 451.725 C 338.198 451.762 337.908 451.78 337.617 451.78 Z M 314.022 350.596 C 313.091 350.596 312.169 350.69 311.272 350.956 C 309.263 351.551 308.097 352.726 307.708 354.547 C 307.339 356.278 307.747 358.293 308.144 359.855 C 308.764 362.288 309.085 364.255 309.152 366.048 C 309.241 368.384 308.899 370.399 308.108 372.209 C 307.803 372.898 307.428 373.564 307.065 374.209 C 306.576 375.081 306.069 375.981 305.734 376.941 C 304.126 381.546 306.525 386.556 308.452 390.582 C 314.706 403.655 319.962 417.612 324.076 432.065 C 324.41 433.238 324.74 434.438 325.059 435.597 C 325.557 437.409 326.071 439.283 326.62 441.119 C 327.006 442.411 327.567 443.721 328.291 445.014 C 329.083 446.423 329.94 447.584 330.91 448.565 C 333.184 450.861 335.94 451.991 338.477 451.671 C 340.147 451.458 341.697 450.967 343.084 450.21 C 347.093 448.021 350.665 445.082 354.119 442.24 C 362.495 435.35 370.634 428.526 378.136 420.822 C 382.396 416.446 385.565 412.71 388.105 409.065 C 391.333 404.434 393.551 399.942 394.885 395.335 C 395.7 392.519 395.891 390.29 395.487 388.318 C 394.872 385.308 392.864 382.886 390.921 380.545 C 390.231 379.713 389.517 378.853 388.875 377.977 C 385.482 373.356 383.589 367.414 383.679 361.674 C 383.7 360.316 383.829 358.949 383.953 357.627 C 384.094 356.124 384.24 354.571 384.228 353.032 C 384.209 350.635 383.733 347.273 381.583 344.868 C 379.924 343.014 377.401 341.867 374.478 341.639 C 371.837 341.436 369.246 341.969 366.817 342.534 C 364.618 343.046 362.374 343.638 360.204 344.212 L 359.347 344.438 C 357.376 344.958 355.378 345.507 353.444 346.039 C 347.737 347.609 341.835 349.232 336.032 350.25 C 329.531 351.392 323.811 351.643 318.55 351.018 C 318.226 350.98 317.896 350.938 317.577 350.897 C 316.401 350.748 315.205 350.596 314.022 350.596 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 336.141 459.894 C 334.816 459.894 333.473 459.563 332.136 458.905 C 330.744 458.22 329.4 457.191 328.248 455.926 C 327.179 454.753 326.234 453.363 325.36 451.678 C 324.595 450.196 323.978 448.672 323.527 447.149 C 322.98 445.305 322.451 443.427 321.939 441.611 C 321.464 439.93 320.974 438.192 320.474 436.493 C 315.475 419.501 309.05 403.075 301.374 387.673 C 299.005 382.921 296.056 377.007 297.934 371.538 C 298.324 370.401 298.919 369.339 299.493 368.312 C 299.918 367.55 300.359 366.764 300.713 365.953 C 302.8 361.133 301.754 355.619 300.609 351.352 C 300.112 349.495 299.597 347.098 300.019 345.03 C 300.465 342.849 301.855 341.448 304.271 340.75 C 306.688 340.052 309.263 340.409 311.753 340.755 C 312.139 340.809 312.538 340.864 312.929 340.915 C 319.293 341.738 326.201 341.454 334.046 340.046 C 341.048 338.79 348.156 336.771 355.029 334.818 C 357.031 334.249 359.1 333.661 361.139 333.1 L 361.777 332.924 C 364.466 332.184 367.247 331.419 369.974 330.755 C 372.854 330.053 375.929 329.387 379.064 329.602 C 382.545 329.843 385.548 331.191 387.522 333.396 C 390.083 336.256 390.628 340.257 390.634 343.11 C 390.637 344.923 390.455 346.75 390.279 348.518 C 390.122 350.096 389.959 351.727 389.928 353.347 C 389.8 360.135 392.066 367.146 396.144 372.584 C 396.921 373.62 397.784 374.637 398.62 375.622 C 400.963 378.382 403.386 381.237 404.146 384.81 C 404.8 387.875 404.076 391.037 403.475 393.149 C 401.932 398.571 399.364 403.853 395.625 409.298 C 392.65 413.627 388.966 418.023 384.029 423.132 C 375.289 432.176 365.559 440.357 355.525 448.637 C 351.421 452.024 347.176 455.525 342.411 458.126 C 340.643 459.09 338.792 459.673 336.91 459.857 C 336.656 459.881 336.398 459.894 336.141 459.894 Z M 307.381 340.403 C 306.333 340.403 305.296 340.51 304.286 340.802 C 301.893 341.494 300.514 342.881 300.073 345.041 C 299.653 347.098 300.167 349.487 300.662 351.338 C 301.434 354.218 301.842 356.55 301.944 358.677 C 302.077 361.445 301.69 363.832 300.763 365.974 C 300.408 366.788 299.967 367.575 299.54 368.338 C 298.967 369.363 298.373 370.423 297.985 371.556 C 296.114 377.003 299.058 382.905 301.423 387.648 C 309.1 403.054 315.527 419.482 320.527 436.477 C 321.027 438.176 321.517 439.915 321.992 441.596 C 322.503 443.412 323.033 445.289 323.579 447.133 C 324.029 448.653 324.645 450.174 325.408 451.653 C 326.28 453.334 327.222 454.719 328.288 455.889 C 329.435 457.148 330.774 458.174 332.16 458.856 C 333.746 459.636 335.342 459.955 336.905 459.801 C 338.78 459.618 340.624 459.037 342.385 458.076 C 347.146 455.478 351.388 451.978 355.49 448.594 C 365.523 440.315 375.252 432.135 383.99 423.092 C 388.925 417.986 392.607 413.592 395.579 409.266 C 399.316 403.827 401.881 398.55 403.422 393.133 C 404.674 388.735 404.405 386.282 404.093 384.819 C 403.335 381.26 400.917 378.411 398.578 375.655 C 397.742 374.67 396.877 373.652 396.099 372.615 C 392.015 367.167 389.745 360.144 389.873 353.344 C 389.904 351.722 390.067 350.089 390.224 348.51 C 390.4 346.745 390.582 344.918 390.579 343.107 C 390.572 340.264 390.03 336.278 387.481 333.431 C 385.545 331.267 382.475 329.891 379.058 329.654 C 378.652 329.626 378.246 329.613 377.842 329.613 C 375.137 329.613 372.488 330.197 369.985 330.806 C 367.26 331.47 364.479 332.235 361.79 332.975 L 361.153 333.15 C 359.113 333.712 357.044 334.3 355.043 334.868 C 348.168 336.821 341.059 338.841 334.054 340.097 C 326.203 341.506 319.29 341.789 312.92 340.966 C 312.529 340.916 312.129 340.861 311.743 340.806 C 310.303 340.608 308.833 340.403 307.381 340.403 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 334.711 468.226 C 331.496 468.226 328.083 466.454 325.461 463.39 C 324.284 462.013 323.244 460.384 322.282 458.409 C 321.474 456.741 320.799 454.995 320.278 453.221 C 319.776 451.514 319.286 449.805 318.795 448.097 C 318.124 445.754 317.429 443.331 316.717 440.966 C 310.837 421.445 303.245 402.562 294.152 384.838 C 291.327 379.334 287.809 372.483 289.979 366.082 C 290.429 364.753 291.115 363.523 291.779 362.332 C 292.266 361.459 292.768 360.556 293.17 359.629 C 295.538 354.117 294.279 347.789 292.918 342.892 C 291.568 338.022 290.838 332.198 297.227 330.383 C 300.061 329.577 303.058 330.019 305.955 330.446 C 306.415 330.514 306.874 330.581 307.331 330.643 C 323.938 332.921 340.516 328.095 356.551 323.43 C 358.662 322.815 360.774 322.201 362.888 321.601 L 363.125 321.534 C 366.394 320.607 369.774 319.648 373.092 318.813 C 376.436 317.971 380.007 317.172 383.66 317.396 C 387.683 317.65 391.301 319.259 393.586 321.81 C 396.591 325.162 397.212 329.845 397.205 333.183 C 397.201 335.28 396.982 337.386 396.77 339.423 C 396.58 341.252 396.383 343.144 396.343 345.018 C 396.177 352.814 398.802 360.858 403.545 367.085 C 404.453 368.278 405.465 369.451 406.444 370.586 C 409.202 373.781 412.054 377.086 412.968 381.26 C 413.751 384.836 412.919 388.533 412.226 391.004 C 408.194 405.359 398.254 417.007 390.044 425.55 C 380.044 435.955 369.18 445.114 357.037 455.156 C 352.28 459.09 347.361 463.158 341.819 466.181 C 339.652 467.362 337.477 468.042 335.357 468.202 C 335.142 468.218 334.927 468.226 334.711 468.226 Z M 300.748 330.425 C 299.598 330.425 298.463 330.542 297.361 330.854 C 291.422 332.542 292.02 337.82 293.39 342.761 C 294.773 347.735 296.049 354.17 293.619 359.823 C 293.209 360.773 292.7 361.687 292.207 362.57 C 291.554 363.741 290.879 364.953 290.443 366.239 C 288.34 372.443 291.805 379.192 294.589 384.615 C 303.694 402.364 311.297 421.275 317.186 440.824 C 317.9 443.193 318.594 445.617 319.266 447.961 C 319.755 449.668 320.246 451.376 320.748 453.082 C 321.262 454.83 321.926 456.55 322.723 458.194 C 323.665 460.131 324.683 461.726 325.833 463.07 C 328.53 466.222 332.074 467.962 335.318 467.712 C 337.37 467.558 339.477 466.898 341.583 465.75 C 347.084 462.749 351.985 458.697 356.724 454.778 C 368.854 444.746 379.707 435.596 389.69 425.21 C 397.859 416.708 407.751 405.121 411.753 390.871 C 412.433 388.452 413.249 384.833 412.489 381.365 C 411.602 377.312 408.791 374.055 406.073 370.906 C 405.089 369.766 404.071 368.587 403.154 367.382 C 398.346 361.068 395.685 352.912 395.853 345.007 C 395.894 343.112 396.092 341.211 396.283 339.372 C 396.493 337.347 396.71 335.253 396.715 333.181 C 396.722 329.929 396.122 325.373 393.222 322.136 C 391.021 319.68 387.526 318.13 383.63 317.885 C 380.043 317.662 376.518 318.455 373.212 319.287 C 369.902 320.12 366.525 321.078 363.259 322.005 L 363.023 322.071 C 360.91 322.671 358.799 323.285 356.689 323.899 C 340.604 328.579 323.974 333.418 307.266 331.128 C 306.807 331.065 306.347 330.997 305.885 330.929 C 304.185 330.681 302.451 330.425 300.748 330.425 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 333.208 476.129 C 331.399 476.129 329.576 475.627 327.781 474.634 C 326.037 473.67 324.386 472.263 323.004 470.568 C 321.741 469.016 320.626 467.178 319.596 464.948 C 318.759 463.131 318.036 461.187 317.446 459.17 C 317.039 457.778 316.629 456.363 316.233 454.994 C 315.312 451.812 314.36 448.522 313.376 445.311 C 306.606 423.236 297.839 401.869 287.318 381.803 C 285.488 378.315 283.758 374.899 282.71 371.448 C 281.476 367.387 281.387 363.892 282.437 360.764 C 282.934 359.282 283.702 357.899 284.445 356.562 C 284.998 355.568 285.569 354.54 286.025 353.478 C 288.729 347.149 287.242 339.911 285.646 334.314 C 284.706 331.014 283.843 326.842 285.521 323.845 C 286.433 322.215 288.041 321.068 290.3 320.435 C 293.464 319.55 296.835 320.067 300.094 320.567 C 300.613 320.647 301.15 320.73 301.674 320.804 C 306.267 321.461 310.932 321.667 315.933 321.432 C 320.39 321.223 325.017 320.668 330.076 319.734 C 339.475 317.998 348.986 315.18 358.182 312.454 C 360.336 311.816 362.563 311.156 364.754 310.52 C 368.512 309.429 372.399 308.302 376.314 307.292 C 379.684 306.423 383.258 305.587 386.909 305.587 C 387.348 305.587 387.787 305.599 388.228 305.625 C 390.336 305.747 392.415 306.216 394.242 306.979 C 396.273 307.827 397.982 309.016 399.323 310.513 C 402.678 314.256 403.359 319.508 403.338 323.254 C 403.325 325.612 403.071 327.986 402.825 330.283 C 402.601 332.372 402.37 334.533 402.32 336.678 C 402.114 345.582 405.13 354.757 410.595 361.85 C 411.642 363.208 412.807 364.542 413.935 365.832 C 417.072 369.422 420.316 373.134 421.36 377.803 C 422.253 381.79 421.327 385.953 420.553 388.738 C 418.596 395.778 415.333 402.631 410.577 409.689 C 406.741 415.384 402.027 421.095 395.741 427.664 C 384.509 439.404 372.125 449.859 358.269 461.336 C 352.872 465.806 347.293 470.428 341.014 473.851 C 338.471 475.238 336.1 475.977 333.766 476.111 C 333.582 476.123 333.395 476.129 333.208 476.129 Z M 294.12 320.009 C 292.832 320.009 291.558 320.139 290.317 320.487 C 288.071 321.116 286.474 322.255 285.57 323.871 C 283.902 326.851 284.763 331.009 285.7 334.298 C 286.777 338.073 287.358 341.134 287.528 343.932 C 287.75 347.563 287.275 350.692 286.076 353.498 C 285.619 354.563 285.046 355.592 284.493 356.588 C 283.752 357.923 282.985 359.303 282.489 360.78 C 281.443 363.897 281.533 367.381 282.763 371.431 C 283.809 374.878 285.538 378.291 287.366 381.777 C 297.889 401.846 306.658 423.216 313.428 445.294 C 314.413 448.506 315.365 451.796 316.285 454.979 C 316.681 456.347 317.091 457.762 317.498 459.154 C 318.088 461.168 318.81 463.109 319.646 464.925 C 320.674 467.151 321.786 468.985 323.047 470.533 C 324.423 472.223 326.069 473.625 327.807 474.586 C 329.778 475.677 331.786 476.172 333.764 476.058 C 336.089 475.924 338.453 475.187 340.989 473.804 C 347.263 470.384 352.84 465.763 358.234 461.295 C 372.089 449.818 384.472 439.364 395.702 427.627 C 404.88 418.036 415.992 404.947 420.502 388.724 C 422.115 382.921 421.735 379.719 421.308 377.816 C 420.267 373.159 417.027 369.453 413.895 365.868 C 412.767 364.579 411.601 363.244 410.553 361.884 C 405.081 354.782 402.06 345.594 402.266 336.678 C 402.316 334.53 402.548 332.368 402.772 330.278 C 403.017 327.983 403.271 325.61 403.285 323.255 C 403.305 319.518 402.627 314.281 399.283 310.55 C 397.947 309.059 396.244 307.875 394.222 307.03 C 392.401 306.268 390.327 305.802 388.225 305.679 C 384.124 305.442 380.099 306.372 376.328 307.345 C 372.413 308.353 368.528 309.482 364.769 310.573 C 362.578 311.209 360.352 311.869 358.198 312.507 C 349 315.233 339.488 318.051 330.086 319.788 C 325.024 320.722 320.396 321.278 315.936 321.487 C 310.928 321.72 306.262 321.515 301.667 320.859 C 301.142 320.783 300.605 320.701 300.086 320.621 C 298.115 320.318 296.102 320.009 294.12 320.009 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 331.738 484.249 C 329.687 484.249 327.626 483.66 325.604 482.496 C 323.685 481.392 321.879 479.798 320.384 477.887 C 319.021 476.146 317.821 474.083 316.715 471.581 C 315.848 469.614 315.071 467.46 314.407 465.178 C 314.154 464.312 313.902 463.445 313.651 462.58 C 312.423 458.352 311.153 453.981 309.827 449.718 C 302.173 425.102 292.236 401.264 280.29 378.866 C 278.216 374.978 276.254 371.166 275.054 367.305 C 273.646 362.77 273.526 358.868 274.69 355.375 C 275.241 353.72 276.095 352.178 276.922 350.686 C 277.538 349.575 278.175 348.426 278.682 347.238 C 281.696 340.152 279.989 332.055 278.167 325.792 C 277.093 322.099 276.101 317.429 277.973 314.075 C 278.988 312.255 280.786 310.978 283.317 310.276 C 286.854 309.296 290.623 309.894 294.269 310.471 C 294.853 310.564 295.458 310.66 296.049 310.747 C 301.233 311.512 306.496 311.758 312.14 311.5 C 317.167 311.269 322.385 310.64 328.088 309.576 C 338.684 307.599 349.393 304.379 359.749 301.266 C 361.982 300.594 364.292 299.9 366.564 299.229 C 371.159 297.871 375.303 296.658 379.486 295.559 C 383.71 294.45 388.22 293.385 392.812 293.636 C 395.17 293.764 397.498 294.281 399.542 295.129 C 401.814 296.072 403.726 297.398 405.225 299.071 C 408.979 303.257 409.726 309.133 409.693 313.326 C 409.671 315.957 409.381 318.605 409.1 321.167 C 408.843 323.512 408.577 325.937 408.518 328.345 C 408.273 338.307 411.665 348.564 417.824 356.484 C 419.006 358.004 420.323 359.495 421.595 360.938 C 425.129 364.942 428.784 369.083 429.97 374.301 C 430.971 378.7 430.028 383.149 429.094 386.533 C 426.93 394.383 423.32 402.021 418.055 409.886 C 413.789 416.262 408.559 422.632 401.598 429.931 C 389.108 443.03 375.774 454.307 359.642 467.686 C 353.597 472.699 347.347 477.884 340.317 481.715 C 337.402 483.304 334.745 484.13 332.196 484.24 C 332.044 484.245 331.891 484.249 331.738 484.249 Z M 287.495 309.809 C 286.086 309.809 284.691 309.952 283.332 310.328 C 280.815 311.026 279.028 312.295 278.02 314.101 C 276.158 317.438 277.148 322.094 278.218 325.777 C 279.447 329.998 280.115 333.424 280.32 336.558 C 280.586 340.62 280.067 344.121 278.732 347.259 C 278.223 348.449 277.586 349.6 276.97 350.712 C 276.144 352.201 275.29 353.742 274.741 355.392 C 273.581 358.874 273.701 362.765 275.106 367.29 C 276.304 371.146 278.265 374.954 280.338 378.841 C 292.285 401.242 302.224 425.084 309.879 449.702 C 311.205 453.966 312.475 458.337 313.703 462.565 C 313.954 463.431 314.206 464.297 314.458 465.164 C 315.123 467.443 315.899 469.594 316.764 471.558 C 317.869 474.057 319.067 476.116 320.426 477.854 C 321.917 479.759 323.717 481.348 325.631 482.449 C 327.645 483.608 329.697 484.194 331.738 484.194 C 331.89 484.194 332.042 484.191 332.194 484.184 C 334.735 484.075 337.384 483.251 340.292 481.666 C 347.316 477.837 353.565 472.655 359.608 467.644 C 375.739 454.265 389.071 442.99 401.559 429.893 C 408.518 422.596 413.746 416.228 418.011 409.855 C 423.271 401.995 426.88 394.361 429.043 386.518 C 429.974 383.14 430.915 378.7 429.917 374.312 C 428.734 369.107 425.084 364.972 421.555 360.973 C 420.282 359.531 418.965 358.038 417.782 356.516 C 411.616 348.586 408.219 338.317 408.465 328.343 C 408.524 325.932 408.79 323.506 409.047 321.16 C 409.328 318.6 409.618 315.953 409.639 313.326 C 409.672 309.142 408.927 303.28 405.186 299.107 C 403.691 297.44 401.786 296.119 399.522 295.18 C 397.483 294.333 395.161 293.818 392.809 293.69 C 388.227 293.444 383.72 294.503 379.501 295.612 C 375.318 296.711 371.174 297.924 366.579 299.281 C 364.307 299.951 361.998 300.646 359.765 301.318 C 349.407 304.431 338.698 307.652 328.099 309.629 C 322.392 310.694 317.173 311.323 312.142 311.554 C 306.497 311.812 301.229 311.566 296.042 310.801 C 295.45 310.714 294.846 310.617 294.261 310.525 C 292.024 310.171 289.741 309.809 287.495 309.809 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 330.282 492.369 C 325.82 492.369 321.164 489.713 317.763 485.206 C 316.289 483.267 315.041 481.045 313.833 478.212 C 312.939 476.11 312.11 473.746 311.367 471.187 L 311.348 471.123 C 309.727 465.534 308.05 459.756 306.279 454.125 C 297.74 426.966 286.632 400.657 273.263 375.929 C 270.943 371.64 268.749 367.434 267.398 363.163 C 265.815 358.154 265.665 353.843 266.942 349.984 C 267.546 348.157 268.489 346.454 269.401 344.806 C 270.08 343.579 270.782 342.31 271.34 340.997 C 274.662 333.157 272.736 324.198 270.686 317.27 C 269.477 313.177 268.355 308.003 270.425 304.293 C 271.545 302.286 273.532 300.88 276.334 300.116 C 280.232 299.038 284.394 299.717 288.417 300.371 C 289.076 300.478 289.758 300.59 290.424 300.69 C 296.2 301.565 302.061 301.851 308.346 301.568 C 313.944 301.315 319.752 300.612 326.101 299.417 C 337.893 297.199 349.799 293.577 361.313 290.073 C 363.627 289.37 366.02 288.642 368.373 287.937 C 373.214 286.487 377.949 285.082 382.659 283.826 C 386.891 282.697 391.383 281.61 395.971 281.61 C 396.445 281.61 396.92 281.621 397.396 281.646 C 400.005 281.78 402.579 282.345 404.843 283.279 C 407.355 284.316 409.47 285.78 411.127 287.628 C 415.278 292.256 416.093 298.757 416.047 303.397 C 416.017 306.3 415.691 309.222 415.376 312.048 C 415.085 314.649 414.785 317.338 414.716 320.01 C 414.432 331.031 418.2 342.368 425.052 351.116 C 426.369 352.798 427.835 354.446 429.255 356.041 C 433.186 360.46 437.251 365.029 438.578 370.796 C 439.698 375.653 438.662 380.578 437.636 384.327 C 435.264 392.984 431.305 401.409 425.534 410.081 C 420.837 417.139 415.092 424.167 407.457 432.197 C 392.634 447.784 375.837 461.73 361.017 474.035 C 354.325 479.59 347.406 485.335 339.623 489.577 C 336.289 491.393 333.43 492.279 330.626 492.365 C 330.511 492.368 330.396 492.369 330.282 492.369 Z M 280.871 299.605 C 279.34 299.605 277.824 299.76 276.348 300.168 C 273.561 300.928 271.584 302.325 270.472 304.319 C 268.412 308.011 269.532 313.171 270.738 317.254 C 272.119 321.923 272.874 325.714 273.114 329.182 C 273.424 333.676 272.86 337.548 271.389 341.018 C 270.83 342.333 270.128 343.604 269.448 344.832 C 268.538 346.477 267.597 348.179 266.994 350.001 C 265.721 353.848 265.87 358.148 267.45 363.146 C 268.799 367.414 270.992 371.616 273.311 375.903 C 286.682 400.634 297.791 426.947 306.331 454.109 C 308.102 459.741 309.779 465.519 311.401 471.108 L 311.419 471.172 C 312.161 473.729 312.991 476.09 313.883 478.192 C 315.089 481.02 316.336 483.238 317.806 485.173 C 321.198 489.667 325.838 492.315 330.282 492.316 C 330.396 492.316 330.509 492.313 330.623 492.31 C 333.418 492.224 336.269 491.34 339.595 489.528 C 347.374 485.288 354.291 479.546 360.981 473.993 C 375.8 461.689 392.597 447.743 407.417 432.159 C 415.051 424.131 420.794 417.106 425.489 410.051 C 431.257 401.384 435.213 392.964 437.583 384.311 C 438.608 380.57 439.642 375.654 438.525 370.808 C 437.2 365.054 433.141 360.491 429.214 356.077 C 427.795 354.482 426.327 352.832 425.009 351.149 C 418.149 342.392 414.377 331.042 414.661 320.009 C 414.73 317.335 415.031 314.644 415.321 312.042 C 415.637 309.217 415.963 306.296 415.992 303.397 C 416.039 298.767 415.226 292.279 411.087 287.664 C 409.434 285.822 407.327 284.364 404.821 283.329 C 402.564 282.397 399.995 281.834 397.392 281.7 C 396.918 281.675 396.444 281.664 395.971 281.664 C 391.388 281.664 386.902 282.75 382.672 283.878 C 377.963 285.134 373.228 286.539 368.388 287.988 C 366.035 288.694 363.642 289.422 361.328 290.125 C 349.813 293.629 337.904 297.251 326.109 299.471 C 319.759 300.665 313.949 301.369 308.347 301.622 C 302.059 301.906 296.194 301.618 290.415 300.744 C 289.748 300.643 289.067 300.532 288.407 300.425 C 285.916 300.018 283.372 299.605 280.871 299.605 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 328.805 500.709 C 323.84 500.709 318.685 497.714 314.967 492.652 C 313.381 490.507 312.041 488.052 310.75 484.927 C 309.837 482.708 308.976 480.199 308.119 477.255 C 305.963 469.752 304.237 463.997 302.524 458.596 C 293.104 428.911 280.831 400.144 266.045 373.095 C 261.709 365.165 255.77 354.304 258.988 344.525 C 259.653 342.505 260.687 340.633 261.687 338.822 C 262.426 337.483 263.192 336.098 263.796 334.671 C 267.4 326.138 265.262 316.368 262.998 308.809 C 261.642 304.282 260.382 298.554 262.685 294.416 C 263.938 292.164 266.16 290.593 269.292 289.744 C 273.61 288.562 278.194 289.322 282.627 290.059 C 283.365 290.181 284.099 290.303 284.831 290.416 C 311.277 294.499 337.472 286.452 362.807 278.67 C 365.245 277.921 367.681 277.172 370.117 276.434 C 375.155 274.908 380.514 273.299 385.772 271.88 C 390.906 270.494 396.392 269.16 401.989 269.436 C 408.156 269.737 413.696 272.144 417.19 276.038 C 421.786 281.16 422.678 288.344 422.617 293.469 C 422.579 296.654 422.216 299.855 421.865 302.95 C 421.542 305.803 421.208 308.753 421.13 311.678 C 420.808 323.707 424.934 336.075 432.449 345.611 C 433.897 347.448 435.512 349.252 437.074 350.997 C 441.42 355.851 445.914 360.87 447.397 367.24 C 448.645 372.6 447.512 378.036 446.385 382.174 C 440.376 404.234 425.638 421.784 413.47 434.609 C 397.296 451.658 378.824 467.007 362.527 480.548 C 355.181 486.652 347.585 492.965 339.028 497.627 C 335.288 499.664 332.12 500.643 329.058 500.706 C 328.975 500.708 328.89 500.709 328.805 500.709 Z M 274.25 289.621 C 272.612 289.621 270.994 289.787 269.421 290.218 C 266.421 291.031 264.299 292.523 263.113 294.655 C 260.9 298.633 262.139 304.234 263.466 308.669 C 265.755 316.306 267.913 326.186 264.247 334.862 C 263.633 336.312 262.861 337.709 262.116 339.059 C 261.127 340.85 260.104 342.702 259.454 344.678 C 256.302 354.255 261.942 364.57 266.475 372.86 C 281.276 399.936 293.562 428.733 302.991 458.448 C 304.706 463.854 306.433 469.612 308.59 477.118 C 309.441 480.044 310.297 482.537 311.204 484.74 C 312.479 487.827 313.801 490.249 315.362 492.361 C 319.049 497.38 324.19 500.31 329.049 500.216 C 332.029 500.155 335.125 499.195 338.794 497.196 C 347.309 492.557 354.887 486.26 362.215 480.171 C 378.501 466.638 396.962 451.299 413.116 434.272 C 425.244 421.488 439.933 403.999 445.914 382.045 C 447.026 377.963 448.145 372.604 446.922 367.351 C 445.468 361.103 441.016 356.132 436.711 351.324 C 435.144 349.573 433.523 347.763 432.066 345.914 C 424.481 336.289 420.318 323.806 420.642 311.665 C 420.721 308.719 421.056 305.758 421.38 302.895 C 421.73 299.811 422.091 296.623 422.128 293.463 C 422.188 288.425 421.318 281.37 416.827 276.365 C 413.421 272.568 408.004 270.221 401.968 269.926 C 396.439 269.655 390.998 270.978 385.902 272.354 C 380.649 273.771 375.295 275.379 370.262 276.904 C 367.825 277.642 365.389 278.39 362.953 279.138 C 337.564 286.938 311.311 295.003 284.758 290.9 C 284.024 290.788 283.287 290.665 282.549 290.543 C 279.802 290.087 276.998 289.621 274.25 289.621 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 327.671 508.615 C 327.608 508.615 327.546 508.614 327.482 508.613 C 324.629 508.574 321.8 507.703 319.074 506.024 C 316.598 504.5 314.332 502.361 312.522 499.841 C 310.846 497.518 309.432 494.861 308.072 491.475 C 307.13 489.127 306.245 486.497 305.289 483.201 C 303.057 475.423 301.118 468.984 299.183 462.937 C 288.875 430.695 275.425 399.445 259.209 370.052 C 256.399 364.959 253.74 359.967 252.087 354.875 C 250.154 348.919 249.945 343.792 251.448 339.202 C 252.16 337.029 253.276 335.005 254.356 333.048 C 255.161 331.588 255.994 330.078 256.655 328.515 C 260.595 319.162 258.229 308.483 255.726 300.224 C 254.738 296.957 254.202 294.358 254.038 292.042 C 253.83 289.074 254.251 286.689 255.326 284.753 C 256.652 282.364 259.021 280.696 262.366 279.795 C 267.01 278.53 271.971 279.368 276.766 280.177 C 277.556 280.31 278.373 280.448 279.172 280.573 C 286.086 281.659 293.101 282.027 300.621 281.701 C 307.319 281.409 314.264 280.568 321.852 279.129 C 335.947 276.455 350.162 272.07 363.909 267.83 C 366.558 267.013 369.297 266.168 371.991 265.349 C 377.004 263.807 382.945 262.007 389.002 260.356 C 394.568 258.838 400.51 257.38 406.563 257.662 C 409.672 257.808 412.742 258.469 415.441 259.575 C 418.437 260.802 420.957 262.539 422.93 264.739 C 427.877 270.25 428.827 278.003 428.754 283.536 C 428.707 286.983 428.31 290.452 427.925 293.807 C 427.568 296.92 427.198 300.139 427.11 303.335 C 426.749 316.473 431.267 329.974 439.507 340.376 C 441.094 342.38 442.862 344.344 444.572 346.243 C 449.298 351.491 454.183 356.918 455.795 363.783 C 457.143 369.523 455.927 375.415 454.717 379.907 C 453.274 385.196 451.281 390.537 448.797 395.783 C 446.501 400.632 443.702 405.571 440.477 410.462 C 434.985 418.792 428.016 427.382 419.171 436.722 C 401.662 455.213 381.527 471.956 363.763 486.727 C 355.777 493.367 347.519 500.233 338.228 505.296 C 335.208 506.94 331.6 508.615 327.671 508.615 Z M 267.63 279.2 C 265.852 279.2 264.095 279.38 262.38 279.847 C 259.05 280.744 256.693 282.404 255.374 284.779 C 254.304 286.706 253.885 289.08 254.093 292.038 C 254.255 294.35 254.791 296.946 255.778 300.208 C 257.464 305.771 258.393 310.291 258.701 314.43 C 259.1 319.787 258.447 324.401 256.705 328.536 C 256.043 330.101 255.21 331.613 254.403 333.075 C 253.325 335.03 252.21 337.051 251.5 339.219 C 250 343.797 250.209 348.913 252.139 354.858 C 253.789 359.945 256.447 364.935 259.256 370.026 C 275.474 399.421 288.925 430.676 299.235 462.92 C 301.169 468.968 303.109 475.408 305.341 483.186 C 306.297 486.48 307.181 489.108 308.122 491.455 C 309.48 494.837 310.893 497.491 312.566 499.81 C 314.371 502.325 316.632 504.458 319.102 505.979 C 321.819 507.652 324.64 508.521 327.483 508.56 C 327.546 508.56 327.608 508.561 327.671 508.561 C 331.588 508.561 335.188 506.891 338.201 505.249 C 347.487 500.19 355.743 493.326 363.726 486.687 C 381.49 471.916 401.624 455.174 419.13 436.687 C 427.972 427.349 434.939 418.761 440.429 410.434 C 443.653 405.545 446.452 400.608 448.746 395.762 C 451.23 390.519 453.22 385.181 454.663 379.895 C 455.871 375.409 457.085 369.525 455.74 363.798 C 454.132 356.946 449.25 351.525 444.53 346.282 C 442.819 344.381 441.049 342.416 439.462 340.412 C 431.214 329.999 426.692 316.486 427.054 303.336 C 427.142 300.136 427.511 296.916 427.869 293.802 C 428.254 290.448 428.652 286.981 428.698 283.536 C 428.771 278.013 427.822 270.275 422.888 264.776 C 420.92 262.583 418.407 260.85 415.418 259.626 C 412.725 258.524 409.661 257.864 406.559 257.718 C 400.51 257.436 394.576 258.893 389.014 260.409 C 382.958 262.061 377.017 263.86 372.004 265.403 C 369.311 266.222 366.571 267.067 363.922 267.884 C 350.174 272.124 335.958 276.51 321.86 279.184 C 314.269 280.623 307.322 281.465 300.621 281.756 C 293.098 282.082 286.079 281.714 279.162 280.629 C 278.363 280.503 277.545 280.365 276.755 280.232 C 273.739 279.721 270.656 279.2 267.63 279.2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 326.16 516.956 C 326.076 516.956 325.992 516.955 325.908 516.954 C 319.967 516.853 313.917 513.238 309.723 507.281 C 307.936 504.754 306.431 501.864 304.988 498.184 C 304.015 495.7 303.106 492.949 302.04 489.266 C 299.733 481.216 297.57 474.065 295.427 467.406 C 284.238 432.637 269.624 398.929 251.991 367.217 C 246.825 357.929 239.751 345.21 243.493 333.742 C 244.265 331.377 245.473 329.183 246.642 327.061 C 247.508 325.489 248.403 323.864 249.11 322.187 C 253.332 312.145 250.754 300.652 248.036 291.762 C 246.413 286.449 244.895 279.727 247.585 274.875 C 249.045 272.242 251.648 270.408 255.324 269.421 C 260.387 268.052 265.769 268.973 270.974 269.862 C 271.845 270.012 272.714 270.16 273.579 270.298 C 304.781 275.268 335.623 265.681 365.45 256.41 C 368.212 255.551 370.974 254.693 373.734 253.846 C 379.166 252.163 385.598 250.202 392.114 248.41 C 398.143 246.752 404.577 245.156 411.155 245.452 C 418.394 245.778 424.895 248.583 428.993 253.147 C 434.383 259.154 435.41 267.589 435.323 273.607 C 435.268 277.338 434.834 281.087 434.414 284.712 C 434.024 288.076 433.621 291.554 433.523 295.004 C 433.124 309.148 438 323.68 446.902 334.87 C 448.62 337.03 450.536 339.148 452.39 341.198 C 457.531 346.881 462.846 352.757 464.612 360.226 C 466.09 366.472 464.775 372.875 463.465 377.755 C 456.294 404.164 438.182 425.433 425.183 439.135 C 406.643 458.818 385.611 476.317 365.272 493.24 C 356.631 500.428 347.697 507.862 337.632 513.345 C 334.347 515.136 330.423 516.956 326.16 516.956 Z M 261.009 269.215 C 259.125 269.215 257.264 269.405 255.452 269.895 C 251.91 270.845 249.407 272.601 248.015 275.113 C 245.414 279.804 246.911 286.399 248.506 291.619 C 251.247 300.588 253.846 312.189 249.562 322.378 C 248.846 324.079 247.943 325.715 247.072 327.298 C 245.914 329.399 244.717 331.573 243.959 333.894 C 240.284 345.158 247.298 357.77 252.419 366.979 C 270.067 398.718 284.695 432.457 295.894 467.257 C 298.039 473.921 300.202 481.076 302.511 489.131 C 303.572 492.799 304.477 495.536 305.444 498.006 C 306.873 501.648 308.36 504.506 310.124 507 C 314.228 512.829 320.132 516.367 325.917 516.465 C 330.155 516.548 334.104 514.711 337.4 512.916 C 347.422 507.457 356.338 500.039 364.96 492.865 C 385.288 475.952 406.308 458.462 424.829 438.8 C 451.896 410.271 459.574 390.225 462.993 377.628 C 464.289 372.805 465.59 366.479 464.138 360.34 C 462.4 352.994 457.127 347.165 452.029 341.528 C 450.17 339.472 448.248 337.347 446.521 335.176 C 437.548 323.896 432.633 309.25 433.035 294.991 C 433.134 291.519 433.538 288.03 433.929 284.656 C 434.348 281.043 434.781 277.307 434.835 273.6 C 434.921 267.669 433.914 259.364 428.629 253.475 C 424.62 249.008 418.243 246.262 411.134 245.942 C 404.622 245.654 398.237 247.234 392.245 248.882 C 385.736 250.672 379.309 252.633 373.879 254.315 C 371.119 255.162 368.358 256.02 365.597 256.878 C 335.716 266.166 304.821 275.769 273.503 270.782 C 272.637 270.644 271.766 270.495 270.892 270.345 C 267.623 269.786 264.282 269.215 261.009 269.215 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 324.647 524.862 C 324.545 524.862 324.444 524.861 324.341 524.859 C 321.121 524.796 317.795 523.722 314.723 521.755 C 311.9 519.948 309.328 517.43 307.28 514.472 C 305.401 511.766 303.821 508.672 302.31 504.734 C 301.056 501.466 300.039 498.087 299.21 495.212 C 296.782 486.729 294.452 479.052 292.087 471.744 C 280.008 434.418 264.217 398.225 245.154 364.171 C 241.854 358.277 238.73 352.498 236.775 346.584 C 234.492 339.679 234.222 333.737 235.953 328.416 C 236.772 325.899 238.062 323.554 239.31 321.287 C 240.242 319.593 241.206 317.842 241.968 316.029 C 246.526 305.165 243.72 292.764 240.765 283.174 C 239.597 279.382 238.961 276.363 238.76 273.671 C 238.503 270.224 238.983 267.456 240.226 265.209 C 241.759 262.44 244.508 260.508 248.397 259.47 C 253.787 258.02 259.545 259.015 265.111 259.978 C 266.033 260.138 266.986 260.303 267.918 260.453 C 276.023 261.759 284.247 262.212 293.054 261.832 C 300.9 261.495 309.033 260.503 317.919 258.8 C 334.421 255.635 351.044 250.435 367.12 245.405 C 369.902 244.534 372.778 243.634 375.606 242.76 C 381.425 240.947 388.321 238.83 395.343 236.884 C 401.298 235.234 407.625 233.642 414.085 233.642 C 414.632 233.642 415.179 233.653 415.728 233.677 C 419.337 233.833 422.903 234.591 426.038 235.868 C 429.517 237.285 432.443 239.297 434.732 241.848 C 440.474 248.243 441.559 257.246 441.459 263.673 C 441.397 267.666 440.926 271.684 440.473 275.57 C 440.049 279.193 439.611 282.939 439.503 286.66 C 439.064 301.914 444.333 317.577 453.961 329.636 C 455.817 331.962 457.887 334.241 459.889 336.445 C 462.647 339.483 465.5 342.624 467.842 345.937 C 470.469 349.654 472.16 353.198 473.01 356.77 C 474.596 363.428 473.195 370.271 471.796 375.489 C 470.142 381.61 467.858 387.791 465.006 393.861 C 462.367 399.48 459.149 405.199 455.444 410.859 C 449.085 420.568 441.052 430.509 430.883 441.248 C 410.967 462.408 388.365 481.223 366.507 499.419 C 357.227 507.144 347.63 515.132 336.832 521.014 C 333.327 522.923 329.149 524.862 324.647 524.862 Z M 254.391 258.793 C 252.366 258.793 250.365 258.997 248.411 259.522 C 244.538 260.557 241.801 262.48 240.275 265.236 C 239.037 267.473 238.559 270.231 238.815 273.666 C 239.015 276.354 239.651 279.37 240.818 283.158 C 243.775 292.757 246.584 305.17 242.019 316.05 C 241.256 317.866 240.291 319.618 239.358 321.313 C 238.112 323.578 236.823 325.921 236.006 328.433 C 234.279 333.742 234.548 339.674 236.827 346.567 C 238.781 352.476 241.904 358.253 245.203 364.145 C 264.267 398.202 280.059 434.397 292.14 471.727 C 294.504 479.036 296.834 486.713 299.263 495.196 C 300.092 498.07 301.109 501.448 302.361 504.715 C 303.871 508.648 305.449 511.738 307.326 514.441 C 309.368 517.392 311.937 519.905 314.753 521.708 C 317.817 523.67 321.133 524.741 324.343 524.805 C 324.444 524.807 324.547 524.807 324.648 524.807 C 329.138 524.808 333.307 522.872 336.807 520.965 C 347.601 515.087 357.195 507.1 366.473 499.377 C 388.33 481.182 410.931 462.368 430.845 441.211 C 441.011 430.473 449.043 420.535 455.399 410.828 C 459.104 405.171 462.319 399.454 464.958 393.837 C 467.807 387.77 470.091 381.592 471.745 375.474 C 473.141 370.262 474.541 363.428 472.958 356.782 C 472.109 353.216 470.421 349.679 467.798 345.968 C 465.458 342.658 462.607 339.518 459.849 336.481 C 457.847 334.276 455.776 331.997 453.919 329.669 C 444.284 317.601 439.01 301.924 439.45 286.658 C 439.557 282.935 439.996 279.187 440.419 275.563 C 440.874 271.678 441.343 267.661 441.406 263.671 C 441.506 257.254 440.423 248.266 434.693 241.883 C 432.409 239.338 429.49 237.332 426.019 235.918 C 422.889 234.644 419.33 233.887 415.727 233.73 C 415.18 233.706 414.632 233.695 414.087 233.695 C 407.632 233.695 401.311 235.287 395.359 236.935 C 388.338 238.881 381.442 240.998 375.624 242.811 C 372.796 243.685 369.919 244.586 367.138 245.455 C 351.061 250.485 334.436 255.687 317.931 258.852 C 309.043 260.556 300.907 261.548 293.058 261.885 C 284.246 262.262 276.019 261.812 267.911 260.506 C 266.979 260.355 266.025 260.19 265.103 260.031 C 261.561 259.42 257.941 258.793 254.391 258.793 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 323.133 532.987 C 323.012 532.987 322.892 532.985 322.77 532.982 C 319.347 532.906 315.812 531.745 312.546 529.62 C 309.552 527.672 306.825 524.964 304.66 521.789 C 302.678 518.891 301.016 515.579 299.428 511.364 C 298.168 508.017 297.118 504.509 296.17 501.217 C 293.618 492.294 291.122 484.094 288.538 476.148 C 275.574 436.279 258.613 397.616 238.126 361.23 C 234.582 354.935 231.225 348.761 229.119 342.438 C 226.661 335.059 226.362 328.708 228.206 323.022 C 229.078 320.333 230.456 317.828 231.787 315.406 C 232.783 313.596 233.812 311.724 234.625 309.785 C 239.493 298.167 236.466 284.905 233.285 274.649 C 232.028 270.595 231.341 267.366 231.121 264.485 C 230.84 260.799 231.349 257.84 232.677 255.438 C 234.314 252.477 237.252 250.415 241.412 249.307 C 247.178 247.763 253.336 248.839 259.29 249.88 C 260.276 250.052 261.296 250.231 262.293 250.392 C 270.992 251.809 279.817 252.301 289.273 251.897 C 297.693 251.538 306.421 250.47 315.955 248.634 C 333.662 245.223 351.489 239.614 368.729 234.188 C 371.577 233.292 374.521 232.366 377.415 231.465 C 383.653 229.511 391.038 227.233 398.515 225.148 C 404.899 223.367 411.682 221.648 418.609 221.648 C 419.176 221.648 419.743 221.659 420.312 221.683 C 424.171 221.846 427.984 222.652 431.336 224.014 C 435.057 225.525 438.185 227.674 440.633 230.4 C 446.772 237.239 447.926 246.866 447.812 253.739 C 447.741 258.004 447.235 262.296 446.747 266.446 C 446.289 270.325 445.817 274.337 445.7 278.321 C 445.221 294.633 450.865 311.379 461.187 324.264 C 463.178 326.75 465.398 329.188 467.547 331.545 C 470.503 334.789 473.56 338.144 476.071 341.684 C 478.889 345.656 480.703 349.443 481.617 353.261 C 483.321 360.378 481.827 367.697 480.336 373.278 C 478.577 379.813 476.145 386.414 473.108 392.895 C 470.297 398.896 466.869 405.004 462.921 411.048 C 456.144 421.421 447.579 432.04 436.74 443.51 C 415.449 466.145 391.266 486.286 367.88 505.763 C 357.953 514.031 347.688 522.58 336.135 528.871 C 332.387 530.915 327.924 532.986 323.133 532.987 Z M 234.676 309.808 C 233.861 311.748 232.831 313.622 231.835 315.433 C 230.505 317.853 229.128 320.355 228.258 323.041 C 226.418 328.715 226.717 335.055 229.171 342.422 C 231.276 348.741 234.63 354.912 238.174 361.205 C 258.662 397.594 275.625 436.261 288.59 476.132 C 291.174 484.079 293.671 492.28 296.222 501.203 C 297.17 504.495 298.22 508.001 299.479 511.346 C 301.066 515.556 302.727 518.865 304.705 521.759 C 306.866 524.928 309.588 527.631 312.576 529.575 C 315.833 531.693 319.359 532.853 322.772 532.928 C 322.893 532.931 323.014 532.932 323.134 532.932 C 327.913 532.932 332.367 530.864 336.109 528.825 C 347.658 522.536 357.921 513.989 367.845 505.723 C 391.23 486.246 415.412 466.107 436.701 443.474 C 447.538 432.006 456.1 421.39 462.875 411.02 C 466.823 404.978 470.249 398.873 473.06 392.873 C 476.095 386.395 478.525 379.798 480.285 373.266 C 481.774 367.691 483.267 360.381 481.566 353.276 C 480.653 349.464 478.842 345.683 476.028 341.718 C 473.519 338.18 470.463 334.827 467.507 331.583 C 465.36 329.226 463.138 326.788 461.145 324.3 C 450.816 311.405 445.167 294.646 445.646 278.321 C 445.763 274.335 446.236 270.323 446.693 266.442 C 447.182 262.293 447.688 258.003 447.759 253.741 C 447.872 246.878 446.722 237.264 440.594 230.439 C 438.151 227.719 435.03 225.575 431.317 224.067 C 427.969 222.707 424.163 221.902 420.311 221.74 C 419.744 221.716 419.176 221.704 418.611 221.704 C 411.689 221.704 404.912 223.422 398.53 225.202 C 391.054 227.286 383.67 229.565 377.432 231.519 C 374.538 232.419 371.594 233.347 368.747 234.242 C 351.505 239.668 333.676 245.278 315.966 248.689 C 306.429 250.526 297.699 251.594 289.276 251.954 C 279.816 252.356 270.988 251.866 262.285 250.448 C 261.288 250.286 260.268 250.107 259.281 249.935 C 253.331 248.895 247.179 247.822 241.427 249.361 C 237.282 250.465 234.355 252.519 232.725 255.466 C 231.403 257.858 230.896 260.808 231.176 264.482 C 231.395 267.358 232.081 270.585 233.337 274.634 C 236.521 284.898 239.549 298.173 234.676 309.808 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 321.621 541.111 C 321.481 541.111 321.341 541.109 321.2 541.105 C 317.573 541.018 313.829 539.766 310.371 537.486 C 307.204 535.397 304.322 532.499 302.039 529.105 C 299.956 526.015 298.211 522.485 296.548 517.995 C 295.219 514.407 294.131 510.707 293.131 507.224 C 290.488 497.975 287.749 489.001 284.99 480.553 C 271.141 438.143 253.01 397.008 231.099 358.291 C 227.31 351.596 223.721 345.028 221.463 338.294 C 218.83 330.442 218.502 323.683 220.459 317.631 C 221.385 314.768 222.85 312.103 224.266 309.525 C 225.324 307.599 226.419 305.607 227.283 303.544 C 232.459 291.169 229.212 277.046 225.804 266.125 C 224.458 261.809 223.721 258.369 223.482 255.301 C 223.177 251.376 223.715 248.225 225.128 245.668 C 225.968 244.146 227.136 242.837 228.601 241.778 C 230.172 240.641 232.132 239.755 234.429 239.146 C 240.567 237.51 247.124 238.664 253.464 239.782 C 254.516 239.968 255.604 240.159 256.667 240.334 C 265.962 241.861 275.391 242.395 285.491 241.965 C 294.485 241.582 303.807 240.439 313.99 238.47 C 332.899 234.813 351.93 228.795 370.334 222.974 C 373.249 222.052 376.262 221.099 379.225 220.172 C 385.862 218.082 393.721 215.645 401.687 213.413 C 408.503 211.502 415.745 209.657 423.138 209.657 C 423.723 209.657 424.309 209.669 424.896 209.692 C 429.006 209.861 433.065 210.715 436.637 212.162 C 440.599 213.768 443.93 216.054 446.536 218.957 C 453.073 226.237 454.293 236.49 454.167 243.81 C 454.088 248.348 453.546 252.914 453.022 257.33 C 452.532 261.464 452.024 265.739 451.898 269.985 C 451.381 287.356 457.401 305.183 468.416 318.896 C 470.542 321.544 472.914 324.139 475.208 326.648 C 478.363 330.1 481.625 333.669 484.305 337.436 C 487.312 341.662 489.249 345.692 490.227 349.757 C 492.05 357.335 490.464 365.127 488.877 371.07 C 487.013 378.02 484.434 385.038 481.213 391.932 C 478.229 398.316 474.591 404.811 470.4 411.241 C 463.203 422.278 454.109 433.574 442.598 445.774 C 419.928 469.891 394.167 491.354 369.254 512.11 C 358.68 520.92 347.746 530.029 335.439 536.732 C 331.446 538.906 326.699 541.11 321.621 541.111 Z M 241.153 238.386 C 238.882 238.386 236.635 238.613 234.442 239.198 C 232.153 239.806 230.198 240.688 228.632 241.821 C 227.175 242.876 226.011 244.179 225.175 245.693 C 223.768 248.241 223.232 251.382 223.536 255.296 C 223.774 258.361 224.511 261.796 225.856 266.108 C 229.266 277.038 232.516 291.174 227.333 303.565 C 226.467 305.63 225.372 307.623 224.313 309.551 C 222.898 312.126 221.435 314.79 220.511 317.648 C 218.557 323.688 218.885 330.435 221.514 338.276 C 223.771 345.005 227.358 351.571 231.147 358.264 C 253.058 396.984 271.191 438.122 285.042 480.536 C 287.801 488.985 290.54 497.959 293.183 507.208 C 294.183 510.69 295.271 514.39 296.598 517.975 C 298.26 522.462 300.003 525.989 302.084 529.074 C 304.363 532.462 307.239 535.355 310.4 537.44 C 313.85 539.715 317.584 540.963 321.2 541.051 C 321.341 541.054 321.481 541.056 321.62 541.056 C 326.686 541.056 331.425 538.854 335.411 536.684 C 347.713 529.983 358.645 520.876 369.216 512.068 C 394.128 491.313 419.888 469.851 442.556 445.736 C 454.065 433.539 463.157 422.246 470.351 411.211 C 474.542 404.783 478.179 398.29 481.161 391.909 C 484.381 385.018 486.959 378.002 488.823 371.056 C 490.407 365.12 491.992 357.335 490.172 349.769 C 489.196 345.711 487.262 341.687 484.259 337.466 C 481.581 333.703 478.32 330.134 475.166 326.684 C 472.872 324.174 470.5 321.578 468.372 318.929 C 457.35 305.206 451.324 287.366 451.842 269.982 C 451.969 265.734 452.476 261.458 452.967 257.322 C 453.49 252.908 454.032 248.343 454.111 243.808 C 454.238 236.498 453.02 226.258 446.495 218.992 C 443.894 216.096 440.57 213.815 436.616 212.212 C 433.05 210.767 428.996 209.914 424.893 209.746 C 416.896 209.42 409.052 211.404 401.701 213.464 C 393.736 215.697 385.877 218.134 379.24 220.223 C 376.278 221.15 373.264 222.103 370.35 223.025 C 351.944 228.846 332.912 234.866 313.999 238.523 C 303.814 240.492 294.49 241.636 285.492 242.019 C 275.386 242.448 265.956 241.915 256.658 240.387 C 255.594 240.213 254.506 240.02 253.454 239.835 C 249.387 239.119 245.23 238.386 241.153 238.386 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 320.107 549.235 C 319.948 549.235 319.789 549.233 319.629 549.229 C 315.799 549.128 311.845 547.788 308.195 545.351 C 304.855 543.121 301.82 540.033 299.419 536.422 C 297.235 533.142 295.407 529.393 293.666 524.625 C 292.335 520.973 291.215 517.15 290.091 513.229 C 287.322 503.53 284.412 494.018 281.442 484.957 C 266.707 440.003 247.405 396.398 224.072 355.351 C 220.037 348.255 216.216 341.293 213.806 334.149 C 210.999 325.823 210.641 318.656 212.711 312.239 C 213.691 309.204 215.241 306.377 216.742 303.645 C 217.865 301.602 219.024 299.49 219.939 297.301 C 225.424 284.173 221.957 269.188 218.323 257.601 C 216.888 253.022 216.1 249.373 215.843 246.116 C 215.514 241.952 216.081 238.608 217.578 235.896 C 218.468 234.282 219.707 232.895 221.259 231.772 C 222.926 230.567 225.007 229.628 227.444 228.983 C 233.954 227.255 240.91 228.489 247.635 229.683 C 248.754 229.881 249.91 230.087 251.04 230.273 C 260.931 231.911 270.96 232.486 281.707 232.031 C 291.277 231.625 301.193 230.407 312.024 228.305 C 332.138 224.401 352.373 217.972 371.941 211.756 C 374.922 210.809 378.003 209.83 381.032 208.876 C 388.082 206.649 396.426 204.051 404.857 201.676 C 412.659 199.478 420.988 197.365 429.478 197.699 C 433.838 197.872 438.145 198.776 441.934 200.308 C 446.138 202.009 449.671 204.432 452.435 207.51 C 459.37 215.232 460.658 226.11 460.518 233.877 C 460.431 238.687 459.853 243.527 459.295 248.207 C 458.771 252.597 458.229 257.137 458.093 261.646 C 457.536 280.075 463.932 298.984 475.641 313.524 C 477.902 316.333 480.425 319.085 482.864 321.747 C 486.217 325.406 489.685 329.19 492.534 333.183 C 495.731 337.664 497.792 341.938 498.833 346.248 C 500.774 354.286 499.095 362.554 497.415 368.86 C 495.446 376.224 492.719 383.662 489.313 390.967 C 486.158 397.732 482.309 404.617 477.874 411.432 C 470.259 423.133 460.635 435.106 448.452 448.036 C 424.405 473.632 397.064 496.419 370.624 518.456 C 359.404 527.808 347.8 537.479 334.739 544.591 C 330.505 546.897 325.471 549.235 320.107 549.235 Z M 234.535 228.182 C 232.139 228.182 229.771 228.422 227.458 229.035 C 225.028 229.679 222.954 230.614 221.292 231.816 C 219.746 232.934 218.513 234.316 217.627 235.923 C 216.136 238.625 215.57 241.958 215.898 246.112 C 216.155 249.364 216.942 253.01 218.377 257.584 C 222.013 269.181 225.482 284.177 219.991 297.323 C 219.074 299.514 217.914 301.627 216.791 303.671 C 215.292 306.402 213.741 309.225 212.764 312.256 C 210.696 318.662 211.055 325.817 213.859 334.133 C 216.267 341.271 220.086 348.23 224.12 355.326 C 247.455 396.375 266.758 439.984 281.494 484.941 C 284.463 494.004 287.374 503.516 290.143 513.215 C 291.267 517.135 292.386 520.957 293.717 524.607 C 295.457 529.372 297.283 533.117 299.464 536.393 C 301.861 539.999 304.891 543.081 308.226 545.308 C 311.867 547.739 315.811 549.076 319.63 549.176 C 319.789 549.18 319.948 549.182 320.107 549.182 C 325.46 549.182 330.485 546.847 334.715 544.544 C 347.77 537.434 359.371 527.766 370.591 518.416 C 397.03 496.38 424.369 473.594 448.414 448 C 460.594 435.073 470.216 423.102 477.83 411.403 C 482.264 404.591 486.111 397.709 489.265 390.946 C 492.67 383.643 495.395 376.208 497.365 368.848 C 499.042 362.548 500.72 354.288 498.781 346.263 C 497.741 341.96 495.684 337.692 492.491 333.217 C 489.643 329.226 486.177 325.444 482.825 321.785 C 480.385 319.123 477.863 316.37 475.6 313.561 C 463.883 299.01 457.483 280.088 458.04 261.646 C 458.176 257.136 458.718 252.595 459.242 248.203 C 459.801 243.524 460.378 238.686 460.465 233.878 C 460.606 226.122 459.32 215.258 452.397 207.549 C 449.638 204.477 446.112 202.059 441.916 200.361 C 438.132 198.831 433.831 197.929 429.477 197.755 C 428.873 197.731 428.269 197.72 427.667 197.72 C 419.811 197.72 412.116 199.69 404.874 201.73 C 396.443 204.105 388.1 206.703 381.05 208.931 C 378.021 209.884 374.94 210.863 371.96 211.809 C 352.389 218.027 332.153 224.457 312.037 228.36 C 301.203 230.462 291.284 231.682 281.712 232.087 C 270.961 232.542 260.927 231.967 251.033 230.329 C 249.902 230.142 248.746 229.936 247.627 229.738 C 243.298 228.967 238.873 228.182 234.535 228.182 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 318.594 557.359 C 318.415 557.359 318.238 557.357 318.059 557.352 C 314.024 557.24 309.862 555.81 306.02 553.217 C 302.506 550.846 299.317 547.567 296.798 543.738 C 294.512 540.266 292.602 536.3 290.785 531.255 C 289.348 527.261 288.181 523.18 287.052 519.234 C 284.152 509.074 281.071 499.023 277.894 489.361 C 262.274 441.865 241.801 395.788 217.045 352.411 C 212.765 344.913 208.711 337.557 206.151 330.004 C 203.168 321.204 202.781 313.629 204.964 306.846 C 205.997 303.639 207.635 300.653 209.22 297.766 C 210.406 295.606 211.631 293.372 212.597 291.058 C 218.391 277.174 214.703 261.328 210.843 249.075 C 209.319 244.234 208.48 240.375 208.204 236.93 C 207.852 232.527 208.448 228.992 210.029 226.125 C 210.969 224.419 212.278 222.952 213.92 221.765 C 215.683 220.492 217.883 219.501 220.461 218.82 C 227.345 216.998 234.699 218.312 241.81 219.583 C 242.994 219.795 244.219 220.013 245.416 220.213 C 255.901 221.96 266.535 222.576 277.926 222.096 C 288.07 221.667 298.581 220.373 310.061 218.138 C 331.378 213.988 352.816 207.149 373.549 200.536 C 376.596 199.564 379.746 198.559 382.842 197.58 C 390.313 195.211 399.148 192.451 408.03 189.939 C 416.28 187.605 425.086 185.358 434.063 185.705 C 438.673 185.885 443.228 186.835 447.236 188.454 C 451.681 190.25 455.417 192.81 458.34 196.065 C 465.672 204.228 467.028 215.732 466.874 223.945 C 466.779 229.027 466.165 234.14 465.572 239.085 C 465.015 243.732 464.438 248.536 464.292 253.308 C 463.697 272.795 470.468 292.786 482.87 308.154 C 485.266 311.123 487.94 314.033 490.525 316.847 C 494.077 320.714 497.75 324.711 500.768 328.932 C 504.155 333.667 506.338 338.184 507.444 342.74 C 509.504 351.236 507.732 359.98 505.958 366.649 C 503.883 374.427 501.01 382.285 497.417 390.002 C 494.091 397.149 490.033 404.423 485.354 411.622 C 477.319 423.986 467.166 436.638 454.311 450.298 C 428.88 477.378 399.964 501.486 371.999 524.8 C 360.132 534.695 347.86 544.926 334.045 552.448 C 329.565 554.888 324.247 557.359 318.594 557.359 Z M 227.918 217.978 C 225.398 217.978 222.907 218.229 220.475 218.873 C 217.903 219.553 215.709 220.541 213.952 221.81 C 212.317 222.992 211.013 224.452 210.077 226.151 C 208.501 229.009 207.907 232.534 208.258 236.927 C 208.535 240.367 209.372 244.222 210.896 249.059 C 214.758 261.321 218.448 277.178 212.647 291.079 C 211.68 293.396 210.454 295.63 209.267 297.792 C 207.684 300.677 206.047 303.66 205.016 306.863 C 202.836 313.634 203.223 321.197 206.203 329.986 C 208.761 337.535 212.814 344.888 217.091 352.385 C 241.85 395.765 262.325 441.844 277.946 489.344 C 281.123 499.007 284.204 509.059 287.104 519.22 C 288.232 523.164 289.399 527.244 290.837 531.237 C 292.652 536.277 294.56 540.24 296.844 543.708 C 299.358 547.531 302.542 550.804 306.05 553.172 C 309.884 555.759 314.036 557.185 318.06 557.297 C 318.238 557.302 318.416 557.305 318.593 557.305 C 324.235 557.305 329.544 554.837 334.017 552.401 C 347.827 544.881 360.097 534.652 371.963 524.759 C 399.927 501.447 428.841 477.34 454.271 450.261 C 467.123 436.603 477.275 423.955 485.307 411.593 C 489.984 404.396 494.042 397.124 497.367 389.98 C 500.958 382.265 503.83 374.411 505.905 366.636 C 507.677 359.973 509.447 351.238 507.39 342.754 C 506.287 338.204 504.106 333.693 500.723 328.964 C 497.707 324.746 494.035 320.75 490.484 316.884 C 487.899 314.069 485.226 311.159 482.828 308.188 C 470.418 292.81 463.641 272.806 464.238 253.306 C 464.383 248.532 464.96 243.726 465.518 239.078 C 466.111 234.136 466.724 229.023 466.82 223.944 C 466.973 215.741 465.619 204.251 458.299 196.1 C 455.382 192.853 451.653 190.297 447.215 188.505 C 443.213 186.888 438.665 185.939 434.061 185.76 C 425.093 185.408 416.291 187.659 408.045 189.992 C 399.164 192.504 390.33 195.264 382.859 197.633 C 379.763 198.612 376.613 199.617 373.566 200.588 C 352.832 207.203 331.392 214.041 310.071 218.192 C 298.589 220.427 288.075 221.722 277.929 222.151 C 266.532 222.631 255.895 222.015 245.407 220.267 C 244.209 220.068 242.985 219.849 241.8 219.637 C 237.209 218.816 232.517 217.978 227.918 217.978 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 317.111 565.702 C 316.9 565.702 316.691 565.699 316.481 565.692 C 308.175 565.463 299.769 560.036 293.995 551.172 C 291.597 547.493 289.597 543.294 287.699 537.957 C 286.265 533.924 285.066 529.723 283.905 525.662 L 283.802 525.3 C 280.772 514.675 277.521 504.088 274.138 493.833 C 257.638 443.808 236.002 395.275 209.828 349.579 C 202.175 336.218 191.695 317.921 197.009 301.386 C 198.102 297.986 199.833 294.83 201.507 291.779 C 202.752 289.507 204.041 287.159 205.054 284.731 C 211.129 270.156 207.231 253.499 203.157 240.616 C 200.73 232.943 198.439 223.239 202.289 216.248 C 204.37 212.47 208.115 209.846 213.421 208.447 C 220.725 206.518 228.505 207.917 236.028 209.271 C 237.298 209.499 238.564 209.727 239.826 209.939 C 285.893 217.664 331.237 203.149 375.089 189.111 C 378.255 188.097 381.421 187.083 384.585 186.079 C 392.455 183.575 401.765 180.657 411.143 177.994 C 419.856 175.519 429.155 173.124 438.655 173.496 C 449.109 173.894 458.494 177.895 464.403 184.473 C 472.18 193.132 473.613 205.319 473.444 214.017 C 473.341 219.385 472.691 224.779 472.062 229.996 C 471.472 234.891 470.862 239.954 470.707 244.977 C 470.074 265.472 477.204 286.492 490.267 302.647 C 492.794 305.772 495.615 308.836 498.343 311.8 C 505.866 319.972 513.644 328.421 516.262 339.183 C 518.453 348.185 516.583 357.44 514.708 364.497 C 504.609 402.449 478.835 433.018 460.327 452.711 C 433.507 481.283 403.007 506.717 373.511 531.314 C 360.988 541.758 348.038 552.557 333.451 560.5 C 328.702 563.085 323.071 565.702 317.111 565.702 Z M 221.3 207.992 C 218.673 207.992 216.077 208.254 213.546 208.921 C 208.374 210.285 204.731 212.829 202.718 216.485 C 198.915 223.39 201.413 233.48 203.623 240.469 C 207.723 253.432 211.642 270.199 205.505 284.92 C 204.482 287.373 203.188 289.733 201.936 292.015 C 200.273 295.047 198.554 298.181 197.476 301.537 C 192.227 317.866 202.645 336.055 210.253 349.336 C 236.443 395.06 258.094 443.624 274.603 493.68 C 277.988 503.942 281.241 514.536 284.273 525.166 L 284.376 525.528 C 285.535 529.582 286.732 533.774 288.161 537.794 C 290.044 543.093 292.028 547.26 294.405 550.905 C 300.091 559.634 308.349 564.979 316.495 565.203 C 322.559 565.393 328.357 562.715 333.216 560.069 C 347.76 552.15 360.691 541.366 373.196 530.938 C 402.681 506.35 433.169 480.924 459.968 452.375 C 498.538 411.339 509.411 382.496 514.234 364.371 C 516.092 357.37 517.949 348.193 515.785 339.299 C 513.196 328.66 505.462 320.257 497.982 312.131 C 495.248 309.162 492.422 306.091 489.885 302.955 C 476.749 286.709 469.58 265.572 470.216 244.962 C 470.372 239.917 470.983 234.843 471.574 229.937 C 472.202 224.732 472.85 219.351 472.953 214.007 C 473.12 205.398 471.708 193.342 464.037 184.8 C 458.216 178.321 448.958 174.378 438.635 173.984 C 429.214 173.631 419.951 176.001 411.276 178.465 C 401.905 181.126 392.6 184.043 384.733 186.545 C 381.569 187.55 378.405 188.563 375.237 189.576 C 339.799 200.921 303.378 212.578 266.366 212.58 C 257.522 212.58 248.651 211.915 239.744 210.421 C 238.481 210.209 237.213 209.981 235.941 209.752 C 231.097 208.882 226.145 207.992 221.3 207.992 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 315.579 573.609 C 315.359 573.609 315.138 573.605 314.916 573.598 C 312.624 573.529 310.301 573.076 308.013 572.251 C 305.856 571.474 303.721 570.363 301.668 568.95 C 297.809 566.297 294.313 562.638 291.557 558.37 C 289.066 554.513 286.99 550.111 285.023 544.514 C 283.599 540.459 282.397 536.242 281.234 532.163 L 280.973 531.245 C 277.809 520.15 274.386 509.022 270.796 498.168 C 253.407 445.587 230.593 394.568 202.99 346.531 C 198.22 338.23 193.702 330.087 190.839 321.712 C 187.506 311.964 187.058 303.573 189.469 296.06 C 190.609 292.507 192.421 289.201 194.174 286.004 C 195.485 283.61 196.842 281.136 197.91 278.572 C 204.322 263.177 200.194 245.61 195.882 232.026 C 194.179 226.659 193.24 222.38 192.926 218.559 C 192.525 213.677 193.18 209.759 194.929 206.581 C 195.97 204.691 197.419 203.068 199.239 201.754 C 201.192 200.344 203.632 199.249 206.491 198.497 C 214.122 196.487 222.275 197.962 230.159 199.386 C 231.473 199.624 232.833 199.87 234.163 200.094 C 245.838 202.063 257.679 202.759 270.361 202.229 C 281.654 201.755 293.354 200.309 306.13 197.808 C 329.855 193.164 353.7 185.505 376.76 178.099 C 379.94 177.078 383.227 176.022 386.458 174.992 C 394.739 172.35 404.532 169.273 414.373 166.468 C 422.907 164.036 431.98 161.685 441.242 161.685 C 441.904 161.685 442.566 161.696 443.229 161.721 C 448.339 161.912 453.389 162.959 457.833 164.749 C 462.761 166.734 466.901 169.569 470.14 173.174 C 478.269 182.222 479.759 194.976 479.579 204.083 C 479.467 209.711 478.782 215.372 478.12 220.847 C 477.495 226.005 476.85 231.337 476.685 236.633 C 476.011 258.238 483.534 280.391 497.324 297.414 C 499.99 300.705 502.965 303.93 505.841 307.049 C 509.79 311.329 513.872 315.757 517.229 320.431 C 520.996 325.675 523.426 330.678 524.659 335.728 C 526.956 345.144 524.999 354.838 523.038 362.232 C 520.753 370.839 517.585 379.533 513.622 388.075 C 509.952 395.986 505.472 404.038 500.309 412.007 C 491.435 425.698 480.22 439.705 466.024 454.824 C 437.836 484.865 405.762 511.62 374.744 537.494 C 361.583 548.472 347.974 559.825 332.649 568.168 C 327.682 570.871 321.794 573.608 315.579 573.609 Z M 214.682 197.57 C 211.915 197.57 209.179 197.846 206.506 198.55 C 203.654 199.3 201.219 200.393 199.272 201.799 C 197.459 203.107 196.014 204.726 194.978 206.608 C 193.234 209.776 192.581 213.684 192.981 218.556 C 193.294 222.372 194.233 226.647 195.935 232.01 C 200.25 245.603 204.379 263.182 197.961 278.594 C 196.892 281.161 195.535 283.637 194.222 286.031 C 192.471 289.226 190.66 292.53 189.521 296.078 C 187.114 303.579 187.561 311.959 190.891 321.695 C 193.753 330.066 198.269 338.207 203.037 346.505 C 230.642 394.545 253.458 445.568 270.849 498.152 C 274.438 509.007 277.862 520.137 281.025 531.232 L 281.286 532.15 C 282.449 536.227 283.65 540.444 285.074 544.498 C 287.039 550.09 289.114 554.49 291.602 558.342 C 294.355 562.604 297.846 566.257 301.699 568.907 C 303.748 570.317 305.879 571.425 308.032 572.201 C 310.314 573.025 312.631 573.477 314.918 573.545 C 315.138 573.552 315.359 573.556 315.579 573.556 C 321.782 573.556 327.66 570.822 332.622 568.121 C 347.942 559.78 361.549 548.429 374.708 537.453 C 405.725 511.58 437.798 484.826 465.984 454.788 C 480.177 439.67 491.39 425.667 500.262 411.978 C 505.425 404.011 509.902 395.962 513.571 388.054 C 517.532 379.515 520.7 370.823 522.983 362.219 C 524.943 354.832 526.898 345.146 524.604 335.743 C 523.373 330.7 520.946 325.702 517.184 320.464 C 513.829 315.792 509.747 311.367 505.799 307.087 C 502.923 303.967 499.948 300.743 497.28 297.449 C 483.482 280.417 475.955 258.25 476.629 236.633 C 476.794 231.334 477.439 226.001 478.064 220.842 C 478.727 215.368 479.412 209.708 479.523 204.083 C 479.704 194.986 478.215 182.247 470.099 173.212 C 466.865 169.614 462.732 166.784 457.81 164.802 C 453.373 163.014 448.329 161.969 443.225 161.778 C 442.563 161.753 441.9 161.741 441.24 161.741 C 431.984 161.741 422.917 164.091 414.385 166.523 C 404.545 169.327 394.753 172.406 386.473 175.046 C 383.242 176.076 379.954 177.132 376.775 178.153 C 353.712 185.56 329.865 193.219 306.138 197.864 C 293.359 200.365 281.656 201.812 270.362 202.286 C 257.674 202.819 245.831 202.119 234.152 200.15 C 232.822 199.926 231.463 199.68 230.147 199.442 C 225.035 198.515 219.806 197.57 214.682 197.57 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 314.051 581.733 C 313.816 581.733 313.582 581.729 313.346 581.721 C 310.949 581.644 308.519 581.164 306.126 580.293 C 303.87 579.471 301.639 578.301 299.493 576.814 C 295.459 574.018 291.809 570.171 288.936 565.687 C 283.683 557.486 280.961 547.91 278.33 538.649 C 278.198 538.183 278.065 537.717 277.933 537.251 C 258.704 469.764 231.125 404.608 195.963 343.591 C 190.948 334.891 186.197 326.352 183.183 317.568 C 179.675 307.346 179.197 298.547 181.721 290.668 C 182.915 286.944 184.815 283.477 186.652 280.125 C 188.027 277.615 189.449 275.02 190.568 272.33 C 197.289 256.18 192.941 237.752 188.402 223.502 C 186.61 217.873 185.62 213.384 185.287 209.376 C 184.863 204.254 185.547 200.144 187.38 196.812 C 188.47 194.83 189.991 193.126 191.899 191.749 C 193.948 190.272 196.508 189.123 199.508 188.335 C 207.513 186.233 216.064 187.786 224.334 189.288 C 225.715 189.539 227.141 189.798 228.537 190.035 C 240.808 192.114 253.251 192.855 266.58 192.296 C 278.447 191.799 290.741 190.277 304.167 187.642 C 329.094 182.751 354.144 174.682 378.369 166.878 C 391.217 162.74 404.502 158.461 417.544 154.732 C 427.137 151.99 437.375 149.342 447.813 149.728 C 453.173 149.925 458.47 151.02 463.132 152.895 C 468.302 154.975 472.647 157.947 476.042 161.728 C 484.568 171.218 486.127 184.597 485.933 194.15 C 485.813 200.051 485.092 205.986 484.395 211.726 C 483.737 217.139 483.058 222.736 482.883 228.295 C 482.171 250.957 490.068 274.193 504.552 292.043 C 507.353 295.495 510.478 298.878 513.5 302.148 C 517.647 306.636 521.935 311.277 525.462 316.179 C 529.418 321.677 531.971 326.925 533.267 332.221 C 535.683 342.096 533.634 352.265 531.579 360.022 C 529.189 369.043 525.873 378.157 521.725 387.111 C 517.883 395.402 513.194 403.843 507.787 412.197 C 498.495 426.553 486.75 441.236 471.882 457.086 C 458.634 471.21 443.406 485.875 425.329 501.92 C 409.171 516.26 392.368 530.28 376.118 543.838 C 362.311 555.358 348.033 567.271 331.952 576.026 C 326.742 578.862 320.569 581.733 314.051 581.733 Z M 208.066 187.366 C 205.173 187.366 202.314 187.654 199.522 188.388 C 196.528 189.173 193.974 190.32 191.932 191.794 C 190.03 193.166 188.515 194.863 187.429 196.838 C 185.601 200.16 184.918 204.26 185.342 209.371 C 185.674 213.375 186.663 217.86 188.455 223.485 C 191.508 233.074 193.219 240.874 193.838 248.032 C 194.214 252.393 194.17 256.556 193.705 260.405 C 193.194 264.638 192.155 268.658 190.619 272.351 C 189.498 275.043 188.076 277.64 186.7 280.151 C 184.865 283.501 182.967 286.965 181.774 290.686 C 179.253 298.553 179.731 307.341 183.235 317.551 C 186.248 326.331 190.997 334.866 196.01 343.564 C 231.175 404.584 258.756 469.745 277.986 537.237 C 278.119 537.702 278.251 538.168 278.383 538.634 C 281.014 547.892 283.733 557.464 288.982 565.657 C 291.851 570.136 295.497 573.978 299.524 576.769 C 301.666 578.253 303.894 579.421 306.145 580.241 C 308.532 581.111 310.956 581.591 313.348 581.667 C 313.583 581.674 313.816 581.678 314.051 581.678 C 320.557 581.678 326.722 578.811 331.926 575.978 C 348.001 567.225 362.276 555.315 376.082 543.797 C 408.625 516.645 442.275 488.568 471.842 457.049 C 486.707 441.201 498.449 426.52 507.74 412.167 C 513.146 403.815 517.834 395.377 521.675 387.088 C 525.822 378.137 529.136 369.026 531.525 360.008 C 533.579 352.258 535.626 342.097 533.213 332.234 C 531.919 326.945 529.369 321.704 525.417 316.21 C 521.892 311.312 517.605 306.672 513.459 302.185 C 510.437 298.914 507.312 295.531 504.509 292.078 C 490.018 274.217 482.115 250.969 482.828 228.293 C 483.002 222.732 483.682 217.134 484.34 211.72 C 485.037 205.981 485.758 200.047 485.878 194.15 C 486.072 184.607 484.515 171.242 476.001 161.765 C 472.61 157.99 468.273 155.023 463.111 152.947 C 458.455 151.074 453.164 149.98 447.81 149.783 C 447.129 149.758 446.447 149.746 445.768 149.746 C 436.045 149.746 426.52 152.223 417.558 154.785 C 404.517 158.513 391.232 162.793 378.384 166.931 C 354.158 174.735 329.107 182.805 304.176 187.697 C 290.748 190.332 278.451 191.854 266.581 192.351 C 253.248 192.907 240.801 192.169 228.526 190.089 C 227.13 189.852 225.704 189.593 224.323 189.343 C 218.948 188.365 213.451 187.366 208.066 187.366 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 313.902 584.665 C 308.974 584.665 304.058 583.674 299.257 581.71 C 294.153 579.622 289.31 576.436 285.253 572.497 C 282.273 569.598 279.506 566.289 276.794 562.38 C 275.081 559.918 273.857 557.904 272.828 555.849 C 270.919 552.036 269.804 547.642 268.726 543.392 C 268.646 543.078 268.567 542.765 268.487 542.453 C 263.376 522.397 257.018 503.05 250.91 485.129 C 242.65 460.897 234.157 439.066 224.946 418.391 C 214.825 395.677 202.846 372.286 188.325 346.88 C 183.86 339.067 178.858 329.942 176.018 320.505 C 174.119 314.194 173.175 307.91 173.215 301.826 C 173.255 295.618 174.319 289.418 176.379 283.398 C 176.912 281.84 177.548 280.19 178.382 278.208 C 179.952 274.474 181.778 270.781 183.544 267.208 C 184.524 265.226 185.537 263.176 186.496 261.141 C 193.728 245.79 190.922 228.377 187.223 213.368 C 185.27 205.371 183.588 195.279 187.945 188.159 C 189.142 186.201 190.765 184.529 192.766 183.19 C 194.921 181.748 197.584 180.643 200.683 179.907 C 208.912 177.951 217.676 179.611 226.152 181.215 C 227.502 181.471 228.9 181.736 230.266 181.98 C 241.618 184.006 253.085 185.016 265.322 185.068 C 265.645 185.069 265.969 185.069 266.293 185.069 C 276.991 185.069 287.998 184.332 299.904 182.819 C 318.389 180.471 337.886 176.146 363.123 168.797 C 371.917 166.209 380.829 163.437 389.446 160.756 C 400.371 157.357 411.667 153.842 422.752 150.698 C 426.189 149.723 430.252 148.603 434.316 147.689 C 440.913 146.205 446.534 145.5 451.829 145.5 C 452.432 145.5 453.031 145.51 453.627 145.527 C 459.15 145.692 464.577 146.772 469.318 148.651 C 474.602 150.745 479.015 153.769 482.435 157.642 C 491.043 167.418 492.019 181.201 491.321 191.042 C 490.938 196.44 490.047 201.877 489.186 207.136 C 488.186 213.23 487.154 219.532 486.891 225.865 C 486.43 237.1 488.379 248.677 492.685 260.275 C 494.704 265.714 497.241 271.127 500.227 276.363 C 503.134 281.461 506.481 286.419 510.176 291.099 C 512.288 293.78 514.546 296.441 516.731 299.014 C 518.515 301.114 520.359 303.287 522.102 305.445 C 524.886 308.868 528.442 313.433 531.262 318.394 C 534.045 323.291 535.816 328.029 536.678 332.878 C 537.442 337.172 537.505 341.828 536.871 347.111 C 536.263 352.17 535.101 357.108 534.045 361.271 C 530.061 376.885 524.984 390.671 518.522 403.415 C 513.488 413.337 507.135 423.48 499.639 433.562 C 492.972 442.53 485.165 451.762 476.435 461.003 C 466.189 471.87 454.936 482.756 442.034 494.284 C 431.487 503.709 419.892 513.522 405.542 525.168 C 399.623 529.974 393.573 534.819 387.721 539.503 C 384.889 541.77 381.961 544.114 379.084 546.425 C 378.415 546.963 377.744 547.502 377.073 548.041 C 374.029 550.487 370.881 553.018 367.762 555.485 C 357.614 563.51 346.566 571.857 334.545 578.54 C 327.796 582.292 321.733 584.275 316.008 584.604 C 315.306 584.644 314.603 584.665 313.902 584.665 Z M 208.814 179.075 C 206.07 179.075 203.356 179.329 200.696 179.96 C 197.603 180.695 194.945 181.797 192.797 183.235 C 190.802 184.57 189.185 186.237 187.992 188.187 C 183.645 195.291 185.326 205.369 187.277 213.356 C 190.978 228.374 193.784 245.799 186.545 261.165 C 185.586 263.2 184.573 265.25 183.593 267.233 C 181.827 270.805 180.001 274.498 178.432 278.231 C 177.599 280.212 176.963 281.86 176.429 283.418 C 174.372 289.431 173.309 295.625 173.269 301.828 C 173.23 307.906 174.172 314.184 176.07 320.489 C 178.908 329.92 183.908 339.043 188.372 346.853 C 202.894 372.261 214.873 395.654 224.995 418.369 C 234.207 439.047 242.701 460.879 250.961 485.112 C 257.07 503.034 263.428 522.383 268.54 542.44 C 268.619 542.752 268.699 543.065 268.779 543.379 C 269.856 547.627 270.971 552.018 272.877 555.825 C 273.905 557.878 275.127 559.89 276.839 562.349 C 279.549 566.256 282.314 569.562 285.291 572.458 C 289.343 576.393 294.18 579.574 299.277 581.659 C 304.755 583.899 310.383 584.871 316.004 584.55 C 321.721 584.222 327.777 582.241 334.518 578.492 C 346.535 571.812 357.581 563.466 367.727 555.443 C 370.847 552.976 373.994 550.445 377.038 547.999 C 377.709 547.461 378.38 546.922 379.049 546.383 C 381.926 544.072 384.854 541.728 387.686 539.461 C 393.537 534.776 399.587 529.932 405.507 525.126 C 419.856 513.481 431.451 503.669 441.997 494.245 C 454.897 482.717 466.149 471.832 476.395 460.966 C 485.123 451.726 492.928 442.496 499.594 433.53 C 507.089 423.45 513.441 413.31 518.473 403.391 C 524.933 390.65 530.009 376.868 533.991 361.257 C 535.047 357.096 536.208 352.161 536.816 347.105 C 537.451 341.827 537.388 337.177 536.624 332.888 C 535.763 328.045 533.994 323.313 531.215 318.421 C 528.397 313.463 524.842 308.901 522.059 305.48 C 520.317 303.322 518.473 301.15 516.689 299.049 C 514.504 296.475 512.245 293.815 510.133 291.133 C 506.437 286.451 503.087 281.491 500.18 276.39 C 497.193 271.152 494.654 265.737 492.634 260.294 C 488.326 248.689 486.376 237.105 486.837 225.864 C 487.099 219.527 488.133 213.223 489.132 207.127 C 489.993 201.87 490.884 196.435 491.267 191.038 C 491.964 181.208 490.99 167.44 482.395 157.678 C 478.979 153.812 474.574 150.792 469.299 148.702 C 464.562 146.826 459.143 145.746 453.625 145.582 C 447.805 145.406 441.672 146.092 434.327 147.742 C 430.264 148.657 426.203 149.776 422.767 150.751 C 411.682 153.895 400.386 157.409 389.462 160.808 C 380.844 163.49 371.933 166.263 363.138 168.849 C 337.898 176.2 318.399 180.525 299.911 182.874 C 288.003 184.387 276.993 185.125 266.293 185.125 C 265.969 185.125 265.646 185.124 265.322 185.123 C 253.083 185.071 241.612 184.061 230.256 182.034 C 228.89 181.79 227.493 181.525 226.142 181.27 C 220.412 180.185 214.55 179.075 208.814 179.075 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 311.521 587.778 C 300.791 587.778 290.472 584.797 281.867 579.122 C 277.888 576.49 274.131 573.421 270.381 569.741 C 268.464 567.869 266.453 565.77 264.732 563.117 C 261.977 558.872 260.743 553.535 259.549 548.375 C 259.479 548.073 259.409 547.771 259.339 547.47 C 254.781 527.87 248.55 508.407 242.524 489.585 C 234.184 463.529 226.274 442.085 217.631 422.099 C 208.223 400.355 196.578 377.44 180.985 349.985 C 175.412 340.173 169.92 329.61 167.491 318.856 C 165.887 311.752 165.484 304.671 166.261 297.209 C 166.961 290.481 168.62 283.526 171.332 275.946 C 172.04 273.967 172.796 272.022 173.642 269.866 C 176.353 262.959 179.406 256.198 182.719 249.769 C 186.264 242.891 188.113 235.177 188.372 226.185 C 188.609 218.002 187.478 209.899 186.34 203.051 C 185.379 197.264 184.54 189.833 186.604 183.693 C 187.64 180.61 189.356 178.037 191.702 176.042 C 194.326 173.812 197.842 172.216 202.154 171.296 C 210.623 169.492 219.606 171.26 228.293 172.968 C 229.605 173.227 230.962 173.494 232.288 173.743 C 243.811 175.901 255.459 177.144 267.897 177.542 C 279.025 177.899 290.486 177.567 302.934 176.525 C 313.421 175.647 323.914 174.181 335.012 172.043 C 345.031 170.114 355.6 167.619 367.325 164.418 C 378.405 161.392 389.605 157.997 400.438 154.714 C 409.561 151.948 418.996 149.087 428.255 146.481 C 431.953 145.441 435.941 144.349 440.05 143.418 C 446.913 141.863 452.742 141.126 458.241 141.126 C 458.742 141.126 459.239 141.132 459.735 141.144 C 465.423 141.277 470.979 142.342 475.8 144.225 C 481.195 146.332 485.679 149.41 489.124 153.374 C 497.837 163.458 498.219 177.635 497.005 187.751 C 496.405 192.755 495.363 197.797 494.355 202.673 C 492.978 209.342 491.553 216.237 491.197 223.254 C 489.859 249.895 503.999 274.241 516.096 289.973 C 517.573 291.901 519.105 293.834 520.587 295.704 C 523.004 298.752 525.502 301.903 527.767 305.043 C 531.462 310.166 534.087 314.452 536.026 318.531 C 538.396 323.518 539.823 328.365 540.386 333.352 C 541.491 343.075 539.003 353.307 536.807 362.336 C 533.39 376.245 529.336 391.095 522.872 405.454 C 514.025 425.076 500.033 445.022 481.285 464.736 C 470.958 475.631 459.565 486.456 446.455 497.83 C 435.689 507.17 423.879 516.792 409.288 528.111 C 404.409 531.9 399.424 535.719 394.602 539.411 C 390.582 542.491 386.425 545.675 382.347 548.828 C 380.593 550.184 378.81 551.568 377.085 552.906 C 375.044 554.49 372.933 556.128 370.85 557.736 C 360.474 565.734 349.348 574.109 337.434 580.869 C 331.285 584.358 325.072 586.522 318.966 587.301 C 316.473 587.621 313.986 587.778 311.521 587.778 Z M 182.744 249.782 L 182.768 249.794 C 179.457 256.222 176.403 262.981 173.694 269.886 C 172.848 272.042 172.091 273.986 171.383 275.964 C 168.673 283.54 167.015 290.491 166.316 297.214 C 165.54 304.67 165.941 311.745 167.545 318.845 C 169.972 329.59 175.462 340.149 181.033 349.958 C 196.627 377.415 208.273 400.332 217.682 422.078 C 226.326 442.065 234.236 463.511 242.578 489.568 C 248.603 508.391 254.835 527.855 259.393 547.457 C 259.463 547.758 259.533 548.06 259.603 548.363 C 260.795 553.519 262.029 558.85 264.778 563.087 C 266.496 565.736 268.505 567.831 270.42 569.701 C 274.168 573.379 277.922 576.446 281.897 579.076 C 292.468 586.048 305.629 588.951 318.959 587.248 C 325.059 586.47 331.266 584.308 337.408 580.822 C 349.319 574.065 360.444 565.691 370.818 557.693 C 372.901 556.086 375.012 554.448 377.053 552.864 C 378.778 551.526 380.562 550.142 382.316 548.786 C 386.394 545.633 390.55 542.449 394.571 539.37 C 399.392 535.677 404.377 531.858 409.256 528.069 C 423.846 516.75 435.655 507.129 446.421 497.79 C 459.529 486.417 470.921 475.593 481.247 464.7 C 499.991 444.99 513.979 425.05 522.823 405.433 C 529.287 391.078 533.34 376.23 536.756 362.324 C 538.95 353.3 541.437 343.071 540.333 333.359 C 539.77 328.378 538.346 323.536 535.979 318.555 C 534.04 314.479 531.418 310.196 527.724 305.075 C 525.461 301.936 522.963 298.785 520.546 295.738 C 519.064 293.867 517.531 291.934 516.054 290.006 C 503.951 274.267 489.806 249.909 491.145 223.251 C 491.501 216.231 492.926 209.333 494.304 202.663 C 495.312 197.787 496.353 192.746 496.953 187.745 C 498.166 177.639 497.785 163.479 489.085 153.41 C 485.645 149.452 481.17 146.38 475.782 144.276 C 470.967 142.396 465.418 141.332 459.736 141.199 C 453.795 141.053 447.548 141.776 440.063 143.472 C 435.957 144.403 431.969 145.494 428.272 146.534 C 419.013 149.141 409.579 152 400.455 154.766 C 389.623 158.05 378.422 161.446 367.341 164.471 C 355.615 167.673 345.044 170.168 335.025 172.098 C 323.924 174.237 313.429 175.702 302.94 176.58 C 290.491 177.622 279.027 177.954 267.897 177.598 C 255.455 177.199 243.805 175.955 232.281 173.797 C 230.953 173.548 229.596 173.281 228.284 173.023 C 219.602 171.314 210.622 169.547 202.167 171.35 C 197.865 172.268 194.355 173.86 191.739 176.084 C 189.4 178.071 187.691 180.638 186.658 183.711 C 184.597 189.84 185.435 197.262 186.395 203.043 C 187.533 209.893 188.665 218 188.428 226.187 C 188.168 235.187 186.317 242.91 182.769 249.794 L 182.744 249.782 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 306.227 591.204 C 303.935 591.204 301.678 591.104 299.463 590.902 C 291.964 590.221 284.966 588.382 278.665 585.437 C 273.664 583.09 268.918 580.263 264.153 576.792 C 261.234 574.679 258.87 572.728 256.819 570.077 C 253.204 565.402 251.86 559.115 250.56 553.034 C 250.499 552.749 250.438 552.464 250.377 552.18 C 246.551 534.367 241.221 516.656 236.067 499.528 C 235.486 497.595 234.905 495.664 234.326 493.733 C 226.005 465.974 218.659 444.93 210.504 425.501 C 205.602 413.831 199.961 401.783 193.256 388.668 C 187.741 377.877 181.568 366.474 173.831 352.782 C 167.463 341.512 161.277 329.365 159.152 316.902 C 157.817 309.067 157.928 301.015 159.492 292.286 C 160.745 285.29 162.897 277.857 166.471 268.185 C 166.939 266.919 167.423 265.64 167.89 264.404 C 168.286 263.359 168.695 262.278 169.09 261.217 C 172.06 253.229 175.064 245.45 179.129 238.09 C 182.884 231.293 185.11 223.686 185.936 214.835 C 186.682 206.832 186.177 199.072 185.645 192.427 C 185.17 186.503 185.018 179.678 187.492 173.968 C 188.757 171.049 190.65 168.624 193.119 166.76 C 195.881 164.674 199.48 163.2 203.814 162.379 C 212.528 160.728 221.74 162.606 230.65 164.423 C 231.913 164.681 233.222 164.948 234.5 165.199 C 246.194 167.487 258.022 168.964 270.662 169.714 C 281.921 170.382 293.53 170.45 306.153 169.924 C 317.026 169.471 327.675 168.4 338.71 166.65 C 349.093 165.004 359.89 162.741 371.715 159.732 C 384.509 156.476 397.418 152.649 409.904 148.948 C 417.789 146.61 425.944 144.194 433.946 141.958 C 437.727 140.902 441.8 139.792 445.972 138.84 C 453.024 137.23 459.232 136.444 464.903 136.444 C 465.282 136.444 465.658 136.448 466.032 136.455 C 471.884 136.555 477.568 137.605 482.47 139.491 C 487.977 141.612 492.53 144.743 496 148.799 C 504.838 159.21 504.617 173.771 502.876 184.153 C 502.091 188.84 500.914 193.565 499.775 198.134 C 497.99 205.297 496.145 212.704 495.69 220.336 C 495.343 226.229 495.825 232.368 497.122 238.579 C 498.312 244.278 500.224 250.208 502.805 256.204 C 507.201 266.419 513.547 276.996 522.204 288.54 C 523.006 289.615 523.824 290.701 524.615 291.751 C 527.705 295.85 530.899 300.089 533.621 304.335 C 536.952 309.532 539.292 313.988 540.985 318.359 C 542.944 323.417 544.021 328.376 544.281 333.522 C 544.724 342.156 542.586 351.161 540.519 359.869 C 540.268 360.928 540.007 362.022 539.757 363.097 C 539.337 364.869 538.92 366.651 538.516 368.375 C 535.341 381.936 532.342 394.745 527.409 407.189 C 523.204 417.771 517.36 428.546 510.037 439.217 C 503.329 448.993 495.35 458.733 486.322 468.165 C 475.917 479.087 464.383 489.85 451.064 501.07 C 440.083 510.32 428.059 519.752 413.222 530.75 C 408.866 533.983 404.416 537.241 400.113 540.391 C 395.414 543.83 390.556 547.387 385.799 550.928 C 382.384 553.467 378.914 556.079 375.558 558.604 L 374.125 559.682 C 363.446 567.709 352.405 576.01 340.51 582.895 C 334.793 586.205 328.603 588.492 322.109 589.696 C 316.682 590.699 311.365 591.204 306.227 591.204 Z M 211.002 161.796 C 208.582 161.796 206.184 161.985 203.822 162.432 C 199.497 163.252 195.906 164.722 193.151 166.802 C 190.689 168.661 188.801 171.079 187.541 173.989 C 185.072 179.688 185.224 186.504 185.697 192.421 C 186.23 199.069 186.736 206.832 185.989 214.838 C 185.163 223.698 182.934 231.311 179.176 238.116 C 175.112 245.472 172.109 253.249 169.139 261.235 C 168.744 262.296 168.335 263.377 167.94 264.421 C 167.473 265.659 166.989 266.937 166.521 268.203 C 162.948 277.871 160.796 285.301 159.543 292.294 C 157.981 301.017 157.87 309.063 159.205 316.891 C 161.328 329.346 167.511 341.489 173.877 352.755 C 181.615 366.447 187.787 377.85 193.303 388.642 C 200.008 401.758 205.65 413.808 210.552 425.478 C 218.708 444.91 226.056 465.956 234.377 493.716 C 234.956 495.648 235.537 497.579 236.119 499.511 C 241.272 516.641 246.602 534.353 250.428 552.168 C 250.489 552.451 250.55 552.737 250.611 553.022 C 251.911 559.097 253.254 565.378 256.862 570.043 C 258.908 572.689 261.269 574.637 264.184 576.747 C 268.945 580.216 273.689 583.042 278.688 585.387 C 284.983 588.329 291.974 590.166 299.467 590.847 C 306.641 591.499 314.255 591.092 322.098 589.639 C 328.585 588.436 334.77 586.151 340.481 582.844 C 352.373 575.96 363.413 567.66 374.091 559.634 L 375.524 558.556 C 378.88 556.031 382.35 553.419 385.765 550.88 C 390.523 547.338 395.381 543.782 400.079 540.343 C 404.383 537.193 408.833 533.935 413.188 530.702 C 428.024 519.704 440.047 510.274 451.027 501.025 C 464.345 489.805 475.877 479.043 486.281 468.124 C 495.307 458.693 503.284 448.956 509.991 439.182 C 517.31 428.515 523.153 417.742 527.356 407.165 C 532.289 394.724 535.287 381.917 538.462 368.358 C 538.865 366.635 539.283 364.852 539.702 363.08 C 539.952 362.005 540.213 360.911 540.464 359.852 C 542.53 351.148 544.668 342.147 544.224 333.521 C 543.965 328.381 542.888 323.426 540.931 318.375 C 539.24 314.007 536.902 309.554 533.573 304.361 C 530.851 300.116 527.658 295.878 524.57 291.78 C 523.778 290.729 522.959 289.644 522.157 288.569 C 513.498 277.021 507.15 266.44 502.752 256.222 C 500.17 250.222 498.257 244.289 497.066 238.586 C 495.768 232.37 495.285 226.227 495.633 220.328 C 496.088 212.692 497.935 205.282 499.72 198.117 C 500.858 193.548 502.035 188.825 502.821 184.141 C 504.559 173.769 504.78 159.225 495.957 148.83 C 492.493 144.781 487.947 141.655 482.448 139.538 C 477.553 137.654 471.875 136.605 466.029 136.505 C 460.06 136.396 453.502 137.174 445.982 138.89 C 441.812 139.842 437.738 140.951 433.959 142.007 C 425.957 144.243 417.803 146.661 409.917 148.998 C 397.432 152.699 384.521 156.526 371.727 159.782 C 359.899 162.792 349.101 165.055 338.716 166.701 C 327.68 168.452 317.028 169.523 306.153 169.976 C 293.528 170.503 281.917 170.433 270.656 169.766 C 258.014 169.016 246.183 167.539 234.487 165.249 C 233.207 164.999 231.9 164.732 230.636 164.474 C 224.15 163.152 217.501 161.796 211.002 161.796 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 299.096 595.01 C 290.623 595.01 282.698 593.788 275.53 591.373 C 269.584 589.36 263.683 586.7 257.99 583.465 C 255.079 581.821 251.742 579.804 248.974 576.658 C 246.962 574.372 245.377 571.417 244.13 567.626 C 243.028 564.278 242.317 560.712 241.629 557.263 L 241.479 556.51 C 238.11 539.67 233.368 522.904 228.783 506.691 C 227.931 503.679 227.05 500.565 226.193 497.503 C 220.394 476.781 213.156 452.381 203.441 428.523 C 192.91 402.688 179.579 378.015 166.742 355.2 C 159.572 342.456 152.687 328.713 150.877 314.567 C 150.291 309.982 150.191 305.406 150.571 300.577 C 150.912 296.241 151.637 291.795 152.784 286.984 C 154.855 278.309 157.904 270.003 161.675 260.045 L 162.024 259.126 C 162.886 256.853 163.778 254.502 164.602 252.186 C 164.875 251.422 165.145 250.657 165.416 249.893 C 168.262 241.862 171.205 233.558 175.604 226.031 C 179.536 219.304 182.132 211.801 183.541 203.093 C 184.728 195.756 184.915 188.655 185.013 181.421 C 185.091 175.729 185.559 169.19 188.445 163.865 C 191.627 157.993 197.217 154.466 205.536 153.081 C 214.511 151.588 223.962 153.579 233.1 155.506 C 234.307 155.761 235.554 156.024 236.775 156.273 C 248.642 158.693 260.652 160.405 273.493 161.507 C 284.736 162.472 296.338 162.942 308.945 162.942 C 309.109 162.942 309.272 162.942 309.436 162.942 C 331.508 162.92 352.09 160.367 376.17 154.664 C 390.457 151.28 404.85 147.095 418.769 143.047 C 425.635 141.05 432.734 138.985 439.702 137.053 C 443.572 135.979 447.736 134.852 451.958 133.88 C 459.275 132.198 465.703 131.377 471.572 131.377 C 471.848 131.377 472.121 131.379 472.394 131.383 C 478.505 131.451 484.163 132.456 489.212 134.369 C 494.839 136.501 499.458 139.688 502.942 143.841 C 511.927 154.555 511.094 169.512 508.813 180.173 C 507.866 184.599 506.566 189.063 505.308 193.38 C 503.094 200.978 500.804 208.837 500.247 217.034 C 499.845 223.043 500.37 229.319 501.808 235.687 C 503.104 241.427 505.196 247.465 508.023 253.632 C 513.775 266.18 521.922 277.908 528.376 286.724 L 528.782 287.282 C 532.732 292.708 536.464 297.832 539.538 303.244 C 542.494 308.445 544.611 313.207 546.007 317.8 C 547.564 322.915 548.293 327.988 548.24 333.306 C 548.172 340.981 546.231 349.001 544.355 356.757 C 543.823 358.958 543.273 361.234 542.771 363.472 C 541.696 368.191 540.74 372.859 539.816 377.375 C 537.6 388.194 535.508 398.414 532.01 408.538 C 528.235 419.43 522.645 430.523 515.394 441.507 C 508.698 451.652 500.633 461.645 491.423 471.209 C 480.939 482.155 469.266 492.858 455.737 503.925 C 444.542 513.082 432.303 522.322 417.22 533.002 C 413.158 535.883 409.009 538.784 404.997 541.589 C 399.846 545.188 394.521 548.912 389.313 552.641 C 385.881 555.096 382.115 557.83 377.464 561.243 C 376.452 561.984 375.441 562.727 374.429 563.471 C 364.558 570.72 354.352 578.218 343.65 584.535 C 338.301 587.694 332.133 590.105 325.317 591.705 C 316.207 593.842 307.59 594.953 299.707 595.007 C 299.503 595.01 299.299 595.01 299.096 595.01 Z M 212.201 152.613 C 209.961 152.613 207.739 152.769 205.544 153.135 C 197.243 154.517 191.666 158.035 188.492 163.891 C 185.612 169.206 185.145 175.736 185.067 181.422 C 184.969 188.658 184.782 195.762 183.594 203.101 C 182.184 211.816 179.586 219.325 175.651 226.059 C 171.254 233.581 168.312 241.883 165.467 249.911 C 165.196 250.675 164.925 251.44 164.653 252.204 C 163.828 254.521 162.937 256.872 162.074 259.145 L 161.726 260.064 C 157.955 270.02 154.907 278.324 152.837 286.997 C 151.689 291.805 150.966 296.248 150.625 300.581 C 150.245 305.405 150.345 309.979 150.931 314.56 C 152.739 328.696 159.621 342.433 166.789 355.174 C 179.626 377.989 192.958 402.665 203.49 428.503 C 213.207 452.363 220.446 476.766 226.245 497.488 C 227.102 500.55 227.983 503.664 228.835 506.676 C 233.421 522.891 238.163 539.658 241.532 556.5 L 241.683 557.253 C 243.081 564.269 244.527 571.523 249.014 576.622 C 251.776 579.762 255.109 581.776 258.016 583.417 C 263.706 586.65 269.603 589.31 275.546 591.322 C 282.708 593.734 290.628 594.957 299.094 594.957 C 299.298 594.957 299.501 594.956 299.706 594.954 C 307.585 594.899 316.197 593.789 325.304 591.653 C 332.114 590.055 338.277 587.645 343.622 584.49 C 354.32 578.174 364.526 570.678 374.396 563.428 C 375.407 562.685 376.419 561.942 377.431 561.201 C 382.083 557.787 385.848 555.054 389.28 552.598 C 394.488 548.869 399.814 545.146 404.965 541.546 C 408.977 538.741 413.126 535.841 417.187 532.959 C 432.269 522.28 444.507 513.041 455.702 503.885 C 469.229 492.819 480.901 482.118 491.384 471.173 C 500.591 461.611 508.654 451.622 515.349 441.479 C 522.596 430.498 528.184 419.41 531.958 408.522 C 535.455 398.402 537.547 388.184 539.762 377.366 C 540.686 372.85 541.642 368.181 542.718 363.462 C 543.219 361.223 543.769 358.947 544.302 356.746 C 546.177 348.993 548.116 340.976 548.185 333.307 C 548.239 327.993 547.509 322.928 545.955 317.818 C 544.559 313.228 542.444 308.47 539.49 303.272 C 536.417 297.862 532.687 292.739 528.737 287.314 L 528.332 286.757 C 521.875 277.939 513.728 266.207 507.973 253.656 C 505.144 247.484 503.051 241.443 501.754 235.699 C 500.314 229.327 499.789 223.046 500.192 217.032 C 500.75 208.828 503.04 200.967 505.255 193.365 C 506.513 189.049 507.813 184.587 508.76 180.162 C 511.038 169.513 511.871 154.574 502.9 143.877 C 499.423 139.731 494.811 136.549 489.192 134.421 C 484.149 132.509 478.497 131.506 472.393 131.438 C 472.12 131.434 471.846 131.432 471.572 131.432 C 465.706 131.432 459.284 132.253 451.97 133.934 C 447.749 134.906 443.587 136.033 439.717 137.105 C 432.749 139.039 425.65 141.103 418.784 143.1 C 404.864 147.148 390.471 151.333 376.182 154.718 C 352.098 160.422 331.513 162.975 309.436 162.997 C 309.272 162.997 309.108 162.997 308.945 162.997 C 296.337 162.997 284.735 162.527 273.489 161.562 C 260.646 160.46 248.633 158.747 236.766 156.327 C 235.544 156.078 234.297 155.815 233.09 155.561 C 226.191 154.105 219.114 152.613 212.201 152.613 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 291.483 599.162 C 284.727 599.162 278.42 598.435 272.376 596.97 C 265.413 595.272 258.494 592.858 251.809 589.798 C 248.344 588.221 244.374 586.258 241.11 582.9 C 238.698 580.418 236.836 577.128 235.417 572.843 C 234.166 569.064 233.41 565.022 232.679 561.112 L 232.565 560.503 C 229.536 544.338 225.262 528.221 221.127 512.634 C 220.11 508.798 219.058 504.832 218.043 500.934 C 215.518 491.235 212.128 478.479 208.287 465.811 C 204.42 453.052 200.518 441.733 196.36 431.206 C 185.936 404.847 171.939 379.225 159.636 357.279 C 151.661 343.051 144.075 327.705 142.586 311.893 C 142.151 307.269 142.193 302.653 142.717 297.779 C 143.184 293.424 144.03 288.951 145.3 284.105 C 147.666 275.084 151.077 266.369 154.689 257.143 C 155.403 255.319 156.141 253.434 156.862 251.567 C 157.937 248.785 159.073 245.798 160.097 242.817 C 160.602 241.35 161.105 239.854 161.591 238.407 C 164.41 230.027 167.324 221.362 172.062 213.634 C 176.046 207.134 178.958 199.939 180.963 191.636 C 182.707 184.416 183.521 177.38 184.239 171.173 L 184.366 170.078 C 185.031 164.35 186.1 158.366 189.384 153.425 C 193.046 147.913 198.887 144.649 207.242 143.445 C 216.494 142.114 226.198 144.224 235.581 146.265 C 236.714 146.512 237.886 146.767 239.035 147.011 C 251.074 149.562 263.267 151.51 276.308 152.967 C 287.833 154.255 299.738 155.123 312.702 155.622 C 324.329 156.069 335.292 155.79 346.218 154.769 C 357.174 153.744 368.422 151.943 380.608 149.26 C 396.23 145.821 411.942 141.327 427.137 136.981 C 433.14 135.264 439.348 133.489 445.441 131.811 C 449.39 130.722 453.636 129.578 457.928 128.584 C 465.512 126.828 472.162 125.972 478.234 125.972 C 478.403 125.972 478.57 125.973 478.738 125.974 C 485.016 126.01 490.8 126.999 495.929 128.916 C 501.67 131.06 506.358 134.301 509.865 138.547 C 513.822 143.339 516.13 149.372 516.723 156.479 C 517.212 162.345 516.542 168.865 514.732 175.857 C 513.641 180.067 512.227 184.314 510.86 188.421 C 508.199 196.41 505.449 204.672 504.787 213.397 C 503.917 225.03 506.677 237.24 513.224 250.725 C 518.899 262.413 526.541 273.405 534.531 284.572 C 538.411 290.03 542.448 295.857 545.439 301.818 C 550.834 312.569 552.914 322.111 552.182 332.757 C 551.718 339.635 549.972 346.503 548.124 353.775 C 547.314 356.96 546.477 360.254 545.768 363.515 C 544.388 369.87 543.347 376.106 542.34 382.138 C 540.757 391.621 539.261 400.579 536.593 409.555 C 533.253 420.75 527.918 432.16 520.734 443.465 C 514.062 453.967 505.911 464.213 496.509 473.92 C 485.946 484.893 474.133 495.532 460.393 506.447 C 448.987 515.509 436.533 524.557 421.202 534.922 C 417.333 537.543 413.381 540.18 409.559 542.729 C 404.056 546.399 398.366 550.195 392.811 554.021 C 389 556.644 385.067 559.408 380.787 562.471 C 378.714 563.953 376.611 565.468 374.579 566.935 C 365.627 573.391 356.371 580.068 346.774 585.842 C 341.664 588.919 335.689 591.385 328.509 593.38 C 317.928 596.321 308.581 598.096 299.933 598.806 C 297.035 599.042 294.222 599.162 291.483 599.162 Z M 172.086 213.648 L 172.109 213.662 C 167.375 221.385 164.461 230.047 161.644 238.423 C 161.157 239.871 160.654 241.367 160.149 242.835 C 159.124 245.817 157.988 248.803 156.914 251.586 C 156.193 253.454 155.455 255.34 154.741 257.162 C 151.129 266.388 147.718 275.101 145.354 284.119 C 144.083 288.963 143.239 293.433 142.772 297.785 C 142.249 302.655 142.206 307.269 142.641 311.888 C 144.129 327.69 151.712 343.029 159.685 357.253 C 171.987 379.2 185.986 404.823 196.411 431.186 C 200.57 441.714 204.472 453.035 208.34 465.794 C 212.18 478.464 215.571 491.221 218.096 500.92 C 219.111 504.818 220.163 508.784 221.18 512.619 C 225.314 528.207 229.589 544.325 232.619 560.493 L 232.733 561.102 C 233.464 565.009 234.219 569.05 235.47 572.825 C 236.885 577.102 238.743 580.386 241.149 582.861 C 244.406 586.212 248.372 588.173 251.832 589.747 C 258.514 592.807 265.43 595.219 272.389 596.916 C 280.878 598.974 289.886 599.574 299.929 598.75 C 308.573 598.04 317.917 596.266 328.494 593.326 C 335.67 591.331 341.64 588.868 346.747 585.793 C 356.34 580.02 365.596 573.344 374.547 566.888 C 376.58 565.422 378.682 563.906 380.755 562.424 C 385.035 559.361 388.969 556.598 392.78 553.974 C 398.335 550.148 404.025 546.352 409.529 542.682 C 413.351 540.132 417.302 537.497 421.171 534.875 C 436.501 524.511 448.953 515.464 460.359 506.403 C 474.097 495.489 485.909 484.851 496.469 473.879 C 505.87 464.177 514.018 453.933 520.689 443.434 C 527.87 432.132 533.203 420.728 536.542 409.537 C 539.208 400.565 540.703 391.609 542.286 382.127 C 543.293 376.095 544.334 369.858 545.716 363.502 C 546.424 360.241 547.262 356.946 548.071 353.76 C 549.919 346.491 551.665 339.625 552.128 332.752 C 552.859 322.116 550.781 312.583 545.391 301.84 C 542.402 295.883 538.365 290.057 534.487 284.602 C 526.496 273.433 518.853 262.438 513.176 250.747 C 506.624 237.253 503.862 225.033 504.733 213.391 C 505.396 204.659 508.147 196.394 510.809 188.402 C 512.176 184.296 513.59 180.05 514.679 175.841 C 519.792 156.094 514.861 144.679 509.824 138.58 C 506.323 134.342 501.643 131.106 495.911 128.965 C 490.788 127.05 485.011 126.062 478.739 126.027 C 478.571 126.026 478.403 126.025 478.235 126.025 C 472.166 126.025 465.521 126.88 457.941 128.635 C 453.65 129.63 449.405 130.774 445.456 131.861 C 439.363 133.54 433.155 135.315 427.153 137.032 C 411.957 141.378 396.243 145.871 380.62 149.311 C 368.432 151.994 357.181 153.796 346.223 154.821 C 335.295 155.843 324.329 156.124 312.7 155.675 C 299.734 155.176 287.829 154.307 276.302 153.019 C 263.258 151.561 251.064 149.613 239.023 147.062 C 237.875 146.818 236.702 146.563 235.569 146.316 C 226.19 144.276 216.493 142.166 207.249 143.497 C 198.911 144.698 193.082 147.955 189.428 153.453 C 186.151 158.386 185.084 164.36 184.42 170.083 L 184.293 171.177 C 183.575 177.386 182.76 184.423 181.016 191.647 C 179.01 199.955 176.097 207.156 172.109 213.661 L 172.086 213.648 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 284.18 603.56 C 278.975 603.56 273.991 603.146 269.151 602.318 C 261.179 600.945 253.242 598.78 245.558 595.882 C 241.541 594.377 236.941 592.472 233.176 588.893 C 230.354 586.212 228.21 582.577 226.621 577.782 C 225.221 573.56 224.423 569.03 223.652 564.649 L 223.581 564.248 C 220.831 548.642 216.967 533.055 213.229 517.981 C 212.102 513.436 210.937 508.736 209.822 504.116 C 204.33 481.349 198.215 457.153 189.209 433.642 C 184.719 421.935 179.161 409.566 172.218 395.829 C 166.261 384.043 160.011 372.626 152.46 359.111 C 143.677 343.39 135.389 326.436 134.225 308.972 C 133.91 304.265 134.074 299.566 134.723 294.607 C 135.302 290.179 136.262 285.636 137.654 280.717 C 140.246 271.565 143.861 262.765 147.689 253.447 C 149.11 249.987 150.581 246.408 151.98 242.84 C 153.493 238.984 154.585 236.011 155.523 233.201 C 156.181 231.23 156.826 229.216 157.449 227.268 C 160.309 218.337 163.266 209.102 168.451 200.987 C 172.342 194.898 175.459 188.231 177.981 180.607 C 180.176 173.97 181.621 167.516 182.896 161.822 C 183.155 160.665 183.399 159.573 183.648 158.485 C 184.9 153.016 186.565 147.324 190.253 142.736 C 194.393 137.586 200.485 134.584 208.878 133.559 C 218.422 132.391 228.394 134.627 238.036 136.788 C 239.082 137.023 240.163 137.265 241.222 137.498 C 263.94 142.486 288.366 145.939 315.897 148.053 C 339.993 149.904 360.653 148.573 384.976 143.605 C 401.828 140.163 418.753 135.393 435.121 130.781 C 440.365 129.303 445.787 127.775 451.109 126.319 C 455.149 125.214 459.485 124.051 463.827 123.038 C 471.685 121.207 478.561 120.316 484.836 120.316 C 484.895 120.316 484.953 120.316 485.012 120.316 C 491.457 120.318 497.367 121.292 502.577 123.213 C 508.429 125.371 513.187 128.665 516.719 133.003 C 520.746 137.953 522.98 144.173 523.357 151.492 C 523.667 157.514 522.733 164.176 520.58 171.29 C 519.36 175.321 517.84 179.386 516.37 183.317 C 513.25 191.66 510.025 200.287 509.256 209.509 C 508.768 215.443 509.292 221.644 510.813 227.94 C 512.178 233.588 514.319 239.358 517.359 245.579 C 522.979 257.08 530.653 267.996 538.075 278.553 C 538.911 279.743 539.775 280.972 540.614 282.172 C 544.492 287.751 548.467 293.789 551.268 300.141 C 555.994 310.856 557.469 320.668 556.052 331.957 C 555.298 338.04 553.648 344.104 551.901 350.524 C 550.766 354.692 549.593 359.003 548.693 363.307 C 547.115 370.859 546.184 378.232 545.283 385.363 C 544.196 393.973 543.169 402.106 541.106 410.319 C 538.204 421.812 533.123 433.539 526.003 445.171 C 519.362 456.022 511.125 466.522 501.521 476.379 C 490.881 487.377 478.928 497.956 464.977 508.719 C 453.517 517.56 440.478 526.677 425.111 536.592 C 421.367 539.013 417.542 541.446 413.843 543.799 C 408.056 547.48 402.071 551.287 396.238 555.151 C 392.239 557.797 388.135 560.588 384.038 563.448 C 380.942 565.606 377.813 567.831 374.788 569.983 C 366.725 575.718 358.387 581.649 349.827 586.898 C 344.913 589.913 339.13 592.425 331.628 594.805 C 319.531 598.642 309.51 601.049 300.093 602.381 C 294.534 603.166 289.252 603.56 284.18 603.56 Z M 214.358 133.294 C 212.521 133.294 210.695 133.393 208.884 133.614 C 200.506 134.638 194.426 137.633 190.295 142.771 C 186.614 147.35 184.951 153.035 183.701 158.497 C 183.452 159.585 183.208 160.678 182.948 161.835 C 181.674 167.53 180.229 173.985 178.032 180.626 C 175.509 188.254 172.39 194.924 168.496 201.018 C 163.315 209.126 160.359 218.357 157.501 227.285 C 156.876 229.232 156.232 231.246 155.574 233.218 C 154.636 236.029 153.544 239.003 152.03 242.86 C 150.631 246.429 149.16 250.007 147.739 253.468 C 143.912 262.784 140.298 271.583 137.706 280.732 C 136.315 285.647 135.356 290.188 134.776 294.614 C 134.128 299.569 133.965 304.264 134.278 308.969 C 135.443 326.421 143.728 343.369 152.508 359.084 C 160.059 372.599 166.309 384.016 172.267 395.804 C 179.211 409.543 184.769 421.914 189.26 433.622 C 198.268 457.136 204.383 481.334 209.875 504.103 C 210.989 508.722 212.154 513.422 213.282 517.967 C 217.019 533.042 220.884 548.63 223.634 564.237 L 223.705 564.64 C 224.476 569.018 225.274 573.546 226.672 577.764 C 228.259 582.551 230.399 586.178 233.213 588.853 C 236.971 592.425 241.565 594.327 245.577 595.83 C 253.258 598.727 261.192 600.892 269.16 602.264 C 278.712 603.896 288.827 603.917 300.086 602.325 C 309.5 600.994 319.519 598.587 331.612 594.751 C 339.11 592.373 344.889 589.862 349.799 586.85 C 358.357 581.601 366.694 575.671 374.757 569.936 C 377.782 567.785 380.911 565.559 384.007 563.401 C 388.104 560.541 392.209 557.749 396.208 555.103 C 402.042 551.239 408.026 547.432 413.814 543.751 C 417.513 541.398 421.338 538.965 425.082 536.544 C 440.447 526.63 453.486 517.514 464.945 508.673 C 478.892 497.912 490.844 487.336 501.483 476.338 C 511.083 466.484 519.318 455.987 525.957 445.14 C 533.074 433.512 538.154 421.791 541.053 410.303 C 543.116 402.093 544.143 393.962 545.23 385.354 C 546.13 378.222 547.061 370.847 548.641 363.294 C 549.541 358.988 550.715 354.677 551.849 350.507 C 553.595 344.09 555.245 338.027 555.999 331.949 C 557.415 320.67 555.94 310.866 551.219 300.162 C 548.419 293.814 544.447 287.778 540.57 282.201 C 539.731 281.002 538.866 279.772 538.031 278.583 C 530.608 268.024 522.932 257.106 517.311 245.602 C 514.269 239.377 512.126 233.604 510.761 227.952 C 509.238 221.65 508.713 215.444 509.203 209.504 C 509.972 200.274 513.199 191.643 516.32 183.297 C 517.789 179.367 519.309 175.303 520.529 171.274 C 522.68 164.165 523.613 157.51 523.304 151.493 C 522.927 144.187 520.697 137.977 516.677 133.036 C 513.152 128.706 508.402 125.417 502.559 123.263 C 497.354 121.345 491.451 120.371 485.013 120.37 C 484.954 120.37 484.895 120.37 484.837 120.37 C 478.564 120.37 471.695 121.26 463.84 123.09 C 459.498 124.103 455.163 125.266 451.124 126.37 C 445.801 127.827 440.379 129.355 435.135 130.832 C 418.767 135.445 401.841 140.214 384.986 143.657 C 360.658 148.626 339.993 149.956 315.893 148.106 C 288.359 145.992 263.931 142.539 241.21 137.55 C 240.151 137.317 239.069 137.075 238.024 136.84 C 230.217 135.092 222.193 133.294 214.358 133.294 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 277.04 608.127 C 273.215 608.127 269.486 607.915 265.826 607.495 C 256.847 606.453 247.891 604.535 239.206 601.795 C 234.64 600.364 229.412 598.519 225.141 594.715 C 221.902 591.83 219.472 587.842 217.71 582.523 C 216.161 577.846 215.326 572.819 214.518 567.957 L 214.495 567.819 C 211.988 552.725 208.499 537.622 205.125 523.015 C 203.922 517.807 202.678 512.421 201.5 507.127 C 198.957 495.692 196.204 483.503 192.976 471.261 C 189.492 458.054 185.888 446.489 181.959 435.906 C 172.529 410.546 159.725 386.874 145.183 360.77 C 135.594 343.554 126.603 324.988 125.763 305.88 C 125.549 301.014 125.823 296.159 126.603 291.039 C 127.299 286.468 128.386 281.782 129.927 276.712 C 132.791 267.282 136.688 258.243 140.813 248.674 C 142.882 243.876 145.022 238.914 146.996 233.942 C 148.598 229.911 149.822 226.565 150.848 223.412 C 151.626 221.02 152.376 218.571 153.1 216.204 C 156.028 206.637 159.055 196.744 164.737 188.172 C 168.449 182.573 171.666 176.506 174.571 169.625 C 177.105 163.625 179.072 157.789 180.806 152.64 C 181.504 150.567 182.164 148.61 182.831 146.723 C 184.665 141.526 186.928 136.131 191.025 131.88 C 195.638 127.095 201.979 124.355 210.413 123.504 C 220.274 122.509 230.531 124.873 240.452 127.16 C 241.407 127.38 242.361 127.6 243.311 127.816 C 266.361 133.048 291.117 137.136 318.994 140.313 C 331.528 141.742 342.482 142.24 353.47 141.887 C 364.887 141.518 376.588 140.175 389.243 137.781 C 407.246 134.375 425.3 129.355 442.759 124.499 C 447.325 123.23 452.045 121.917 456.679 120.658 C 460.81 119.534 465.238 118.353 469.626 117.321 C 477.693 115.429 484.745 114.503 491.187 114.487 C 491.292 114.487 491.398 114.486 491.503 114.486 C 497.991 114.486 503.918 115.447 509.125 117.341 C 515.089 119.511 519.916 122.858 523.472 127.289 C 527.572 132.399 529.732 138.806 529.892 146.335 C 530.024 152.519 528.825 159.322 526.329 166.554 C 524.99 170.432 523.371 174.343 521.804 178.125 C 518.215 186.794 514.503 195.757 513.626 205.453 C 513.111 211.216 513.559 216.978 514.995 223.067 C 516.267 228.463 518.287 233.973 521.17 239.911 C 526.506 250.902 533.893 261.43 541.037 271.61 C 542.883 274.24 544.791 276.96 546.6 279.6 C 550.246 284.961 554.333 291.374 557 298.295 C 561.11 308.962 561.981 319.044 559.825 330.987 C 558.868 336.336 557.299 341.655 555.638 347.287 C 554.139 352.369 552.589 357.624 551.522 362.928 C 549.824 371.366 549.127 379.579 548.453 387.522 C 547.77 395.576 547.124 403.184 545.521 410.914 C 543.06 422.701 538.234 434.743 531.174 446.706 C 524.569 457.899 516.246 468.653 506.436 478.667 C 495.718 489.691 483.625 500.208 469.464 510.819 C 457.796 519.561 444.535 528.481 428.923 538.09 C 425.268 540.345 421.534 542.608 417.923 544.796 C 411.885 548.456 405.641 552.24 399.566 556.109 C 395.404 558.757 391.241 561.497 387.19 564.254 C 383.112 567.026 379.012 569.913 375.046 572.706 C 367.832 577.786 360.373 583.039 352.779 587.782 C 346.691 591.588 339.892 594.204 334.648 596.058 C 321.231 600.8 310.273 603.899 300.161 605.812 C 291.985 607.358 284.338 608.127 277.04 608.127 Z M 164.76 188.187 L 164.783 188.202 C 159.104 196.767 156.078 206.657 153.152 216.22 C 152.427 218.589 151.677 221.037 150.899 223.43 C 149.873 226.583 148.649 229.93 147.047 233.962 C 145.071 238.936 142.931 243.898 140.862 248.697 C 136.737 258.264 132.841 267.301 129.977 276.728 C 128.439 281.795 127.353 286.479 126.656 291.047 C 125.877 296.163 125.602 301.015 125.816 305.878 C 126.657 324.974 135.644 343.533 145.23 360.744 C 151.786 372.513 158.721 385.065 165.103 397.74 C 172.105 411.647 177.635 424.125 182.009 435.887 C 185.94 446.472 189.544 458.039 193.027 471.247 C 196.256 483.491 199.009 495.68 201.553 507.116 C 202.73 512.409 203.974 517.795 205.177 523.003 C 208.551 537.611 212.04 552.715 214.548 567.811 L 214.571 567.948 C 215.378 572.808 216.213 577.833 217.761 582.506 C 219.519 587.816 221.945 591.796 225.176 594.675 C 229.439 598.471 234.661 600.314 239.221 601.743 C 247.903 604.482 256.855 606.4 265.83 607.441 C 276.467 608.664 287.694 608.114 300.15 605.759 C 310.259 603.846 321.215 600.748 334.629 596.007 C 339.87 594.154 346.665 591.54 352.749 587.737 C 360.342 582.994 367.801 577.741 375.013 572.662 C 378.979 569.869 383.08 566.98 387.158 564.209 C 391.209 561.452 395.374 558.711 399.536 556.064 C 405.611 552.194 411.855 548.41 417.893 544.751 C 421.504 542.562 425.238 540.299 428.893 538.044 C 444.504 528.436 457.764 519.517 469.43 510.776 C 483.589 500.167 495.681 489.651 506.396 478.63 C 516.203 468.618 524.523 457.868 531.126 446.679 C 538.182 434.72 543.007 422.684 545.466 410.904 C 547.069 403.177 547.714 395.57 548.397 387.517 C 549.071 379.573 549.769 371.359 551.467 362.917 C 552.535 357.611 554.086 352.355 555.584 347.272 C 557.245 341.642 558.813 336.324 559.77 330.978 C 561.924 319.046 561.053 308.972 556.947 298.315 C 554.283 291.4 550.198 284.989 546.554 279.632 C 544.745 276.993 542.836 274.273 540.991 271.643 C 533.846 261.461 526.457 250.932 521.12 239.937 C 518.235 233.995 516.214 228.481 514.941 223.081 C 513.504 216.987 513.055 211.22 513.57 205.45 C 514.448 195.747 518.162 186.779 521.752 178.106 C 523.318 174.325 524.938 170.415 526.276 166.538 C 528.769 159.312 529.967 152.515 529.836 146.338 C 529.676 138.822 527.52 132.425 523.428 127.325 C 519.878 122.902 515.059 119.56 509.104 117.394 C 503.903 115.501 497.982 114.543 491.501 114.543 C 491.396 114.543 491.29 114.543 491.185 114.544 C 484.747 114.559 477.699 115.485 469.637 117.376 C 465.249 118.407 460.822 119.589 456.691 120.711 C 452.057 121.971 447.336 123.284 442.771 124.554 C 425.311 129.41 407.256 134.431 389.25 137.837 C 376.593 140.231 364.889 141.575 353.469 141.944 C 342.479 142.3 331.522 141.799 318.985 140.37 C 291.107 137.193 266.349 133.104 243.298 127.871 C 242.346 127.655 241.393 127.435 240.438 127.215 C 230.522 124.93 220.271 122.568 210.417 123.561 C 201.996 124.41 195.666 127.145 191.062 131.921 C 186.973 136.163 184.713 141.552 182.88 146.743 C 182.214 148.63 181.554 150.587 180.856 152.659 C 179.122 157.809 177.155 163.647 174.62 169.649 C 171.713 176.533 168.495 182.602 164.782 188.204 L 164.76 188.187 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 270.463 613.065 C 267.562 613.065 264.887 612.947 262.374 612.772 C 252.376 612.063 242.388 610.391 232.686 607.801 C 227.549 606.438 221.666 604.644 216.855 600.586 C 208.584 593.609 206.725 581.762 205.085 571.309 C 202.799 556.744 199.668 542.14 196.641 528.016 C 195.38 522.131 194.076 516.046 192.855 510.065 C 188.297 487.727 183.131 462.408 174.392 438.126 C 164.656 411.115 150.285 385.245 137.605 362.419 C 127.195 343.677 117.489 323.467 116.971 302.676 C 116.445 281.561 124.845 262.921 133.738 243.188 C 136.427 237.222 139.207 231.052 141.699 224.845 C 143.397 220.619 144.755 216.889 145.853 213.441 C 146.736 210.668 147.571 207.822 148.38 205.069 C 151.392 194.811 154.506 184.203 160.734 175.114 C 168.378 163.958 173.216 153.266 177.486 143.833 C 178.946 140.606 180.325 137.558 181.706 134.745 C 186.678 124.622 193.098 114.613 211.819 113.114 C 222.054 112.293 232.644 114.8 242.884 117.225 L 245.338 117.803 C 268.756 123.289 293.836 128.012 322.009 132.241 C 347.927 136.131 368.599 135.952 393.361 131.623 C 412.45 128.287 431.572 123.033 450.064 117.95 C 454.073 116.848 458.078 115.747 462.079 114.667 C 466.297 113.527 470.815 112.327 475.265 111.276 C 483.483 109.337 490.674 108.371 497.249 108.324 C 511.801 108.194 523.537 112.8 530.285 121.323 C 540.527 134.262 535.862 152.224 532.17 161.779 C 530.719 165.532 529.003 169.315 527.345 172.973 C 523.284 181.927 519.085 191.186 518.102 201.299 C 515.868 224.571 530.533 245.313 544.717 265.372 C 547.374 269.13 550.122 273.016 552.654 276.789 C 557.739 284.418 560.876 290.423 562.825 296.26 C 566.384 306.918 566.653 317.307 563.697 329.947 C 562.61 334.627 561.119 339.263 559.539 344.171 C 557.633 350.096 555.662 356.222 554.45 362.472 C 552.683 371.592 552.296 380.46 551.922 389.036 C 551.586 396.73 551.268 403.999 550.038 411.425 C 546.104 434.972 532.38 459.677 511.394 480.99 C 491.571 501.279 467.311 519.373 432.733 539.657 C 429.139 541.771 425.467 543.89 421.917 545.939 C 415.657 549.551 409.184 553.287 402.896 557.136 C 398.599 559.762 394.379 562.45 390.352 565.123 C 385.328 568.453 380.306 571.967 375.449 575.367 C 369.048 579.846 362.431 584.477 355.739 588.735 C 349.925 592.435 343.603 595.085 337.638 597.398 C 304.584 610.207 284.772 613.065 270.463 613.065 Z M 161.138 175.391 C 154.955 184.417 151.851 194.986 148.851 205.208 C 148.042 207.963 147.205 210.812 146.321 213.591 C 145.219 217.051 143.857 220.792 142.155 225.03 C 139.659 231.245 136.877 237.42 134.185 243.391 C 125.316 263.072 116.939 281.662 117.462 302.666 C 117.976 323.35 127.653 343.494 138.034 362.182 C 150.722 385.024 165.104 410.913 174.853 437.962 C 183.603 462.276 188.773 487.613 193.335 509.968 C 194.555 515.946 195.86 522.03 197.121 527.915 C 200.149 542.045 203.281 556.656 205.569 571.234 C 207.196 581.602 209.04 593.353 217.171 600.213 C 221.905 604.206 227.727 605.98 232.813 607.329 C 242.485 609.91 252.442 611.578 262.409 612.284 C 264.874 612.456 267.342 612.539 269.802 612.539 C 293.752 612.54 317.276 604.765 337.46 596.942 C 343.402 594.639 349.698 592.001 355.476 588.323 C 362.159 584.071 368.772 579.443 375.168 574.968 C 380.028 571.567 385.053 568.05 390.081 564.717 C 394.113 562.04 398.339 559.35 402.641 556.72 C 408.934 552.868 415.409 549.13 421.672 545.517 C 425.221 543.468 428.893 541.35 432.484 539.237 C 467.024 518.975 491.252 500.907 511.044 480.649 C 531.961 459.406 545.637 434.795 549.554 411.347 C 550.781 403.95 551.097 396.696 551.432 389.016 C 551.808 380.423 552.195 371.537 553.969 362.381 C 555.186 356.102 557.161 349.961 559.072 344.023 C 560.649 339.124 562.137 334.498 563.219 329.838 C 566.153 317.291 565.887 306.983 562.36 296.417 C 560.424 290.623 557.306 284.654 552.246 277.063 C 549.717 273.296 546.971 269.412 544.316 265.657 C 530.081 245.525 515.362 224.707 517.613 201.254 C 518.604 191.06 522.821 181.762 526.898 172.772 C 528.554 169.121 530.266 165.345 531.712 161.604 C 535.367 152.146 539.991 134.376 529.901 121.629 C 523.249 113.227 511.662 108.667 497.252 108.816 C 490.714 108.863 483.559 109.824 475.377 111.755 C 470.934 112.805 466.422 114.004 462.206 115.143 C 458.207 116.223 454.203 117.324 450.193 118.426 C 431.69 123.511 412.557 128.769 393.445 132.109 C 368.628 136.448 347.909 136.627 321.937 132.729 C 293.748 128.498 268.656 123.773 245.226 118.284 L 242.771 117.705 C 232.568 115.289 222.021 112.795 211.858 113.605 C 193.393 115.083 187.055 124.966 182.146 134.962 C 180.768 137.768 179.39 140.812 177.932 144.036 C 173.655 153.487 168.806 164.201 161.138 175.391 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 262.786 617.592 C 261.466 617.592 260.155 617.57 258.847 617.527 C 247.859 617.156 236.866 615.734 226.175 613.299 C 223.443 612.68 220.228 611.887 217.092 610.69 C 213.803 609.434 211.073 607.912 208.746 606.037 C 204.701 602.78 201.715 598.148 199.618 591.878 C 197.713 586.187 196.763 579.787 195.999 574.644 C 193.92 560.641 191.134 546.575 188.441 532.973 C 187.133 526.369 185.78 519.539 184.531 512.829 C 180.06 488.792 175.437 463.938 167.13 440.113 C 157.801 413.398 143.821 388.169 130.303 363.77 C 119.098 343.547 108.703 321.75 108.511 299.375 C 108.466 294.083 108.952 288.808 109.996 283.251 C 110.928 278.292 112.289 273.213 114.155 267.724 C 117.627 257.518 122.402 247.329 127.02 237.476 C 130.317 230.443 133.726 223.17 136.703 215.826 C 138.527 211.324 139.988 207.298 141.169 203.516 C 142.15 200.38 143.061 197.155 143.942 194.037 C 145.488 188.566 147.087 182.908 149.11 177.54 C 151.379 171.52 153.955 166.508 156.985 162.217 C 163.553 152.916 168.587 144.023 173.029 136.175 C 175.753 131.363 178.326 126.818 180.869 122.875 C 184.311 117.538 187.564 113.281 192.248 109.854 C 197.788 105.801 204.627 103.582 213.156 103.072 C 223.729 102.442 234.643 105.09 245.197 107.654 C 245.852 107.813 246.506 107.972 247.16 108.13 C 271.104 113.906 296.518 119.266 324.856 124.514 C 338.122 126.97 349.382 128.244 360.292 128.52 C 372.279 128.826 384.086 127.963 397.449 125.81 C 417.599 122.565 437.75 117.086 457.238 111.787 C 460.599 110.873 464.074 109.928 467.487 109.012 C 471.522 107.928 476.219 106.679 480.897 105.567 C 489.235 103.588 496.533 102.587 503.207 102.509 C 503.542 102.504 503.877 102.501 504.208 102.501 C 510.757 102.501 516.7 103.433 521.891 105.275 C 528.078 107.47 533.044 110.924 536.651 115.54 C 540.896 120.973 542.908 127.755 542.633 135.7 C 542.41 142.127 540.635 149.409 537.498 156.759 C 535.946 160.396 534.142 164.063 532.396 167.61 C 527.843 176.863 523.135 186.431 522.038 197.017 C 519.69 219.93 534.25 240.258 548.329 259.916 C 551.679 264.592 555.142 269.428 558.241 274.135 C 563.246 281.794 566.389 288.195 568.131 294.279 C 569.765 299.986 570.421 305.616 570.136 311.493 C 569.881 316.74 568.898 322.214 567.039 328.723 C 565.891 332.766 564.485 336.764 562.996 340.995 C 560.631 347.715 558.187 354.664 556.846 361.847 C 555.034 371.561 555.003 380.987 554.974 390.103 C 554.95 397.546 554.927 404.575 554.019 411.781 C 552.445 424.143 548.127 436.818 541.185 449.455 C 537.923 455.393 534.088 461.284 529.787 466.963 C 525.591 472.506 520.93 477.875 515.935 482.923 C 505.063 493.995 492.689 504.389 478.106 514.697 C 466.023 523.237 452.321 531.764 436.216 540.763 C 432.655 542.759 429.016 544.757 425.497 546.689 C 419.041 550.233 412.367 553.897 405.892 557.704 C 401.486 560.291 397.204 562.929 393.165 565.543 C 387.223 569.384 381.324 573.5 375.618 577.48 C 370.001 581.399 364.193 585.452 358.357 589.231 C 352.477 593.042 345.985 595.881 340.36 598.243 C 324.626 604.851 311.803 609.359 300.003 612.431 C 286.707 615.895 274.485 617.591 262.786 617.592 Z M 216.39 103.033 C 215.311 103.033 214.233 103.063 213.159 103.127 C 204.64 103.637 197.811 105.852 192.28 109.899 C 187.603 113.321 184.354 117.574 180.914 122.906 C 178.372 126.847 175.8 131.392 173.076 136.203 C 168.634 144.051 163.6 152.947 157.03 162.25 C 154.002 166.536 151.429 171.544 149.161 177.56 C 147.138 182.926 145.54 188.583 143.994 194.053 C 143.113 197.171 142.202 200.396 141.222 203.533 C 140.039 207.316 138.578 211.345 136.753 215.847 C 133.776 223.192 130.367 230.466 127.07 237.5 C 122.453 247.352 117.677 257.54 114.207 267.742 C 112.341 273.228 110.982 278.304 110.05 283.261 C 109.006 288.816 108.52 294.087 108.565 299.376 C 108.758 321.737 119.15 343.528 130.351 363.744 C 143.87 388.145 157.851 413.376 167.181 440.096 C 175.49 463.924 180.113 488.781 184.585 512.82 C 185.834 519.53 187.186 526.359 188.494 532.963 C 191.188 546.566 193.974 560.632 196.053 574.637 C 196.816 579.777 197.766 586.174 199.669 591.861 C 201.764 598.121 204.744 602.744 208.78 605.996 C 211.103 607.867 213.828 609.387 217.112 610.64 C 220.244 611.836 223.457 612.628 226.187 613.246 C 236.875 615.68 247.865 617.102 258.85 617.473 C 260.155 617.516 261.468 617.538 262.786 617.538 C 274.483 617.538 286.697 615.842 299.991 612.38 C 311.788 609.308 324.61 604.801 340.342 598.195 C 345.964 595.833 352.454 592.995 358.33 589.187 C 364.165 585.408 369.973 581.356 375.59 577.437 C 381.295 573.456 387.195 569.341 393.138 565.499 C 397.178 562.884 401.46 560.246 405.867 557.659 C 412.343 553.851 419.017 550.186 425.473 546.643 C 428.992 544.711 432.631 542.713 436.192 540.717 C 452.295 531.718 465.996 523.193 478.077 514.654 C 492.658 504.348 505.029 493.956 515.899 482.886 C 520.892 477.84 525.551 472.472 529.746 466.932 C 534.045 461.254 537.879 455.366 541.139 449.429 C 548.078 436.799 552.395 424.13 553.967 411.775 C 554.875 404.573 554.897 397.545 554.921 390.103 C 554.951 380.985 554.981 371.556 556.795 361.838 C 558.136 354.65 560.581 347.7 562.946 340.978 C 564.435 336.747 565.841 332.751 566.989 328.708 C 568.846 322.204 569.829 316.733 570.084 311.491 C 570.368 305.621 569.714 299.995 568.081 294.294 C 566.34 288.216 563.199 281.82 558.197 274.165 C 555.098 269.458 551.636 264.624 548.287 259.949 C 534.202 240.282 519.637 219.946 521.986 197.012 C 523.084 186.417 527.794 176.844 532.349 167.586 C 534.094 164.041 535.898 160.375 537.449 156.738 C 540.583 149.394 542.357 142.119 542.58 135.698 C 542.855 127.767 540.846 120.996 536.61 115.575 C 533.008 110.966 528.051 107.518 521.874 105.326 C 516.69 103.487 510.751 102.557 504.21 102.557 C 503.878 102.557 503.544 102.559 503.21 102.564 C 496.539 102.643 489.244 103.642 480.911 105.621 C 476.234 106.732 471.537 107.981 467.503 109.064 C 464.09 109.981 460.615 110.926 457.254 111.84 C 437.764 117.139 417.612 122.619 397.459 125.865 C 384.092 128.017 372.28 128.877 360.292 128.575 C 349.379 128.298 338.116 127.025 324.847 124.567 C 296.508 119.32 271.092 113.961 247.148 108.184 C 246.494 108.026 245.84 107.867 245.185 107.707 C 235.706 105.405 225.94 103.033 216.39 103.033 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 255.477 624.284 C 255.39 624.284 255.304 624.284 255.216 624.284 C 243.229 624.252 231.219 623.077 219.516 620.791 C 216.524 620.211 213.001 619.455 209.557 618.249 C 205.948 616.987 202.955 615.413 200.405 613.439 C 195.963 610 192.701 605.057 190.435 598.33 C 188.498 592.583 187.52 586.285 186.608 579.798 C 184.731 566.436 182.282 552.99 179.913 539.987 C 178.565 532.588 177.171 524.937 175.905 517.421 L 175.592 515.557 C 173.6 503.716 171.54 491.472 169.031 479.514 C 166.219 466.107 163.125 454.476 159.574 443.958 C 150.619 417.478 136.646 392.2 123.133 367.755 L 122.722 367.011 C 117.665 357.863 111.275 345.772 106.699 333.364 C 101.958 320.508 99.683 308.895 99.744 297.864 C 99.774 292.329 100.362 286.814 101.54 281.005 C 102.591 275.823 104.092 270.519 106.131 264.79 C 109.92 254.136 115.071 243.519 120.054 233.251 C 123.95 225.221 127.979 216.918 131.414 208.509 C 133.366 203.731 134.928 199.414 136.189 195.309 C 137.259 191.826 138.238 188.239 139.184 184.77 C 140.775 178.94 142.419 172.911 144.546 167.206 C 146.932 160.807 149.685 155.5 152.968 150.982 C 157.767 144.372 162.065 137.938 165.858 132.262 C 170.92 124.684 175.292 118.14 179.747 112.694 C 183.274 108.382 187.287 103.93 192.721 100.587 C 198.713 96.9 205.8 94.941 214.386 94.598 C 215.155 94.567 215.927 94.552 216.7 94.552 C 226.952 94.552 237.427 97.161 247.58 99.69 L 248.942 100.029 C 273.87 106.213 299.615 112.208 327.646 118.355 C 341.459 121.385 352.536 122.997 363.56 123.581 C 375.742 124.227 387.768 123.587 401.411 121.568 C 422.579 118.436 443.722 112.742 464.169 107.236 C 466.982 106.478 469.893 105.695 472.75 104.932 C 477.076 103.777 481.694 102.556 486.391 101.433 C 494.864 99.41 502.284 98.373 509.076 98.262 C 516.188 98.127 522.598 99.044 528.132 100.984 C 534.429 103.192 539.465 106.699 543.099 111.409 C 547.416 117.004 549.355 123.974 548.861 132.126 C 548.461 138.723 546.414 146.15 542.94 153.604 C 541.291 157.145 539.4 160.715 537.571 164.166 C 532.526 173.687 527.31 183.532 526.103 194.542 C 523.645 217.182 538.207 237.192 552.291 256.544 C 556.257 261.995 560.359 267.632 563.921 273.144 C 568.941 280.972 572.003 287.603 573.557 294.013 C 574.97 299.847 575.335 305.652 574.671 311.758 C 574.104 316.972 572.781 322.557 570.507 329.333 C 569.349 332.796 568.037 336.209 566.648 339.823 C 563.782 347.275 560.82 354.981 559.369 363.05 C 557.534 373.259 557.893 383.159 558.239 392.733 C 558.491 399.691 558.751 406.886 558.129 413.957 C 557.558 420.355 556.208 426.941 554.116 433.534 C 552.107 439.867 549.393 446.273 546.051 452.571 C 542.818 458.666 538.975 464.701 534.63 470.511 C 530.384 476.187 525.645 481.665 520.546 486.793 C 509.597 497.89 497.083 508.222 482.289 518.379 C 469.999 526.816 456.075 535.146 439.723 543.844 C 436.188 545.73 432.574 547.616 429.079 549.439 C 422.438 552.905 415.57 556.489 408.917 560.245 C 404.337 562.828 400.116 565.342 396.014 567.932 C 389.184 572.237 382.454 576.932 375.945 581.471 C 371.076 584.868 366.041 588.38 361.008 591.698 C 355.29 595.47 349.015 598.401 343.077 601.079 C 326.379 608.612 312.629 613.836 299.805 617.521 C 283.97 622.071 269.466 624.284 255.477 624.284 Z M 152.989 150.997 L 153.011 151.013 C 149.732 155.528 146.98 160.831 144.596 167.225 C 142.47 172.928 140.826 178.955 139.236 184.783 C 138.29 188.253 137.312 191.84 136.241 195.323 C 134.979 199.43 133.416 203.749 131.464 208.528 C 128.028 216.938 123.999 225.243 120.103 233.274 C 115.121 243.54 109.969 254.156 106.182 264.806 C 104.145 270.533 102.644 275.836 101.593 281.015 C 100.416 286.82 99.829 292.331 99.798 297.863 C 99.738 308.887 102.011 320.494 106.751 333.344 C 111.325 345.748 117.715 357.837 122.77 366.983 L 123.181 367.727 C 136.695 392.174 150.669 417.454 159.627 443.939 C 163.179 454.459 166.273 466.092 169.085 479.501 C 171.594 491.46 173.654 503.705 175.646 515.547 L 175.96 517.41 C 177.225 524.926 178.62 532.576 179.967 539.976 C 182.336 552.979 184.786 566.426 186.663 579.788 C 187.574 586.273 188.553 592.569 190.487 598.311 C 192.75 605.029 196.006 609.962 200.438 613.395 C 202.984 615.365 205.972 616.935 209.575 618.196 C 213.015 619.4 216.536 620.156 219.527 620.736 C 231.225 623.022 243.232 624.196 255.216 624.228 C 255.302 624.228 255.39 624.228 255.477 624.228 C 269.461 624.228 283.958 622.015 299.789 617.466 C 312.61 613.782 326.357 608.558 343.053 601.027 C 348.988 598.35 355.262 595.421 360.976 591.651 C 366.008 588.333 371.043 584.821 375.913 581.424 C 382.421 576.885 389.152 572.19 395.983 567.884 C 400.085 565.294 404.307 562.779 408.888 560.195 C 415.542 556.439 422.41 552.855 429.051 549.389 C 432.546 547.565 436.16 545.68 439.696 543.794 C 456.045 535.097 469.967 526.768 482.256 518.332 C 497.047 508.178 509.559 497.848 520.506 486.753 C 525.603 481.626 530.339 476.15 534.584 470.475 C 538.928 464.668 542.768 458.635 546.001 452.543 C 549.342 446.247 552.054 439.845 554.062 433.515 C 556.153 426.926 557.502 420.343 558.072 413.949 C 558.695 406.882 558.434 399.689 558.182 392.732 C 557.835 383.155 557.478 373.252 559.313 363.037 C 560.764 354.963 563.729 347.255 566.595 339.8 C 567.984 336.187 569.296 332.775 570.452 329.313 C 572.726 322.54 574.048 316.958 574.615 311.748 C 575.279 305.649 574.914 299.85 573.502 294.022 C 571.95 287.618 568.89 280.992 563.873 273.17 C 560.313 267.659 556.212 262.022 552.244 256.573 C 538.155 237.212 523.586 217.193 526.047 194.532 C 527.256 183.512 532.474 173.663 537.521 164.137 C 539.349 160.686 541.241 157.117 542.89 153.577 C 547.485 143.715 553.616 125.126 543.054 111.438 C 539.427 106.737 534.399 103.236 528.112 101.032 C 522.584 99.094 516.174 98.179 509.075 98.313 C 502.286 98.424 494.87 99.46 486.401 101.482 C 481.704 102.605 477.088 103.826 472.761 104.98 C 469.904 105.743 466.994 106.527 464.181 107.284 C 443.732 112.791 422.587 118.485 401.416 121.618 C 387.769 123.638 375.74 124.277 363.555 123.632 C 352.527 123.047 341.448 121.435 327.632 118.404 C 299.6 112.257 273.855 106.262 248.927 100.078 L 247.564 99.739 C 236.65 97.021 225.365 94.21 214.385 94.648 C 205.808 94.991 198.73 96.948 192.747 100.629 C 187.32 103.968 183.311 108.415 179.787 112.724 C 175.333 118.168 170.962 124.712 165.9 132.288 C 162.108 137.965 157.809 144.399 153.008 151.01 L 152.989 150.997 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 246.644 631.284 C 235.277 631.284 223.912 630.34 212.785 628.469 C 209.533 627.926 205.702 627.207 201.949 625.994 C 198.021 624.723 194.764 623.099 191.992 621.026 C 187.151 617.405 183.614 612.153 181.178 604.968 C 179.06 598.722 178.062 592.022 177.146 585.135 C 175.47 572.533 173.351 559.828 171.302 547.54 C 169.915 539.23 168.482 530.638 167.206 522.197 C 167.033 521.047 166.86 519.897 166.687 518.747 C 164.925 507.047 163.103 494.949 160.813 483.13 C 158.244 469.877 155.344 458.382 151.946 447.986 C 143.328 421.663 129.494 396.588 116.117 372.338 L 115.067 370.435 C 109.32 360.013 102.799 347.591 98.017 334.481 C 93 320.729 90.674 308.317 90.904 296.536 C 90.996 290.747 91.677 284.982 92.983 278.912 C 94.148 273.498 95.789 267.958 98.001 261.976 C 102.113 250.854 107.657 239.786 113.018 229.083 C 117.519 220.099 122.173 210.808 126.053 201.375 C 128.136 196.308 129.799 191.7 131.136 187.285 C 132.292 183.465 133.333 179.523 134.339 175.711 C 135.974 169.516 137.664 163.112 139.897 157.065 C 142.401 150.282 145.338 144.678 148.876 139.929 C 150.574 137.651 152.231 135.412 153.834 133.247 C 162.905 120.989 170.74 110.404 178.552 102.696 C 182.603 98.698 187.172 94.576 193.121 91.506 C 199.556 88.185 206.89 86.485 215.543 86.306 C 215.97 86.297 216.398 86.293 216.825 86.293 C 227.863 86.293 239.127 89.169 250.035 91.953 L 250.653 92.111 C 256.95 93.715 263.208 95.31 269.42 96.893 C 290.66 102.307 310.722 107.421 330.362 112.38 C 344.538 115.96 355.763 117.948 366.755 118.825 C 379.121 119.814 391.369 119.394 405.299 117.507 C 427.46 114.505 449.566 108.604 470.944 102.897 C 473.238 102.285 475.61 101.652 477.94 101.033 C 482.361 99.86 487.073 98.619 491.812 97.48 C 500.421 95.414 507.964 94.34 514.873 94.198 C 515.443 94.185 516.01 94.179 516.571 94.179 C 523.168 94.179 529.125 95.085 534.3 96.877 C 540.709 99.096 545.814 102.656 549.475 107.459 C 553.866 113.218 555.73 120.376 555.017 128.733 C 554.439 135.502 552.121 143.074 548.311 150.632 C 546.569 154.089 544.594 157.574 542.683 160.944 C 537.143 170.719 531.414 180.827 530.094 192.249 C 529.476 197.647 529.809 203.004 531.11 208.626 C 532.267 213.625 534.168 218.711 536.921 224.178 C 542.029 234.32 549.312 244.152 556.355 253.66 C 560.889 259.781 565.579 266.112 569.527 272.337 C 574.574 280.348 577.555 287.209 578.909 293.93 C 580.111 299.899 580.184 305.877 579.134 312.205 C 578.263 317.446 576.649 322.973 573.9 330.126 C 572.78 333.052 571.518 336.061 570.299 338.971 C 566.888 347.105 563.363 355.515 561.818 364.435 C 559.975 375.081 560.743 385.401 561.487 395.381 C 561.999 402.237 562.526 409.328 562.165 416.316 C 561.819 422.854 560.646 429.597 558.68 436.357 C 556.791 442.848 554.155 449.413 550.844 455.871 C 547.639 462.121 543.789 468.301 539.398 474.24 C 535.103 480.05 530.287 485.637 525.083 490.846 C 519.435 496.543 513.198 502.15 506.543 507.511 C 500.343 512.507 493.565 517.463 486.396 522.244 C 473.9 530.577 459.755 538.71 443.157 547.106 C 439.634 548.894 436.032 550.679 432.549 552.403 C 425.733 555.781 418.684 559.273 411.867 562.968 C 407.189 565.499 402.911 567.964 398.789 570.502 C 391.092 575.233 383.573 580.492 376.301 585.577 C 372.149 588.48 367.856 591.482 363.584 594.349 C 357.976 598.111 351.934 601.107 345.72 604.096 C 328.175 612.539 313.504 618.488 299.548 622.816 C 282.5 628.103 266.788 630.854 251.513 631.225 C 249.89 631.264 248.266 631.284 246.644 631.284 Z M 148.898 139.946 L 148.92 139.962 C 145.385 144.706 142.45 150.306 139.947 157.084 C 137.716 163.129 136.026 169.532 134.392 175.724 C 133.385 179.537 132.345 183.48 131.188 187.3 C 129.851 191.717 128.187 196.327 126.102 201.396 C 122.222 210.83 117.568 220.122 113.067 229.107 C 107.706 239.809 102.163 250.876 98.052 261.994 C 95.841 267.974 94.201 273.512 93.036 278.924 C 91.731 284.991 91.051 290.752 90.958 296.538 C 90.728 308.312 93.054 320.717 98.068 334.463 C 102.849 347.569 109.368 359.989 115.115 370.408 L 116.164 372.311 C 129.543 396.563 143.378 421.641 151.998 447.969 C 155.396 458.367 158.297 469.865 160.866 483.12 C 163.156 494.939 164.979 507.039 166.741 518.739 C 166.914 519.888 167.087 521.039 167.261 522.188 C 168.536 530.629 169.969 539.221 171.356 547.531 C 173.405 559.818 175.524 572.524 177.2 585.128 C 178.116 592.013 179.113 598.708 181.23 604.95 C 183.662 612.124 187.194 617.368 192.025 620.982 C 194.792 623.051 198.044 624.673 201.966 625.941 C 205.716 627.153 209.545 627.871 212.795 628.415 C 223.917 630.285 235.281 631.228 246.645 631.228 C 248.267 631.228 249.889 631.209 251.511 631.171 C 266.781 630.799 282.489 628.049 299.532 622.764 C 313.485 618.437 328.154 612.49 345.696 604.048 C 351.908 601.059 357.948 598.065 363.552 594.303 C 367.824 591.437 372.117 588.436 376.269 585.533 C 383.541 580.447 391.062 575.189 398.759 570.456 C 402.882 567.918 407.161 565.453 411.841 562.921 C 418.659 559.225 425.708 555.733 432.525 552.356 C 436.007 550.63 439.609 548.846 443.132 547.058 C 459.729 538.663 473.87 530.531 486.366 522.2 C 493.533 517.421 500.311 512.465 506.509 507.47 C 513.162 502.109 519.397 496.504 525.044 490.808 C 530.246 485.602 535.06 480.017 539.354 474.209 C 543.743 468.272 547.592 462.094 550.795 455.847 C 554.104 449.392 556.739 442.83 558.627 436.343 C 560.592 429.586 561.765 422.848 562.11 416.314 C 562.471 409.329 561.943 402.241 561.432 395.386 C 560.689 385.402 559.92 375.079 561.765 364.427 C 563.309 355.501 566.837 347.088 570.248 338.952 C 571.467 336.042 572.729 333.034 573.848 330.109 C 576.596 322.959 578.21 317.436 579.079 312.198 C 580.129 305.876 580.055 299.905 578.855 293.942 C 577.503 287.228 574.524 280.373 569.481 272.367 C 565.534 266.144 560.845 259.815 556.311 253.693 C 542.129 234.548 527.464 214.75 530.04 192.244 C 531.361 180.811 537.093 170.699 542.636 160.919 C 544.546 157.549 546.521 154.064 548.262 150.608 C 552.068 143.057 554.385 135.492 554.962 128.73 C 555.675 120.386 553.814 113.241 549.431 107.493 C 545.777 102.699 540.68 99.145 534.283 96.929 C 528.673 94.987 522.146 94.086 514.874 94.254 C 507.969 94.396 500.43 95.47 491.825 97.535 C 487.087 98.674 482.374 99.914 477.954 101.088 C 475.624 101.706 473.252 102.339 470.959 102.951 C 449.579 108.659 427.471 114.56 405.307 117.563 C 391.373 119.45 379.12 119.869 366.751 118.881 C 355.755 118.003 344.528 116.015 330.349 112.435 C 310.709 107.475 290.646 102.361 269.406 96.947 C 263.194 95.364 256.936 93.769 250.639 92.165 L 250.021 92.007 C 239.118 89.224 227.855 86.349 216.824 86.349 C 216.396 86.349 215.971 86.354 215.543 86.362 C 206.899 86.54 199.573 88.239 193.145 91.556 C 187.203 94.622 182.637 98.741 178.59 102.735 C 170.78 110.44 162.947 121.025 153.877 133.28 C 152.275 135.446 150.617 137.685 148.92 139.963 L 148.898 139.946 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 237.487 638.353 C 226.918 638.353 216.367 637.597 205.997 636.094 C 202.473 635.586 198.325 634.903 194.279 633.69 C 190.027 632.414 186.508 630.736 183.521 628.56 C 178.275 624.769 174.458 619.209 171.853 611.561 C 169.56 604.832 168.506 597.428 167.624 590.421 C 166.154 578.745 164.362 566.953 162.629 555.55 C 161.202 546.163 159.726 536.455 158.448 526.921 C 158.234 525.323 158.022 523.726 157.808 522.127 C 156.264 510.528 154.667 498.534 152.58 486.814 C 150.24 473.671 147.518 462.272 144.257 451.963 C 140.531 440.2 135.384 427.666 128.523 413.644 C 122.412 401.155 115.56 388.713 108.934 376.68 C 108.406 375.722 107.879 374.765 107.353 373.808 C 101.244 362.707 94.321 349.481 89.292 335.547 C 84.011 320.908 81.627 307.697 82.005 295.158 C 82.168 289.105 82.948 283.078 84.389 276.734 C 85.673 271.077 87.459 265.29 89.847 259.044 C 94.287 247.432 100.225 235.891 105.967 224.73 C 111.058 214.834 116.323 204.602 120.631 194.19 C 122.846 188.837 124.611 183.937 126.023 179.209 C 127.263 175.058 128.362 170.765 129.425 166.613 C 131.104 160.051 132.84 153.266 135.179 146.875 C 137.802 139.706 140.925 133.803 144.725 128.826 C 151.276 120.246 156.586 113.696 161.436 108.213 C 167.162 101.739 172.35 96.647 177.297 92.646 C 181.625 89.146 186.93 85.189 193.461 82.378 C 200.33 79.423 207.912 77.979 216.64 77.964 C 228.61 77.945 240.654 81.095 252.302 84.142 C 281.239 91.697 309.343 99.61 333.02 106.355 C 347.555 110.495 358.926 112.859 369.889 114.021 C 382.437 115.35 394.907 115.153 409.129 113.396 C 432.258 110.542 455.301 104.438 477.587 98.536 C 479.416 98.051 481.244 97.568 483.07 97.085 C 487.602 95.889 492.424 94.625 497.172 93.478 C 505.913 91.369 513.578 90.258 520.607 90.084 C 531.835 89.778 547.043 91.853 555.789 103.459 C 560.252 109.382 562.043 116.728 561.111 125.291 C 560.355 132.234 557.765 139.951 553.621 147.609 C 551.79 150.994 549.732 154.404 547.743 157.704 C 541.703 167.721 535.457 178.08 534.026 189.905 C 533.379 195.289 533.697 200.622 534.995 206.21 C 536.15 211.182 538.06 216.236 540.835 221.664 C 545.983 231.735 553.357 241.507 560.489 250.957 C 565.554 257.67 570.792 264.611 575.073 271.479 C 580.154 279.684 583.053 286.776 584.2 293.797 C 585.196 299.907 584.978 306.058 583.534 312.603 C 582.076 319.21 579.529 325.544 577.231 330.869 C 576.186 333.299 575.051 335.792 573.953 338.203 C 569.959 346.969 565.83 356.033 564.205 365.77 C 562.364 376.81 563.558 387.509 564.713 397.857 C 565.471 404.652 566.256 411.68 566.138 418.625 C 566.017 425.303 565.022 432.202 563.179 439.13 C 561.412 445.777 558.853 452.503 555.573 459.121 C 552.399 465.525 548.54 471.851 544.104 477.92 C 539.759 483.863 534.865 489.559 529.556 494.849 C 523.872 500.556 517.577 506.151 510.848 511.479 C 504.576 516.446 497.71 521.351 490.441 526.058 C 477.737 534.285 463.372 542.222 446.526 550.319 C 443.012 552.013 439.42 553.701 435.946 555.333 C 428.958 558.617 421.732 562.013 414.753 565.641 C 409.983 568.117 405.647 570.532 401.498 573.023 C 392.964 578.14 384.701 583.947 376.71 589.561 C 373.241 592 369.653 594.52 366.095 596.948 C 360.556 600.729 354.759 603.766 348.298 607.065 C 330.257 616.277 314.21 623.152 299.242 628.084 C 290.574 630.94 282.016 633.22 273.807 634.86 C 264.985 636.623 256.217 637.719 247.745 638.116 C 244.331 638.274 240.907 638.353 237.487 638.353 Z M 216.754 78.018 C 216.716 78.018 216.679 78.018 216.642 78.018 C 207.921 78.033 200.346 79.475 193.485 82.429 C 186.96 85.236 181.658 89.191 177.333 92.689 C 172.389 96.688 167.203 101.778 161.479 108.25 C 156.63 113.732 151.321 120.281 144.771 128.86 C 140.974 133.832 137.855 139.731 135.233 146.895 C 132.894 153.284 131.159 160.067 129.48 166.627 C 128.417 170.78 127.318 175.073 126.077 179.226 C 124.664 183.955 122.9 188.856 120.683 194.212 C 116.375 204.625 111.11 214.859 106.018 224.755 C 100.276 235.914 94.34 247.454 89.9 259.064 C 87.512 265.308 85.727 271.092 84.443 276.747 C 83.003 283.087 82.224 289.11 82.06 295.16 C 81.683 307.692 84.065 320.896 89.345 335.528 C 94.372 349.459 101.294 362.683 107.402 373.782 C 107.928 374.739 108.456 375.697 108.983 376.654 C 115.609 388.687 122.462 401.131 128.573 413.62 C 135.435 427.645 140.583 440.181 144.31 451.947 C 147.571 462.258 150.294 473.66 152.634 486.805 C 154.721 498.525 156.319 510.521 157.863 522.121 C 158.076 523.719 158.289 525.316 158.503 526.914 C 159.781 536.448 161.256 546.155 162.683 555.542 C 164.417 566.946 166.209 578.738 167.679 590.415 C 168.561 597.419 169.613 604.819 171.905 611.544 C 174.506 619.18 178.317 624.732 183.553 628.517 C 186.536 630.689 190.05 632.364 194.296 633.638 C 198.338 634.851 202.483 635.533 206.005 636.04 C 219.728 638.03 233.77 638.709 247.747 638.061 C 256.216 637.664 264.981 636.569 273.801 634.806 C 282.008 633.165 290.563 630.886 299.23 628.031 C 314.195 623.099 330.239 616.225 348.278 607.015 C 354.736 603.718 360.532 600.681 366.069 596.902 C 369.626 594.474 373.213 591.953 376.683 589.516 C 384.674 583.9 392.938 578.093 401.474 572.975 C 405.624 570.484 409.96 568.068 414.731 565.592 C 421.712 561.963 428.939 558.567 435.927 555.283 C 439.4 553.65 442.992 551.962 446.507 550.268 C 463.35 542.172 477.713 534.238 490.415 526.011 C 497.683 521.305 504.547 516.401 510.818 511.435 C 517.545 506.108 523.837 500.514 529.522 494.809 C 534.828 489.521 539.721 483.828 544.063 477.887 C 548.497 471.819 552.354 465.497 555.528 459.095 C 558.806 452.48 561.364 445.758 563.13 439.114 C 564.971 432.191 565.965 425.296 566.087 418.622 C 566.204 411.68 565.42 404.655 564.662 397.861 C 563.507 387.51 562.312 376.806 564.155 365.76 C 565.78 356.015 569.911 346.948 573.906 338.178 C 575.004 335.768 576.139 333.276 577.184 330.847 C 579.482 325.524 582.027 319.192 583.484 312.589 C 584.926 306.052 585.143 299.907 584.148 293.804 C 583.004 286.791 580.106 279.705 575.03 271.506 C 570.75 264.64 565.512 257.7 560.448 250.988 C 553.315 241.536 545.94 231.762 540.789 221.686 C 538.013 216.255 536.102 211.196 534.945 206.221 C 533.644 200.627 533.327 195.287 533.974 189.898 C 535.408 178.061 541.656 167.697 547.7 157.674 C 549.689 154.375 551.745 150.965 553.576 147.582 C 557.717 139.93 560.305 132.22 561.06 125.284 C 561.991 116.735 560.204 109.403 555.749 103.491 C 547.53 92.585 533.586 90.11 522.628 90.11 C 521.943 90.11 521.272 90.12 520.612 90.137 C 513.587 90.312 505.925 91.422 497.188 93.531 C 492.44 94.677 487.618 95.942 483.086 97.138 C 481.259 97.62 479.432 98.103 477.603 98.588 C 455.316 104.491 432.27 110.595 409.138 113.45 C 394.912 115.207 382.439 115.404 369.886 114.075 C 358.92 112.913 347.546 110.548 333.007 106.407 C 309.331 99.663 281.227 91.75 252.29 84.194 C 240.682 81.157 228.679 78.018 216.754 78.018 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 228.265 645.485 C 218.502 645.485 208.763 644.884 199.162 643.683 C 195.379 643.212 190.924 642.567 186.567 641.344 C 181.996 640.062 178.214 638.332 175.004 636.057 C 169.358 632.083 165.263 626.212 162.487 618.11 C 160.004 610.865 158.899 602.729 158.058 595.67 C 156.805 585.154 155.339 574.518 153.921 564.231 C 152.445 553.534 150.921 542.471 149.646 531.608 C 149.413 529.625 149.183 527.641 148.953 525.657 C 147.616 514.127 146.234 502.205 144.34 490.553 C 142.217 477.485 139.66 466.151 136.525 455.903 C 132.926 444.16 127.876 431.657 121.085 417.68 C 115.037 405.23 108.221 392.834 101.629 380.847 C 100.95 379.612 100.272 378.378 99.594 377.144 C 93.124 365.362 85.799 351.329 80.525 336.573 C 74.976 321.048 72.534 307.038 73.06 293.742 C 73.294 287.418 74.172 281.124 75.746 274.5 C 77.151 268.593 79.081 262.554 81.648 256.036 C 86.42 243.921 92.757 231.893 98.885 220.262 C 104.565 209.481 110.438 198.333 115.166 186.968 C 117.515 181.319 119.38 176.128 120.866 171.098 C 122.188 166.619 123.342 161.979 124.458 157.491 C 126.181 150.559 127.964 143.39 130.411 136.652 C 133.156 129.094 136.466 122.89 140.531 117.686 C 146.597 109.921 152.585 103.08 158.329 97.354 C 164.328 91.373 170.273 86.396 175.999 82.561 C 180.767 79.368 186.605 75.76 193.759 73.216 C 201.049 70.623 208.88 69.436 217.694 69.584 C 230.238 69.796 243.363 73.31 253.908 76.134 C 284.575 84.334 313.692 93.35 335.632 100.29 C 350.727 105.064 361.896 107.722 372.978 109.178 C 385.707 110.85 398.397 110.872 412.914 109.247 C 436.999 106.549 460.968 100.247 484.149 94.151 C 485.485 93.8 486.821 93.448 488.156 93.097 C 493.017 91.822 497.77 90.582 502.49 89.436 C 511.364 87.283 519.152 86.135 526.299 85.929 C 527.11 85.904 527.913 85.892 528.705 85.892 C 535.343 85.892 541.309 86.774 546.471 88.521 C 553.099 90.765 558.344 94.431 562.061 99.419 C 566.598 105.508 568.314 113.041 567.162 121.809 C 566.51 126.773 564.545 134.747 558.888 144.546 C 556.97 147.867 554.834 151.215 552.767 154.451 C 546.224 164.702 539.457 175.302 537.914 187.522 C 537.239 192.905 537.543 198.23 538.845 203.802 C 540.003 208.76 541.93 213.797 544.735 219.201 C 549.942 229.232 557.43 238.968 564.671 248.384 C 570.243 255.629 576.004 263.12 580.576 270.581 C 583.002 274.564 584.877 278.245 586.31 281.837 C 587.926 285.887 588.952 289.742 589.447 293.623 C 590.245 299.88 589.736 306.205 587.893 312.96 C 586.118 319.468 583.3 325.751 580.52 331.572 C 579.582 333.543 578.587 335.56 577.626 337.51 C 573.013 346.867 568.242 356.542 566.55 367.065 C 564.717 378.465 566.348 389.514 567.925 400.2 C 568.924 406.966 569.957 413.962 570.07 420.894 C 570.174 427.711 569.356 434.767 567.639 441.862 C 565.993 448.666 563.51 455.552 560.261 462.33 C 554.032 475.325 544.948 487.94 533.989 498.812 C 528.267 504.529 521.916 510.112 515.113 515.407 C 508.769 520.344 501.815 525.198 494.446 529.833 C 481.535 537.954 466.949 545.693 449.857 553.491 C 446.335 555.103 442.735 556.705 439.253 558.255 C 432.11 561.435 424.724 564.723 417.6 568.274 C 412.742 570.692 408.349 573.056 404.171 575.503 C 394.817 580.971 385.848 587.319 377.175 593.457 C 374.359 595.449 371.447 597.509 368.568 599.507 C 363.045 603.342 357.27 606.525 350.838 609.993 C 332.135 620.078 315.151 627.712 298.913 633.331 C 289.721 636.512 280.599 639.089 271.802 640.991 C 262.401 643.024 253.026 644.362 243.939 644.967 C 238.722 645.312 233.489 645.485 228.265 645.485 Z M 140.554 117.703 L 140.575 117.719 C 136.513 122.919 133.206 129.118 130.463 136.67 C 128.017 143.406 126.235 150.573 124.512 157.505 C 123.396 161.993 122.242 166.633 120.919 171.113 C 119.433 176.145 117.568 181.338 115.217 186.99 C 110.488 198.357 104.615 209.506 98.934 220.288 C 92.807 231.918 86.471 243.944 81.7 256.056 C 79.134 262.571 77.204 268.608 75.8 274.512 C 74.226 281.133 73.349 287.424 73.115 293.744 C 72.59 307.033 75.031 321.037 80.577 336.555 C 85.849 351.306 93.173 365.338 99.643 377.118 C 100.32 378.352 100.999 379.586 101.678 380.821 C 108.269 392.809 115.086 405.205 121.134 417.656 C 127.926 431.635 132.977 444.141 136.577 455.887 C 139.713 466.137 142.269 477.474 144.394 490.544 C 146.288 502.197 147.671 514.12 149.007 525.651 C 149.237 527.635 149.468 529.618 149.7 531.602 C 150.974 542.464 152.499 553.527 153.974 564.224 C 155.392 574.511 156.859 585.148 158.112 595.663 C 158.952 602.719 160.057 610.852 162.538 618.092 C 165.311 626.183 169.399 632.045 175.035 636.012 C 178.241 638.284 182.017 640.01 186.582 641.291 C 190.935 642.513 195.387 643.158 199.168 643.628 C 213.903 645.47 228.965 645.902 243.937 644.912 C 253.022 644.308 262.394 642.971 271.791 640.938 C 280.587 639.036 289.707 636.459 298.897 633.279 C 315.13 627.662 332.113 620.029 350.813 609.945 C 357.244 606.477 363.017 603.295 368.538 599.463 C 371.417 597.465 374.329 595.405 377.144 593.412 C 385.819 587.274 394.788 580.926 404.144 575.456 C 408.323 573.008 412.717 570.643 417.577 568.225 C 424.703 564.674 432.088 561.385 439.232 558.206 C 442.714 556.656 446.314 555.053 449.836 553.441 C 466.926 545.644 481.508 537.907 494.418 529.787 C 501.785 525.153 508.737 520.301 515.08 515.364 C 521.882 510.071 528.231 504.489 533.952 498.774 C 544.905 487.906 553.986 475.296 560.213 462.307 C 563.461 455.532 565.942 448.649 567.587 441.85 C 569.302 434.758 570.12 427.708 570.016 420.895 C 569.903 413.967 568.871 406.973 567.873 400.209 C 566.295 389.519 564.663 378.465 566.497 367.057 C 568.191 356.526 572.964 346.847 577.579 337.487 C 578.541 335.536 579.535 333.519 580.473 331.55 C 583.252 325.731 586.068 319.45 587.843 312.946 C 589.684 306.198 590.192 299.881 589.395 293.63 C 588.464 286.324 585.647 279.009 580.531 270.61 C 575.961 263.152 570.2 255.662 564.63 248.418 C 557.387 239.001 549.898 229.262 544.689 219.228 C 541.882 213.82 539.953 208.779 538.794 203.815 C 537.49 198.237 537.186 192.905 537.862 187.516 C 539.407 175.284 546.177 164.679 552.724 154.422 C 554.79 151.186 556.926 147.839 558.843 144.519 C 561.963 139.115 565.93 130.787 567.111 121.802 C 568.261 113.049 566.548 105.529 562.019 99.452 C 558.309 94.473 553.073 90.814 546.457 88.573 C 540.684 86.619 533.898 85.747 526.304 85.984 C 519.16 86.19 511.375 87.337 502.505 89.489 C 497.786 90.635 493.033 91.874 488.172 93.15 C 486.837 93.501 485.502 93.852 484.165 94.204 C 460.983 100.3 437.012 106.603 412.923 109.301 C 398.402 110.928 385.708 110.905 372.974 109.233 C 361.888 107.776 350.717 105.117 335.619 100.342 C 313.679 93.403 284.561 84.386 253.897 76.187 C 243.355 73.364 230.234 69.85 217.696 69.639 C 217.207 69.63 216.72 69.626 216.238 69.626 C 208.019 69.626 200.66 70.82 193.78 73.267 C 186.632 75.809 180.797 79.414 176.032 82.606 C 170.309 86.439 164.367 91.414 158.37 97.392 C 152.627 103.116 146.641 109.955 140.576 117.719 L 140.554 117.703 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 219.016 652.675 C 210.055 652.675 201.122 652.199 192.292 651.248 C 188.25 650.815 183.489 650.207 178.82 648.976 C 173.931 647.687 169.885 645.906 166.452 643.532 C 160.405 639.374 156.032 633.194 153.082 624.635 C 150.406 616.87 149.291 608.31 148.455 600.896 C 147.44 591.885 146.303 582.755 145.203 573.927 C 143.664 561.579 142.073 548.81 140.807 536.273 C 140.573 533.954 140.34 531.594 140.113 529.313 C 138.977 517.828 137.802 505.952 136.092 494.342 C 134.175 481.322 131.777 470.03 128.757 459.821 C 125.279 448.081 120.317 435.594 113.587 421.644 C 107.592 409.219 100.801 396.853 94.236 384.894 C 93.423 383.415 92.612 381.936 91.801 380.458 C 84.969 367.993 77.241 353.151 71.724 337.579 C 65.909 321.167 63.408 306.358 64.082 292.305 C 64.383 285.704 65.36 279.137 67.069 272.228 C 68.592 266.068 70.668 259.77 73.414 252.976 C 78.52 240.349 85.26 227.824 91.778 215.712 C 98.045 204.066 104.526 192.023 109.666 179.724 C 112.149 173.785 114.114 168.303 115.674 162.964 C 117.078 158.161 118.283 153.176 119.449 148.356 C 121.217 141.05 123.044 133.494 125.6 126.407 C 128.467 118.457 131.968 111.953 136.302 106.523 C 142.328 98.972 148.681 92.226 155.184 86.472 C 161.57 80.821 168.125 76.104 174.665 72.453 C 181.903 68.413 187.872 65.817 194.021 64.034 C 201.716 61.803 209.792 60.869 218.712 61.183 C 230.874 61.609 243.044 64.7 255.48 68.106 C 279.977 74.805 305.492 82.854 338.212 94.205 C 353.664 99.566 364.975 102.59 376.032 104.316 C 388.937 106.33 401.849 106.572 416.665 105.076 C 441.697 102.548 466.58 96.047 490.644 89.76 L 493.208 89.09 C 498.601 87.682 503.097 86.514 507.772 85.374 C 516.78 83.177 524.691 81.994 531.957 81.755 C 539.732 81.487 546.642 82.342 552.501 84.304 C 559.238 86.56 564.553 90.28 568.298 95.36 C 572.909 101.614 574.55 109.335 573.179 118.308 C 571.769 127.526 567.474 135.988 564.12 141.463 C 562.119 144.73 559.904 148.022 557.761 151.205 C 550.713 161.681 543.424 172.513 541.767 185.12 C 541.062 190.515 541.356 195.845 542.665 201.414 C 543.831 206.371 545.78 211.403 548.623 216.796 C 553.904 226.809 561.523 236.53 568.892 245.931 C 574.95 253.66 581.213 261.652 586.044 269.665 C 588.492 273.748 590.363 277.54 591.763 281.257 C 593.334 285.428 594.282 289.411 594.66 293.431 C 595.263 299.84 594.464 306.338 592.219 313.298 C 590.263 319.358 587.429 325.26 583.775 332.256 C 582.956 333.828 582.102 335.435 581.275 336.988 C 576.018 346.87 570.583 357.088 568.86 368.34 C 567.019 380.077 569.102 391.459 571.118 402.467 C 572.354 409.222 573.632 416.207 573.966 423.142 C 574.295 430.1 573.655 437.311 572.063 444.575 C 570.538 451.535 568.133 458.582 564.914 465.52 C 558.738 478.835 549.565 491.711 538.387 502.755 C 532.628 508.482 526.22 514.054 519.342 519.315 C 512.926 524.223 505.884 529.025 498.415 533.588 C 485.296 541.601 470.49 549.143 453.15 556.644 C 449.622 558.175 446.014 559.695 442.525 561.164 C 435.227 564.238 427.68 567.415 420.411 570.887 C 415.467 573.245 411.017 575.559 406.806 577.964 C 396.656 583.751 387.023 590.63 377.705 597.282 C 375.511 598.849 373.243 600.469 371.004 602.047 C 365.442 605.973 359.475 609.421 353.341 612.902 C 334.035 623.856 316.117 632.255 298.564 638.578 C 288.853 642.077 279.164 644.948 269.765 647.111 C 259.788 649.408 249.806 650.985 240.096 651.798 C 233.079 652.383 226.039 652.675 219.016 652.675 Z M 215.405 61.178 C 207.785 61.178 200.765 62.136 194.036 64.086 C 187.892 65.867 181.926 68.462 174.692 72.5 C 168.155 76.15 161.604 80.864 155.22 86.512 C 148.72 92.264 142.369 99.008 136.345 106.556 C 132.015 111.982 128.517 118.481 125.652 126.425 C 123.097 133.509 121.27 141.063 119.503 148.368 C 118.336 153.189 117.131 158.174 115.727 162.978 C 114.166 168.319 112.2 173.804 109.716 179.745 C 104.575 192.046 98.094 204.09 91.826 215.737 C 85.308 227.848 78.569 240.371 73.465 252.997 C 70.719 259.788 68.644 266.083 67.121 272.241 C 65.414 279.147 64.437 285.71 64.136 292.306 C 63.464 306.352 65.963 321.155 71.775 337.56 C 77.291 353.128 85.018 367.967 91.849 380.43 C 92.658 381.909 93.471 383.388 94.283 384.867 C 100.85 396.826 107.64 409.193 113.636 421.619 C 120.368 435.571 125.332 448.062 128.809 459.804 C 131.829 470.016 134.229 481.311 136.147 494.333 C 137.856 505.944 139.031 517.821 140.168 529.306 C 140.394 531.588 140.628 533.947 140.861 536.267 C 142.127 548.803 143.717 561.571 145.256 573.919 C 146.356 582.748 147.494 591.877 148.509 600.888 C 149.344 608.299 150.459 616.856 153.133 624.616 C 156.079 633.163 160.445 639.335 166.482 643.486 C 169.911 645.856 173.951 647.634 178.834 648.921 C 183.499 650.152 188.258 650.759 192.298 651.192 C 208.045 652.888 224.127 653.073 240.093 651.741 C 249.8 650.928 259.78 649.351 269.755 647.056 C 279.152 644.893 288.839 642.023 298.547 638.525 C 316.097 632.202 334.012 623.805 353.316 612.852 C 359.449 609.372 365.414 605.925 370.975 602.001 C 373.212 600.422 375.481 598.802 377.675 597.235 C 386.993 590.582 396.628 583.703 406.78 577.915 C 410.992 575.509 415.444 573.194 420.388 570.836 C 427.66 567.363 435.206 564.185 442.505 561.111 C 445.994 559.642 449.601 558.123 453.13 556.592 C 470.467 549.091 485.271 541.551 498.387 533.539 C 505.856 528.977 512.895 524.176 519.31 519.269 C 526.186 514.01 532.592 508.439 538.35 502.715 C 549.524 491.675 558.692 478.805 564.865 465.496 C 568.082 458.561 570.486 451.518 572.01 444.562 C 573.601 437.303 574.241 430.097 573.912 423.144 C 573.578 416.212 572.3 409.229 571.064 402.476 C 569.048 391.464 566.964 380.076 568.806 368.331 C 570.53 357.07 575.967 346.847 581.226 336.962 C 582.053 335.408 582.907 333.802 583.727 332.229 C 587.379 325.236 590.212 319.337 592.166 313.279 C 594.409 306.327 595.207 299.836 594.605 293.435 C 594.228 289.419 593.281 285.441 591.712 281.274 C 590.313 277.56 588.444 273.772 585.997 269.691 C 581.169 261.682 574.906 253.691 568.849 245.963 C 561.479 236.56 553.858 226.838 548.576 216.82 C 545.729 211.423 543.778 206.387 542.612 201.425 C 541.301 195.849 541.007 190.513 541.712 185.111 C 543.371 172.492 550.664 161.655 557.716 151.174 C 559.859 147.991 562.073 144.699 564.073 141.433 C 567.425 135.962 571.717 127.507 573.125 118.298 C 574.494 109.34 572.856 101.634 568.254 95.391 C 564.516 90.32 559.211 86.608 552.484 84.355 C 546.63 82.395 539.722 81.538 531.96 81.808 C 524.697 82.047 516.79 83.23 507.786 85.427 C 503.111 86.567 498.614 87.734 493.222 89.142 L 490.657 89.811 C 466.593 96.1 441.708 102.601 416.671 105.129 C 401.851 106.626 388.935 106.384 376.024 104.369 C 364.963 102.642 353.65 99.617 338.194 94.255 C 305.476 82.905 279.962 74.856 255.466 68.157 C 243.033 64.752 230.867 61.661 218.71 61.236 C 217.596 61.197 216.494 61.178 215.405 61.178 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 209.751 660.137 C 201.582 660.137 193.44 659.764 185.373 659.018 C 175.739 658.132 165.725 656.569 157.748 651.175 C 143.488 641.575 140.391 622.891 138.608 606.133 C 137.865 599.155 137.069 592.076 136.299 585.229 C 134.665 570.706 132.975 555.689 131.724 540.943 C 131.502 538.323 131.285 535.7 131.07 533.077 C 129.184 510.164 127.235 486.472 120.752 463.786 C 113.259 437.606 99.691 412.864 86.569 388.936 C 85.641 387.244 84.714 385.553 83.789 383.863 C 76.591 370.705 68.456 355.042 62.69 338.642 C 56.599 321.315 54.036 305.679 54.858 290.841 C 56.392 262.174 70.661 236.157 84.459 210.997 C 91.31 198.505 98.394 185.589 103.937 172.383 C 106.551 166.156 108.614 160.39 110.245 154.754 C 111.727 149.636 112.981 144.312 114.195 139.162 C 117.823 123.769 121.575 107.852 131.876 95.209 C 143.728 80.66 158.022 69.223 173.211 62.135 C 185.25 56.517 199.213 51.466 219.714 52.549 C 232.515 53.225 245.193 56.528 257.082 59.853 C 281.998 66.813 307.829 75.464 340.838 87.901 C 368.552 98.343 389.435 103.471 420.367 100.674 C 446.32 98.328 472.095 91.633 497.022 85.158 L 498.177 84.857 C 502.758 83.667 507.951 82.318 512.975 81.085 C 522.132 78.842 530.18 77.62 537.579 77.348 C 554.751 76.692 567.582 81.464 574.682 91.156 C 579.392 97.638 580.969 105.605 579.37 114.835 C 577.729 124.317 573.1 132.928 569.507 138.483 C 567.421 141.706 565.128 144.951 562.911 148.089 C 555.37 158.761 547.571 169.796 545.809 182.731 C 542.764 205.187 558.293 224.631 573.311 243.434 C 579.845 251.615 586.601 260.075 591.672 268.62 C 596.83 277.355 599.575 285.398 600.064 293.208 C 600.953 307.42 594.761 319.651 587.192 333.031 C 586.524 334.214 585.847 335.4 585.169 336.589 C 579.246 346.966 573.121 357.697 571.359 369.633 C 569.545 381.645 572.073 393.314 574.518 404.6 C 575.985 411.375 577.503 418.381 578.053 425.36 C 580.179 452.632 567.041 483.091 542.91 506.839 C 522.039 527.495 494.582 544.383 456.501 559.983 C 452.96 561.438 449.341 562.877 445.84 564.27 C 438.393 567.233 430.693 570.296 423.286 573.684 C 418.265 575.976 413.762 578.238 409.52 580.6 C 398.604 586.669 388.347 594.072 378.427 601.231 C 376.799 602.406 375.172 603.58 373.542 604.749 C 367.851 608.831 361.964 612.392 355.93 615.982 C 313.873 641.008 274.725 655.024 236.248 658.831 C 227.431 659.701 218.575 660.137 209.751 660.137 Z M 214.219 52.893 C 196.753 52.893 184.297 57.503 173.418 62.58 C 158.295 69.637 144.061 81.027 132.254 95.519 C 122.025 108.075 118.287 123.936 114.671 139.275 C 113.456 144.43 112.2 149.761 110.715 154.891 C 109.078 160.545 107.009 166.328 104.388 172.573 C 98.836 185.803 91.745 198.73 84.888 211.233 C 71.115 236.345 56.874 262.312 55.346 290.868 C 53.58 322.777 68.178 354.307 84.218 383.628 C 85.142 385.318 86.07 387.009 86.997 388.701 C 100.132 412.652 113.715 437.419 121.222 463.651 C 127.72 486.383 129.671 510.101 131.558 533.038 C 131.773 535.659 131.989 538.282 132.211 540.902 C 133.462 555.64 135.151 570.655 136.785 585.175 C 137.555 592.022 138.352 599.102 139.095 606.081 C 140.867 622.73 143.936 641.286 158.022 650.769 C 165.907 656.101 175.848 657.65 185.417 658.53 C 202.168 660.08 219.253 660.016 236.198 658.344 C 274.601 654.544 313.683 640.55 355.677 615.562 C 361.701 611.977 367.578 608.422 373.253 604.352 C 374.882 603.183 376.51 602.008 378.137 600.834 C 388.068 593.667 398.338 586.256 409.279 580.172 C 413.532 577.804 418.047 575.536 423.08 573.239 C 430.497 569.847 438.204 566.781 445.657 563.815 C 449.156 562.423 452.774 560.983 456.312 559.53 C 494.331 543.955 521.738 527.101 542.563 506.491 C 566.594 482.844 579.677 452.529 577.561 425.399 C 577.014 418.454 575.5 411.464 574.035 404.705 C 571.581 393.376 569.043 381.662 570.87 369.561 C 572.647 357.535 578.794 346.764 584.74 336.347 C 585.418 335.158 586.094 333.974 586.762 332.791 C 594.292 319.48 600.453 307.318 599.571 293.241 C 599.087 285.509 596.364 277.537 591.247 268.87 C 586.194 260.355 579.449 251.909 572.925 243.741 C 557.844 224.857 542.248 205.33 545.32 182.666 C 547.1 169.612 554.933 158.527 562.509 147.807 C 564.723 144.673 567.014 141.432 569.093 138.218 C 585.747 112.48 578.272 96.935 574.284 91.446 C 565.443 79.375 549.451 77.39 537.596 77.839 C 530.231 78.11 522.214 79.327 513.09 81.563 C 508.069 82.795 502.878 84.143 498.299 85.333 L 497.143 85.633 C 472.198 92.113 446.403 98.814 420.411 101.164 C 389.382 103.97 368.445 98.829 340.664 88.361 C 307.669 75.929 281.851 67.283 256.949 60.326 C 245.087 57.008 232.438 53.713 219.687 53.039 C 217.812 52.94 215.989 52.893 214.219 52.893 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 200.477 667.218 C 193.108 667.218 185.762 666.93 178.473 666.355 C 168.285 665.554 157.697 664.044 149.269 658.456 C 142.417 653.93 137.484 647.129 134.187 637.662 C 131.261 629.258 130.048 620.037 129.173 611.324 C 128.762 607.23 128.337 603.072 127.926 599.05 C 126.134 581.514 124.282 563.38 123.053 545.577 C 122.854 542.691 122.66 539.756 122.474 536.916 C 121.72 525.467 120.94 513.629 119.582 502.054 C 118.058 489.068 115.953 477.809 113.144 467.632 C 109.889 455.858 105.08 443.355 98.44 429.408 C 92.526 416.985 85.76 404.636 79.218 392.693 C 78.189 390.814 77.161 388.937 76.136 387.06 C 68.58 373.222 60.046 356.758 54.044 339.562 C 47.695 321.376 45.079 304.968 46.045 289.403 C 46.48 282.24 47.652 275.117 49.629 267.627 C 51.391 260.948 53.759 254.125 56.868 246.768 C 62.644 233.093 70.199 219.553 77.505 206.458 C 84.944 193.123 92.637 179.334 98.587 165.211 C 101.338 158.684 103.505 152.619 105.212 146.669 C 106.774 141.225 108.078 135.555 109.339 130.072 C 111.192 122.011 113.109 113.676 115.884 105.888 C 117.378 101.695 118.993 97.992 120.824 94.566 C 122.878 90.72 125.149 87.32 127.764 84.172 C 139.609 69.914 154.878 58.863 171.919 52.213 C 180.058 49.037 187.222 46.953 194.462 45.653 C 202.92 44.134 211.492 43.709 220.671 44.353 C 233.492 45.253 246.45 48.571 258.544 52.022 C 272.351 55.959 286.538 60.56 301.919 66.088 C 314.527 70.619 328.059 75.827 343.289 82.008 C 355.264 86.869 368.249 91.754 382.056 94.567 C 395.309 97.266 408.663 97.947 424.086 96.709 C 450.986 94.551 477.546 87.687 503.232 81.048 L 503.671 80.935 C 508.453 79.699 513.397 78.421 518.258 77.223 C 527.533 74.941 535.69 73.683 543.194 73.38 C 551.289 73.04 558.449 73.871 564.473 75.849 C 571.422 78.129 576.879 81.953 580.691 87.213 C 583.16 90.644 584.763 94.536 585.457 98.783 C 586.088 102.65 585.976 106.855 585.122 111.284 C 583.256 120.956 578.318 129.667 574.504 135.27 C 572.342 138.447 569.975 141.647 567.686 144.742 C 559.619 155.646 551.277 166.922 549.394 180.286 C 548.629 185.732 548.906 191.098 550.241 196.692 C 551.429 201.673 553.434 206.72 556.373 212.12 C 561.83 222.151 569.75 231.886 577.41 241.301 C 584.399 249.891 591.627 258.775 596.901 267.802 C 599.398 272.092 601.259 276.104 602.59 280.067 C 604.075 284.484 604.866 288.721 605.008 293.017 C 605.127 296.603 604.806 300.123 604.028 303.778 C 603.327 307.068 602.268 310.394 600.791 313.945 C 598.068 320.492 594.387 326.718 590.206 333.595 C 589.708 334.415 589.207 335.237 588.704 336.06 C 582.069 346.939 575.208 358.188 573.402 370.864 C 572.597 376.403 572.683 382.348 573.667 389.039 C 574.543 395.003 576.036 400.992 577.479 406.783 C 579.172 413.58 580.923 420.607 581.681 427.614 C 582.459 434.851 582.173 442.374 580.832 449.974 C 579.55 457.245 577.298 464.613 574.142 471.872 C 568.074 485.826 558.725 499.222 547.104 510.614 C 541.27 516.361 534.749 521.908 527.721 527.103 C 521.161 531.952 513.945 536.651 506.274 541.069 C 492.74 548.864 477.493 556.012 459.66 562.921 C 456.102 564.303 452.464 565.668 448.945 566.989 C 441.352 569.837 433.5 572.784 425.954 576.085 C 420.842 578.319 416.277 580.534 411.997 582.858 C 400.31 589.194 389.454 597.125 378.954 604.796 C 377.902 605.564 376.851 606.332 375.798 607.099 C 369.885 611.409 363.65 615.342 358.269 618.69 C 338.154 631.207 317.821 641.438 297.835 649.098 C 287.101 653.211 276.267 656.658 265.632 659.342 C 254.513 662.148 243.309 664.197 232.331 665.433 C 221.737 666.622 211.083 667.218 200.477 667.218 Z M 212.553 44.117 C 206.358 44.117 200.386 44.644 194.471 45.706 C 187.234 47.005 180.074 49.089 171.939 52.264 C 154.906 58.91 139.645 69.956 127.805 84.207 C 122.927 90.078 119.045 97.176 115.934 105.906 C 113.16 113.691 111.245 122.024 109.39 130.084 C 108.13 135.568 106.826 141.238 105.263 146.683 C 103.555 152.636 101.388 158.702 98.636 165.231 C 92.685 179.357 84.991 193.148 77.551 206.484 C 70.247 219.578 62.693 233.117 56.917 246.788 C 53.809 254.144 51.442 260.964 49.68 267.64 C 47.705 275.127 46.533 282.246 46.099 289.406 C 45.133 304.964 47.747 321.364 54.094 339.544 C 60.096 356.735 68.628 373.198 76.183 387.033 C 77.208 388.91 78.236 390.788 79.265 392.666 C 85.808 404.61 92.574 416.96 98.489 429.385 C 105.13 443.334 109.94 455.84 113.195 467.617 C 116.005 477.797 118.112 489.06 119.636 502.047 C 120.994 513.624 121.773 525.463 122.528 536.912 C 122.714 539.752 122.908 542.688 123.107 545.573 C 124.336 563.375 126.188 581.508 127.98 599.045 C 128.391 603.066 128.816 607.224 129.227 611.318 C 130.101 620.028 131.314 629.245 134.239 637.645 C 137.531 647.1 142.457 653.892 149.298 658.411 C 157.716 663.992 168.297 665.501 178.476 666.301 C 196.254 667.704 214.372 667.395 232.325 665.379 C 243.3 664.144 254.502 662.096 265.619 659.289 C 276.251 656.606 287.085 653.159 297.816 649.047 C 317.798 641.389 338.128 631.159 358.24 618.644 C 363.62 615.296 369.854 611.364 375.766 607.055 C 376.819 606.288 377.87 605.52 378.922 604.752 C 389.422 597.08 400.28 589.148 411.971 582.81 C 416.251 580.486 420.818 578.27 425.932 576.036 C 433.478 572.734 441.331 569.787 448.925 566.938 C 452.444 565.618 456.082 564.252 459.64 562.87 C 477.47 555.963 492.715 548.816 506.247 541.023 C 513.915 536.605 521.129 531.907 527.688 527.059 C 534.714 521.866 541.233 516.32 547.064 510.575 C 558.681 499.188 568.027 485.798 574.091 471.851 C 577.246 464.595 579.496 457.231 580.778 449.964 C 582.117 442.369 582.403 434.851 581.626 427.62 C 580.869 420.617 579.118 413.591 577.425 406.796 C 575.982 401.004 574.49 395.014 573.612 389.046 C 572.628 382.351 572.541 376.4 573.347 370.857 C 575.155 358.169 582.019 346.915 588.657 336.032 C 589.159 335.208 589.661 334.387 590.158 333.566 C 594.338 326.692 598.019 320.468 600.74 313.925 C 602.216 310.377 603.273 307.054 603.974 303.767 C 604.751 300.117 605.072 296.602 604.953 293.02 C 604.811 288.728 604.021 284.498 602.538 280.086 C 601.208 276.126 599.348 272.117 596.853 267.83 C 591.58 258.807 584.354 249.925 577.367 241.336 C 569.705 231.919 561.783 222.182 556.324 212.147 C 553.384 206.742 551.376 201.691 550.187 196.705 C 548.852 191.106 548.574 185.733 549.339 180.28 C 551.225 166.903 559.57 155.621 567.641 144.711 C 569.93 141.616 572.297 138.417 574.458 135.241 C 578.269 129.641 583.204 120.937 585.067 111.274 C 585.92 106.852 586.033 102.653 585.402 98.793 C 584.71 94.554 583.109 90.669 580.646 87.246 C 576.841 81.995 571.394 78.178 564.455 75.901 C 558.437 73.926 551.283 73.098 543.195 73.435 C 535.695 73.738 527.542 74.995 518.271 77.277 C 513.41 78.474 508.466 79.752 503.684 80.988 L 503.245 81.102 C 477.557 87.741 450.995 94.606 424.09 96.765 C 408.664 98.003 395.304 97.322 382.045 94.621 C 368.234 91.809 355.246 86.922 343.268 82.061 C 328.04 75.879 314.509 70.672 301.901 66.141 C 286.521 60.613 272.334 56.012 258.529 52.076 C 246.438 48.626 233.483 45.308 220.667 44.409 C 217.912 44.214 215.212 44.117 212.553 44.117 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 191.2 674.574 C 184.618 674.574 178.056 674.356 171.534 673.92 C 160.764 673.203 149.568 671.738 140.648 665.93 C 133.393 661.221 128.179 654.108 124.708 644.188 C 121.58 635.249 120.321 625.2 119.502 616.549 C 117.456 594.929 115.341 572.573 114.146 550.241 C 113.978 547.116 113.821 543.936 113.668 540.86 C 113.1 529.408 112.511 517.567 111.321 505.985 C 109.986 492.993 108.019 481.729 105.307 471.548 C 102.12 459.603 97.315 446.928 90.616 432.801 C 84.651 420.219 77.792 407.722 71.159 395.638 C 70.195 393.881 69.233 392.126 68.272 390.372 C 60.344 375.768 51.403 358.428 45.194 340.554 C 38.565 321.469 35.884 304.267 36.996 287.963 C 37.496 280.515 38.766 273.11 40.876 265.324 C 42.759 258.384 45.273 251.293 48.563 243.649 C 54.678 229.444 62.642 215.387 70.344 201.792 C 78.368 187.629 86.666 172.984 93.016 157.965 C 95.901 151.142 98.169 144.785 99.949 138.532 C 101.589 132.77 102.939 126.758 104.245 120.944 C 106.142 112.504 108.102 103.776 110.987 95.637 C 112.54 91.255 114.228 87.389 116.15 83.818 C 118.307 79.81 120.7 76.274 123.464 73.008 C 138.52 55.221 157.361 46.385 170.515 42.105 C 178.983 39.349 186.878 37.509 194.65 36.476 C 203.455 35.307 212.277 35.136 221.617 35.95 C 235.192 37.134 248.66 40.68 260.044 43.992 C 274.033 48.058 288.4 52.903 303.969 58.804 C 316.721 63.637 330.403 69.236 345.796 75.92 C 358.031 81.234 371.253 86.581 385.035 89.704 C 398.46 92.746 412.038 93.644 427.766 92.536 C 440.036 91.671 453.298 89.735 468.309 86.614 C 481.185 83.938 493.48 80.827 508.213 77.037 L 509.512 76.703 C 514.088 75.526 518.821 74.309 523.47 73.158 C 532.744 70.864 541.26 69.534 548.78 69.203 C 550.079 69.144 551.354 69.114 552.604 69.114 C 559.304 69.114 565.286 69.957 570.431 71.628 C 577.492 73.92 583.018 77.797 586.857 83.15 C 589.364 86.666 590.965 90.653 591.617 95 C 592.21 98.957 592.025 103.256 591.067 107.778 C 588.97 117.679 583.709 126.515 579.665 132.185 C 577.424 135.325 574.982 138.488 572.62 141.548 C 568.345 147.084 563.925 152.809 560.397 158.774 C 556.433 165.474 554.071 171.723 553.176 177.88 C 552.381 183.363 552.651 188.758 554.001 194.374 C 555.204 199.377 557.242 204.441 560.233 209.856 C 565.79 219.916 573.875 229.676 581.695 239.114 C 589.135 248.095 596.828 257.382 602.297 266.881 C 604.819 271.277 606.675 275.4 607.972 279.484 C 609.413 284.025 610.125 288.388 610.148 292.821 C 610.168 296.504 609.721 300.119 608.781 303.874 C 607.939 307.238 606.717 310.642 605.045 314.28 C 601.843 321.248 597.351 328.168 593.389 334.274 C 593.075 334.759 592.76 335.244 592.445 335.73 C 585.086 347.064 577.478 358.784 575.641 372.137 C 574.848 377.804 575.034 383.886 576.209 390.729 C 577.258 396.832 578.978 402.964 580.642 408.894 C 582.56 415.73 584.543 422.798 585.507 429.86 C 586.509 437.235 586.401 444.914 585.186 452.683 C 584.024 460.11 581.85 467.638 578.725 475.059 C 572.713 489.33 563.275 502.988 551.431 514.554 C 545.56 520.31 538.983 525.846 531.88 531.008 C 525.247 535.828 517.944 540.475 510.174 544.821 C 496.432 552.506 480.964 559.457 462.885 566.07 C 459.306 567.382 455.646 568.675 452.106 569.926 C 444.371 572.658 436.372 575.483 428.696 578.695 C 423.505 580.864 418.882 583.029 414.564 585.314 C 402.13 591.887 390.711 600.344 379.669 608.522 L 378.167 609.635 C 372.144 614.094 365.959 618.183 360.704 621.595 C 340.089 634.977 318.812 646.012 297.466 654.391 C 274.523 663.397 251.293 669.409 228.419 672.26 C 216.046 673.802 203.589 674.574 191.2 674.574 Z M 123.486 73.026 L 123.506 73.043 C 120.745 76.306 118.354 79.84 116.199 83.845 C 114.279 87.413 112.591 91.276 111.039 95.656 C 108.155 103.792 106.195 112.518 104.299 120.957 C 102.993 126.772 101.642 132.784 100.001 138.548 C 98.221 144.803 95.953 151.161 93.067 157.987 C 86.716 173.009 78.417 187.655 70.392 201.82 C 62.69 215.413 54.727 229.469 48.614 243.672 C 45.324 251.313 42.811 258.401 40.93 265.339 C 38.819 273.121 37.551 280.523 37.051 287.967 C 35.939 304.264 38.62 321.459 45.246 340.536 C 51.453 358.407 60.394 375.744 68.321 390.346 C 69.281 392.101 70.244 393.856 71.208 395.612 C 77.841 407.697 84.699 420.194 90.666 432.778 C 97.366 446.908 102.172 459.585 105.358 471.535 C 108.071 481.718 110.04 492.985 111.375 505.981 C 112.565 517.563 113.153 529.405 113.721 540.858 C 113.874 543.934 114.032 547.114 114.199 550.239 C 115.394 572.571 117.509 594.926 119.555 616.544 C 120.374 625.193 121.632 635.237 124.758 644.17 C 128.225 654.079 133.432 661.182 140.677 665.885 C 149.586 671.686 160.774 673.149 171.536 673.866 C 190.333 675.123 209.467 674.565 228.411 672.208 C 251.28 669.358 274.506 663.347 297.444 654.343 C 318.787 645.964 340.061 634.932 360.672 621.55 C 365.927 618.139 372.111 614.052 378.133 609.593 L 379.636 608.48 C 390.679 600.301 402.1 591.842 414.537 585.268 C 418.858 582.982 423.482 580.815 428.674 578.646 C 436.352 575.434 444.352 572.608 452.087 569.875 C 455.627 568.625 459.287 567.332 462.865 566.021 C 480.941 559.408 496.407 552.458 510.146 544.775 C 517.915 540.43 525.216 535.783 531.847 530.965 C 538.947 525.805 545.523 520.271 551.392 514.516 C 563.231 502.955 572.665 489.303 578.674 475.039 C 581.798 467.623 583.971 460.099 585.132 452.676 C 586.345 444.913 586.454 437.239 585.452 429.868 C 584.49 422.811 582.507 415.745 580.589 408.91 C 578.924 402.979 577.204 396.845 576.155 390.74 C 574.979 383.891 574.792 377.804 575.586 372.13 C 577.425 358.765 585.037 347.04 592.399 335.701 C 592.714 335.215 593.028 334.73 593.343 334.245 C 597.304 328.141 601.794 321.223 604.995 314.258 C 606.665 310.623 607.886 307.222 608.728 303.861 C 609.666 300.111 610.113 296.501 610.094 292.822 C 610.07 288.395 609.358 284.037 607.919 279.502 C 606.624 275.421 604.769 271.302 602.25 266.909 C 596.783 257.413 589.091 248.129 581.652 239.15 C 573.832 229.709 565.744 219.947 560.185 209.884 C 557.191 204.464 555.151 199.395 553.947 194.387 C 552.596 188.765 552.326 183.363 553.121 177.874 C 554.017 171.71 556.382 165.454 560.35 158.747 C 563.88 152.78 568.302 147.053 572.576 141.516 C 574.938 138.457 577.38 135.294 579.62 132.154 C 583.662 126.489 588.918 117.659 591.013 107.768 C 591.97 103.253 592.155 98.96 591.562 95.01 C 590.912 90.671 589.314 86.692 586.812 83.183 C 582.98 77.84 577.463 73.969 570.414 71.68 C 564.315 69.7 557.041 68.886 548.781 69.258 C 541.265 69.589 532.753 70.919 523.482 73.213 C 518.833 74.363 514.101 75.58 509.525 76.757 L 508.226 77.092 C 493.491 80.881 481.197 83.992 468.319 86.669 C 453.306 89.789 440.041 91.727 427.769 92.592 C 412.034 93.701 398.452 92.801 385.022 89.758 C 371.237 86.635 358.011 81.286 345.774 75.972 C 330.382 69.287 316.7 63.689 303.949 58.856 C 288.382 52.956 274.015 48.112 260.029 44.045 C 248.647 40.734 235.183 37.189 221.612 36.005 C 212.275 35.19 203.458 35.362 194.656 36.531 C 186.887 37.563 178.996 39.403 170.531 42.157 C 157.383 46.435 138.552 55.266 123.505 73.044 L 123.486 73.026 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 181.923 681.993 C 176.124 681.993 170.338 681.832 164.581 681.509 C 153.229 680.874 141.426 679.456 132.013 673.428 C 128.003 670.866 124.515 667.523 121.648 663.492 C 119.085 659.892 116.919 655.6 115.21 650.738 C 111.886 641.283 110.619 630.803 109.818 621.799 C 108.054 601.986 106.13 578.547 105.225 554.93 C 105.098 551.587 104.983 548.185 104.872 544.894 C 104.485 533.428 104.085 521.571 103.06 509.973 C 101.909 496.962 100.076 485.682 97.457 475.489 C 94.385 463.546 89.663 450.885 83.023 436.78 C 77.109 424.219 70.277 411.749 63.67 399.689 C 62.595 397.728 61.485 395.701 60.397 393.708 C 52.109 378.43 42.767 360.289 36.309 341.583 C 29.415 321.613 26.677 303.612 27.936 286.549 C 28.501 278.814 29.867 271.125 32.113 263.041 C 34.114 255.836 36.776 248.477 40.248 240.545 C 46.701 225.804 55.077 211.225 63.178 197.127 C 71.786 182.144 80.688 166.651 87.435 150.745 C 90.455 143.625 92.824 136.977 94.676 130.422 C 96.393 124.343 97.789 117.989 99.138 111.846 C 101.076 103.024 103.08 93.901 106.075 85.41 C 107.687 80.838 109.449 76.809 111.463 73.094 C 113.723 68.924 116.238 65.252 119.153 61.869 C 125.496 54.507 133.306 48.141 142.368 42.946 C 150.421 38.329 159.414 34.654 169.099 32.022 C 187.473 27.104 204.461 25.691 222.555 27.572 C 233.834 28.744 245.855 31.341 261.534 35.987 C 275.701 40.183 290.248 45.273 306.007 51.547 C 318.893 56.678 332.726 62.668 348.293 69.859 C 362.692 76.511 374.955 81.605 388.001 84.843 C 401.578 88.214 415.378 89.341 431.435 88.39 C 443.961 87.601 457.44 85.722 472.643 82.643 C 486.236 79.89 499.576 76.536 513.182 73.053 L 515.567 72.443 C 519.864 71.342 524.307 70.204 528.67 69.119 C 538.076 66.783 546.719 65.415 554.356 65.052 C 562.782 64.643 570.194 65.445 576.379 67.433 C 583.549 69.738 589.145 73.668 593.012 79.114 C 595.557 82.715 597.156 86.795 597.766 91.243 C 598.321 95.29 598.064 99.683 597.003 104.299 C 594.673 114.429 589.089 123.39 584.815 129.125 C 582.498 132.234 579.982 135.365 577.548 138.393 C 573.018 144.03 568.334 149.859 564.595 155.945 C 560.395 162.783 557.893 169.179 556.947 175.501 C 556.122 181.024 556.386 186.453 557.753 192.098 C 558.971 197.128 561.045 202.215 564.093 207.651 C 569.754 217.749 578.012 227.543 585.998 237.014 C 593.882 246.364 602.033 256.032 607.683 265.988 C 610.231 270.489 612.082 274.722 613.343 278.928 C 614.741 283.593 615.375 288.083 615.279 292.652 C 615.201 296.414 614.633 300.107 613.542 303.94 C 612.568 307.365 611.194 310.83 609.343 314.535 C 605.899 321.43 601.433 327.911 596.705 334.773 L 596.202 335.504 C 588.103 347.267 579.729 359.43 577.869 373.436 C 577.089 379.227 577.375 385.441 578.742 392.432 C 579.962 398.668 581.913 404.938 583.798 411.002 C 585.94 417.888 588.155 425.008 589.32 432.134 C 590.547 439.649 590.616 447.483 589.527 455.421 C 588.487 463.003 586.389 470.692 583.295 478.273 C 577.34 492.862 567.813 506.78 555.745 518.522 C 549.837 524.288 543.203 529.812 536.026 534.94 C 529.321 539.731 521.93 544.326 514.059 548.6 C 500.11 556.174 484.42 562.928 466.096 569.247 C 462.496 570.491 458.813 571.713 455.252 572.895 C 447.375 575.51 439.231 578.213 431.423 581.333 C 426.147 583.44 421.467 585.555 417.116 587.8 C 403.947 594.586 392.038 603.54 380.52 612.2 C 375.454 616.008 369.764 620.041 363.124 624.528 C 342.026 638.784 319.812 650.627 297.097 659.728 C 273.205 669.3 248.778 675.824 224.494 679.115 C 210.348 681.031 196.092 681.993 181.923 681.993 Z M 119.173 61.887 L 119.194 61.904 C 116.281 65.284 113.768 68.953 111.51 73.121 C 109.499 76.833 107.737 80.859 106.126 85.428 C 103.132 93.917 101.129 103.037 99.191 111.858 C 97.841 118.002 96.446 124.356 94.728 130.437 C 92.875 136.995 90.506 143.645 87.485 150.767 C 80.736 166.676 71.834 182.17 63.224 197.155 C 55.124 211.252 46.748 225.828 40.297 240.567 C 36.825 248.496 34.165 255.853 32.164 263.056 C 29.92 271.136 28.554 278.822 27.99 286.553 C 26.73 303.608 29.468 321.603 36.36 341.565 C 42.816 360.268 52.158 378.406 60.444 393.683 C 61.531 395.675 62.642 397.703 63.716 399.663 C 70.324 411.723 77.156 424.195 83.071 436.758 C 89.713 450.864 94.435 463.529 97.509 475.475 C 100.129 485.672 101.962 496.955 103.113 509.969 C 104.139 521.568 104.538 533.426 104.925 544.893 C 105.036 548.184 105.151 551.586 105.278 554.928 C 106.182 578.544 108.107 601.982 109.871 621.794 C 110.672 630.795 111.94 641.271 115.261 650.72 C 116.969 655.578 119.132 659.865 121.691 663.461 C 124.556 667.487 128.038 670.824 132.042 673.383 C 141.444 679.404 153.239 680.821 164.584 681.455 C 170.338 681.778 176.125 681.939 181.923 681.939 C 196.09 681.939 210.342 680.977 224.485 679.061 C 248.765 675.77 273.188 669.248 297.076 659.677 C 319.787 650.577 341.998 638.736 363.092 624.482 C 369.732 619.996 375.422 615.963 380.486 612.156 C 392.006 603.495 403.917 594.54 417.09 587.75 C 421.443 585.505 426.124 583.389 431.402 581.281 C 439.212 578.161 447.357 575.457 455.234 572.843 C 458.795 571.661 462.478 570.439 466.077 569.195 C 484.399 562.877 500.086 556.124 514.033 548.552 C 521.902 544.279 529.291 539.684 535.994 534.895 C 543.169 529.769 549.801 524.246 555.707 518.482 C 567.77 506.745 577.292 492.834 583.244 478.252 C 586.337 470.674 588.433 462.99 589.473 455.412 C 590.561 447.481 590.492 439.651 589.266 432.142 C 588.102 425.02 585.887 417.902 583.746 411.017 C 581.86 404.952 579.909 398.681 578.689 392.442 C 577.32 385.445 577.034 379.226 577.814 373.428 C 579.677 359.411 588.055 347.242 596.156 335.473 L 596.66 334.742 C 601.387 327.881 605.851 321.402 609.294 314.511 C 611.145 310.809 612.516 307.347 613.489 303.926 C 614.579 300.096 615.147 296.408 615.226 292.651 C 615.321 288.087 614.689 283.603 613.291 278.943 C 612.032 274.741 610.181 270.513 607.635 266.015 C 601.988 256.064 593.838 246.397 585.957 237.05 C 577.969 227.577 569.71 217.78 564.045 207.678 C 560.995 202.238 558.92 197.146 557.7 192.112 C 556.331 186.46 556.067 181.024 556.893 175.493 C 557.84 169.165 560.345 162.762 564.549 155.917 C 568.29 149.827 572.976 143.997 577.506 138.359 C 579.94 135.331 582.456 132.201 584.772 129.093 C 589.043 123.363 594.623 114.407 596.95 104.288 C 598.01 99.678 598.267 95.292 597.712 91.251 C 597.104 86.813 595.507 82.74 592.967 79.147 C 589.108 73.711 583.521 69.787 576.363 67.486 C 570.184 65.5 562.78 64.7 554.358 65.107 C 546.725 65.47 538.086 66.838 528.683 69.174 C 524.32 70.258 519.877 71.396 515.581 72.496 L 513.196 73.107 C 499.589 76.59 486.249 79.944 472.654 82.697 C 457.449 85.776 443.967 87.656 431.438 88.445 C 415.376 89.396 401.57 88.269 387.988 84.897 C 374.938 81.658 362.672 76.562 348.27 69.909 C 332.703 62.718 318.872 56.728 305.986 51.598 C 290.229 45.325 275.683 40.236 261.518 36.04 C 245.843 31.394 233.824 28.799 222.549 27.627 C 204.458 25.744 187.479 27.159 169.112 32.075 C 159.433 34.706 150.443 38.379 142.394 42.994 C 133.338 48.186 125.532 54.549 119.193 61.905 L 119.173 61.887 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 172.649 689.71 C 167.62 689.71 162.604 689.594 157.605 689.362 C 145.64 688.809 133.197 687.433 123.249 681.158 C 105.782 670.156 101.705 648.682 99.903 627.114 C 97.796 601.904 96.543 579.843 96.073 559.67 C 95.992 556.13 95.928 552.585 95.863 549.039 C 95.447 526.051 95.018 502.28 89.382 479.53 C 82.781 452.905 69.132 427.953 55.934 403.823 C 54.725 401.613 53.517 399.405 52.316 397.197 C 34.36 364.072 15.47 325.366 18.644 285.164 C 21.265 251.735 38.827 221.56 55.81 192.379 C 64.999 176.589 74.502 160.261 81.638 143.486 C 84.791 136.074 87.257 129.143 89.178 122.299 C 90.97 115.91 92.41 109.219 93.8 102.748 C 97.765 84.304 101.867 65.233 114.663 50.633 C 130.027 33.104 151.942 25.263 167.621 21.772 C 186.347 17.65 204.626 16.751 223.502 19.024 C 235.321 20.447 247.894 23.242 263.071 27.82 C 289.275 35.721 316.353 46.77 350.869 63.648 C 377.665 76.751 399.389 85.884 435.077 84.072 C 462.534 82.608 488.913 76.336 518.083 68.904 L 521.616 68.002 C 525.685 66.965 529.746 65.927 533.802 64.916 C 543.353 62.534 552.134 61.125 559.905 60.73 C 578.729 59.758 591.993 64.561 599.33 74.999 C 604.341 82.149 605.621 90.869 603.134 100.918 C 600.562 111.314 594.638 120.429 590.122 126.246 C 587.728 129.329 585.138 132.432 582.633 135.434 C 573.046 146.92 563.134 158.796 560.918 173.2 C 557.374 196.275 574.203 215.895 590.477 234.868 C 598.804 244.577 607.415 254.617 613.244 265.032 C 618.623 274.66 621.033 283.657 620.613 292.538 C 619.912 308.379 610.523 321.27 600.582 334.919 L 599.896 335.86 C 591.181 347.84 582.168 360.228 580.298 374.807 C 578.598 387.933 582.947 400.706 587.152 413.058 C 589.519 420.009 591.966 427.197 593.335 434.41 C 596.172 449.389 594.346 465.711 588.054 481.611 C 582.145 496.546 572.512 510.75 560.198 522.689 C 538.876 543.408 509.162 559.758 469.361 572.674 C 465.736 573.852 462.029 575.006 458.444 576.121 C 450.431 578.614 442.146 581.193 434.216 584.217 C 428.874 586.252 424.143 588.315 419.752 590.522 C 405.94 597.462 393.215 607.175 382.992 614.981 C 377.244 619.369 371.412 623.641 365.656 627.682 C 321.633 658.582 271.468 678.828 220.585 686.229 C 204.664 688.546 188.598 689.71 172.649 689.71 Z M 203.453 18.295 C 191.544 18.295 179.728 19.609 167.727 22.251 C 152.12 25.726 130.308 33.527 115.032 50.956 C 102.319 65.46 98.231 84.469 94.279 102.851 C 92.886 109.329 91.446 116.027 89.65 122.431 C 87.723 129.295 85.25 136.246 82.089 143.677 C 74.941 160.48 65.43 176.822 56.233 192.625 C 39.277 221.759 21.744 251.884 19.132 285.202 C 15.968 325.271 34.824 363.9 52.746 396.963 C 53.948 399.17 55.156 401.378 56.364 403.587 C 69.578 427.744 83.241 452.724 89.857 479.411 C 95.507 502.215 95.937 526.014 96.353 549.029 C 96.417 552.575 96.481 556.119 96.564 559.658 C 97.034 579.822 98.286 601.873 100.391 627.073 C 102.184 648.514 106.225 669.855 123.511 680.743 C 133.363 686.957 145.731 688.322 157.627 688.872 C 178.446 689.837 199.603 688.786 220.514 685.745 C 271.322 678.354 321.413 658.138 365.374 627.282 C 371.124 623.245 376.952 618.976 382.694 614.592 C 392.934 606.775 405.679 597.045 419.532 590.085 C 423.939 587.87 428.684 585.801 434.041 583.759 C 441.985 580.73 450.278 578.149 458.298 575.654 C 461.881 574.538 465.587 573.385 469.209 572.209 C 508.938 559.316 538.589 543.003 559.856 522.337 C 572.121 510.446 581.714 496.301 587.598 481.431 C 593.856 465.617 595.673 449.389 592.853 434.501 C 591.491 427.322 589.05 420.152 586.688 413.216 C 582.465 400.811 578.098 387.983 579.812 374.745 C 581.699 360.041 590.748 347.602 599.499 335.572 L 600.186 334.63 C 610.082 321.044 619.43 308.211 620.124 292.516 C 620.539 283.728 618.149 274.817 612.816 265.272 C 607.011 254.898 598.417 244.878 590.105 235.187 C 573.758 216.13 556.856 196.424 560.434 173.126 C 562.671 158.588 572.628 146.657 582.256 135.12 C 584.758 132.122 587.346 129.022 589.735 125.945 C 611.535 97.869 602.283 80.068 598.929 75.28 C 591.695 64.989 578.564 60.253 559.93 61.219 C 552.191 61.613 543.441 63.017 533.922 65.391 C 529.866 66.403 525.805 67.439 521.737 68.478 L 518.204 69.378 C 489.009 76.817 462.605 83.094 435.102 84.561 C 432.054 84.716 429.103 84.791 426.246 84.791 C 395.549 84.792 375.23 76.105 350.654 64.088 C 316.163 47.223 289.108 36.182 262.93 28.289 C 247.781 23.72 235.234 20.931 223.444 19.511 C 216.72 18.701 210.072 18.295 203.453 18.295 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 163.373 697.083 C 159.118 697.083 154.875 697.003 150.641 696.844 C 138.124 696.375 125.107 695.049 114.709 688.582 C 110.282 685.83 106.433 682.22 103.269 677.852 C 100.437 673.943 98.05 669.28 96.175 663.994 C 92.431 653.434 91.129 641.592 90.414 632.456 C 88.539 608.493 87.536 586.252 87.349 564.463 C 87.317 560.74 87.308 556.948 87.297 553.281 C 87.266 541.759 87.235 529.845 86.53 518.187 C 85.739 505.108 84.166 493.77 81.721 483.528 C 78.864 471.561 74.294 458.895 67.75 444.805 C 61.922 432.254 55.124 419.807 48.549 407.769 C 47.255 405.399 45.917 402.949 44.61 400.54 C 35.603 383.914 25.457 364.171 18.501 343.8 C 11.077 322.059 8.224 302.458 9.778 283.877 C 10.471 275.562 12.03 267.301 14.544 258.618 C 16.785 250.878 19.74 242.977 23.578 234.463 C 30.709 218.642 39.912 203.012 48.813 187.897 C 58.591 171.293 68.701 154.124 76.235 136.461 C 79.527 128.742 82.097 121.512 84.092 114.357 C 85.963 107.645 87.445 100.61 88.878 93.806 C 90.898 84.217 92.987 74.303 96.202 65.104 C 97.934 60.152 99.844 55.799 102.043 51.796 C 104.51 47.302 107.274 43.361 110.494 39.747 C 117.075 32.362 125.612 26.178 135.866 21.367 C 144.806 17.174 155.023 14.026 166.231 12.012 C 175.785 10.306 185.511 9.357 195.137 9.191 C 204.69 9.029 214.531 9.626 224.392 10.971 C 236.785 12.663 249.896 15.66 264.477 20.132 C 278.957 24.573 293.858 30.157 310.035 37.204 C 323.228 42.952 336.959 49.525 353.249 57.89 C 368.639 65.849 380.806 71.547 393.888 75.356 C 400.775 77.361 407.586 78.728 414.711 79.536 C 422.218 80.387 430.077 80.62 438.735 80.251 C 451.718 79.68 465.633 77.93 481.277 74.904 C 495.693 72.115 509.835 68.6 523.085 65.239 C 524.79 64.807 526.493 64.374 528.194 63.941 C 531.749 63.037 535.426 62.101 539.035 61.197 C 548.699 58.776 557.593 57.332 565.47 56.905 C 574.234 56.428 581.892 57.199 588.24 59.199 C 595.629 61.527 601.364 65.564 605.286 71.196 C 607.908 74.968 609.503 79.237 610.029 83.884 C 610.507 88.113 610.106 92.693 608.837 97.495 C 607.687 101.848 605.83 106.375 603.319 110.948 C 601.034 115.108 598.262 119.217 595.079 123.161 C 592.613 126.217 589.951 129.295 587.377 132.271 C 582.333 138.103 577.118 144.134 572.958 150.46 C 570.717 153.868 568.959 157.077 567.584 160.271 C 566.039 163.86 565.016 167.336 564.454 170.896 C 563.568 176.514 563.821 182.024 565.229 187.742 C 566.483 192.837 568.632 197.982 571.799 203.471 C 577.686 213.672 586.305 223.556 594.64 233.113 C 603.393 243.149 612.443 253.527 618.421 264.353 C 623.827 274.155 626.145 283.352 625.507 292.467 C 625.244 296.313 624.465 300.084 623.125 303.995 C 621.931 307.483 620.315 311.004 618.184 314.762 C 614.224 321.746 609.02 328.531 603.988 335.094 C 603.616 335.578 603.245 336.062 602.873 336.547 C 597.833 343.131 593.364 349.097 589.722 355.455 C 585.548 362.74 583.117 369.522 582.291 376.188 C 581.54 382.216 582.029 388.681 583.782 395.954 C 585.348 402.444 587.76 408.98 590.091 415.3 C 592.678 422.309 595.351 429.557 596.915 436.833 C 598.589 444.626 599.013 452.773 598.177 461.048 C 597.378 468.94 595.436 476.95 592.403 484.854 C 586.561 500.077 576.858 514.515 564.342 526.609 C 558.36 532.396 551.612 537.896 544.285 542.957 C 537.436 547.688 529.871 552.181 521.798 556.31 C 507.434 563.659 491.304 570.019 472.486 575.753 C 468.84 576.865 465.11 577.95 461.502 579 C 453.346 581.373 444.913 583.827 436.847 586.76 C 431.416 588.734 426.622 590.749 422.188 592.921 C 408.876 599.442 397.093 608.259 385.193 617.48 C 378.813 622.425 373.435 626.54 367.932 630.545 C 345.91 646.573 321.834 660.046 296.372 670.589 C 270.641 681.244 243.805 688.776 216.608 692.978 C 198.935 695.708 181.082 697.083 163.373 697.083 Z M 110.533 39.783 C 107.317 43.393 104.555 47.331 102.089 51.821 C 99.893 55.822 97.983 60.173 96.253 65.122 C 93.038 74.317 90.95 84.23 88.931 93.817 C 87.497 100.622 86.015 107.658 84.143 114.371 C 82.148 121.529 79.577 128.761 76.284 136.481 C 68.749 154.148 58.638 171.319 48.86 187.924 C 39.96 203.038 30.757 218.667 23.627 234.486 C 19.79 242.998 16.836 250.896 14.596 258.633 C 12.084 267.312 10.525 275.571 9.832 283.881 C 8.279 302.455 11.131 322.049 18.552 343.783 C 25.507 364.15 35.651 383.89 44.658 400.515 C 45.965 402.923 47.303 405.373 48.597 407.743 C 55.172 419.781 61.971 432.23 67.8 444.782 C 74.346 458.876 78.916 471.545 81.775 483.516 C 84.22 493.761 85.793 505.102 86.584 518.185 C 87.29 529.843 87.322 541.759 87.352 553.281 C 87.362 556.948 87.372 560.741 87.404 564.464 C 87.591 586.251 88.593 608.49 90.469 632.452 C 91.184 641.585 92.484 653.422 96.227 663.976 C 98.099 669.257 100.483 673.915 103.314 677.82 C 106.474 682.183 110.317 685.788 114.738 688.536 C 125.125 694.997 138.133 696.321 150.643 696.79 C 172.493 697.609 194.686 696.31 216.597 692.925 C 243.79 688.724 270.622 681.193 296.348 670.54 C 321.806 659.998 345.879 646.527 367.897 630.502 C 373.4 626.498 378.777 622.383 385.158 617.438 C 397.059 608.215 408.845 599.396 422.161 592.873 C 426.597 590.7 431.393 588.684 436.826 586.71 C 444.893 583.776 453.328 581.322 461.484 578.949 C 465.092 577.899 468.821 576.814 472.467 575.702 C 491.282 569.969 507.409 563.611 521.771 556.263 C 529.841 552.134 537.404 547.643 544.252 542.912 C 551.576 537.853 558.322 532.354 564.301 526.57 C 576.812 514.482 586.51 500.05 592.349 484.835 C 595.38 476.936 597.322 468.931 598.12 461.044 C 598.955 452.774 598.532 444.633 596.859 436.846 C 595.296 429.573 592.623 422.327 590.037 415.32 C 587.705 408.999 585.292 402.461 583.726 395.968 C 581.97 388.689 581.482 382.217 582.233 376.183 C 583.06 369.509 585.493 362.721 589.671 355.43 C 593.315 349.068 597.785 343.101 602.826 336.516 C 603.198 336.031 603.569 335.547 603.94 335.062 C 608.972 328.501 614.175 321.718 618.134 314.737 C 620.262 310.982 621.878 307.464 623.071 303.979 C 624.408 300.072 625.186 296.305 625.449 292.465 C 626.087 283.36 623.77 274.174 618.369 264.382 C 612.395 253.561 603.346 243.185 594.596 233.151 C 586.258 223.592 577.638 213.706 571.749 203.501 C 568.579 198.007 566.428 192.857 565.173 187.757 C 563.764 182.033 563.51 176.516 564.397 170.89 C 564.96 167.325 565.985 163.845 567.531 160.252 C 568.907 157.054 570.667 153.842 572.91 150.432 C 577.073 144.103 582.289 138.071 587.334 132.238 C 589.907 129.262 592.568 126.185 595.035 123.129 C 598.215 119.188 600.986 115.081 603.268 110.924 C 605.778 106.354 607.633 101.832 608.782 97.483 C 610.049 92.687 610.45 88.114 609.973 83.892 C 609.448 79.254 607.855 74.993 605.239 71.229 C 597.924 60.722 584.543 55.921 565.472 56.961 C 557.599 57.388 548.708 58.832 539.047 61.252 C 535.439 62.156 531.762 63.091 528.206 63.996 C 526.505 64.428 524.802 64.862 523.098 65.294 C 509.847 68.655 495.704 72.169 481.287 74.959 C 465.64 77.987 451.722 79.736 438.737 80.307 C 430.077 80.678 422.215 80.443 414.704 79.591 C 407.576 78.784 400.762 77.416 393.872 75.409 C 387.638 73.594 381.169 71.199 374.094 68.084 C 368.264 65.518 361.827 62.389 353.223 57.94 C 336.935 49.575 323.204 43.002 310.013 37.255 C 293.838 30.21 278.938 24.626 264.46 20.185 C 249.883 15.713 236.774 12.718 224.384 11.026 C 214.525 9.68 204.687 9.079 195.138 9.246 C 185.514 9.412 175.792 10.36 166.24 12.065 C 155.036 14.078 144.825 17.225 135.889 21.417 C 125.641 26.224 117.11 32.403 110.533 39.783 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 154.315 705 C 150.761 705 147.208 704.948 143.651 704.843 C 130.522 704.456 116.865 703.172 105.93 696.458 C 86.401 684.467 82.107 660.134 80.482 637.914 C 78.82 615.194 78.046 592.123 78.18 569.343 C 78.203 565.449 78.253 561.481 78.3 557.644 C 78.588 534.514 78.886 510.596 73.628 487.711 C 67.491 461.003 53.894 436.067 40.744 411.953 C 39.329 409.358 37.915 406.766 36.512 404.173 C 17.061 368.248 -3.37 326.267 0.469 282.636 C 3.623 246.784 22.845 214.491 41.434 183.26 C 56 158.79 71.061 133.486 78.576 106.38 C 80.522 99.361 82.044 91.987 83.517 84.856 C 87.645 64.87 91.913 44.204 105.989 28.654 C 121.801 11.187 146.672 4.467 164.752 1.905 C 233.743 -7.868 300.053 21.656 355.816 51.83 C 382.781 66.421 403.418 76.187 436.254 76.188 C 438.245 76.188 440.278 76.152 442.363 76.079 C 473.847 74.978 504.898 67.096 534.928 59.473 C 538.006 58.692 541.081 57.912 544.151 57.139 C 558.618 53.501 571.252 52.023 581.696 52.754 C 595.573 53.721 605.63 58.591 611.587 67.229 C 616.749 74.714 617.88 83.811 614.949 94.267 C 612.574 102.738 607.394 112.031 600.363 120.434 C 597.821 123.471 595.087 126.529 592.442 129.485 C 581.827 141.355 570.85 153.627 568.407 168.744 C 564.61 192.237 582.161 212.041 599.135 231.193 C 615.755 249.946 632.942 269.338 630.822 292.509 C 629.33 308.816 618.335 322.479 607.701 335.693 C 597.322 348.59 586.59 361.926 584.702 377.705 C 583.07 391.338 588.336 404.616 593.428 417.457 C 596.238 424.543 599.144 431.871 600.908 439.248 C 608.191 469.694 595.879 504.823 568.775 530.925 C 547.084 551.814 516.647 567.648 475.724 579.331 C 472.046 580.381 468.284 581.402 464.645 582.389 C 451.244 586.025 437.386 589.786 424.802 595.794 C 409.548 603.077 396.2 613.638 383.29 623.849 C 379.105 627.16 374.778 630.583 370.451 633.843 C 338.928 657.591 303.056 675.859 263.831 688.138 C 228.049 699.34 191.257 705 154.315 705 Z M 192.131 0.489 C 183.086 0.489 173.978 1.092 164.821 2.389 C 146.82 4.94 122.066 11.624 106.353 28.982 C 92.366 44.432 88.112 65.032 83.997 84.955 C 82.523 92.093 80.998 99.475 79.048 106.51 C 71.516 133.68 56.437 159.012 41.855 183.51 C 23.294 214.694 4.101 246.939 0.957 282.678 C -2.87 326.174 17.525 368.077 36.942 403.94 C 38.346 406.531 39.759 409.123 41.174 411.718 C 54.34 435.862 67.954 460.827 74.106 487.6 C 79.377 510.542 79.079 534.49 78.79 557.65 C 78.743 561.486 78.693 565.452 78.67 569.345 C 78.536 592.113 79.31 615.171 80.97 637.877 C 82.587 659.974 86.846 684.164 106.187 696.039 C 117.023 702.694 130.604 703.968 143.666 704.353 C 184.125 705.543 224.512 699.933 263.684 687.67 C 302.855 675.408 338.677 657.166 370.156 633.451 C 374.478 630.194 378.803 626.773 382.986 623.464 C 395.916 613.235 409.287 602.657 424.589 595.35 C 437.215 589.323 451.094 585.557 464.516 581.915 C 468.153 580.927 471.914 579.907 475.589 578.858 C 516.432 567.198 546.802 551.402 568.434 530.57 C 595.412 504.588 607.673 469.639 600.431 439.359 C 598.674 432.017 595.775 424.706 592.971 417.636 C 587.856 404.738 582.568 391.402 584.214 377.645 C 586.119 361.727 596.896 348.335 607.318 335.384 C 617.906 322.228 628.855 308.623 630.333 292.463 C 632.433 269.503 615.319 250.192 598.767 231.516 C 581.718 212.279 564.089 192.387 567.923 168.664 C 570.388 153.406 581.414 141.078 592.076 129.157 C 594.719 126.203 597.45 123.149 599.987 120.117 C 606.974 111.767 612.119 102.539 614.476 94.133 C 617.367 83.824 616.258 74.865 611.183 67.505 C 605.315 58.996 595.381 54.197 581.661 53.24 C 571.263 52.517 558.687 53.987 544.269 57.613 C 541.2 58.385 538.126 59.165 535.047 59.946 C 504.993 67.575 473.915 75.464 442.38 76.566 C 405.789 77.852 384.254 67.773 355.583 52.259 C 307.297 26.133 251.098 0.489 192.131 0.489 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 40,
      padding: "100px 80px 100px 80px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(248,248,246)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 28px 8px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.060em",
      color: "rgb(14,120,233)",
      flexShrink: 0
    }
  }, "Loved by Students & Teachers")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 48,
      textAlign: "center",
      lineHeight: 1.2000000476837158,
      color: "rgb(15,23,42)",
      flexShrink: 0,
      alignSelf: "stretch",
      whiteSpace: "pre-wrap"
    }
  }, "Hear from those who \nmade the switch"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 838,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 18,
      textAlign: "center",
      lineHeight: 1.7999999523162842,
      color: "rgb(105,105,132)",
      flexShrink: 0
    }
  }, "Discover how we\u2019ve helped businesses build scalable software, deliver projects on time, and achieve measurable growth through innovative digital solutions.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -147,
      top: -284,
      width: 660,
      height: 660,
      borderRadius: "50%",
      background: "radial-gradient(242.792px 242.792px at 50.00% 50.00%, rgba(0,136,255,0.2) 0.00%, rgba(0,136,255,0) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1319,
      top: -215,
      width: 660,
      height: 660,
      borderRadius: "50%",
      background: "radial-gradient(242.792px 242.792px at 50.00% 50.00%, rgba(0,136,255,0.2) 0.00%, rgba(0,136,255,0) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 332,
      top: -213,
      width: 688,
      height: 688,
      borderRadius: "50%",
      background: "radial-gradient(253.092px 253.092px at 50.00% 50.00%, rgba(250,130,25,0.18) 0.00%, rgba(250,130,25,0) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      transform: "matrix(-1,0,0,1,0,0)",
      width: 24,
      height: 24,
      opacity: 0.8,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Vector"), /*#__PURE__*/React.createElement("svg", {
    width: 6.750,
    height: 13.500,
    viewBox: "0 0 6.750 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 5.5,
      width: 6.75,
      height: 13.5,
      color: "rgb(26,36,52)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 6.75 6.75 L 7.457 7.457 C 7.848 7.067 7.848 6.433 7.457 6.043 L 6.75 6.75 Z M -0.707 12.793 C -1.098 13.183 -1.098 13.817 -0.707 14.207 C -0.317 14.598 0.317 14.598 0.707 14.207 L 0 13.5 L -0.707 12.793 Z M 0 0 L -0.707 0.707 L 6.043 7.457 L 6.75 6.75 L 7.457 6.043 L 0.707 -0.707 L 0 0 Z M 6.75 6.75 L 6.043 6.043 L -0.707 12.793 L 0 13.5 L 0.707 14.207 L 7.457 7.457 L 6.75 6.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 259,
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(233,236,244)",
      display: "flex",
      flexDirection: "column",
      gap: 30,
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 91,
      height: 91,
      borderRadius: 100,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.020em",
      color: "rgb(26,36,52)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Avril Song"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.020em",
      color: "rgb(26,36,52)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Web Development Student")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "relative",
      width: 24,
      height: 24,
      borderRadius: 1,
      flexShrink: 0,
      color: "rgb(255,179,31)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.049 2.927 C 11.348 2.006 12.652 2.006 12.951 2.927 L 14.47 7.601 C 14.604 8.013 14.987 8.292 15.421 8.292 L 20.335 8.292 C 21.304 8.292 21.706 9.531 20.923 10.101 L 16.947 12.989 C 16.597 13.244 16.45 13.695 16.584 14.107 L 18.102 18.781 C 18.402 19.702 17.347 20.469 16.564 19.899 L 12.588 17.011 C 12.237 16.756 11.763 16.756 11.412 17.011 L 7.436 19.899 C 6.653 20.469 5.598 19.702 5.898 18.781 L 7.416 14.107 C 7.55 13.695 7.403 13.244 7.053 12.989 L 3.077 10.101 C 2.294 9.531 2.696 8.292 3.665 8.292 L 8.579 8.292 C 9.013 8.292 9.396 8.013 9.53 7.601 L 11.049 2.927 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.020em",
      color: "rgb(26,36,52)",
      flexShrink: 0
    }
  }, "4.8")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Empower yourself with the knowledge and exams gained through online education! Empower yourself with the knowledge and exams gained through online education!")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 259,
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(233,236,244), 8px 8px 16px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 30,
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-5cb99724f776a13b-87b93fc1",
    style: {
      position: "relative",
      width: 91,
      height: 91,
      borderRadius: 100,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.020em",
      color: "rgb(26,36,52)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Michael Wong"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.020em",
      color: "rgb(26,36,52)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "UI/UX Design Student")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "relative",
      width: 24,
      height: 24,
      borderRadius: 1,
      flexShrink: 0,
      color: "rgb(255,179,31)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.049 2.927 C 11.348 2.006 12.652 2.006 12.951 2.927 L 14.47 7.601 C 14.604 8.013 14.987 8.292 15.421 8.292 L 20.335 8.292 C 21.304 8.292 21.706 9.531 20.923 10.101 L 16.947 12.989 C 16.597 13.244 16.45 13.695 16.584 14.107 L 18.102 18.781 C 18.402 19.702 17.347 20.469 16.564 19.899 L 12.588 17.011 C 12.237 16.756 11.763 16.756 11.412 17.011 L 7.436 19.899 C 6.653 20.469 5.598 19.702 5.898 18.781 L 7.416 14.107 C 7.55 13.695 7.403 13.244 7.053 12.989 L 3.077 10.101 C 2.294 9.531 2.696 8.292 3.665 8.292 L 8.579 8.292 C 9.013 8.292 9.396 8.013 9.53 7.601 L 11.049 2.927 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.020em",
      color: "rgb(26,36,52)",
      flexShrink: 0
    }
  }, "4.9")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Empower yourself with the knowledge and exams gained through online education! Empower yourself with the knowledge and exams gained through online education!")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 259,
      borderRadius: 20,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(233,236,244)",
      display: "flex",
      flexDirection: "column",
      gap: 30,
      padding: "24px 24px 24px 24px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 16,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 91,
      height: 91,
      borderRadius: 100,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.020em",
      color: "rgb(26,36,52)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Jeane Wood"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.020em",
      color: "rgb(26,36,52)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Data Science Student")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      alignItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      position: "relative",
      width: 24,
      height: 24,
      borderRadius: 1,
      flexShrink: 0,
      color: "rgb(255,179,31)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.049 2.927 C 11.348 2.006 12.652 2.006 12.951 2.927 L 14.47 7.601 C 14.604 8.013 14.987 8.292 15.421 8.292 L 20.335 8.292 C 21.304 8.292 21.706 9.531 20.923 10.101 L 16.947 12.989 C 16.597 13.244 16.45 13.695 16.584 14.107 L 18.102 18.781 C 18.402 19.702 17.347 20.469 16.564 19.899 L 12.588 17.011 C 12.237 16.756 11.763 16.756 11.412 17.011 L 7.436 19.899 C 6.653 20.469 5.598 19.702 5.898 18.781 L 7.416 14.107 C 7.55 13.695 7.403 13.244 7.053 12.989 L 3.077 10.101 C 2.294 9.531 2.696 8.292 3.665 8.292 L 8.579 8.292 C 9.013 8.292 9.396 8.013 9.53 7.601 L 11.049 2.927 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      opacity: 0.7,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 20,
      lineHeight: 1.2000000476837158,
      letterSpacing: "0.020em",
      color: "rgb(26,36,52)",
      flexShrink: 0
    }
  }, "5.0")))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Empower yourself with the knowledge and exams gained through online education! Empower yourself with the knowledge and exams gained through online education!")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      opacity: 0.8,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 24,
      height: 24,
      border: "1px dashed currentColor",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      fontSize: 10,
      opacity: 0.45
    }
  }, "Vector"), /*#__PURE__*/React.createElement("svg", {
    width: 6.750,
    height: 13.500,
    viewBox: "0 0 6.750 13.500",
    fill: "none",
    style: {
      position: "absolute",
      left: 9,
      top: 5.5,
      width: 6.75,
      height: 13.5,
      color: "rgb(26,36,52)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.707 -0.707 C 0.317 -1.098 -0.317 -1.098 -0.707 -0.707 C -1.098 -0.317 -1.098 0.317 -0.707 0.707 L 0 0 L 0.707 -0.707 Z M 6.75 6.75 L 7.457 7.457 C 7.848 7.067 7.848 6.433 7.457 6.043 L 6.75 6.75 Z M -0.707 12.793 C -1.098 13.183 -1.098 13.817 -0.707 14.207 C -0.317 14.598 0.317 14.598 0.707 14.207 L 0 13.5 L -0.707 12.793 Z M 0 0 L -0.707 0.707 L 6.043 7.457 L 6.75 6.75 L 7.457 6.043 L 0.707 -0.707 L 0 0 Z M 6.75 6.75 L 6.043 6.043 L -0.707 12.793 L 0 13.5 L 0.707 14.207 L 7.457 7.457 L 6.75 6.75 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1730,
      top: 735,
      width: 305,
      height: 305,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 30px rgb(255,238,198)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 66,
      top: -87,
      width: 219,
      height: 219,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 20px rgba(198,222,255,0.6)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -61,
      top: 1707,
      width: 305,
      height: 305,
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 20px rgb(198,222,255)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 1132,
      borderRadius: 23,
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "100px 40px 100px 40px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-7bbe6cee201da1fa-3e15b244",
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 48,
      boxShadow: "0px 131px 37px 0px rgba(0,0,0,0), 0px 84px 34px 0px rgba(0,0,0,0.02), 0px 47px 28px 0px rgba(0,0,0,0.05), 0px 21px 21px 0px rgba(0,0,0,0.09), 0px 5px 12px 0px rgba(0,0,0,0.11)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "40px 40px 40px 40px",
      justifyContent: "flex-end",
      alignItems: "center",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 784,
      height: 848,
      overflow: "hidden",
      borderRadius: 24,
      backgroundColor: "rgba(248,248,246,0.9)",
      backdropFilter: "blur(4px)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240), 0px 53px 32px 0px rgba(0,0,0,0.02), 0px 23px 23px 0px rgba(0,0,0,0.04), 0px 6px 13px 0px rgba(0,0,0,0.04)",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      padding: "60px 40px 60px 40px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 580,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 48,
      lineHeight: "56px",
      letterSpacing: "-0.010em",
      color: "rgb(15,23,42)",
      flexShrink: 0,
      whiteSpace: "pre-wrap",
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, "Let’s "), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 48
    }
  }, "get started!\r")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 18,
      lineHeight: "100%",
      color: "rgb(105,105,132)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Are you looking for a cutting-edge custom software solution? How about a user-friendly and feature-packed mobile application to reach your audience? Microlent Systems can help")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 32,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "26px",
      color: "rgb(69,71,75)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Name"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(100,116,139)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, "Name")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "26px",
      color: "rgb(69,71,75)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Email"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(100,116,139)",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, "you@company.com"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "26px",
      color: "rgb(69,71,75)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Phone number"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 40,
      padding: "16px 16px 16px 16px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "row",
      gap: 18,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "26px",
      color: "rgb(15,23,42)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "US"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 5,
    viewBox: "0 0 10 5",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 7.5,
      width: 10,
      height: 5,
      color: "rgb(167,173,190)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.589 -0.589 C 0.264 -0.915 -0.264 -0.915 -0.589 -0.589 C -0.915 -0.264 -0.915 0.264 -0.589 0.589 L 0 0 L 0.589 -0.589 Z M 5 5 L 4.411 5.589 C 4.736 5.915 5.264 5.915 5.589 5.589 L 5 5 Z M 10.589 0.589 C 10.915 0.264 10.915 -0.264 10.589 -0.589 C 10.264 -0.915 9.736 -0.915 9.411 -0.589 L 10 0 L 10.589 0.589 Z M 0 0 L -0.589 0.589 L 4.411 5.589 L 5 5 L 5.589 4.411 L 0.589 -0.589 L 0 0 Z M 5 5 L 5.589 5.589 L 10.589 0.589 L 10 0 L 9.411 -0.589 L 4.411 4.411 L 5 5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(100,116,139)",
      flexGrow: 1
    }
  }, "+1 (555) 000-0000"), /*#__PURE__*/React.createElement("svg", {
    width: 54,
    height: 1,
    viewBox: "0 -0.500 54 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      transform: "matrix(0,1,-1,0,97,1)",
      transformOrigin: "0 0",
      width: 54,
      height: 1,
      color: "rgb(246,246,246)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 54 0 L 54 -0.5 L 54 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 154,
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "26px",
      color: "rgb(69,71,75)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Message"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 10,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(226,232,240), 0px 1px 2px 0px rgba(16,24,40,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "100%",
      color: "rgb(100,116,139)",
      flexGrow: 1
    }
  }, "Message"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(14,120,233)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "16px 40px 16px 40px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "Submit"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 17,
      height: 17,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.150,
    height: 16.150,
    viewBox: "0 0 16.150 16.150",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.425,
      top: 0.85,
      width: 16.15,
      height: 16.15,
      color: "rgb(167,173,190)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.756 7.702 L 5.256 8.202 C 6.247 8.532 6.742 8.698 7.097 9.053 C 7.453 9.409 7.619 9.904 7.949 10.894 L 8.449 12.394 C 9.283 14.899 9.7 16.15 10.467 16.15 C 11.233 16.15 11.651 14.899 12.485 12.394 L 15.505 3.337 C 16.092 1.575 16.385 0.694 15.921 0.229 C 15.456 -0.235 14.575 0.058 12.814 0.644 L 3.755 3.666 C 1.253 4.499 0 4.916 0 5.684 C 0 6.451 1.252 6.868 3.756 7.702 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.150,
    height: 16.150,
    viewBox: "0 0 16.150 16.150",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.425,
      top: 0.85,
      width: 16.15,
      height: 16.15,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.756 7.702 L 5.256 8.202 C 6.247 8.532 6.742 8.698 7.097 9.053 C 7.453 9.409 7.619 9.904 7.949 10.894 L 8.449 12.394 C 9.283 14.899 9.7 16.15 10.467 16.15 C 11.233 16.15 11.651 14.899 12.485 12.394 L 15.505 3.337 C 16.092 1.575 16.385 0.694 15.921 0.229 C 15.456 -0.235 14.575 0.058 12.814 0.644 L 3.755 3.666 C 1.253 4.499 0 4.916 0 5.684 C 0 6.451 1.252 6.868 3.756 7.702 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.950,
    height: 5.950,
    viewBox: "0 0 5.950 5.950",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.275,
      top: 10.2,
      width: 5.95,
      height: 5.95,
      opacity: 0.5,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.532 0.764 L 2.398 0.053 C 2.248 0.003 2.089 -0.012 1.933 0.009 C 1.777 0.03 1.628 0.086 1.497 0.173 L 0.369 0.925 C 0.235 1.014 0.131 1.139 0.067 1.287 C 0.004 1.434 -0.015 1.597 0.012 1.755 C 0.04 1.913 0.112 2.06 0.222 2.177 C 0.331 2.295 0.472 2.378 0.628 2.417 L 2.651 2.922 C 2.742 2.945 2.825 2.992 2.892 3.058 C 2.958 3.125 3.005 3.208 3.028 3.299 L 3.533 5.322 C 3.572 5.478 3.655 5.619 3.773 5.728 C 3.89 5.838 4.037 5.91 4.195 5.938 C 4.353 5.965 4.516 5.946 4.663 5.883 C 4.811 5.819 4.936 5.715 5.025 5.581 L 5.777 4.453 C 5.864 4.322 5.92 4.173 5.941 4.017 C 5.962 3.861 5.947 3.702 5.897 3.552 L 5.186 1.418 C 5.135 1.266 5.049 1.128 4.936 1.014 C 4.822 0.901 4.684 0.815 4.532 0.764 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 24,
      display: "flex",
      flexDirection: "column",
      gap: 40,
      padding: "100px 80px 100px 80px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 972,
      top: 100,
      width: 1078,
      height: 1078,
      borderRadius: "50%",
      background: "radial-gradient(396.560px 396.560px at 50.00% 50.00%, rgba(250,130,25,0.24) 0.00%, rgba(250,130,25,0) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 20,
      backgroundColor: "rgb(248,248,246)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "8px 28px 8px 28px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 12,
      lineHeight: "16px",
      letterSpacing: "0.060em",
      color: "rgb(14,120,233)",
      flexShrink: 0
    }
  }, "FAQ")), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 40,
      textAlign: "center",
      lineHeight: "56px",
      letterSpacing: "-0.010em",
      color: "rgb(15,23,42)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Frequently Asked\xA0Questions"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 40,
      justifyContent: "center",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 1260,
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(249,249,249)",
      borderTop: "1px solid rgb(226,232,240)",
      borderRight: "1px solid rgb(226,232,240)",
      borderBottom: "1px solid rgb(226,232,240)",
      borderLeft: "1px solid rgb(226,232,240)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 24px 12px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(15,23,42)",
      flexGrow: 1
    }
  }, "What is TopSyllabus.ai and how does it work?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 2,
    viewBox: "0 0 14 2",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 10.998,
      width: 14,
      height: 2,
      color: "rgb(0,136,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13 2 L 1 2 C 0.735 2 0.48 1.895 0.293 1.707 C 0.105 1.52 0 1.265 0 1 C 0 0.735 0.105 0.48 0.293 0.293 C 0.48 0.105 0.735 0 1 0 L 13 0 C 13.265 0 13.52 0.105 13.707 0.293 C 13.895 0.48 14 0.735 14 1 C 14 1.265 13.895 1.52 13.707 1.707 C 13.52 1.895 13.265 2 13 2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 3,
      overflow: "hidden",
      lineHeight: "22px",
      color: "rgb(100,116,139)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Artificial intelligence enables more accurate forecasting, automated reporting, and data-driven decision-making that would be impractical to achieve manually. Microlent integrates AI tooling where it meaningfully improves outcomes for our clients' financial operations.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(249,249,249)",
      borderTop: "1px solid rgb(226,232,240)",
      borderRight: "1px solid rgb(226,232,240)",
      borderBottom: "1px solid rgb(226,232,240)",
      borderLeft: "1px solid rgb(226,232,240)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 24px 12px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(15,23,42)",
      flexGrow: 1
    }
  }, "Which boards and classes does TopSyllabus.ai support?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4.998,
      width: 14,
      height: 14,
      color: "rgb(0,136,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 8 L 8 8 L 8 14 L 6 14 L 6 8 L 0 8 L 0 6 L 6 6 L 6 0 L 8 0 L 8 6 L 14 6 L 14 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(249,249,249)",
      borderTop: "1px solid rgb(226,232,240)",
      borderRight: "1px solid rgb(226,232,240)",
      borderBottom: "1px solid rgb(226,232,240)",
      borderLeft: "1px solid rgb(226,232,240)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 24px 12px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(15,23,42)",
      flexGrow: 1
    }
  }, "How is this different from other online learning platforms?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4.998,
      width: 14,
      height: 14,
      color: "rgb(0,136,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 8 L 8 8 L 8 14 L 6 14 L 6 8 L 0 8 L 0 6 L 6 6 L 6 0 L 8 0 L 8 6 L 14 6 L 14 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(249,249,249)",
      borderTop: "1px solid rgb(226,232,240)",
      borderRight: "1px solid rgb(226,232,240)",
      borderBottom: "1px solid rgb(226,232,240)",
      borderLeft: "1px solid rgb(226,232,240)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 24px 12px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(15,23,42)",
      flexGrow: 1
    }
  }, "How much time per day does a student need to spend?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4.998,
      width: 14,
      height: 14,
      color: "rgb(0,136,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 8 L 8 8 L 8 14 L 6 14 L 6 8 L 0 8 L 0 6 L 6 6 L 6 0 L 8 0 L 8 6 L 14 6 L 14 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(249,249,249)",
      borderTop: "1px solid rgb(226,232,240)",
      borderRight: "1px solid rgb(226,232,240)",
      borderBottom: "1px solid rgb(226,232,240)",
      borderLeft: "1px solid rgb(226,232,240)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 24px 12px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(15,23,42)",
      flexGrow: 1
    }
  }, "Can parents and teachers also use the platform?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4.998,
      width: 14,
      height: 14,
      color: "rgb(0,136,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 8 L 8 8 L 8 14 L 6 14 L 6 8 L 0 8 L 0 6 L 6 6 L 6 0 L 8 0 L 8 6 L 14 6 L 14 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 12,
      backgroundColor: "rgb(249,249,249)",
      borderTop: "1px solid rgb(226,232,240)",
      borderRight: "1px solid rgb(226,232,240)",
      borderBottom: "1px solid rgb(226,232,240)",
      borderLeft: "1px solid rgb(226,232,240)",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      padding: "12px 24px 12px 24px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "8px 0px 8px 0px",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 22,
      lineHeight: "30px",
      letterSpacing: "-0.003em",
      color: "rgb(15,23,42)",
      flexGrow: 1
    }
  }, "Is there a free trial available?"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 14,
    viewBox: "0 0 14 14",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 4.998,
      width: 14,
      height: 14,
      color: "rgb(0,136,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 14 8 L 8 8 L 8 14 L 6 14 L 6 8 L 0 8 L 0 6 L 6 6 L 6 0 L 8 0 L 8 6 L 14 6 L 14 8 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      alignItems: "flex-start",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 460 550",
    fill: "none",
    style: {
      position: "relative",
      borderRadius: 12,
      display: "flex",
      flexDirection: "column",
      gap: 8,
      padding: "15px 30px 15px 30px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexGrow: 1,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 19.2 C 0 12.479 0 9.119 1.308 6.552 C 2.458 4.294 4.294 2.458 6.552 1.308 C 9.119 0 12.479 0 19.2 0 L 440.8 0 C 447.521 0 450.881 0 453.448 1.308 C 455.706 2.458 457.542 4.294 458.692 6.552 C 460 9.119 460 12.479 460 19.2 L 460 530.8 C 460 537.521 460 540.881 458.692 543.448 C 457.542 545.706 455.706 547.542 453.448 548.692 C 450.881 550 447.521 550 440.8 550 L 19.2 550 C 12.479 550 9.119 550 6.552 548.692 C 4.294 547.542 2.458 545.706 1.308 543.448 C 0 540.881 0 537.521 0 530.8 L 0 19.2 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "48px 48px 0px 0px",
      backgroundColor: "rgba(27,61,139,0.7)",
      borderTop: "1px solid rgb(226,232,240)",
      borderRight: "1px solid rgb(226,232,240)",
      borderBottom: "1px solid rgb(226,232,240)",
      borderLeft: "1px solid rgb(226,232,240)",
      backdropFilter: "blur(4px)",
      display: "flex",
      flexDirection: "column",
      gap: 40,
      padding: "100px 66px 100px 66px",
      alignItems: "flex-start",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -359,
      top: -323,
      width: 900,
      height: 900,
      borderRadius: "50%",
      background: "radial-gradient(331.079px 331.079px at 50.00% 50.00%, rgba(255,255,255,0.42) 0.00%, rgba(255,255,255,0) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1705,
      top: -146,
      width: 478,
      height: 478,
      borderRadius: "50%",
      background: "radial-gradient(175.840px 175.840px at 50.00% 50.00%, rgba(255,255,255,0.42) 0.00%, rgba(255,255,255,0) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: -146,
      width: 1294,
      height: 1294,
      borderRadius: "50%",
      background: "radial-gradient(476.019px 476.019px at 50.00% 50.00%, rgba(0,136,255,0.4) 0.00%, rgba(0,136,255,0) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1037,
      top: -534,
      width: 1020,
      height: 1020,
      borderRadius: "50%",
      background: "radial-gradient(375.223px 375.223px at 50.00% 50.00%, rgba(0,136,255,0.4) 0.00%, rgba(0,136,255,0) 100.00%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 40,
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 12,
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-asset-560adf04f26cdaf6-819cbb83",
    style: {
      position: "relative",
      width: 50,
      height: 50,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 191,
      height: 50,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fig-mask-560adf04f26cdaf6-71202813",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 191,
      height: 50
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1,
      top: 0,
      width: 190,
      height: 50,
      backgroundColor: "rgb(255,255,255)"
    }
  })))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 708,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 700,
      fontSize: 40,
      lineHeight: "56px",
      letterSpacing: "-0.010em",
      color: "var(--backgrounds-primary)",
      flexShrink: 0
    }
  }, "Empowering students with AI-driven exam preparation"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 645,
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "26px",
      color: "rgb(249,249,249)",
      flexShrink: 0
    }
  }, "Lorem Ipsum\xA0is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 313,
      display: "flex",
      flexDirection: "column",
      gap: 40,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      lineHeight: "26px",
      color: "var(--backgrounds-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Support"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(249,249,249)",
      flexShrink: 0
    }
  }, "Benefits"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(249,249,249)",
      flexShrink: 0
    }
  }, "How it works"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(249,249,249)",
      flexShrink: 0
    }
  }, "Features"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(249,249,249)",
      flexShrink: 0
    }
  }, "Pricing"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(249,249,249)",
      flexShrink: 0
    }
  }, "FAQ")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 313,
      display: "flex",
      flexDirection: "column",
      gap: 40,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      alignItems: "flex-start",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 25,
      lineHeight: "26px",
      color: "var(--backgrounds-primary)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Legal"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 20,
      justifyContent: "center",
      alignItems: "flex-start",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(249,249,249)",
      flexShrink: 0
    }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(249,249,249)",
      flexShrink: 0
    }
  }, "Terms & Conditions"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(249,249,249)",
      flexShrink: 0
    }
  }, "About Us"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(249,249,249)",
      flexShrink: 0
    }
  }, "Contact Us"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 14,
      lineHeight: "22px",
      color: "rgb(249,249,249)",
      flexShrink: 0
    }
  }, " Disclaimer / Support"))))), /*#__PURE__*/React.createElement("svg", {
    height: 1,
    viewBox: "0 -0.500 1788 1",
    fill: "none",
    style: {
      position: "relative",
      height: 1,
      flexShrink: 0,
      alignSelf: "stretch",
      color: "rgb(148,163,184)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 L 0 0 L 1788 0 L 1788 -0.5 L 1788 -1 L 0 -1 L 0 -0.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 12,
      justifyContent: "center",
      alignItems: "center",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      justifyContent: "center",
      alignItems: "flex-start",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Manrope, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontSize: 16,
      lineHeight: "26px",
      color: "rgb(249,249,249)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "\xA9 2026 TopSyllabus.ai \u2014 All rights reserved."))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 220,
      display: "flex",
      flexDirection: "row",
      gap: 20,
      alignItems: "flex-start",
      flexWrap: "wrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.500,
    height: 18,
    viewBox: "0 0 10.500 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 2,
      width: 10.5,
      height: 18,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6 7 L 10.5 7 L 10 9 L 6 9 L 6 18 L 4 18 L 4 9 L 0 9 L 0 7 L 4 7 L 4 5.128 C 4 3.345 4.186 2.698 4.534 2.046 C 4.875 1.402 5.402 0.875 6.046 0.534 C 6.698 0.186 7.345 0 9.128 0 C 9.651 0 10.108 0.05 10.5 0.15 L 10.5 2 L 9.128 2 C 7.804 2 7.401 2.078 6.989 2.298 C 6.693 2.453 6.452 2.694 6.298 2.99 C 6.078 3.401 6 3.804 6 5.128 L 6 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 18,
      height: 18,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 18,
      height: 18,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.436 2.184 L -0.232 1.843 L -0.232 1.844 L 0.436 2.184 Z M 2.184 0.436 L 1.844 -0.232 L 1.843 -0.232 L 2.184 0.436 Z M 15.816 0.436 L 16.156 -0.232 L 16.156 -0.232 L 15.816 0.436 Z M 17.564 2.184 L 18.232 1.844 L 18.232 1.843 L 17.564 2.184 Z M 17.564 15.816 L 18.232 16.156 L 18.232 16.156 L 17.564 15.816 Z M 15.816 17.564 L 16.156 18.232 L 16.156 18.232 L 15.816 17.564 Z M 2.184 17.564 L 1.843 18.232 L 1.844 18.232 L 2.184 17.564 Z M 0.436 15.816 L -0.232 16.156 L -0.232 16.156 L 0.436 15.816 Z M 5.75 4.625 C 5.75 4.211 5.414 3.875 5 3.875 C 4.586 3.875 4.25 4.211 4.25 4.625 L 5 4.625 L 5.75 4.625 Z M 4.25 5.125 C 4.25 5.539 4.586 5.875 5 5.875 C 5.414 5.875 5.75 5.539 5.75 5.125 L 5 5.125 L 4.25 5.125 Z M 0 6.4 L 0.75 6.4 C 0.75 5.268 0.751 4.463 0.802 3.834 C 0.853 3.213 0.949 2.829 1.104 2.524 L 0.436 2.184 L -0.232 1.844 C -0.513 2.395 -0.635 2.999 -0.693 3.712 C -0.751 4.417 -0.75 5.292 -0.75 6.4 L 0 6.4 Z M 0.436 2.184 L 1.104 2.525 C 1.416 1.913 1.913 1.416 2.525 1.104 L 2.184 0.436 L 1.843 -0.232 C 0.95 0.223 0.223 0.95 -0.232 1.843 L 0.436 2.184 Z M 2.184 0.436 L 2.524 1.104 C 2.829 0.949 3.213 0.853 3.834 0.802 C 4.463 0.751 5.268 0.75 6.4 0.75 L 6.4 0 L 6.4 -0.75 C 5.292 -0.75 4.417 -0.751 3.712 -0.693 C 2.999 -0.635 2.395 -0.513 1.844 -0.232 L 2.184 0.436 Z M 6.4 0 L 6.4 0.75 L 11.6 0.75 L 11.6 0 L 11.6 -0.75 L 6.4 -0.75 L 6.4 0 Z M 11.6 0 L 11.6 0.75 C 12.732 0.75 13.537 0.751 14.166 0.802 C 14.787 0.853 15.171 0.949 15.476 1.104 L 15.816 0.436 L 16.156 -0.232 C 15.605 -0.513 15.001 -0.635 14.288 -0.693 C 13.583 -0.751 12.708 -0.75 11.6 -0.75 L 11.6 0 Z M 15.816 0.436 L 15.475 1.104 C 16.087 1.416 16.584 1.913 16.896 2.525 L 17.564 2.184 L 18.232 1.843 C 17.777 0.95 17.05 0.223 16.156 -0.232 L 15.816 0.436 Z M 17.564 2.184 L 16.896 2.524 C 17.051 2.829 17.147 3.213 17.198 3.834 C 17.249 4.463 17.25 5.268 17.25 6.4 L 18 6.4 L 18.75 6.4 C 18.75 5.292 18.751 4.417 18.693 3.712 C 18.635 2.999 18.513 2.395 18.232 1.844 L 17.564 2.184 Z M 18 6.4 L 17.25 6.4 L 17.25 11.6 L 18 11.6 L 18.75 11.6 L 18.75 6.4 L 18 6.4 Z M 18 11.6 L 17.25 11.6 C 17.25 12.732 17.249 13.537 17.198 14.166 C 17.147 14.787 17.051 15.171 16.896 15.476 L 17.564 15.816 L 18.232 16.156 C 18.513 15.605 18.635 15.001 18.693 14.288 C 18.751 13.583 18.75 12.708 18.75 11.6 L 18 11.6 Z M 17.564 15.816 L 16.896 15.475 C 16.584 16.087 16.087 16.584 15.475 16.896 L 15.816 17.564 L 16.156 18.232 C 17.05 17.777 17.777 17.05 18.232 16.156 L 17.564 15.816 Z M 15.816 17.564 L 15.476 16.896 C 15.171 17.051 14.787 17.147 14.166 17.198 C 13.537 17.249 12.732 17.25 11.6 17.25 L 11.6 18 L 11.6 18.75 C 12.708 18.75 13.583 18.751 14.288 18.693 C 15.001 18.635 15.605 18.513 16.156 18.232 L 15.816 17.564 Z M 11.6 18 L 11.6 17.25 L 6.4 17.25 L 6.4 18 L 6.4 18.75 L 11.6 18.75 L 11.6 18 Z M 6.4 18 L 6.4 17.25 C 5.268 17.25 4.463 17.249 3.834 17.198 C 3.213 17.147 2.829 17.051 2.524 16.896 L 2.184 17.564 L 1.844 18.232 C 2.395 18.513 2.999 18.635 3.712 18.693 C 4.417 18.751 5.292 18.75 6.4 18.75 L 6.4 18 Z M 2.184 17.564 L 2.525 16.896 C 1.913 16.584 1.416 16.087 1.104 15.475 L 0.436 15.816 L -0.232 16.156 C 0.223 17.05 0.95 17.777 1.843 18.232 L 2.184 17.564 Z M 0.436 15.816 L 1.104 15.476 C 0.949 15.171 0.853 14.787 0.802 14.166 C 0.751 13.537 0.75 12.732 0.75 11.6 L 0 11.6 L -0.75 11.6 C -0.75 12.708 -0.751 13.583 -0.693 14.288 C -0.635 15.001 -0.513 15.605 -0.232 16.156 L 0.436 15.816 Z M 0 11.6 L 0.75 11.6 L 0.75 6.4 L 0 6.4 L -0.75 6.4 L -0.75 11.6 L 0 11.6 Z M 5 4.625 L 4.25 4.625 L 4.25 5.125 L 5 5.125 L 5.75 5.125 L 5.75 4.625 L 5 4.625 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 5.625,
    viewBox: "0 0 8 5.625",
    fill: "none",
    style: {
      position: "absolute",
      left: 5,
      top: 7.75,
      width: 8,
      height: 5.625,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.75 5.625 C -0.75 6.039 -0.414 6.375 0 6.375 C 0.414 6.375 0.75 6.039 0.75 5.625 L 0 5.625 L -0.75 5.625 Z M 0.75 0 C 0.75 -0.414 0.414 -0.75 0 -0.75 C -0.414 -0.75 -0.75 -0.414 -0.75 0 L 0 0 L 0.75 0 Z M 3.25 5.625 C 3.25 6.039 3.586 6.375 4 6.375 C 4.414 6.375 4.75 6.039 4.75 5.625 L 4 5.625 L 3.25 5.625 Z M 4.75 0 C 4.75 -0.414 4.414 -0.75 4 -0.75 C 3.586 -0.75 3.25 -0.414 3.25 0 L 4 0 L 4.75 0 Z M 7.25 5.625 C 7.25 6.039 7.586 6.375 8 6.375 C 8.414 6.375 8.75 6.039 8.75 5.625 L 8 5.625 L 7.25 5.625 Z M 0 5.625 L 0.75 5.625 L 0.75 0 L 0 0 L -0.75 0 L -0.75 5.625 L 0 5.625 Z M 4 5.625 L 4.75 5.625 L 4.75 2.75 L 4 2.75 L 3.25 2.75 L 3.25 5.625 L 4 5.625 Z M 4 2.75 L 4.75 2.75 L 4.75 0 L 4 0 L 3.25 0 L 3.25 2.75 L 4 2.75 Z M 4 2.75 L 4.75 2.75 C 4.75 2.373 4.918 2.084 5.208 1.867 C 5.514 1.638 5.951 1.5 6.4 1.5 L 6.4 0.75 L 6.4 0 C 5.671 0 4.908 0.218 4.309 0.667 C 3.693 1.128 3.25 1.839 3.25 2.75 L 4 2.75 Z M 6.4 0.75 L 6.4 1.5 C 6.693 1.5 6.835 1.562 6.905 1.609 C 6.971 1.654 7.038 1.73 7.098 1.889 C 7.239 2.264 7.25 2.825 7.25 3.625 L 8 3.625 L 8.75 3.625 C 8.75 2.925 8.761 2.048 8.502 1.361 C 8.362 0.988 8.129 0.627 7.745 0.367 C 7.365 0.11 6.907 0 6.4 0 L 6.4 0.75 Z M 8 3.625 L 7.25 3.625 L 7.25 5.625 L 8 5.625 L 8.75 5.625 L 8.75 3.625 L 8 3.625 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 24,
      height: 24,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 2,
      width: 20,
      height: 20,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.8 0 L 14.2 0 C 17.4 0 20 2.6 20 5.8 L 20 14.2 C 20 15.738 19.389 17.214 18.301 18.301 C 17.214 19.389 15.738 20 14.2 20 L 5.8 20 C 2.6 20 0 17.4 0 14.2 L 0 5.8 C 0 4.262 0.611 2.786 1.699 1.699 C 2.786 0.611 4.262 0 5.8 0 Z M 5.6 2 C 4.645 2 3.73 2.379 3.054 3.054 C 2.379 3.73 2 4.645 2 5.6 L 2 14.4 C 2 16.39 3.61 18 5.6 18 L 14.4 18 C 15.355 18 16.27 17.621 16.946 16.946 C 17.621 16.27 18 15.355 18 14.4 L 18 5.6 C 18 3.61 16.39 2 14.4 2 L 5.6 2 Z M 15.25 3.5 C 15.582 3.5 15.899 3.632 16.134 3.866 C 16.368 4.101 16.5 4.418 16.5 4.75 C 16.5 5.082 16.368 5.399 16.134 5.634 C 15.899 5.868 15.582 6 15.25 6 C 14.918 6 14.601 5.868 14.366 5.634 C 14.132 5.399 14 5.082 14 4.75 C 14 4.418 14.132 4.101 14.366 3.866 C 14.601 3.632 14.918 3.5 15.25 3.5 Z M 10 5 C 11.326 5 12.598 5.527 13.536 6.464 C 14.473 7.402 15 8.674 15 10 C 15 11.326 14.473 12.598 13.536 13.536 C 12.598 14.473 11.326 15 10 15 C 8.674 15 7.402 14.473 6.464 13.536 C 5.527 12.598 5 11.326 5 10 C 5 8.674 5.527 7.402 6.464 6.464 C 7.402 5.527 8.674 5 10 5 Z M 10 7 C 9.204 7 8.441 7.316 7.879 7.879 C 7.316 8.441 7 9.204 7 10 C 7 10.796 7.316 11.559 7.879 12.121 C 8.441 12.684 9.204 13 10 13 C 10.796 13 11.559 12.684 12.121 12.121 C 12.684 11.559 13 10.796 13 10 C 13 9.204 12.684 8.441 12.121 7.879 C 11.559 7.316 10.796 7 10 7 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      overflow: "hidden",
      borderRadius: 100,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 14,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.656,
      width: 14,
      height: 12.688,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 14,
    height: 12.688,
    viewBox: "0 0 14 12.688",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 14,
      height: 12.688,
      color: "rgb(0,0,0)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.025 0 L 13.172 0 L 8.482 5.374 L 14 12.688 L 9.68 12.688 L 6.294 8.253 L 2.424 12.688 L 0.275 12.688 L 5.291 6.938 L 0 0.001 L 4.43 0.001 L 7.486 4.054 L 11.025 0 Z M 10.27 11.4 L 11.46 11.4 L 3.78 1.221 L 2.504 1.221 L 10.27 11.4 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))))))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1674,
      top: 1058.054,
      width: 214.352,
      height: 102.52,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 127.886,
      top: 2.033,
      width: 80.579,
      height: 37.326,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 60.239,
      top: 13.788,
      width: 19.824,
      height: 5.82,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.824,
      height: 5.82,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 19.824,
    height: 5.820,
    viewBox: "0 0 19.824 5.820",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 19.824,
      height: 5.82,
      color: "rgb(0,71,124)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 18.956 0.027 C 12.806 1.569 6.646 3.11 0.496 4.652 C -0.374 4.869 -0.004 6.017 0.876 5.791 C 7.026 4.25 13.186 2.708 19.336 1.167 C 20.196 0.957 19.826 -0.19 18.956 0.027 Z",
    fill: "rgb(0,71,124)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 18.956 0.027 L 18.713 -0.943 L 18.712 -0.943 L 18.956 0.027 Z M 0.496 4.652 L 0.738 5.622 L 0.739 5.622 L 0.496 4.652 Z M 0.876 5.791 L 0.632 4.821 L 0.627 4.822 L 0.876 5.791 Z M 19.336 1.167 L 19.099 0.195 L 19.092 0.197 L 19.336 1.167 Z M 18.956 0.027 L 18.712 -0.943 C 15.638 -0.172 12.56 0.599 9.483 1.369 C 6.405 2.14 3.328 2.911 0.252 3.682 L 0.496 4.652 L 0.739 5.622 C 3.814 4.851 6.891 4.08 9.968 3.31 C 13.046 2.539 16.124 1.768 19.199 0.997 L 18.956 0.027 Z M 0.496 4.652 L 0.253 3.682 C -0.191 3.793 -0.585 4.057 -0.813 4.472 C -1.034 4.875 -1.045 5.322 -0.921 5.699 C -0.662 6.487 0.176 7.003 1.124 6.759 L 0.876 5.791 L 0.627 4.822 C 0.624 4.823 0.644 4.818 0.68 4.822 C 0.716 4.826 0.759 4.838 0.802 4.862 C 0.887 4.908 0.95 4.985 0.979 5.076 C 1.009 5.167 1.014 5.301 0.941 5.434 C 0.905 5.5 0.858 5.549 0.813 5.582 C 0.791 5.598 0.773 5.608 0.759 5.614 C 0.746 5.62 0.738 5.622 0.738 5.622 L 0.496 4.652 Z M 0.876 5.791 L 1.119 6.761 C 4.194 5.99 7.271 5.22 10.348 4.449 C 13.426 3.678 16.504 2.907 19.579 2.137 L 19.336 1.167 L 19.092 0.197 C 16.018 0.967 12.94 1.738 9.863 2.509 C 6.785 3.279 3.708 4.05 0.632 4.821 L 0.876 5.791 Z M 19.336 1.167 L 19.572 2.138 C 20.018 2.03 20.413 1.765 20.64 1.347 C 20.859 0.944 20.867 0.498 20.745 0.125 C 20.49 -0.65 19.666 -1.181 18.713 -0.943 L 18.956 0.027 L 19.198 0.997 C 19.198 0.997 19.193 0.999 19.182 1 C 19.171 1 19.157 1 19.138 0.998 C 19.101 0.994 19.058 0.981 19.015 0.957 C 18.932 0.91 18.873 0.836 18.844 0.748 C 18.816 0.661 18.809 0.528 18.883 0.392 C 18.965 0.241 19.083 0.199 19.099 0.195 L 19.336 1.167 Z",
    fill: "rgb(244,124,32)",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 15.854,
      top: 5.808,
      width: 45.2,
      height: 19.106,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 45.2,
      height: 19.106,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 45.200,
    height: 19.106,
    viewBox: "0 0 45.200 19.106",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 45.2,
      height: 19.106,
      color: "rgb(0,71,124)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 44.711 12.497 C 30.101 8.342 15.481 4.187 0.871 0.032 C 0.091 -0.186 -0.339 0.769 0.331 1.113 C 12.011 7.077 23.681 13.05 35.361 19.015 C 36.141 19.417 36.851 18.387 36.071 17.993 C 24.391 12.028 12.721 6.055 1.041 0.091 C 0.861 0.451 0.681 0.811 0.501 1.171 C 15.111 5.326 29.731 9.482 44.341 13.637 C 45.201 13.888 45.571 12.74 44.711 12.497 Z",
    fill: "rgb(0,71,124)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 44.711 12.497 L 44.438 13.459 L 44.44 13.46 L 44.711 12.497 Z M 0.871 0.032 L 1.145 -0.93 L 1.14 -0.931 L 0.871 0.032 Z M 0.331 1.113 L -0.125 2.003 L -0.123 2.003 L 0.331 1.113 Z M 35.361 19.015 L 35.82 18.126 L 35.816 18.124 L 35.361 19.015 Z M 36.071 17.993 L 35.617 18.883 L 35.621 18.886 L 36.071 17.993 Z M 1.041 0.091 L 1.496 -0.8 L 0.598 -1.259 L 0.147 -0.356 L 1.041 0.091 Z M 0.501 1.171 L -0.393 0.724 L -0.932 1.803 L 0.228 2.133 L 0.501 1.171 Z M 44.341 13.637 L 44.622 12.677 L 44.615 12.675 L 44.341 13.637 Z M 44.711 12.497 L 44.985 11.536 C 37.68 9.458 30.372 7.38 23.065 5.303 C 15.757 3.225 8.45 1.148 1.145 -0.93 L 0.871 0.032 L 0.598 0.994 C 7.903 3.071 15.21 5.149 22.518 7.227 C 29.825 9.304 37.133 11.382 44.438 13.459 L 44.711 12.497 Z M 0.871 0.032 L 1.14 -0.931 C 0.274 -1.173 -0.518 -0.754 -0.845 -0.068 C -1.003 0.262 -1.055 0.666 -0.932 1.065 C -0.803 1.478 -0.511 1.805 -0.125 2.003 L 0.331 1.113 L 0.788 0.223 C 0.839 0.249 0.934 0.328 0.979 0.472 C 1.019 0.601 0.997 0.716 0.96 0.792 C 0.924 0.869 0.862 0.932 0.782 0.969 C 0.694 1.01 0.622 1.001 0.602 0.995 L 0.871 0.032 Z M 0.331 1.113 L -0.123 2.003 C 5.716 4.985 11.554 7.97 17.391 10.954 C 23.229 13.939 29.066 16.923 34.907 19.906 L 35.361 19.015 L 35.816 18.124 C 29.977 15.142 24.139 12.158 18.302 9.173 C 12.464 6.189 6.627 3.204 0.786 0.222 L 0.331 1.113 Z M 35.361 19.015 L 34.903 19.904 C 35.786 20.359 36.691 19.997 37.124 19.371 C 37.339 19.06 37.476 18.63 37.377 18.167 C 37.274 17.678 36.942 17.312 36.522 17.1 L 36.071 17.993 L 35.621 18.886 C 35.591 18.871 35.463 18.781 35.421 18.583 C 35.385 18.411 35.441 18.288 35.479 18.233 C 35.518 18.177 35.573 18.137 35.64 18.118 C 35.722 18.094 35.792 18.112 35.82 18.126 L 35.361 19.015 Z M 36.071 17.993 L 36.526 17.102 C 30.686 14.12 24.849 11.136 19.012 8.151 C 13.174 5.167 7.337 2.182 1.496 -0.8 L 1.041 0.091 L 0.587 0.981 C 6.426 3.963 12.264 6.948 18.101 9.932 C 23.939 12.917 29.776 15.901 35.617 18.883 L 36.071 17.993 Z M 1.041 0.091 L 0.147 -0.356 C 0.057 -0.176 -0.033 0.004 -0.123 0.184 C -0.213 0.364 -0.303 0.544 -0.393 0.724 L 0.501 1.171 L 1.396 1.618 C 1.486 1.438 1.576 1.258 1.666 1.078 C 1.756 0.898 1.846 0.718 1.936 0.538 L 1.041 0.091 Z M 0.501 1.171 L 0.228 2.133 C 7.533 4.211 14.84 6.288 22.148 8.366 C 29.455 10.443 36.763 12.521 44.068 14.599 L 44.341 13.637 L 44.615 12.675 C 37.31 10.597 30.002 8.52 22.695 6.442 C 15.387 4.365 8.08 2.287 0.775 0.209 L 0.501 1.171 Z M 44.341 13.637 L 44.061 14.597 C 45.018 14.876 45.866 14.353 46.123 13.56 C 46.244 13.185 46.232 12.744 46.022 12.346 C 45.804 11.935 45.425 11.66 44.983 11.535 L 44.711 12.497 L 44.44 13.46 C 44.428 13.456 44.325 13.416 44.253 13.28 C 44.189 13.158 44.191 13.034 44.22 12.945 C 44.249 12.855 44.313 12.77 44.411 12.717 C 44.522 12.658 44.611 12.674 44.622 12.677 L 44.341 13.637 Z",
    fill: "rgb(244,124,32)",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 1.558,
      top: 0,
      width: 79.021,
      height: 13.327,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 79.021,
      height: 13.327,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 79.021,
    height: 13.327,
    viewBox: "0 0 79.021 13.327",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 79.021,
      height: 13.327,
      color: "rgb(0,71,124)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 78.507 12.174 C 52.727 7.708 26.847 3.654 0.887 0.01 C -0.003 -0.116 -0.383 1.023 0.507 1.149 C 26.467 4.793 52.347 8.848 78.127 13.313 C 79.027 13.464 79.407 12.324 78.507 12.174 Z",
    fill: "rgb(0,71,124)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 78.507 12.174 L 78.336 13.159 L 78.342 13.16 L 78.507 12.174 Z M 0.887 0.01 L 0.747 1 L 0.748 1 L 0.887 0.01 Z M 0.507 1.149 L 0.367 2.139 L 0.368 2.139 L 0.507 1.149 Z M 78.127 13.313 L 77.956 14.298 L 77.962 14.299 L 78.127 13.313 Z M 78.507 12.174 L 78.678 11.188 C 52.887 6.721 26.997 2.665 1.026 -0.981 L 0.887 0.01 L 0.748 1 C 26.698 4.643 52.567 8.696 78.336 13.159 L 78.507 12.174 Z M 0.887 0.01 L 1.027 -0.981 C 0.102 -1.111 -0.672 -0.572 -0.919 0.169 C -1.042 0.538 -1.044 1.006 -0.785 1.426 C -0.518 1.858 -0.077 2.076 0.367 2.139 L 0.507 1.149 L 0.647 0.159 C 0.646 0.159 0.801 0.188 0.917 0.375 C 1.024 0.549 1.006 0.717 0.978 0.801 C 0.95 0.886 0.901 0.938 0.854 0.967 C 0.829 0.983 0.803 0.992 0.781 0.997 C 0.758 1.001 0.746 1 0.747 1 L 0.887 0.01 Z M 0.507 1.149 L 0.368 2.139 C 26.318 5.782 52.187 9.835 77.956 14.298 L 78.127 13.313 L 78.298 12.328 C 52.507 7.861 26.617 3.804 0.646 0.159 L 0.507 1.149 Z M 78.127 13.313 L 77.962 14.299 C 78.888 14.454 79.687 13.934 79.941 13.173 C 80.066 12.796 80.061 12.33 79.807 11.914 C 79.546 11.489 79.115 11.262 78.672 11.187 L 78.507 12.174 L 78.342 13.16 C 78.349 13.161 78.208 13.133 78.101 12.958 C 78 12.794 78.013 12.631 78.043 12.54 C 78.074 12.449 78.128 12.392 78.182 12.36 C 78.246 12.322 78.294 12.327 78.292 12.327 L 78.127 13.313 Z",
    fill: "rgb(244,124,32)",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 29.654,
      top: 24.244,
      width: 22.68,
      height: 2.923,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.68,
      height: 2.923,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 22.680,
    height: 2.923,
    viewBox: "0 0 22.680 2.923",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 22.68,
      height: 2.923,
      color: "rgb(0,71,124)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 22.001 0.002 C 14.871 0.387 7.761 0.965 0.671 1.736 C -0.219 1.836 -0.229 3.017 0.671 2.917 C 7.761 2.146 14.861 1.568 22.001 1.183 C 22.901 1.132 22.911 -0.049 22.001 0.002 Z",
    fill: "rgb(0,71,124)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 22.001 0.002 L 22.055 1 L 22.056 1 L 22.001 0.002 Z M 0.671 1.736 L 0.563 0.742 L 0.559 0.742 L 0.671 1.736 Z M 0.671 2.917 L 0.563 1.923 L 0.56 1.923 L 0.671 2.917 Z M 22.001 1.183 L 22.055 2.181 L 22.057 2.181 L 22.001 1.183 Z M 22.001 0.002 L 21.947 -0.997 C 14.799 -0.611 7.671 -0.031 0.563 0.742 L 0.671 1.736 L 0.779 2.73 C 7.851 1.961 14.943 1.384 22.055 1 L 22.001 0.002 Z M 0.671 1.736 L 0.559 0.742 C -0.379 0.848 -0.997 1.584 -1 2.397 C -1.002 2.796 -0.85 3.227 -0.494 3.54 C -0.129 3.86 0.337 3.96 0.782 3.911 L 0.671 2.917 L 0.56 1.923 C 0.555 1.924 0.686 1.914 0.827 2.038 C 0.959 2.154 1 2.303 1 2.406 C 1 2.507 0.963 2.591 0.909 2.649 C 0.882 2.68 0.852 2.701 0.825 2.714 C 0.798 2.728 0.782 2.73 0.783 2.729 L 0.671 1.736 Z M 0.671 2.917 L 0.779 3.911 C 7.851 3.142 14.933 2.566 22.055 2.181 L 22.001 1.183 L 21.947 0.184 C 14.789 0.571 7.671 1.15 0.563 1.923 L 0.671 2.917 Z M 22.001 1.183 L 22.057 2.181 C 23.018 2.128 23.676 1.4 23.68 0.559 C 23.682 0.157 23.528 -0.265 23.191 -0.576 C 22.846 -0.895 22.396 -1.022 21.946 -0.997 L 22.001 0.002 L 22.056 1 C 22.061 1 21.951 1.002 21.833 0.892 C 21.722 0.789 21.68 0.657 21.68 0.55 C 21.68 0.445 21.721 0.346 21.79 0.274 C 21.826 0.238 21.863 0.214 21.896 0.199 C 21.929 0.185 21.948 0.184 21.946 0.184 L 22.001 1.183 Z",
    fill: "rgb(244,124,32)",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.213,
      width: 33.551,
      height: 28.346,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 33.551,
      height: 28.346,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 33.551,
    height: 28.346,
    viewBox: "0 0 33.551 28.346",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 33.551,
      height: 28.346,
      color: "rgb(0,71,124)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.185 1.028 C 10.305 10.57 21.015 19.626 32.325 28.187 C 32.995 28.698 34.005 27.86 33.325 27.349 C 22.015 18.796 11.305 9.74 1.185 0.19 C 0.585 -0.379 -0.415 0.458 0.185 1.028 Z",
    fill: "rgb(0,71,124)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.185 1.028 L -0.504 1.753 L -0.501 1.756 L 0.185 1.028 Z M 32.325 28.187 L 32.931 27.392 L 32.929 27.39 L 32.325 28.187 Z M 33.325 27.349 L 32.722 28.147 L 32.724 28.149 L 33.325 27.349 Z M 1.185 0.19 L 0.496 0.915 L 0.499 0.917 L 1.185 0.19 Z M 0.185 1.028 L -0.501 1.756 C 9.645 11.322 20.383 20.401 31.721 28.984 L 32.325 28.187 L 32.929 27.39 C 21.647 18.85 10.965 9.817 0.871 0.3 L 0.185 1.028 Z M 32.325 28.187 L 31.719 28.982 C 32.503 29.581 33.444 29.359 33.972 28.92 C 34.243 28.694 34.515 28.324 34.548 27.835 C 34.584 27.293 34.313 26.841 33.926 26.55 L 33.325 27.349 L 32.724 28.149 C 32.709 28.138 32.659 28.095 32.614 28.008 C 32.568 27.917 32.545 27.809 32.552 27.701 C 32.566 27.497 32.671 27.4 32.691 27.383 C 32.719 27.36 32.745 27.35 32.778 27.347 C 32.824 27.343 32.886 27.357 32.931 27.392 L 32.325 28.187 Z M 33.325 27.349 L 33.928 26.552 C 22.647 18.02 11.965 8.988 1.871 -0.537 L 1.185 0.19 L 0.499 0.917 C 10.645 10.493 21.383 19.572 32.722 28.147 L 33.325 27.349 Z M 1.185 0.19 L 1.874 -0.535 C 1.113 -1.258 0.126 -1.032 -0.407 -0.585 C -0.682 -0.355 -0.932 0 -0.988 0.452 C -1.05 0.945 -0.863 1.411 -0.504 1.753 L 0.185 1.028 L 0.874 0.303 C 0.894 0.323 0.936 0.37 0.966 0.451 C 0.997 0.532 1.006 0.62 0.996 0.701 C 0.977 0.853 0.902 0.928 0.877 0.948 C 0.849 0.972 0.805 0.997 0.735 1 C 0.644 1.004 0.552 0.968 0.496 0.915 L 1.185 0.19 Z",
    fill: "rgb(244,124,32)",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 61.705,
      top: 19.435,
      width: 2.556,
      height: 17.587,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.556,
      height: 17.587,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.556,
    height: 17.587,
    viewBox: "0 0 2.556 17.587",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.556,
      height: 17.587,
      color: "rgb(0,71,124)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.572 C 0.02 6.076 0.39 11.554 1.14 17.025 C 1.24 17.77 2.66 17.779 2.55 17.025 C 1.81 11.554 1.43 6.076 1.41 0.572 C 1.41 -0.191 0 -0.191 0 0.572 Z",
    fill: "rgb(0,71,124)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0 0.572 L -1 0.572 L -1 0.575 L 0 0.572 Z M 1.14 17.025 L 2.131 16.892 L 2.131 16.889 L 1.14 17.025 Z M 2.55 17.025 L 1.559 17.159 L 1.56 17.169 L 2.55 17.025 Z M 1.41 0.572 L 0.41 0.572 L 0.41 0.575 L 1.41 0.572 Z M 0 0.572 L -1 0.575 C -0.98 6.122 -0.607 11.645 0.149 17.161 L 1.14 17.025 L 2.131 16.889 C 1.387 11.464 1.02 6.029 1 0.568 L 0 0.572 Z M 1.14 17.025 L 0.149 17.158 C 0.297 18.261 1.349 18.585 1.921 18.587 C 2.251 18.588 2.662 18.505 3.008 18.234 C 3.404 17.923 3.62 17.43 3.54 16.88 L 2.55 17.025 L 1.56 17.169 C 1.551 17.107 1.553 17.008 1.598 16.897 C 1.642 16.787 1.711 16.709 1.773 16.661 C 1.879 16.577 1.95 16.587 1.927 16.587 C 1.912 16.587 1.922 16.581 1.96 16.605 C 2.014 16.64 2.11 16.737 2.131 16.892 L 1.14 17.025 Z M 2.55 17.025 L 3.541 16.891 C 2.807 11.463 2.43 6.028 2.41 0.568 L 1.41 0.572 L 0.41 0.575 C 0.43 6.123 0.813 11.645 1.559 17.159 L 2.55 17.025 Z M 1.41 0.572 L 2.41 0.572 C 2.41 0.028 2.141 -0.404 1.774 -0.668 C 1.438 -0.911 1.045 -1 0.705 -1 C 0.365 -1 -0.028 -0.911 -0.364 -0.668 C -0.731 -0.404 -1 0.028 -1 0.572 L 0 0.572 L 1 0.572 C 1 0.636 0.984 0.717 0.941 0.796 C 0.899 0.873 0.846 0.924 0.805 0.954 C 0.765 0.983 0.735 0.993 0.723 0.997 C 0.711 1 0.705 1 0.705 1 C 0.705 1 0.699 1 0.687 0.997 C 0.675 0.993 0.645 0.983 0.605 0.954 C 0.564 0.924 0.511 0.873 0.469 0.796 C 0.426 0.717 0.41 0.636 0.41 0.572 L 1.41 0.572 Z",
    fill: "rgb(244,124,32)",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 51.739,
      top: 23.755,
      width: 11.842,
      height: 13.571,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.842,
      height: 13.571,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.842,
    height: 13.571,
    viewBox: "0 0 11.842 13.571",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 11.842,
      height: 13.571,
      color: "rgb(0,71,124)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.126 0.858 C 3.586 5.005 7.036 9.16 10.496 13.307 C 11.016 13.927 12.236 13.341 11.716 12.712 C 8.256 8.566 4.806 4.41 1.346 0.264 C 0.836 -0.356 -0.394 0.23 0.126 0.858 Z",
    fill: "rgb(0,71,124)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.126 0.858 L -0.645 1.496 L -0.642 1.499 L 0.126 0.858 Z M 10.496 13.307 L 9.728 13.948 L 9.729 13.95 L 10.496 13.307 Z M 11.716 12.712 L 12.486 12.075 L 12.483 12.072 L 11.716 12.712 Z M 1.346 0.264 L 0.573 0.899 L 0.578 0.904 L 1.346 0.264 Z M 0.126 0.858 L -0.642 1.499 C 1.087 3.572 2.814 5.647 4.542 7.723 C 6.269 9.798 7.997 11.874 9.728 13.948 L 10.496 13.307 L 11.263 12.666 C 9.534 10.594 7.807 8.519 6.079 6.443 C 4.352 4.368 2.624 2.292 0.893 0.218 L 0.126 0.858 Z M 10.496 13.307 L 9.729 13.95 C 10.373 14.717 11.353 14.658 11.931 14.378 C 12.235 14.231 12.59 13.953 12.756 13.504 C 12.946 12.989 12.809 12.465 12.486 12.075 L 11.716 12.712 L 10.945 13.35 C 10.924 13.325 10.877 13.256 10.854 13.145 C 10.831 13.029 10.842 12.912 10.879 12.811 C 10.914 12.716 10.964 12.657 10.995 12.626 C 11.027 12.595 11.051 12.582 11.06 12.578 C 11.072 12.572 11.08 12.569 11.103 12.572 C 11.137 12.576 11.207 12.599 11.262 12.664 L 10.496 13.307 Z M 11.716 12.712 L 12.483 12.072 C 10.754 9.999 9.027 7.924 7.299 5.848 C 5.572 3.773 3.844 1.697 2.113 -0.377 L 1.346 0.264 L 0.578 0.904 C 2.307 2.977 4.034 5.052 5.762 7.128 C 7.489 9.203 9.217 11.279 10.948 13.353 L 11.716 12.712 Z M 1.346 0.264 L 2.118 -0.372 C 1.477 -1.151 0.488 -1.084 -0.085 -0.808 C -0.388 -0.662 -0.743 -0.386 -0.911 0.062 C -1.105 0.577 -0.97 1.103 -0.645 1.496 L 0.126 0.858 L 0.896 0.221 C 0.917 0.247 0.965 0.316 0.988 0.429 C 1.012 0.546 0.999 0.664 0.961 0.765 C 0.926 0.859 0.877 0.917 0.846 0.947 C 0.815 0.978 0.792 0.99 0.784 0.994 C 0.774 0.998 0.766 1.002 0.743 0.999 C 0.707 0.995 0.632 0.97 0.573 0.899 L 1.346 0.264 Z",
    fill: "rgb(244,124,32)",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 42.648,
      top: 24.775,
      width: 20.526,
      height: 12.523,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20.526,
      height: 12.523,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 20.526,
    height: 12.523,
    viewBox: "0 0 20.526 12.523",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 20.526,
      height: 12.523,
      color: "rgb(0,71,124)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 20.277 11.55 C 14.047 7.512 7.637 3.692 1.037 0.098 C 0.267 -0.321 -0.433 0.71 0.327 1.12 C 6.827 4.664 13.147 8.417 19.287 12.388 C 19.997 12.849 20.997 12.019 20.277 11.55 Z",
    fill: "rgb(0,71,124)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 20.277 11.55 L 20.823 10.712 L 20.821 10.711 L 20.277 11.55 Z M 1.037 0.098 L 1.516 -0.78 L 1.515 -0.78 L 1.037 0.098 Z M 0.327 1.12 L 0.806 0.242 L 0.803 0.24 L 0.327 1.12 Z M 19.287 12.388 L 19.832 11.549 L 19.83 11.548 L 19.287 12.388 Z M 20.277 11.55 L 20.821 10.711 C 14.57 6.659 8.138 2.826 1.516 -0.78 L 1.037 0.098 L 0.559 0.977 C 7.137 4.558 13.525 8.365 19.733 12.389 L 20.277 11.55 Z M 1.037 0.098 L 1.515 -0.78 C 0.633 -1.26 -0.281 -0.901 -0.716 -0.268 C -0.93 0.044 -1.061 0.468 -0.972 0.923 C -0.877 1.402 -0.563 1.776 -0.148 2 L 0.327 1.12 L 0.803 0.24 C 0.838 0.259 0.954 0.35 0.99 0.535 C 1.022 0.693 0.971 0.809 0.933 0.864 C 0.894 0.922 0.835 0.967 0.757 0.988 C 0.664 1.014 0.587 0.992 0.56 0.977 L 1.037 0.098 Z M 0.327 1.12 L -0.151 1.998 C 6.327 5.53 12.626 9.271 18.744 13.227 L 19.287 12.388 L 19.83 11.548 C 13.669 7.563 7.327 3.798 0.806 0.242 L 0.327 1.12 Z M 19.287 12.388 L 18.743 13.227 C 19.534 13.74 20.441 13.52 20.961 13.084 C 21.226 12.862 21.512 12.482 21.526 11.97 C 21.541 11.401 21.215 10.968 20.823 10.712 L 20.277 11.55 L 19.731 12.388 C 19.722 12.382 19.667 12.344 19.614 12.256 C 19.558 12.162 19.523 12.043 19.527 11.917 C 19.533 11.679 19.66 11.565 19.676 11.551 C 19.704 11.528 19.721 11.525 19.732 11.523 C 19.754 11.521 19.795 11.525 19.832 11.549 L 19.287 12.388 Z",
    fill: "rgb(244,124,32)",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 214.352,
    height: 102.520,
    viewBox: "0 0 214.352 102.520",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 214.352,
      height: 102.52
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.451 102.624 C -0.394 103.034 -0.015 103.32 0.395 103.263 C 0.805 103.206 1.091 102.827 1.034 102.417 L 0.291 102.52 L -0.451 102.624 Z M 17.201 65.752 L 16.716 65.18 L 17.201 65.752 Z M 58.961 45.596 L 58.758 44.875 L 58.757 44.875 L 58.961 45.596 Z M 75.281 40.151 L 74.95 39.478 L 74.95 39.479 L 75.281 40.151 Z M 94.941 18.957 L 95.62 19.276 L 95.62 19.276 L 94.941 18.957 Z M 91.101 0.619 L 91.364 -0.084 L 91.363 -0.084 L 91.101 0.619 Z M 76.871 5.888 L 76.225 5.507 L 76.225 5.508 L 76.871 5.888 Z M 76.481 19.962 L 77.191 19.72 L 77.191 19.72 L 76.481 19.962 Z M 106.171 50.589 L 105.827 51.255 L 105.827 51.255 L 106.171 50.589 Z M 151.151 64.571 L 151.293 63.835 L 151.293 63.835 L 151.151 64.571 Z M 183.321 67.495 L 183.266 66.747 L 183.321 67.495 Z M 212.021 56.252 L 212.547 56.787 L 212.548 56.787 L 212.021 56.252 Z M 214.281 51.486 L 213.549 51.647 L 213.549 51.649 L 214.281 51.486 Z M 211.411 48.034 L 210.949 48.625 L 210.951 48.626 L 211.411 48.034 Z M 198.273 36.804 C 197.947 36.549 197.476 36.607 197.221 36.933 C 196.965 37.259 197.023 37.731 197.349 37.986 L 197.811 37.395 L 198.273 36.804 Z M 0.767 97.283 C 0.78 96.869 0.456 96.523 0.042 96.509 C -0.372 96.495 -0.719 96.82 -0.732 97.234 L 0.017 97.259 L 0.767 97.283 Z M 1.298 86.692 C 1.161 87.083 1.367 87.511 1.757 87.648 C 2.148 87.785 2.576 87.579 2.713 87.188 L 2.006 86.94 L 1.298 86.692 Z M 7.333 77.935 C 7.56 77.588 7.463 77.123 7.116 76.896 C 6.77 76.67 6.305 76.767 6.078 77.113 L 6.706 77.524 L 7.333 77.935 Z M 12.802 68.814 C 12.512 69.11 12.516 69.584 12.811 69.875 C 13.106 70.165 13.581 70.162 13.871 69.866 L 13.337 69.34 L 12.802 68.814 Z M 22.244 62.775 C 22.581 62.534 22.659 62.066 22.418 61.729 C 22.177 61.392 21.708 61.314 21.371 61.555 L 21.808 62.165 L 22.244 62.775 Z M 31.408 55.402 C 31.042 55.595 30.901 56.048 31.094 56.415 C 31.288 56.781 31.741 56.922 32.108 56.729 L 31.758 56.065 L 31.408 55.402 Z M 42.644 51.881 C 43.029 51.726 43.215 51.29 43.06 50.905 C 42.906 50.521 42.469 50.335 42.085 50.489 L 42.365 51.185 L 42.644 51.881 Z M 53.14 46.552 C 52.745 46.677 52.526 47.098 52.65 47.493 C 52.775 47.888 53.196 48.107 53.591 47.982 L 53.366 47.267 L 53.14 46.552 Z M 63.314 45.167 C 63.713 45.056 63.946 44.643 63.835 44.244 C 63.724 43.845 63.31 43.611 62.911 43.722 L 63.112 44.445 L 63.314 45.167 Z M 71.061 41.153 C 70.674 41.299 70.479 41.732 70.625 42.12 C 70.771 42.507 71.204 42.703 71.592 42.556 L 71.326 41.855 L 71.061 41.153 Z M 78.896 38.995 C 79.247 38.776 79.354 38.313 79.135 37.962 C 78.915 37.61 78.453 37.504 78.101 37.723 L 78.499 38.359 L 78.896 38.995 Z M 83.819 33.326 C 83.516 33.609 83.499 34.083 83.781 34.386 C 84.064 34.69 84.538 34.706 84.841 34.424 L 84.33 33.875 L 83.819 33.326 Z M 89.855 28.865 C 90.106 28.535 90.042 28.065 89.712 27.814 C 89.383 27.563 88.912 27.626 88.661 27.956 L 89.258 28.41 L 89.855 28.865 Z M 92.61 21.874 C 92.41 22.237 92.542 22.693 92.904 22.893 C 93.267 23.094 93.723 22.962 93.923 22.6 L 93.267 22.237 L 92.61 21.874 Z M 97.365 14.107 C 97.451 13.702 97.192 13.304 96.787 13.218 C 96.382 13.132 95.983 13.391 95.898 13.796 L 96.631 13.952 L 97.365 14.107 Z M 94.662 4.177 C 94.901 4.515 95.368 4.596 95.707 4.357 C 96.045 4.118 96.126 3.65 95.887 3.312 L 95.275 3.744 L 94.662 4.177 Z M 87.059 -0.739 C 86.646 -0.722 86.324 -0.372 86.342 0.042 C 86.359 0.455 86.709 0.777 87.122 0.759 L 87.091 0.01 L 87.059 -0.739 Z M 80.038 3.447 C 80.364 3.19 80.419 2.719 80.163 2.393 C 79.906 2.068 79.434 2.013 79.109 2.269 L 79.574 2.858 L 80.038 3.447 Z M 74.795 9.073 C 74.698 9.476 74.946 9.88 75.349 9.977 C 75.752 10.074 76.157 9.826 76.253 9.423 L 75.524 9.248 L 74.795 9.073 Z M 76.267 16.313 C 76.187 15.906 75.793 15.642 75.386 15.722 C 74.98 15.802 74.715 16.197 74.796 16.603 L 75.531 16.458 L 76.267 16.313 Z M 77.933 25.327 C 78.12 25.696 78.572 25.844 78.941 25.657 C 79.311 25.47 79.459 25.019 79.272 24.649 L 78.603 24.988 L 77.933 25.327 Z M 85.246 33.549 C 84.978 33.234 84.505 33.195 84.189 33.462 C 83.873 33.73 83.834 34.204 84.102 34.52 L 84.674 34.034 L 85.246 33.549 Z M 92.001 42.234 C 92.321 42.496 92.794 42.45 93.057 42.13 C 93.32 41.809 93.273 41.337 92.953 41.074 L 92.477 41.654 L 92.001 42.234 Z M 101.792 47.284 C 101.438 47.07 100.977 47.184 100.763 47.539 C 100.549 47.894 100.664 48.355 101.019 48.569 L 101.405 47.926 L 101.792 47.284 Z M 111.192 53.831 C 111.57 53.999 112.014 53.829 112.182 53.451 C 112.351 53.072 112.181 52.629 111.802 52.46 L 111.497 53.146 L 111.192 53.831 Z M 122.753 56.692 C 122.36 56.561 121.935 56.773 121.804 57.165 C 121.672 57.558 121.884 57.983 122.277 58.115 L 122.515 57.404 L 122.753 56.692 Z M 133.66 61.466 C 134.061 61.57 134.471 61.329 134.575 60.928 C 134.678 60.527 134.437 60.117 134.036 60.014 L 133.848 60.74 L 133.66 61.466 Z M 145.512 62.676 C 145.106 62.591 144.709 62.851 144.624 63.257 C 144.539 63.662 144.799 64.059 145.205 64.144 L 145.358 63.41 L 145.512 62.676 Z M 154.999 66.054 C 155.407 66.127 155.797 65.856 155.87 65.448 C 155.944 65.041 155.673 64.651 155.265 64.577 L 155.132 65.315 L 154.999 66.054 Z M 163.231 65.858 C 162.821 65.802 162.442 66.089 162.386 66.499 C 162.33 66.909 162.616 67.288 163.027 67.344 L 163.129 66.601 L 163.231 65.858 Z M 171.129 68.204 C 171.542 68.233 171.901 67.922 171.93 67.509 C 171.96 67.096 171.648 66.737 171.235 66.708 L 171.182 67.456 L 171.129 68.204 Z M 179.262 66.931 C 178.847 66.939 178.518 67.281 178.526 67.696 C 178.534 68.11 178.877 68.439 179.291 68.431 L 179.276 67.681 L 179.262 66.931 Z M 187.331 67.828 C 187.741 67.772 188.028 67.394 187.972 66.984 C 187.917 66.573 187.538 66.286 187.128 66.342 L 187.229 67.085 L 187.331 67.828 Z M 194.724 64.79 C 194.325 64.901 194.091 65.315 194.202 65.714 C 194.313 66.113 194.726 66.346 195.126 66.236 L 194.925 65.513 L 194.724 64.79 Z M 202.617 63.503 C 202.993 63.328 203.156 62.882 202.981 62.507 C 202.807 62.131 202.361 61.968 201.985 62.143 L 202.301 62.823 L 202.617 63.503 Z M 208.593 58.216 C 208.262 58.466 208.197 58.936 208.447 59.267 C 208.697 59.597 209.167 59.662 209.497 59.413 L 209.045 58.814 L 208.593 58.216 Z M 213.534 55.723 C 213.799 55.405 213.756 54.932 213.437 54.667 C 213.119 54.402 212.646 54.446 212.381 54.764 L 212.958 55.244 L 213.534 55.723 Z M 213.538 52.685 C 213.446 53.089 213.699 53.491 214.103 53.582 C 214.507 53.674 214.909 53.421 215.001 53.017 L 214.269 52.851 L 213.538 52.685 Z M 214.483 50.041 C 214.266 49.688 213.805 49.577 213.452 49.794 C 213.099 50.011 212.988 50.473 213.205 50.826 L 213.844 50.433 L 214.483 50.041 Z M 211.819 49.324 C 212.134 49.591 212.608 49.553 212.876 49.237 C 213.144 48.921 213.105 48.448 212.789 48.18 L 212.304 48.752 L 211.819 49.324 Z M 208.473 44.784 C 208.147 44.529 207.676 44.586 207.421 44.912 C 207.165 45.239 207.223 45.71 207.549 45.965 L 208.011 45.374 L 208.473 44.784 Z M 200.749 40.646 C 201.076 40.901 201.547 40.843 201.802 40.517 C 202.057 40.191 202 39.719 201.674 39.464 L 201.211 40.055 L 200.749 40.646 Z M 0.291 102.52 L 1.034 102.417 C 0.796 100.705 0.71 98.992 0.767 97.283 L 0.017 97.259 L -0.732 97.234 C -0.792 99.025 -0.702 100.825 -0.451 102.624 L 0.291 102.52 Z M 2.006 86.94 L 2.713 87.188 C 3.832 83.998 5.398 80.893 7.333 77.935 L 6.706 77.524 L 6.078 77.113 C 4.083 80.163 2.46 83.377 1.298 86.692 L 2.006 86.94 Z M 13.337 69.34 L 13.871 69.866 C 15.082 68.636 16.357 67.453 17.687 66.324 L 17.201 65.752 L 16.716 65.18 C 15.352 66.338 14.045 67.551 12.802 68.814 L 13.337 69.34 Z M 17.201 65.752 L 17.687 66.324 C 19.147 65.085 20.669 63.903 22.244 62.775 L 21.808 62.165 L 21.371 61.555 C 19.764 62.706 18.21 63.913 16.716 65.18 L 17.201 65.752 Z M 31.758 56.065 L 32.108 56.729 C 35.488 54.947 39.017 53.34 42.644 51.881 L 42.365 51.185 L 42.085 50.489 C 38.416 51.965 34.84 53.593 31.408 55.402 L 31.758 56.065 Z M 53.366 47.267 L 53.591 47.982 C 55.44 47.399 57.3 46.845 59.165 46.318 L 58.961 45.596 L 58.757 44.875 C 56.878 45.406 55.004 45.964 53.14 46.552 L 53.366 47.267 Z M 58.961 45.596 L 59.165 46.318 C 60.544 45.93 61.921 45.555 63.314 45.167 L 63.112 44.445 L 62.911 43.722 C 61.535 44.106 60.137 44.486 58.758 44.875 L 58.961 45.596 Z M 71.326 41.855 L 71.592 42.556 C 72.961 42.039 74.306 41.469 75.613 40.824 L 75.281 40.151 L 74.95 39.479 C 73.694 40.098 72.394 40.649 71.061 41.153 L 71.326 41.855 Z M 75.281 40.151 L 75.613 40.824 C 76.752 40.263 77.845 39.651 78.896 38.995 L 78.499 38.359 L 78.101 37.723 C 77.093 38.353 76.043 38.94 74.95 39.478 L 75.281 40.151 Z M 84.33 33.875 L 84.841 34.424 C 86.69 32.702 88.357 30.833 89.855 28.865 L 89.258 28.41 L 88.661 27.956 C 87.21 29.862 85.6 31.668 83.819 33.326 L 84.33 33.875 Z M 93.267 22.237 L 93.923 22.6 C 94.53 21.502 95.095 20.392 95.62 19.276 L 94.941 18.957 L 94.263 18.637 C 93.751 19.725 93.2 20.806 92.61 21.874 L 93.267 22.237 Z M 94.941 18.957 L 95.62 19.276 C 96.373 17.676 96.982 15.91 97.365 14.107 L 96.631 13.952 L 95.898 13.796 C 95.54 15.48 94.969 17.136 94.263 18.637 L 94.941 18.957 Z M 95.275 3.744 L 95.887 3.312 C 94.851 1.842 93.365 0.663 91.364 -0.084 L 91.101 0.619 L 90.839 1.321 C 92.569 1.967 93.806 2.964 94.662 4.177 L 95.275 3.744 Z M 91.101 0.619 L 91.363 -0.084 C 89.971 -0.603 88.508 -0.8 87.059 -0.739 L 87.091 0.01 L 87.122 0.759 C 88.393 0.706 89.654 0.88 90.84 1.321 L 91.101 0.619 Z M 79.574 2.858 L 79.109 2.269 C 77.939 3.192 76.943 4.291 76.225 5.507 L 76.871 5.888 L 77.517 6.269 C 78.128 5.233 78.994 4.271 80.038 3.447 L 79.574 2.858 Z M 76.871 5.888 L 76.225 5.508 C 75.554 6.65 75.089 7.847 74.795 9.073 L 75.524 9.248 L 76.253 9.423 C 76.515 8.332 76.927 7.275 77.518 6.268 L 76.871 5.888 Z M 75.531 16.458 L 74.796 16.603 C 75.037 17.827 75.374 19.035 75.771 20.203 L 76.481 19.962 L 77.191 19.72 C 76.812 18.605 76.494 17.462 76.267 16.313 L 75.531 16.458 Z M 76.481 19.962 L 75.771 20.203 C 76.367 21.956 77.092 23.664 77.933 25.327 L 78.603 24.988 L 79.272 24.649 C 78.461 23.047 77.763 21.403 77.191 19.72 L 76.481 19.962 Z M 84.674 34.034 L 84.102 34.52 C 86.441 37.277 89.101 39.855 92.001 42.234 L 92.477 41.654 L 92.953 41.074 C 90.115 38.746 87.52 36.231 85.246 33.549 L 84.674 34.034 Z M 101.405 47.926 L 101.019 48.569 C 102.587 49.513 104.193 50.41 105.827 51.255 L 106.171 50.589 L 106.516 49.923 C 104.91 49.092 103.333 48.211 101.792 47.284 L 101.405 47.926 Z M 106.171 50.589 L 105.827 51.255 C 107.585 52.165 109.375 53.022 111.192 53.831 L 111.497 53.146 L 111.802 52.46 C 110.01 51.662 108.247 50.818 106.516 49.923 L 106.171 50.589 Z M 122.515 57.404 L 122.277 58.115 C 126.007 59.364 129.813 60.469 133.66 61.466 L 133.848 60.74 L 134.036 60.014 C 130.216 59.025 126.445 57.929 122.753 56.692 L 122.515 57.404 Z M 145.358 63.41 L 145.205 64.144 C 147.138 64.548 149.074 64.935 151.01 65.307 L 151.151 64.571 L 151.293 63.835 C 149.364 63.463 147.436 63.078 145.512 62.676 L 145.358 63.41 Z M 151.151 64.571 L 151.009 65.307 C 152.335 65.563 153.665 65.813 154.999 66.054 L 155.132 65.315 L 155.265 64.577 C 153.938 64.338 152.614 64.089 151.293 63.835 L 151.151 64.571 Z M 163.129 66.601 L 163.027 67.344 C 165.716 67.714 168.419 68.012 171.129 68.204 L 171.182 67.456 L 171.235 66.708 C 168.564 66.518 165.894 66.224 163.231 65.858 L 163.129 66.601 Z M 179.276 67.681 L 179.291 68.431 C 180.652 68.404 182.014 68.343 183.377 68.243 L 183.321 67.495 L 183.266 66.747 C 181.932 66.845 180.597 66.905 179.262 66.931 L 179.276 67.681 Z M 183.321 67.495 L 183.377 68.243 C 184.695 68.145 186.016 68.008 187.331 67.828 L 187.229 67.085 L 187.128 66.342 C 185.844 66.517 184.555 66.652 183.266 66.747 L 183.321 67.495 Z M 194.925 65.513 L 195.126 66.236 C 197.722 65.515 200.24 64.608 202.617 63.503 L 202.301 62.823 L 201.985 62.143 C 199.69 63.209 197.25 64.089 194.724 64.79 L 194.925 65.513 Z M 209.045 58.814 L 209.497 59.413 C 210.575 58.598 211.595 57.723 212.547 56.787 L 212.021 56.252 L 211.496 55.718 C 210.592 56.606 209.622 57.438 208.593 58.216 L 209.045 58.814 Z M 212.021 56.252 L 212.548 56.787 C 212.884 56.456 213.221 56.1 213.534 55.723 L 212.958 55.244 L 212.381 54.764 C 212.108 55.092 211.807 55.411 211.495 55.718 L 212.021 56.252 Z M 214.269 52.851 L 215.001 53.017 C 215.124 52.474 215.144 51.904 215.013 51.322 L 214.281 51.486 L 213.549 51.649 C 213.626 51.99 213.618 52.333 213.538 52.685 L 214.269 52.851 Z M 214.281 51.486 L 215.014 51.324 C 214.911 50.856 214.722 50.429 214.483 50.041 L 213.844 50.433 L 213.205 50.826 C 213.372 51.098 213.488 51.369 213.549 51.647 L 214.281 51.486 Z M 212.304 48.752 L 212.789 48.18 C 212.485 47.922 212.172 47.676 211.872 47.442 L 211.411 48.034 L 210.951 48.626 C 211.248 48.858 211.54 49.087 211.819 49.324 L 212.304 48.752 Z M 211.411 48.034 L 211.873 47.443 C 210.741 46.557 209.607 45.671 208.473 44.784 L 208.011 45.374 L 207.549 45.965 C 208.683 46.852 209.816 47.739 210.949 48.625 L 211.411 48.034 Z M 201.211 40.055 L 201.674 39.464 C 200.54 38.577 199.406 37.69 198.273 36.804 L 197.811 37.395 L 197.349 37.986 C 198.482 38.872 199.616 39.759 200.749 40.646 L 201.211 40.055 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 158.185,
      top: 11.312,
      width: 4.563,
      height: 6.259,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.563,
      height: 6.259,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 4.563,
    height: 6.259,
    viewBox: "0 0 4.563 6.259",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 4.563,
      height: 6.259,
      color: "rgb(0,71,124)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.087 0.893 C 1.147 2.585 2.197 4.269 3.257 5.961 C 3.677 6.639 4.897 6.036 4.477 5.366 C 3.417 3.674 2.367 1.99 1.307 0.298 C 0.887 -0.381 -0.333 0.222 0.087 0.893 Z",
    fill: "rgb(0,71,124)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.087 0.893 L 0.934 0.362 L 0.934 0.361 L 0.087 0.893 Z M 3.257 5.961 L 4.107 5.434 L 4.104 5.43 L 3.257 5.961 Z M 4.477 5.366 L 3.629 5.897 L 3.629 5.897 L 4.477 5.366 Z M 1.307 0.298 L 0.456 0.824 L 0.459 0.829 L 1.307 0.298 Z M 0.087 0.893 L -0.761 1.423 C -0.231 2.269 0.296 3.113 0.824 3.957 C 1.351 4.801 1.879 5.645 2.409 6.492 L 3.257 5.961 L 4.104 5.43 C 3.574 4.584 3.047 3.741 2.52 2.897 C 1.992 2.053 1.464 1.208 0.934 0.362 L 0.087 0.893 Z M 3.257 5.961 L 2.406 6.487 C 2.986 7.424 4.046 7.35 4.622 7.067 C 4.933 6.914 5.259 6.645 5.437 6.241 C 5.635 5.792 5.602 5.279 5.324 4.835 L 4.477 5.366 L 3.629 5.897 C 3.604 5.857 3.572 5.785 3.565 5.687 C 3.558 5.59 3.577 5.502 3.607 5.433 C 3.662 5.309 3.736 5.274 3.741 5.272 C 3.751 5.267 3.784 5.251 3.851 5.263 C 3.942 5.278 4.048 5.339 4.107 5.434 L 3.257 5.961 Z M 4.477 5.366 L 5.324 4.835 C 4.794 3.99 4.267 3.146 3.74 2.302 C 3.212 1.458 2.684 0.613 2.154 -0.233 L 1.307 0.298 L 0.459 0.829 C 0.989 1.674 1.516 2.518 2.044 3.362 C 2.571 4.206 3.099 5.05 3.629 5.897 L 4.477 5.366 Z M 1.307 0.298 L 2.157 -0.229 C 1.577 -1.165 0.517 -1.091 -0.059 -0.808 C -0.369 -0.656 -0.695 -0.387 -0.874 0.018 C -1.072 0.466 -1.039 0.98 -0.761 1.424 L 0.087 0.893 L 0.934 0.361 C 0.959 0.401 0.991 0.473 0.998 0.571 C 1.006 0.669 0.986 0.757 0.956 0.825 C 0.901 0.949 0.828 0.984 0.822 0.987 C 0.812 0.992 0.779 1.007 0.712 0.996 C 0.622 0.981 0.516 0.92 0.456 0.824 L 1.307 0.298 Z",
    fill: "rgb(244,124,32)",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 163.565,
      top: 11.698,
      width: 5.701,
      height: 9.553,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.701,
      height: 9.553,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.701,
    height: 9.553,
    viewBox: "0 0 5.701 9.553",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.701,
      height: 9.553,
      color: "rgb(0,71,124)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.066 0.909 C 1.516 3.69 2.966 6.463 4.416 9.244 C 4.776 9.939 5.996 9.336 5.636 8.649 C 4.186 5.868 2.736 3.095 1.286 0.314 C 0.926 -0.39 -0.294 0.213 0.066 0.909 Z",
    fill: "rgb(0,71,124)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.066 0.909 L -0.822 1.369 L -0.821 1.371 L 0.066 0.909 Z M 4.416 9.244 L 5.304 8.784 L 5.302 8.782 L 4.416 9.244 Z M 5.636 8.649 L 4.749 9.112 L 4.75 9.114 L 5.636 8.649 Z M 1.286 0.314 L 0.395 0.769 L 0.399 0.776 L 1.286 0.314 Z M 0.066 0.909 L -0.821 1.371 C -0.096 2.762 0.629 4.151 1.354 5.539 C 2.079 6.928 2.804 8.316 3.529 9.706 L 4.416 9.244 L 5.302 8.782 C 4.577 7.391 3.852 6.002 3.127 4.614 C 2.402 3.225 1.677 1.837 0.952 0.446 L 0.066 0.909 Z M 4.416 9.244 L 3.528 9.704 C 3.768 10.167 4.18 10.439 4.621 10.523 C 5.03 10.602 5.426 10.515 5.736 10.363 C 6.046 10.211 6.361 9.949 6.546 9.568 C 6.749 9.153 6.766 8.651 6.521 8.185 L 5.636 8.649 L 4.75 9.114 C 4.725 9.066 4.702 8.994 4.701 8.906 C 4.701 8.819 4.723 8.745 4.749 8.692 C 4.796 8.596 4.85 8.57 4.855 8.567 C 4.861 8.565 4.906 8.542 4.997 8.559 C 5.047 8.569 5.111 8.592 5.174 8.637 C 5.238 8.684 5.28 8.739 5.304 8.784 L 4.416 9.244 Z M 5.636 8.649 L 6.522 8.187 C 5.797 6.796 5.072 5.407 4.347 4.019 C 3.622 2.63 2.897 1.242 2.172 -0.148 L 1.286 0.314 L 0.399 0.776 C 1.124 2.167 1.849 3.556 2.574 4.944 C 3.299 6.333 4.024 7.721 4.749 9.112 L 5.636 8.649 Z M 1.286 0.314 L 2.176 -0.142 C 1.939 -0.604 1.53 -0.881 1.087 -0.969 C 0.676 -1.05 0.278 -0.964 -0.035 -0.811 C -0.347 -0.658 -0.661 -0.394 -0.846 -0.012 C -1.047 0.403 -1.063 0.903 -0.822 1.369 L 0.066 0.909 L 0.954 0.449 C 0.977 0.494 1 0.564 1 0.65 C 1 0.734 0.98 0.806 0.954 0.859 C 0.908 0.954 0.853 0.981 0.846 0.984 C 0.839 0.988 0.791 1.011 0.698 0.993 C 0.647 0.983 0.584 0.959 0.522 0.914 C 0.458 0.867 0.418 0.813 0.395 0.769 L 1.286 0.314 Z",
    fill: "rgb(244,124,32)",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 171.839,
      top: 15.75,
      width: 5.465,
      height: 8.735,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.465,
      height: 8.735,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.465,
    height: 8.735,
    viewBox: "0 0 5.465 8.735",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.465,
      height: 8.735,
      color: "rgb(0,71,124)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.072 0.903 C 1.442 3.408 2.802 5.921 4.172 8.426 C 4.552 9.121 5.772 8.518 5.392 7.831 C 4.022 5.327 2.662 2.813 1.292 0.309 C 0.912 -0.387 -0.308 0.216 0.072 0.903 Z",
    fill: "rgb(0,71,124)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.072 0.903 L 0.95 0.423 L 0.947 0.419 L 0.072 0.903 Z M 4.172 8.426 L 5.05 7.947 L 5.05 7.946 L 4.172 8.426 Z M 5.392 7.831 L 4.515 8.311 L 4.517 8.315 L 5.392 7.831 Z M 1.292 0.309 L 0.415 0.788 L 0.415 0.788 L 1.292 0.309 Z M 0.072 0.903 L -0.805 1.383 C -0.121 2.634 0.561 3.888 1.244 5.143 C 1.926 6.397 2.609 7.652 3.295 8.906 L 4.172 8.426 L 5.05 7.946 C 4.365 6.695 3.683 5.441 3.001 4.187 C 2.318 2.932 1.635 1.677 0.95 0.423 L 0.072 0.903 Z M 4.172 8.426 L 3.295 8.906 C 3.543 9.36 3.955 9.624 4.392 9.706 C 4.799 9.783 5.195 9.699 5.508 9.545 C 5.82 9.392 6.138 9.126 6.321 8.737 C 6.521 8.311 6.521 7.806 6.268 7.347 L 5.392 7.831 L 4.517 8.315 C 4.493 8.272 4.468 8.201 4.465 8.111 C 4.463 8.022 4.483 7.944 4.511 7.886 C 4.56 7.782 4.62 7.753 4.627 7.749 C 4.635 7.745 4.678 7.725 4.762 7.74 C 4.809 7.749 4.868 7.77 4.926 7.811 C 4.987 7.854 5.027 7.904 5.05 7.947 L 4.172 8.426 Z M 5.392 7.831 L 6.27 7.351 C 5.585 6.1 4.903 4.847 4.221 3.592 C 3.538 2.338 2.855 1.082 2.17 -0.171 L 1.292 0.309 L 0.415 0.788 C 1.099 2.04 1.781 3.293 2.464 4.548 C 3.146 5.802 3.829 7.058 4.515 8.311 L 5.392 7.831 Z M 1.292 0.309 L 2.17 -0.171 C 1.922 -0.625 1.51 -0.889 1.073 -0.971 C 0.666 -1.048 0.27 -0.964 -0.043 -0.81 C -0.355 -0.657 -0.673 -0.392 -0.856 -0.003 C -1.056 0.423 -1.056 0.928 -0.803 1.387 L 0.072 0.903 L 0.947 0.419 C 0.972 0.463 0.997 0.534 1 0.624 C 1.002 0.713 0.982 0.79 0.954 0.848 C 0.905 0.953 0.845 0.982 0.838 0.985 C 0.83 0.989 0.787 1.01 0.703 0.994 C 0.656 0.985 0.597 0.965 0.539 0.923 C 0.478 0.881 0.438 0.83 0.415 0.788 L 1.292 0.309 Z",
    fill: "rgb(244,124,32)",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 178.321,
      top: 18.028,
      width: 6.241,
      height: 12.311,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.241,
      height: 12.311,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.241,
    height: 12.311,
    viewBox: "0 0 6.241 12.311",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 6.241,
      height: 12.311,
      color: "rgb(0,71,124)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.04 0.727 C 1.53 4.489 3.13 8.217 4.83 11.911 C 5.15 12.615 6.52 12.313 6.19 11.593 C 4.49 7.898 2.89 4.171 1.4 0.409 C 1.12 -0.311 -0.25 -0.001 0.04 0.727 Z",
    fill: "rgb(0,71,124)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.04 0.727 L 0.97 0.359 L 0.969 0.358 L 0.04 0.727 Z M 4.83 11.911 L 5.74 11.497 L 5.738 11.493 L 4.83 11.911 Z M 6.19 11.593 L 7.099 11.176 L 7.098 11.175 L 6.19 11.593 Z M 1.4 0.409 L 0.468 0.771 L 0.47 0.777 L 1.4 0.409 Z M 0.04 0.727 L -0.89 1.096 C 0.607 4.875 2.214 8.619 3.922 12.329 L 4.83 11.911 L 5.738 11.493 C 4.046 7.814 2.453 4.103 0.97 0.359 L 0.04 0.727 Z M 4.83 11.911 L 3.92 12.325 C 4.356 13.284 5.389 13.394 5.975 13.261 C 6.299 13.188 6.696 13.008 6.968 12.637 C 7.284 12.206 7.322 11.663 7.099 11.176 L 6.19 11.593 L 5.281 12.009 C 5.261 11.966 5.233 11.877 5.243 11.757 C 5.254 11.635 5.3 11.53 5.356 11.454 C 5.408 11.383 5.461 11.346 5.487 11.331 C 5.515 11.315 5.531 11.311 5.532 11.311 C 5.534 11.31 5.534 11.311 5.534 11.311 C 5.533 11.311 5.533 11.311 5.533 11.311 C 5.533 11.311 5.534 11.311 5.538 11.311 C 5.542 11.312 5.548 11.313 5.557 11.317 C 5.597 11.331 5.688 11.382 5.74 11.497 L 4.83 11.911 Z M 6.19 11.593 L 7.098 11.175 C 5.406 7.496 3.813 3.785 2.33 0.041 L 1.4 0.409 L 0.47 0.777 C 1.967 4.556 3.574 8.301 5.282 12.011 L 6.19 11.593 Z M 1.4 0.409 L 2.332 0.047 C 1.936 -0.973 0.868 -1.084 0.282 -0.95 C -0.045 -0.874 -0.432 -0.694 -0.703 -0.339 C -1.013 0.066 -1.089 0.595 -0.889 1.097 L 0.04 0.727 L 0.969 0.358 C 0.989 0.407 1.01 0.495 0.995 0.607 C 0.98 0.719 0.935 0.812 0.885 0.877 C 0.838 0.938 0.793 0.969 0.77 0.982 C 0.746 0.996 0.733 0.999 0.731 0.999 C 0.728 1 0.727 1 0.723 1 C 0.72 1 0.704 0.999 0.679 0.989 C 0.619 0.967 0.517 0.898 0.468 0.771 L 1.4 0.409 Z",
    fill: "rgb(244,124,32)",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 183.571,
      top: 21.1,
      width: 5.57,
      height: 11.686,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.57,
      height: 11.686,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.570,
    height: 11.686,
    viewBox: "0 0 5.570 11.686",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 5.57,
      height: 11.686,
      color: "rgb(0,71,124)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.04 0.721 C 1.42 4.24 2.79 7.758 4.17 11.277 C 4.45 11.997 5.82 11.687 5.53 10.959 C 4.15 7.44 2.78 3.922 1.4 0.403 C 1.12 -0.309 -0.25 0.001 0.04 0.721 Z",
    fill: "rgb(0,71,124)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.04 0.721 L 0.971 0.356 L 0.968 0.348 L 0.04 0.721 Z M 4.17 11.277 L 5.102 10.915 L 5.101 10.912 L 4.17 11.277 Z M 5.53 10.959 L 4.599 11.324 L 4.601 11.328 L 5.53 10.959 Z M 1.4 0.403 L 2.331 0.038 L 2.331 0.037 L 1.4 0.403 Z M 0.04 0.721 L -0.891 1.087 C -0.201 2.845 0.486 4.604 1.174 6.363 C 1.861 8.122 2.549 9.882 3.239 11.642 L 4.17 11.277 L 5.101 10.912 C 4.411 9.153 3.724 7.394 3.036 5.635 C 2.349 3.876 1.661 2.116 0.971 0.356 L 0.04 0.721 Z M 4.17 11.277 L 3.238 11.639 C 3.635 12.659 4.703 12.77 5.288 12.636 C 5.616 12.56 6.002 12.38 6.274 12.025 C 6.583 11.62 6.659 11.091 6.459 10.589 L 5.53 10.959 L 4.601 11.328 C 4.581 11.279 4.56 11.191 4.575 11.079 C 4.59 10.967 4.635 10.874 4.685 10.809 C 4.732 10.748 4.777 10.717 4.8 10.704 C 4.824 10.69 4.838 10.687 4.84 10.687 C 4.842 10.686 4.844 10.686 4.847 10.686 C 4.851 10.686 4.866 10.687 4.891 10.697 C 4.951 10.719 5.053 10.788 5.102 10.915 L 4.17 11.277 Z M 5.53 10.959 L 6.461 10.593 C 5.771 8.835 5.084 7.076 4.396 5.317 C 3.709 3.558 3.021 1.798 2.331 0.038 L 1.4 0.403 L 0.469 0.768 C 1.159 2.527 1.846 4.285 2.534 6.045 C 3.221 7.804 3.909 9.564 4.599 11.324 L 5.53 10.959 Z M 1.4 0.403 L 2.331 0.037 C 1.93 -0.981 0.859 -1.082 0.282 -0.949 C -0.043 -0.875 -0.428 -0.696 -0.701 -0.343 C -1.013 0.061 -1.091 0.59 -0.888 1.095 L 0.04 0.721 L 0.968 0.348 C 0.988 0.399 1.01 0.49 0.995 0.605 C 0.979 0.72 0.933 0.814 0.882 0.879 C 0.835 0.94 0.79 0.971 0.767 0.983 C 0.744 0.997 0.732 0.999 0.731 1 C 0.729 1 0.728 1 0.726 1 C 0.723 1 0.709 0.999 0.685 0.99 C 0.626 0.969 0.521 0.9 0.469 0.769 L 1.4 0.403 Z",
    fill: "rgb(244,124,32)",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 188.469,
      top: 21.49,
      width: 2.655,
      height: 6.823,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.655,
      height: 6.823,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 2.655,
    height: 6.823,
    viewBox: "0 0 2.655 6.823",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 2.655,
      height: 6.823,
      color: "rgb(0,71,124)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.033 0.726 C 0.663 2.535 1.073 4.37 1.243 6.255 C 1.313 7.009 2.723 7.017 2.653 6.255 C 2.473 4.269 2.053 2.326 1.393 0.416 C 1.143 -0.313 -0.227 -0.003 0.033 0.726 Z",
    fill: "rgb(0,71,124)",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 0.033 0.726 L 0.977 0.397 L 0.975 0.39 L 0.033 0.726 Z M 1.243 6.255 L 0.247 6.344 L 0.247 6.347 L 1.243 6.255 Z M 2.653 6.255 L 1.657 6.345 L 1.657 6.346 L 2.653 6.255 Z M 1.393 0.416 L 0.447 0.74 L 0.448 0.742 L 1.393 0.416 Z M 0.033 0.726 L -0.912 1.054 C -0.307 2.792 0.085 4.546 0.247 6.344 L 1.243 6.255 L 2.239 6.165 C 2.061 4.193 1.632 2.278 0.977 0.397 L 0.033 0.726 Z M 1.243 6.255 L 0.247 6.347 C 0.296 6.879 0.594 7.274 0.944 7.509 C 1.275 7.732 1.656 7.822 1.997 7.823 C 2.332 7.824 2.738 7.738 3.08 7.476 C 3.465 7.181 3.699 6.71 3.648 6.163 L 2.653 6.255 L 1.657 6.346 C 1.651 6.284 1.659 6.193 1.703 6.095 C 1.746 5.998 1.809 5.93 1.863 5.889 C 1.915 5.849 1.957 5.834 1.976 5.829 C 1.986 5.826 1.993 5.824 1.997 5.824 C 2.001 5.823 2.003 5.823 2.003 5.823 C 2.004 5.823 2.004 5.823 2.004 5.823 C 2.005 5.823 2.006 5.824 2.009 5.824 C 2.014 5.826 2.033 5.832 2.061 5.85 C 2.09 5.87 2.132 5.906 2.17 5.965 C 2.21 6.028 2.232 6.098 2.238 6.162 L 1.243 6.255 Z M 2.653 6.255 L 3.649 6.164 C 3.461 4.097 3.024 2.074 2.338 0.089 L 1.393 0.416 L 0.448 0.742 C 1.082 2.577 1.484 4.441 1.657 6.345 L 2.653 6.255 Z M 1.393 0.416 L 2.339 0.091 C 1.974 -0.971 0.881 -1.083 0.3 -0.951 C -0.029 -0.877 -0.409 -0.699 -0.682 -0.356 C -0.99 0.031 -1.092 0.549 -0.909 1.062 L 0.033 0.726 L 0.975 0.39 C 0.994 0.444 1.01 0.533 0.992 0.641 C 0.974 0.748 0.929 0.833 0.882 0.891 C 0.839 0.945 0.797 0.973 0.777 0.984 C 0.757 0.996 0.745 0.999 0.743 0.999 C 0.741 1 0.738 1 0.732 1 C 0.726 1 0.706 0.998 0.676 0.986 C 0.601 0.957 0.493 0.875 0.447 0.74 L 1.393 0.416 Z",
    fill: "rgb(244,124,32)",
    fillRule: "nonzero"
  }))))));
}

// Globals for scripts loaded after this file.
window.PlayButton = PlayButton;
window.HomeScreen = HomeScreen;