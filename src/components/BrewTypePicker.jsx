import React from "react";

const styles = {
  outerContainer: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "1rem",
  },
  input: {
    visibility: "hidden",
  },
  label: {
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: "6rem",
    width: "6rem",
    borderRadius: "50%",
    outline: "none",
    background: "var(--off-white)",
  },
  imgHover: {
    height: "6rem",
    width: "6rem",
    outline: "black dotted 2px",
    background: "var(--off-white)",
    borderRadius: "50%",
  },
  imgChecked: {
    height: "6rem",
    width: "6rem",
    outline: "black solid 2px",
    background: "white",
    borderRadius: "50%",
  },
};

const BrewTypePicker = ({ type2icon, inputName }) => {
  const [hovered, setHovered] = React.useState(-1);
  const [checked, setChecked] = React.useState(-1);

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        {Object.entries(type2icon).map(([key, value]) => (
          <div key={key}>
            <input
              type="radio"
              value={key}
              id={key}
              name={inputName}
              style={styles.input}
              onChange={() => setChecked(key)}
            />
            <label
              title={key}
              htmlFor={key}
              style={styles.label}
              onMouseEnter={() => setHovered(key)}
              onMouseLeave={() => setHovered(-1)}
            >
              <img
                src={`assets/${value}`}
                alt={key}
                style={
                  key === checked
                    ? styles.imgChecked
                    : key === hovered
                    ? styles.imgHover
                    : styles.img
                }
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrewTypePicker;
