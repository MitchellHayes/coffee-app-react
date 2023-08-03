import React from "react";
import BrewTypePicker from "./BrewTypePicker";

const styles = {
  h2: {
    color: "var(--coffee-brown)",
    marginLeft: "1em",
  },
  coffeeCard: {
    borderRadius: "var(--border-radius)",
    padding: "15px",
    backgroundColor: "var(--off-white)",
    border: "2px solid var(--coffee-brown)",
    maxWidth: "var(--max-width)",
    display: "flex",
    flexWrap: "wrap",
    margin: "0 auto",
    boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.1)",
  },
  coffeeCardLabel: {
    width: "100%",
    margin: "10px 0",
    fontWeight: "bold",
  },
  coffeeCardInput: {
    borderRadius: "var(--border-radius)",
    padding: "10px",
    width: "100%",
    marginBottom: "10px",
    border: "1px solid #ccc",
  },
  coffeeBtn: {
    backgroundColor: "var(--coffee-brown)",
    borderRadius: "var(--border-radius)",
    border: "none",
    color: "var(--off-white)",
    cursor: "pointer",
    padding: "10px 20px",
    width: "100%",
    marginTop: "20px",
    textAlign: "center",
  },
};

const type2icon = {
  aeropress: "aeropress-icon.svg",
  "aeropress-inverted": "aeropress-inverted-icon.svg",
  chemex: "chemex-icon.svg",
  espresso: "espresso-icon.svg",
  frenchpress: "frenchpress-icon.svg",
  "hario-switch": "hario-switch-icon.svg",
  v60: "v60-icon.svg",
};

const BrewTrack: React.FC = () => {
  return (
    <form>
      <div style={styles.coffeeCard}>
        <label style={styles.coffeeCardLabel} htmlFor="sheetName">
          Sheet Name:
        </label>
        <select style={styles.coffeeCardInput} name="sheetName">
          <option value="Adam">Adam</option>
          <option value="Ben">Ben</option>
          <option value="Mitchell">Mitchell</option>
          <option value="Zach">Zach</option>
        </select>

        <label style={styles.coffeeCardLabel} htmlFor="brand">
          Coffee Brand:
        </label>
        <input
          style={styles.coffeeCardInput}
          type="text"
          id="brand"
          name="brand"
        />

        <label style={styles.coffeeCardLabel} htmlFor="blend">
          Blend:
        </label>
        <input
          style={styles.coffeeCardInput}
          type="text"
          id="blend"
          name="blend"
        />

        <label style={styles.coffeeCardLabel} htmlFor="roastDate">
          Roast Date:
        </label>
        <input
          style={styles.coffeeCardInput}
          type="date"
          id="roastDate"
          name="roastDate"
        />

        <label style={styles.coffeeCardLabel} htmlFor="brewDate">
          Brew Date:
        </label>
        <input
          style={styles.coffeeCardInput}
          type="date"
          id="brewDate"
          name="brewDate"
        />

        <label style={styles.coffeeCardLabel} htmlFor="brewStyle">
          Brew Style:
        </label>
        <BrewTypePicker type2icon={type2icon} inputName="brewStyle" />

        <label style={styles.coffeeCardLabel} htmlFor="coffeeDose">
          Coffee Weight (g):
        </label>
        <input
          style={styles.coffeeCardInput}
          type="number"
          min="0"
          step="0.1"
          id="coffeeDose"
          name="coffeeDose"
        />

        <label style={styles.coffeeCardLabel} htmlFor="bloomWater">
          Bloom Water (g):
        </label>
        <input
          style={styles.coffeeCardInput}
          type="number"
          min="0"
          step="0.1"
          id="bloomWater"
          name="bloomWater"
        />

        <label style={styles.coffeeCardLabel} htmlFor="bloomTime">
          Bloom Time (seconds):
        </label>
        <input
          style={styles.coffeeCardInput}
          type="number"
          min="0"
          id="bloomTime"
          name="bloomTime"
        />

        <label style={styles.coffeeCardLabel} htmlFor="brewWater">
          Brew Water (g):
        </label>
        <input
          style={styles.coffeeCardInput}
          type="number"
          min="0"
          step="0.1"
          id="brewWater"
          name="brewWater"
        />

        <label style={styles.coffeeCardLabel} htmlFor="brewTime">
          Brew Time (seconds):
        </label>
        <input
          style={styles.coffeeCardInput}
          type="number"
          min="0"
          id="brewTime"
          name="brewTime"
        />

        <label style={styles.coffeeCardLabel} htmlFor="totalOutput">
          Total Output (g):
        </label>
        <input
          style={styles.coffeeCardInput}
          type="number"
          min="0"
          step="0.1"
          id="totalOutput"
          name="totalOutput"
        />

        <label style={styles.coffeeCardLabel} htmlFor="notes">
          Notes:
        </label>
        <textarea
          style={styles.coffeeCardInput}
          id="notes"
          name="notes"
        ></textarea>
      </div>

      <button style={styles.coffeeBtn} type="submit">
        Submit
      </button>
    </form>
  );
};
export default BrewTrack;
