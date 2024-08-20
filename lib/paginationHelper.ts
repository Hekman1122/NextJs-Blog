"use server";
import { prisma } from "@/lib/prisma";
export async function getArticleByPage(page: string | undefined) {
  let currentPage = parseInt(page ? page : "1");
  let totalArticles = await prisma.post.count();
  let articlePerPage = 3;
  let maxPage = Math.ceil(totalArticles / articlePerPage);
  return { currentPage, articlePerPage, totalArticles, maxPage };
}
