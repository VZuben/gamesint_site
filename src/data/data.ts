export const _data = {
    nodes: [
      {
        id: "AWS",
        description: 'descrição',
        shape: "image",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4qneFgROiufDyIrsXWpq_GhoQWnnxHuoclPljXeXgtlcGEParu75dPQ4TLafJeLJssXc&usqp=CAU",
        size: 20
      },
      {
        id: "IBM",
        description: 'descrição',
        shape: "image",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/2/24/IBM_Cloud_logo.png",
        size: 20
      },
      {
        id: "SQL",
        description: 'descrição',
        shape: "image",
        image:
          "https://thumbs.dreamstime.com/b/sql-database-icon-logo-design-ui-ux-app-orange-inscription-shadow-96841969.jpg",
        size: 20
      },
      {
        id: "S3",
        description: 'descrição',
        shape: "image",
        image: "https://sonraisecurity.com/wp-content/uploads/aws-s3-icon.png",
        size: 20
      },
      {
        id: "Azure",
        description: 'descrição',
        shape: "image",
        image:
          "https://www.openbravo.com/blog/wp-content/uploads/2020/03/azure-cloud.jpg",
        size: 20
      },
      {
        id: "MongoDB",
        description: 'descrição',
        shape: "image",
        image: "https://cyclr.com/wp-content/uploads/2022/03/ext-553.png",
        size: 20
      },
      {
        id: "ELB",
        description: 'descrição',
        shape: "image",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPd9rU5qaOuUmt2qwyBi6u_Xrn4PMV21SXNdHj2Me65OgDCStw4chydnmGa0-s1a7e_w&usqp=CAU",
        size: 20
      },
      {
        id: "Saas",
        description: 'descrição',
        shape: "image",
        image: "https://ongoingwarehouse.com/Pictures/MicrosoftTeams-image.png",
        size: 20
      },
      {
        id: "Notion",
        description: 'descrição',
        shape: "image",
        image:
          "https://cdn.icon-icons.com/icons2/2429/PNG/512/notion_logo_icon_147257.png",
        size: 20
      },
      {
        id: "Appengine",
        description: 'descrição',
        shape: "image",
        image:
          "https://www.howtogeek.com/wp-content/uploads/csit/2020/06/29add7ff.png?height=200p&trim=2,2,2,2",
        size: 20
      },
      {
        id: "Sematext",
        description: 'descrição',
        shape: "image",
        image:
          "https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_d6fa77d54b71a3a68842371d85aba442/sematext-cloud.jpg",
        size: 20
      },
      {
        id: "Jenkins",
        description: 'descrição',
        shape: "image",
        image:
          "https://www.learntek.org/blog/wp-content/uploads/2018/05/jenkins_image.png",
        size: 20
      },
      {
        id: "Github",
        description: 'descrição',
        shape: "image",
        image: "https://foundations.projectpythia.org/_images/GitHub-logo.png",
        size: 20
      }
    ],
    edges: [
      { from: "AWS", to: "IBM", color: "black" },
      { from: "AWS", to: "SQL", color: "black" },
      { from: "IBM", to: "S3", color: "black" },
      { from: "IBM", to: "Azure", color: "black" },
      { from: "IBM", to: "MongoDB", color: "black" },
      { from: "MongoDB", to: "AWS", color: "black" },
      { from: "Azure", to: "MongoDB", color: "black" },
      { from: "MongoDB", to: "ELB", color: "black" },
      { from: "AWS", to: "ELB", color: "black" },
      { from: "ELB", to: "Saas", color: "black" },
      { from: "Saas", to: "Notion", color: "black" },
      { from: "Notion", to: "Appengine", color: "black" },
      { from: "Github", to: "Jenkins", color: "black" },
      { from: "Sematext", to: "Appengine", color: "black" },
      { from: "Github", to: "Sematext", color: "black" },
      { from: "Sematext", to: "AWS", color: "black" },
      { from: "Jenkins", to: "ELB", color: "black" }
    ]
  };
