// export const Overview = () => {
//     // get user details
//     // userdetails will be fetched on the basis of token saved
//     // store user details in redux

//     // Provide functionality to add category
//     // It should be wrapped in a layout
//     // 
// }

import { useEffect, useState } from "react";
import { SidebarLayout } from "../../../layouts/sidebarLayout";
import { CategoryTile } from "../../../components/CategoryTile";
// import { AddNewCategoryTile } from "../../components/AddNewCategoryTile/AddNewCategoryTile";
import { Analytics } from "../../../components/Analytics";
import { useSelector } from "react-redux";
// import { IProject } from "../../interface/Project.interface";
// import { AddCategoryModal } from "../../components/Modals/AddCategoryModal";
// import userService from "../../services/users";
export const Overview = () => {
  const [projects, setProjects] = useState(null);
//   const [addCategoryModalOpen, setAddCategoryModalOpen] =
//     useState(false);
//   const loggedInUser = useSelector((state) => state.loggedInUser);
//   const users = useSelector((state: any) => state.usersDatabase);

  const getTodaysDate = ()=> {
    const date = new Date();
    const day =
      date.getDate() <= 9 ? `0${date.getDate()}` : `${date.getDate()}`;
    const month =
      date.getMonth() + 1 <= 9
        ? `0${date.getMonth() + 1}`
        : `${date.getMonth() + 1}`;
    const year = `${date.getFullYear()}`;
    return [day, month, year].join(" / ");
  };

//   const getUserDetails = async (userId) => {
//     try {
//       const data = await userService.getUserById(userId);
//       console.log(data);
//       setProjects(data.projects)
//     } catch (error) {
//       console.log(error);
//     }
//   };

  // useEffect(() => {
  //   if (loggedInUser && users) {
  //     const requiredUser = users.find((user: any) => user.id === loggedInUser);
  //     if (requiredUser) {
  //       setProjects(requiredUser.projects);
  //     } else {
  //       console.error("User not found");
  //     }
  //   }
  // }, [loggedInUser, users]);

//   useEffect(() => {
//     (async () => {
//       if (loggedInUser) {
//         await getUserDetails(loggedInUser);
//       }
//     })();
//   }, [loggedInUser]);

  return (
    <>
      {/* <AddCategoryModal
        isOpen={addCategoryModalOpen}
        hasCloseButton={true}
        onCloseButtonClick={(e) => {
          e.preventDefault();
          setAddCategoryModalOpen(false);
        }}
      /> */}

      <SidebarLayout>
        <section>
          <h1 className="text-2xl font-extrabold text-gray-800">Today</h1>
          <p className="text-sm text-gray-700 mt-2">{getTodaysDate()}</p>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-800">Analytics</h2>
          <Analytics />
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-bold text-gray-800">Projects</h2>
          <section className="flex flex-wrap my-3 gap-2">
            {projects && projects.length > 0 ? (
              projects.map((project) => (
                <CategoryTile
                  key={project.name}
                 name={project.name.split("_").join(" ").length > 10 ? `${project.name.split("_").join(" ").slice(0, 10)} ...` : project.name.split("_").join(" ")}
                  url={`/project/${project.name}`}
                />
              ))
            ) : (
              <></>
            )}
            {/* <AddNewCategoryTile onClick={() => setAddCategoryModalOpen(true)} /> */}
          </section>
        </section>
      </SidebarLayout>
    </>
  );
};
