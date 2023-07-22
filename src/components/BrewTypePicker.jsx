import React, {useState} from "react";
import '../cssVar.css';

const styles = {
    input: {
        visibility: "hidden",
    },
    label: {
        cursor: "pointer",
    },
    img: {
        height: "8rem",
        width: "8rem",
        borderRadius: "50%",
        outline: "none",
        background: 'var(--off-white)',
    },
    imgHover: {
        height: "8rem",
        width: "8rem",
        outline: "black dotted 2px",
        background: 'var(--off-white)',
        borderRadius: "50%",
    },
    imgChecked: {
        height: "8rem",
        width: "8rem",
        outline: "black solid 2px",
        background: "white",
        borderRadius: "50%",
    },
};


const BrewTypePicker = ({ type2icon, inputName }) => {
    const [hovered, setHovered] = React.useState(-1);
    const [checked, setChecked] = React.useState(-1);

    return (
        <div>
            {Object.entries(type2icon).map(([key, value]) => (
                <React.Fragment key={key}>
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
                </React.Fragment>
            ))}
        </div>
    );
};

export default BrewTypePicker;