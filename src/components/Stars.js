import Star from "./Star";
import { v4 as uuid } from 'uuid';
export default function Stars({ count }) {
  let stars = [];
  if (typeof (count) === "number" && count > 0 && count < 6) {
    for (let i = 0; i < count; i++) stars.push(uuid());

    return (
      <ul className="card-body-stars">
        {
          stars.map((el) => <Star key={el} />)
        }
      </ul>
    )
  } else return null
}

Stars.defaultProps = {
  count: 0
}