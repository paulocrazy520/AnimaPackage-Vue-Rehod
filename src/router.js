import Vue from "vue";
import Router from "vue-router";
import Genesis from "./components/Genesis";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "*",
      component: Genesis,
      props: {
        line1:
          "https://anima-uploads.s3.amazonaws.com/projects/6398af509781867fb54f5b79/releases/6398b24826c5ac8f63772e8d/img/line-1-1@2x.png",
        spanText1: "Name",
        spanText2: "Price Registry Name",
        helpIcon:
          "https://anima-uploads.s3.amazonaws.com/projects/6398af509781867fb54f5b79/releases/6398b24826c5ac8f63772e8d/img/help-circle-1@2x.png",
        spanText3: "Create Price Registry",
      }
    },
  ],
});
