export default {
  fetch(request, env) {
    return env.VISITS_API.fetch(request);
  },
};
