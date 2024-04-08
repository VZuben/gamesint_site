export const _data = {
    nodes: [
      {
        id: "AWS",
        name: "AWS",
        label: "1",
        title: "AWS",
        shape: "image",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qneFgROiufDyIrsXWpq_GhoQWnnxHuoclPljXeXgtlcGEParu75dPQ4TLafJeLJssXc&usqp=CAU",
        size: 20,
        cost: "$1000"
      },
      {
        id: "IBM",
        color: "blue",
        shape: "image",
        label: "2",
        title: "IBM",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/24/IBM_Cloud_logo.png",
        size: 20,
        cost: "$1000"
      },
      {
        id: "SQL",
        color: "blue",
        shape: "image",
        title: "SQL",
        label: "3",
        image:
          "https://thumbs.dreamstime.com/b/sql-database-icon-logo-design-ui-ux-app-orange-inscription-shadow-96841969.jpg",
        size: 20,
        cost: "$1000"
      },
      {
        id: "S3",
        color: "blue",
        shape: "image",
        // label:"Node 2",
        title: "S3",
        label: "4",
        image: "https://sonraisecurity.com/wp-content/uploads/aws-s3-icon.png",
        size: 20,
        cost: "$1000"
      },
      {
        id: "Azure",
        color: "blue",
        shape: "image",
        // label:"Node 3",
        label: "5",
        title: "Azure",
        image:
          "https://www.openbravo.com/blog/wp-content/uploads/2020/03/azure-cloud.jpg",
        size: 20,
        cost: "$1000"
      },
      {
        id: "MongoDB",
        color: "blue",
        shape: "image",

        label: "6",
        title: "MongoDB",
        image: "https://cyclr.com/wp-content/uploads/2022/03/ext-553.png",
        size: 20,
        cost: "$1000"
      },
      {
        id: "ELB",
        color: "purple",
        shape: "image",

        label: "7",
        title: "ELB",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPd9rU5qaOuUmt2qwyBi6u_Xrn4PMV21SXNdHj2Me65OgDCStw4chydnmGa0-s1a7e_w&usqp=CAU",
        size: 20,
        cost: "$1000"
      },
      {
        id: "Saas",
        color: "purple",
        shape: "image",

        label: "8",
        title: "Saas",
        image: "https://ongoingwarehouse.com/Pictures/MicrosoftTeams-image.png",
        size: 20,
        cost: "$1000"
      },
      {
        id: "Notion",
        color: "purple",
        shape: "image",

        label: "9",
        title: "Notion",
        image:
          "https://cdn.icon-icons.com/icons2/2429/PNG/512/notion_logo_icon_147257.png",
        size: 20,
        cost: "$1000"
      },
      {
        id: "Appengine",
        label: "10",
        color: "purple",
        title: "Appengine",
        shape: "image",
        image:
          "https://www.howtogeek.com/wp-content/uploads/csit/2020/06/29add7ff.png?height=200p&trim=2,2,2,2",
        size: 20,
        cost: "$1000"
      },
      {
        id: "Sematext",
        label: "11",
        color: "purple",
        title: "Sematext",
        shape: "image",
        image:
          "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d6fa77d54b71a3a68842371d85aba442/sematext-cloud.jpg",
        size: 20,
        cost: "$1000"
      },
      {
        id: "Jenkins",
        label: "12",
        color: "purple",
        title: "Jenkins",
        shape: "image",
        image:
          "https://www.learntek.org/blog/wp-content/uploads/2018/05/jenkins_image.png",
        size: 20,
        cost: "$1000"
      },
      {
        id: "Github",
        label: "13",
        color: "purple",
        title: "Github",
        shape: "image",
        image: "https://foundations.projectpythia.org/_images/GitHub-logo.png",
        size: 20,
        cost: "$1000"
      }
    ],
    edges: [
      { from: "AWS", to: "IBM", color: "#12f90a" },
      { from: "AWS", to: "SQL", color: "red" },
      { from: "IBM", to: "S3", color: "red" },
      { from: "IBM", to: "Azure", color: "red" },
      { from: "IBM", to: "MongoDB", color: "red" },
      { from: "MongoDB", to: "AWS", color: "red" },
      { from: "Azure", to: "MongoDB", color: "red" },
      { from: "MongoDB", to: "ELB", color: "red" },
      { from: "AWS", to: "ELB", color: "purple" },
      { from: "ELB", to: "Saas", color: "purple" },
      { from: "Saas", to: "Notion", color: "purple" },
      { from: "Notion", to: "Appengine", color: "purple" },
      { from: "Github", to: "Jenkins", color: "purple" },
      { from: "Sematext", to: "Appengine", color: "purple" },
      { from: "Github", to: "Sematext", color: "purple" },
      { from: "Sematext", to: "AWS", color: "purple" },
      { from: "Jenkins", to: "ELB", color: "purple" }
    ]
  };
