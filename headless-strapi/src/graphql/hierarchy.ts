export default (strapi) =>
  ({ nexus }) => ({
    types: [
      nexus.objectType({
        name: "Breadcrumb",
        definition(t) {
          t.string("label");
          t.string("href");
          t.boolean("current");
        },
      }),
      nexus.extendType({
        type: "HierarchyEntity",
        definition(t) {
          t.list.string("childIds", {
            async resolve(root) {
              const hierarchyId = root.id;
              // find all hierarchies with parent id === hierarchyId
              // do that recursively

              const childIds: number[] = [];
              async function getChildren(parentIds) {
                const children = await strapi.db
                  .query("api::hierarchy.hierarchy")
                  .findMany({
                    where: {
                      parent: parentIds,
                    },
                  });
                if (!children || children?.length === 0) return;
                children.forEach((c: any) => childIds.push(c.id));
                await getChildren(children.map((c) => c.id));
              }

              try {
                await getChildren([hierarchyId]);
              } catch (e: any) {
                console.log("error getting children", e.message);
                throw new Error("Unexpected Error");
              }
              return childIds;
            },
          });
          t.list.field("parents", {
            type: "Breadcrumb",
            async resolve(root) {
              const hierarchyId = root.id;
              // get all parents

              if (!hierarchyId) return [];

              const breadcrumbs: any[] = [];

              async function getParent(parentId) {
                const hierarchyItem = await strapi.db
                  .query("api::hierarchy.hierarchy")
                  .findOne({
                    where: {
                      id: parentId,
                      locale: root.locale,
                    },
                    populate: ["parent", "page"],
                  });
                if (!hierarchyItem) return;
                const crumb = {
                  label: hierarchyItem.label,
                  href: hierarchyItem.page?.path || "#",
                };
                breadcrumbs.unshift(crumb);
                if (hierarchyItem.parent?.id) {
                  await getParent(hierarchyItem.parent?.id);
                }
              }

              try {
                await getParent(hierarchyId);
              } catch (e: any) {
                console.log("error getting children", e.message);
                throw new Error("Unexpected Error");
              }
              return breadcrumbs;
            },
          });
        },
      }),
    ],
  });
