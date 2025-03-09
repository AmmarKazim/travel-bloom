window.document.addEventListener("DOMContentLoaded", function main() {
  $("#clearQuery").on("click", (e) => {
    $("#queryInput").val("");
    $(".cards").html("");
    $(".cards").append(`<p class="text-light">
          Please enter a valid search query (beach, temple, india)
        </p>`);
  });
  $("#searchQuery").on("click", (e) => {
    let query = $("#queryInput").val();
    try {
      query = query.trim().toLowerCase();
      if (query.length == 0) {
        Swal.fire({
          title: "Empty query",
          icon: "info",
          text: "Please enter a non-empty search query",
        });
      } else {
        switch (query) {
          case "beach":
            $(".cards").html("");
            $(".cards").append(
              `<h6 class="bg-success p-3 rounded-3 fw-bold text-light">Current local time (Maldives): 11:57:23 AM </h6>`
            );
            $(".cards").append(`
                <article class="card border-0 my-2 shadow rounded-3">
                    <img src="public/assets/beach1.jpg" class="card-img-top" alt="maldives beach 1" />
                    <div class="card-body">
                        <h5 class="card-title">Maldives Beach 1</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                            voluptates, voluptatum, quia, quae, quisquam.
                        </p>
                        <button class="btn btn-secondary px-4">Visit</button>
                    </div>
                </article>`);
            $(".cards").append(`
                    <article class="card border-0 my-2 shadow rounded-3">
                        <img src="public/assets/beach2.jpg" class="card-img-top" alt="maldives beach 2" />
                        <div class="card-body">
                            <h5 class="card-title">Maldives Beach 2</h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                                voluptates, voluptatum, quia, quae, quisquam.
                            </p>
                            <button class="btn btn-secondary px-4">Visit</button>
                        </div>
                    </article>`);
            break;
          case "temple":
            $(".cards").html("");
            $(".cards").append(
              `<h6 class="bg-success p-3 rounded-3 fw-bold text-light">Current local time (India): 09:33:28 AM </h6>`
            );
            $(".cards").append(`
                <article class="card border-0 my-2 shadow rounded-3">
                    <img src="public/assets/temple1.jpg" class="card-img-top" alt="delhi mosque" />
                    <div class="card-body">
                        <h5 class="card-title">Delhi Mosque</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                            voluptates, voluptatum, quia, quae, quisquam.
                        </p>
                        <button class="btn btn-secondary px-4">Visit</button>
                    </div>
                </article>`);
            $(".cards").append(`
                    <article class="card border-0 my-2 shadow rounded-3">
                        <img src="public/assets/temple2.jpg" class="card-img-top" alt="amritsar temple" />
                        <div class="card-body">
                            <h5 class="card-title">Amritsar Temple</h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                                voluptates, voluptatum, quia, quae, quisquam.
                            </p>
                            <button class="btn btn-secondary px-4">Visit</button>
                        </div>
                    </article>`);
            break;
          case "india":
            $(".cards").html("");
            $(".cards").append(
              `<h6 class="bg-success p-3 rounded-3 fw-bold text-light">Current local time (India): 09:34:00 AM </h6>`
            );
            $(".cards").append(`
                <article class="card border-0 my-2 shadow rounded-3">
                    <img src="public/assets/india1.jpg" class="card-img-top" alt="taj mahal" />
                    <div class="card-body">
                        <h5 class="card-title">Taj Mahal</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                            voluptates, voluptatum, quia, quae, quisquam.
                        </p>
                        <button class="btn btn-secondary px-4">Visit</button>
                    </div>
                </article>`);
            $(".cards").append(`
                    <article class="card border-0 my-2 shadow rounded-3">
                        <img src="public/assets/india2.jpg" class="card-img-top" alt="gateway of india" />
                        <div class="card-body">
                            <h5 class="card-title">Gateway of India</h5>
                            <p class="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
                                voluptates, voluptatum, quia, quae, quisquam.
                            </p>
                            <button class="btn btn-secondary px-4">Visit</button>
                        </div>
                    </article>`);
            break;
          default:
            Swal.fire({
              title: "Invalid query",
              icon: "error",
              text: "Please enter a valid search query (beach, temple, india)",
            });
            break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  });
});
