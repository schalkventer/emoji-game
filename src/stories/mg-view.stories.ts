import { html } from "lit-html";
import * as types from "../types";
import * as mocks from "./mocks";
import "../components";

export default {
  title: "mg-view",
};

export const Default = () => html`<mg-view .cards="${mocks.CARDS}"></mg-view>`;
