import { RateLimiter } from "limiter";

export const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: "min",
  fireImmediately: true,
});

// (tokensPerInterval: 3 && interval: "min")
// "Means that the rate limiter allows up to three requests per minute for each user or client."

// fireImmediately: true,
/* This means that the rate limiter will allow the first 3 requests to go through immediately without any delay,
as tokens are added immediately upon creation.*/
