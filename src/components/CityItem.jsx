import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const CityItem = ({ city }) => {
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));
  const { currentCity, deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  function handleDelete(e) {
    e.preventDefault();
    deleteCity(id);
  }
  // console.log(position)
  return (
    <div>
      <li>
        <Link
          className={`${styles.cityItem} ${
            id === currentCity.id ? styles["cityItem--active"] : ""
          }`}
          to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        >
          <span className="styles.emoji">{emoji}</span>
          <h3 className={styles.cityName}>{cityName}</h3>
          <time className={styles.date}>({formatDate(date)})</time>
          <button className={styles.deleteBtn} onClick={handleDelete}>
            &times;
          </button>
        </Link>
      </li>
    </div>
  );
};

export default CityItem;
