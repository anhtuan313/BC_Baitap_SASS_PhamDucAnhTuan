import ListUser from "../services/ListUser.js";

const listUser = new ListUser();

const renderList = (arr) => {
  return arr.reduce((contentHTML, item) => {
    return (contentHTML += `
                  <div class="col-3">
                      <div class="item">
                          <div class="image">
                              <img src="../../assets/img/${item.hinhAnh}">
                          </div>
                          <div class="content">
                              <div class="person">
                                  <span class="nationality">${item.ngonNgu}</span>
                                  <span class="name">${item.hoTen}</span>
                              </div>
                              <div class="text">
                                  <P>
                                      ${item.moTa}
                                  </P>
                              </div>
                          </div>
                      </div>
                  </div>
              `);
  }, "");
};

const fetchData = () => {
  listUser
    .callApi("QLND", "GET", null)
    .then((result) => {
      let user = [];

      result.data.forEach((item) => {
        if (item.loaiND === "GV") {
          user.push(item);
        }
      });

      document.getElementById("teacherList").innerHTML = renderList(user);
    })
    .catch((err) => {
      console.log(err);
    });
};

fetchData();
