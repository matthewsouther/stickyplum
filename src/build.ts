import frontMatter from "front-matter";
import { marked } from "marked";
import fs from "fs-extra";

const EVENTS_DIR = "./events";
const DIST_DIR = "./dist-data";

const build = async () => {
  const files = await fs.readdir(EVENTS_DIR);
  const promises: Promise<any>[] = [];
  for (const file of files) {
    if (file.endsWith(".md")) promises.push(processFile(file));
  }
  const results = await Promise.all(promises);
  await fs.outputJson(`${DIST_DIR}/events.json`, results);
};

const processFile = async (file: string) => {
  const { attributes, body } = frontMatter(
    await fs.readFile(`${EVENTS_DIR}/${file}`, "utf8")
  );
  const html = marked.parse(body);
  return { ...(attributes as object), html };
};

build();
