import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../userContext";
import { Searchbar } from "../SearchBar/Searchbar";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const { name, setPhone, phone, setName } = useUserContext();

  return (
    <>

      <section className="main-container center">
      <Searchbar />
        <div>
          <h3 className="main-heading">Welcome to Ottermap</h3>
          <p className="sub-heading">You can always change them later.</p>
        </div>

        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/maps");
            }}
            className="flex flex-col gap-md pad-xl input-form"
          >
            <div className="input-container flex-start flex-col gap-xs">
              <label className="input-label" htmlFor="full-name">
                First Name
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
                className="input"
                type="text"
                id="full-name"
                placeholder="Enter first name"
              />
            </div>

            <div className="input-container flex-start flex-col gap-xs">
              <label className="input-label" htmlFor="display-name">
                Phone
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
                className="input"
                type="number"
                id="display-name"
                placeholder="Phone number"
              />
            </div>

            <input className="submit-btn" type="submit" value="Login" />
          </form>
        </div>
      </section>
    </>
  );
}

export { Login };
