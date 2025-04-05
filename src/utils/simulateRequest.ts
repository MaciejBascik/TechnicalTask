export async function simulateRequest(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "blocked@domain.com") {
          reject(new Error("This email domain is blocked."));
        } else if (email === "slow@domain.com") {
          setTimeout(() => resolve(), 2000);
        } else if (email === "error@domain.com") {
          reject(new Error("Something went wrong."));
        } else {
          resolve();
        }
      }, 1000);
    });
  }
  