interface IDocOptions {
  tagGroupsName: string;
  tag?: string;
  content?: any;
  tags?: string[];
}

export const apiDescription = `# Introduction\n Verifone-API, is built as a RESTful interface.`;
export const apiTitle = "Verifone API Listing and Use Case";

export const authTags = ["Authentication"];
export const productsListTags = ["Products API"];

export const loginCheck: IDocOptions = {
  tagGroupsName: "Login",
  tags: authTags
};

export const productsListAPI: IDocOptions = {
  tagGroupsName: "Product's API",
  tags: productsListTags
};

export const xTagGroups = [
  {
    name: loginCheck.tagGroupsName,
    tags: loginCheck.tags
  },
  {
    name: productsListAPI.tagGroupsName,
    tags: productsListAPI.tags
  }
];
