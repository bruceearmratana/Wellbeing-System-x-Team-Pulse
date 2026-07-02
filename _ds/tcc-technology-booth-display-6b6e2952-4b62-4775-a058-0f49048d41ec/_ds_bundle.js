/* @ds-bundle: {"format":3,"namespace":"TCCTechnologyDesignSystem_6b6e29","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7556424c831c","components/core/Button.jsx":"492646f2eb53","components/core/Card.jsx":"22c462ec6656","components/core/Stat.jsx":"edc1199d9e9d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TCCTechnologyDesignSystem_6b6e29 = window.TCCTechnologyDesignSystem_6b6e29 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Status / category badge. */
function Badge({
  variant = 'neutral',
  children,
  style,
  ...rest
}) {
  const variants = {
    neutral: {
      background: 'var(--tcc-steel-100)',
      color: 'var(--tcc-steel-700)'
    },
    brand: {
      background: 'var(--tcc-navy-050)',
      color: 'var(--tcc-navy-700)'
    },
    accent: {
      background: 'var(--tcc-cyan-100)',
      color: 'var(--tcc-cyan-600)'
    },
    success: {
      background: '#e2f3ea',
      color: 'var(--tcc-success)'
    },
    warning: {
      background: '#fbf0df',
      color: '#9a6418'
    },
    danger: {
      background: '#fbe4e5',
      color: 'var(--tcc-danger)'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: 'var(--fs-caption)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      ...variants,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TCC Technology primary button.
 * Variants: primary (navy), accent (cyan), secondary (outline), ghost.
 */
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  disabled = false,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      font: 'var(--fs-body-sm)',
      radius: 'var(--radius-sm)'
    },
    md: {
      padding: '11px 22px',
      font: 'var(--fs-body)',
      radius: 'var(--radius-sm)'
    },
    lg: {
      padding: '15px 30px',
      font: 'var(--fs-body-lg)',
      radius: 'var(--radius-md)'
    }
  }[size];
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: 'var(--text-on-brand)',
      border: '1px solid var(--brand-primary)'
    },
    accent: {
      background: 'var(--brand-accent)',
      color: '#062a33',
      border: '1px solid var(--brand-accent)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-brand)',
      border: '1px solid var(--border-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-brand)',
      border: '1px solid transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--fw-semibold)',
      fontSize: sizes.font,
      lineHeight: 1,
      padding: sizes.padding,
      borderRadius: sizes.radius,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
      letterSpacing: '0.01em',
      ...variants,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(1px)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container. Elevation: flat | raised | brand (navy). */
function Card({
  elevation = 'raised',
  accent = false,
  children,
  style,
  ...rest
}) {
  const elev = {
    flat: {
      background: 'var(--surface-card)',
      boxShadow: 'none',
      border: '1px solid var(--border-subtle)'
    },
    raised: {
      background: 'var(--surface-card)',
      boxShadow: 'var(--shadow-md)',
      border: '1px solid var(--border-subtle)'
    },
    brand: {
      background: 'var(--surface-inverse)',
      boxShadow: 'var(--shadow-lg)',
      border: '1px solid rgba(255,255,255,0.08)',
      color: 'var(--text-on-brand)'
    }
  }[elevation];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      position: 'relative',
      overflow: 'hidden',
      ...elev,
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '4px',
      background: 'linear-gradient(180deg, var(--tcc-cyan-500), var(--tcc-navy-600))'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big metric tile — booth/marketing headline numbers. */
function Stat({
  value,
  unit,
  label,
  align = 'left',
  inverse = false,
  style,
  ...rest
}) {
  const fg = inverse ? 'var(--text-on-brand)' : 'var(--text-brand)';
  const sub = inverse ? 'rgba(255,255,255,0.66)' : 'var(--text-secondary)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--fw-light)',
      fontSize: 'var(--fs-display-lg)',
      lineHeight: 1,
      color: fg,
      letterSpacing: 'var(--ls-display)',
      display: 'flex',
      alignItems: 'baseline',
      gap: '4px',
      justifyContent: align === 'center' ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", null, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--fs-heading-md)',
      color: 'var(--tcc-cyan-500)',
      fontWeight: 'var(--fw-regular)'
    }
  }, unit)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--fs-overline)',
      fontWeight: 'var(--fw-semibold)',
      letterSpacing: 'var(--ls-overline)',
      textTransform: 'uppercase',
      color: sub
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

})();
