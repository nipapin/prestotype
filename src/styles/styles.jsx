const logoStyle = { width: "150px", userSelect: "none" };
const toolbarStyle = { width: "100%", display: "flex", justifyContent: "space-between", boxSizing: "border-box" };
const appBoxStyle = { width: "100vw", height: "100vh", overflow: "hidden", boxSizing: "border-box" };
const toolbarButtonStyle = { fill: "white" };
const mainBoxStyle = { display: "flex", mt: "64px" };
const legengBoxStyle = { display: "flex", p: "8px", alignItems: "center" };
const counterStyle = { fontSize: "18px", fontWeight: "bold", color: "#5f5f5f" };
const counterLegendStyle = { ml: "8px", color: "#afafaf" };
const typeFieldBoxStyle = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    p: "16px",
    cursor: "text",
    minHeight: "60px",
    position: "relative",
};
const cursorStyle = { width: "2px", height: "24px", background: "#003585", opacity: 1, animation: `blink ${1000 / 1.5}ms infinite` };
const hiddenInputStyle = { position: "absolute", left: 0, width: "100%", height: 1, outline: 0, margin: 0, padding: 0, border: "none", zIndex: "-1", color: "transparent", background: "transparent" };
const textStyle = {
    whiteSpace: "pre",
    fontSize: "1.5vw",
};
const typeFieldMainBoxStyle = { display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "8px", boxShadow: "0 0 10px #dfdfdf", minHeight: "60px" };

export {
    logoStyle,
    toolbarStyle,
    appBoxStyle,
    toolbarButtonStyle,
    mainBoxStyle,
    legengBoxStyle,
    counterStyle,
    counterLegendStyle,
    typeFieldBoxStyle,
    cursorStyle,
    hiddenInputStyle,
    textStyle,
    typeFieldMainBoxStyle,
};
