import { FormEvent, useCallback, useState } from "react";
import { usePassword } from "../../hooks/usePassword";
import { IPassword } from "../../interfaces/Password";
import './style.css'

const Input = () => {
  const [password, setPassword] = useState("");

  const { error, loading, passwordValidator, success } = usePassword();

  const handleSubmit = useCallback(async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body: IPassword = {
      password,
    }

    await passwordValidator(body);
  }, [password])

  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit}>
        <label className="label">
          Password
        </label>
        <div className="password">
          <input
            className="input"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="button"
            type="submit"
            disabled={loading}
          >
            Validate
          </button>
        </div>
        {loading ? (
          <>
            <p>Loading...</p>
          </>
        ) : (
          <>
            {error && (
              <div className="error">
                {error.map((error) => (
                  <p>{error}</p>
                ))}
              </div>
            )}
            {success && (
              <div className="success">
                <p>It's a valid password!</p>
              </div>
            )}
          </>
        )}

      </form>
    </>

  )
}

export default Input