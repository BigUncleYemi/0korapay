const elem = document.querySelector('.dashboard_main_section-feature-carousel');
const carosuel = document.querySelector('.dashboard_main_section-feature-carousel');
const recent = document.querySelector('.dashboard_main_section-recent-book-section');
const all = document.querySelector('.dashboard_main_section-all-book-section');

const bookData = [
  {
    name: "The Effective Engineer",
    isAvalible: true,
    author: "Edmond Lau",
    yearPublish: "2009",
    rating: 4,
    genre: "Motivational",
    ownedBy: 31,
    saved: 29,
    img: "./img/effective_engineer.svg",
  },
  {
    name: "Built To Last",
    isAvalible: false,
    author: "Jim Collins, Jerry I. Porras",
    yearPublish: "2001",
    rating: 4,
    genre: "Business, Entrepreneurship",
    ownedBy: 31,
    saved: 29,
    img: "./img/built_to_last.svg",
  },
  {
    name: "The Lean Startup",
    isAvalible: true,
    author: "Eric Reis",
    yearPublish: "2005",
    rating: 4,
    genre: "Motivational",
    ownedBy: 31,
    saved: 29,
    img: "./img/the_lean_startup.svg",
  },
  {
    name: "Effective Python",
    isAvalible: true,
    author: "Diomidis Spinellis",
    yearPublish: "",
    rating: 4,
    genre: "Motivational",
    ownedBy: 31,
    saved: 29,
    img: "./img/effective_python.svg",
  },
  {
    name: "Big Magic",
    isAvalible: true,
    author: "Elizabeth Gilbert",
    yearPublish: "2014",
    rating: 4,
    genre: "Motivational",
    ownedBy: 31,
    saved: 29,
    img: "./img/big_magic.svg",
  },
];

function populateFeatData(item) {
  return(`
  <div class="dashboard_main_section-feature-carousel-cell">
    <img
      alt=${item.name}
      src=${item.img}
      class="dashboard_main_section-feature-carousel-cell-img"
    />
    <button class="dashboard_main_section-book-meta-mobile-btn">
      <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 14.2502C0 21.7061 6.04416 27.7502 13.5 27.7502C20.9558 27.7502 27 21.7061 27 14.2502C27 6.7944 20.9558 0.750244 13.5 0.750244C6.04416 0.750244 0 6.7944 0 14.2502Z" fill="white"/>
        <path d="M12 8.25024C12 9.07867 12.6716 9.75024 13.5 9.75024C14.3284 9.75024 15 9.07867 15 8.25024C15 7.42182 14.3284 6.75024 13.5 6.75024C12.6716 6.75024 12 7.42182 12 8.25024Z" fill="#999999"/>
        <path d="M12 14.2502C12 15.0787 12.6716 15.7502 13.5 15.7502C14.3284 15.7502 15 15.0787 15 14.2502C15 13.4218 14.3284 12.7502 13.5 12.7502C12.6716 12.7502 12 13.4218 12 14.2502Z" fill="#999999"/>
        <path d="M13.5 21.7502C12.6716 21.7502 12 21.0787 12 20.2502C12 19.4218 12.6716 18.7502 13.5 18.7502C14.3284 18.7502 15 19.4218 15 20.2502C15 21.0787 14.3284 21.7502 13.5 21.7502Z" fill="#999999"/>
      </svg>
    </button>
    <button class="dashboard_main_section-book-meta-mobile-btn-close">    
      <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.99998 5.54187L1.20836 0.750244L-6.10352e-05 1.95866L4.79156 6.75029L-1.8537e-05 11.5419L1.2084 12.7503L5.99998 7.9587L10.7915 12.7502L11.9999 11.5418L7.2084 6.75029L12 1.9587L10.7916 0.750287L5.99998 5.54187Z" fill="#DDDDDD"/>
      </svg>
    </button>
    <div id="overlay">
      <div class="dashboard_main_section-book-meta">
        <span id=${item.isAvalible ? "available": "borrowed"}>${item.isAvalible ? "Available": "Borrowed Out"}</span>
        <p>${item.name}</p>
        <span>${item.author}${item.yearPublish ? ` - ${item.yearPublish}` : ""}</span>
        <span>${item.genre}</span>
        <div class="dashboard_main_section-book-meta-stat">
          <div>
            <span>
              Ratings: ${item.rating.toFixed(1)}
            </span>
            <div>
              <svg width="72" height="11" viewBox="0 0 72 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="11">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H71.876V11H0V0Z" fill="white"/>
                </mask>
                <g mask="url(#mask0)">
                  <path id=${item.rating >= 1 ? "full" : "empty"} fill-rule="evenodd" clip-rule="evenodd" d="M6.03867 0L7.91383 3.62102L12.0773 4.19917L9.058 7.01383L9.77311 11L6.03867 9.12863L2.30423 11L3.01933 7.01383L0 4.19917L4.17939 3.62102L6.03867 0Z" fill="#EBA430"/>
                  <path id=${item.rating >= 2 ? "full" : "empty"} fill-rule="evenodd" clip-rule="evenodd" d="M20.4139 0L22.289 3.62102L26.4525 4.19917L23.4332 7.01383L24.1483 11L20.4139 9.12863L16.6794 11L17.3945 7.01383L14.3752 4.19917L18.5546 3.62102L20.4139 0Z" fill="#EBA430"/>
                  <path id=${item.rating >= 3 ? "full" : "empty"} fill-rule="evenodd" clip-rule="evenodd" d="M34.7891 0L36.6643 3.62102L40.8278 4.19917L37.8084 7.01383L38.5235 11L34.7891 9.12863L31.0547 11L31.7698 7.01383L28.7504 4.19917L32.9298 3.62102L34.7891 0Z" fill="#EBA430"/>
                  <path id=${item.rating >= 4 ? "full" : "empty"} fill-rule="evenodd" clip-rule="evenodd" d="M49.1643 0L51.0394 3.62102L55.2029 4.19917L52.1836 7.01383L52.8987 11L49.1643 9.12863L45.4298 11L46.1449 7.01383L43.1256 4.19917L47.305 3.62102L49.1643 0Z" fill="#EBA430"/>
                  <path id=${item.rating >= 5 ? "full" : "empty"} fill-rule="evenodd" clip-rule="evenodd" d="M63.5395 0L65.4147 3.62102L69.5782 4.19917L66.5589 7.01383L67.274 11L63.5395 9.12863L59.8051 11L60.5202 7.01383L57.5009 4.19917L61.6802 3.62102L63.5395 0Z" fill="#DDDDDD"/>
                </g>
              </svg>                        
            </div>
          </div>
          <div class="dashboard_main_section-book-meta-stat-count">
            <div>
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.41008 11C8.74665 11 9.0195 10.7324 9.0195 10.4022C9.0195 9.51523 8.75342 8.68925 8.29529 7.99685C8.87764 7.48512 9.64689 7.17392 10.4902 7.17392C12.3078 7.17392 13.7811 8.61926 13.7811 10.4022C13.7811 10.7324 14.054 11 14.3906 11C14.7272 11 15 10.7324 15 10.4022C15 7.95892 12.9809 5.97827 10.4902 5.97827C9.34305 5.97827 8.29589 6.39847 7.5 7.09054C6.70411 6.39847 5.65695 5.97827 4.50975 5.97827C2.01908 5.97827 0 7.95892 0 10.4022C0 10.7324 0.272849 11 0.609426 11C0.946002 11 1.21885 10.7324 1.21885 10.4022C1.21885 8.61926 2.69224 7.17392 4.50975 7.17392C5.35311 7.17392 6.12237 7.48512 6.70471 7.99684C6.24658 8.68924 5.9805 9.51523 5.9805 10.4022C5.9805 10.7324 6.25335 11 6.58992 11C6.9265 11 7.19935 10.7324 7.19935 10.4022C7.19935 9.92026 7.307 9.46299 7.5 9.05227C7.693 9.46299 7.80065 9.92026 7.80065 10.4022C7.80065 10.7324 8.0735 11 8.41008 11ZM4.50975 5.5C2.9615 5.5 1.70639 4.26878 1.70639 2.75C1.70639 1.23122 2.9615 0 4.50975 0C6.058 0 7.31311 1.23122 7.31311 2.75C7.31311 4.26878 6.058 5.5 4.50975 5.5ZM4.50975 4.30435C5.38485 4.30435 6.09426 3.60844 6.09426 2.75C6.09426 1.89156 5.38485 1.19565 4.50975 1.19565C3.63465 1.19565 2.92524 1.89156 2.92524 2.75C2.92524 3.60844 3.63465 4.30435 4.50975 4.30435ZM10.4902 4.30435C11.3653 4.30435 12.0748 3.60844 12.0748 2.75C12.0748 1.89156 11.3653 1.19565 10.4902 1.19565C9.61515 1.19565 8.90574 1.89156 8.90574 2.75C8.90574 3.60844 9.61515 4.30435 10.4902 4.30435ZM10.4902 5.5C8.942 5.5 7.68689 4.26878 7.68689 2.75C7.68689 1.23122 8.942 0 10.4902 0C12.0385 0 13.2936 1.23122 13.2936 2.75C13.2936 4.26878 12.0385 5.5 10.4902 5.5Z" fill="black"/>
              </svg>
              <span>
                ${item.ownedBy}
              </span>
            </div>
            <div>
              <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99811 9L9.13183 5.04131C9.68733 4.48902 10 3.73577 10 2.94978C10 2.16379 9.68733 1.41054 9.13183 0.85825C7.98818 -0.271677 6.16141 -0.287922 4.99811 0.82149C3.83279 -0.285828 2.00601 -0.266222 0.864401 0.865856C0.309892 1.41916 -0.00141469 2.17299 4.83342e-06 2.95897C0.00142436 3.74496 0.315452 4.49764 0.871956 5.04891L4.99811 9ZM1.57329 1.58205C1.98776 1.16659 2.5651 0.959575 3.14713 1.01773C3.72915 1.07588 4.25482 1.3931 4.58008 1.88247L4.99811 2.51626L5.41614 1.88247C5.48987 1.77408 5.57423 1.67343 5.66797 1.58205C6.43291 0.826396 7.658 0.826396 8.42294 1.58205C8.78603 1.94257 8.99106 2.43415 8.99248 2.94756C8.9939 3.46097 8.79159 3.95369 8.43049 4.31624L4.99811 7.60058L1.57329 4.32005C1.21003 3.95836 1.00562 3.46539 1.00562 2.95105C1.00562 2.4367 1.21003 1.94373 1.57329 1.58205Z" fill="black"/>
              </svg>
              <span>
                ${item.saved}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `)
}

function populateData(item) {
  return(`
    <div class="dashboard_main_section-book">
      <img
        alt=${item.name}
        src=${item.img}
        class="dashboard_main_section-book-img"
      />
      <div class="dashboard_main_section-book-meta">
        <span id=${item.isAvalible ? "available": "borrowed"}>${item.isAvalible ? "Available": "Borrowed Out"}</span>
        <p>${item.name}</p>
        <span>${item.author}${item.yearPublish ? ` - ${item.yearPublish}` : ""}</span>
        <span>${item.genre}</span>
        <div class="dashboard_main_section-book-meta-stat">
          <div>
            <span>
              Ratings: ${item.rating.toFixed(1)}
            </span>
            <div>
              <svg width="72" height="11" viewBox="0 0 72 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="11">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H71.876V11H0V0Z" fill="white"/>
                </mask>
                <g mask="url(#mask0)">
                  <path id=${item.rating >= 1 ? "full" : "empty"} fill-rule="evenodd" clip-rule="evenodd" d="M6.03867 0L7.91383 3.62102L12.0773 4.19917L9.058 7.01383L9.77311 11L6.03867 9.12863L2.30423 11L3.01933 7.01383L0 4.19917L4.17939 3.62102L6.03867 0Z" fill="#EBA430"/>
                  <path id=${item.rating >= 2 ? "full" : "empty"} fill-rule="evenodd" clip-rule="evenodd" d="M20.4139 0L22.289 3.62102L26.4525 4.19917L23.4332 7.01383L24.1483 11L20.4139 9.12863L16.6794 11L17.3945 7.01383L14.3752 4.19917L18.5546 3.62102L20.4139 0Z" fill="#EBA430"/>
                  <path id=${item.rating >= 3 ? "full" : "empty"} fill-rule="evenodd" clip-rule="evenodd" d="M34.7891 0L36.6643 3.62102L40.8278 4.19917L37.8084 7.01383L38.5235 11L34.7891 9.12863L31.0547 11L31.7698 7.01383L28.7504 4.19917L32.9298 3.62102L34.7891 0Z" fill="#EBA430"/>
                  <path id=${item.rating >= 4 ? "full" : "empty"} fill-rule="evenodd" clip-rule="evenodd" d="M49.1643 0L51.0394 3.62102L55.2029 4.19917L52.1836 7.01383L52.8987 11L49.1643 9.12863L45.4298 11L46.1449 7.01383L43.1256 4.19917L47.305 3.62102L49.1643 0Z" fill="#EBA430"/>
                  <path id=${item.rating >= 5 ? "full" : "empty"} fill-rule="evenodd" clip-rule="evenodd" d="M63.5395 0L65.4147 3.62102L69.5782 4.19917L66.5589 7.01383L67.274 11L63.5395 9.12863L59.8051 11L60.5202 7.01383L57.5009 4.19917L61.6802 3.62102L63.5395 0Z" fill="#DDDDDD"/>
                </g>
              </svg>                        
            </div>
          </div>
          <div class="dashboard_main_section-book-meta-stat-count">
            <div>
              <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.41008 11C8.74665 11 9.0195 10.7324 9.0195 10.4022C9.0195 9.51523 8.75342 8.68925 8.29529 7.99685C8.87764 7.48512 9.64689 7.17392 10.4902 7.17392C12.3078 7.17392 13.7811 8.61926 13.7811 10.4022C13.7811 10.7324 14.054 11 14.3906 11C14.7272 11 15 10.7324 15 10.4022C15 7.95892 12.9809 5.97827 10.4902 5.97827C9.34305 5.97827 8.29589 6.39847 7.5 7.09054C6.70411 6.39847 5.65695 5.97827 4.50975 5.97827C2.01908 5.97827 0 7.95892 0 10.4022C0 10.7324 0.272849 11 0.609426 11C0.946002 11 1.21885 10.7324 1.21885 10.4022C1.21885 8.61926 2.69224 7.17392 4.50975 7.17392C5.35311 7.17392 6.12237 7.48512 6.70471 7.99684C6.24658 8.68924 5.9805 9.51523 5.9805 10.4022C5.9805 10.7324 6.25335 11 6.58992 11C6.9265 11 7.19935 10.7324 7.19935 10.4022C7.19935 9.92026 7.307 9.46299 7.5 9.05227C7.693 9.46299 7.80065 9.92026 7.80065 10.4022C7.80065 10.7324 8.0735 11 8.41008 11ZM4.50975 5.5C2.9615 5.5 1.70639 4.26878 1.70639 2.75C1.70639 1.23122 2.9615 0 4.50975 0C6.058 0 7.31311 1.23122 7.31311 2.75C7.31311 4.26878 6.058 5.5 4.50975 5.5ZM4.50975 4.30435C5.38485 4.30435 6.09426 3.60844 6.09426 2.75C6.09426 1.89156 5.38485 1.19565 4.50975 1.19565C3.63465 1.19565 2.92524 1.89156 2.92524 2.75C2.92524 3.60844 3.63465 4.30435 4.50975 4.30435ZM10.4902 4.30435C11.3653 4.30435 12.0748 3.60844 12.0748 2.75C12.0748 1.89156 11.3653 1.19565 10.4902 1.19565C9.61515 1.19565 8.90574 1.89156 8.90574 2.75C8.90574 3.60844 9.61515 4.30435 10.4902 4.30435ZM10.4902 5.5C8.942 5.5 7.68689 4.26878 7.68689 2.75C7.68689 1.23122 8.942 0 10.4902 0C12.0385 0 13.2936 1.23122 13.2936 2.75C13.2936 4.26878 12.0385 5.5 10.4902 5.5Z" fill="black"/>
              </svg>
              <span>
              ${item.ownedBy}
              </span>
            </div>
            <div>
              <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.99811 9L9.13183 5.04131C9.68733 4.48902 10 3.73577 10 2.94978C10 2.16379 9.68733 1.41054 9.13183 0.85825C7.98818 -0.271677 6.16141 -0.287922 4.99811 0.82149C3.83279 -0.285828 2.00601 -0.266222 0.864401 0.865856C0.309892 1.41916 -0.00141469 2.17299 4.83342e-06 2.95897C0.00142436 3.74496 0.315452 4.49764 0.871956 5.04891L4.99811 9ZM1.57329 1.58205C1.98776 1.16659 2.5651 0.959575 3.14713 1.01773C3.72915 1.07588 4.25482 1.3931 4.58008 1.88247L4.99811 2.51626L5.41614 1.88247C5.48987 1.77408 5.57423 1.67343 5.66797 1.58205C6.43291 0.826396 7.658 0.826396 8.42294 1.58205C8.78603 1.94257 8.99106 2.43415 8.99248 2.94756C8.9939 3.46097 8.79159 3.95369 8.43049 4.31624L4.99811 7.60058L1.57329 4.32005C1.21003 3.95836 1.00562 3.46539 1.00562 2.95105C1.00562 2.4367 1.21003 1.94373 1.57329 1.58205Z" fill="black"/>
              </svg>
              <span>
              ${item.saved}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `)
}

Promise.resolve(
  bookData
).then(res => {
  console.log(res);
  let data = [...res, ...res];
  res.map(item => {
    recent.innerHTML += populateData(item);
  })
  data.map(item => {
    all.innerHTML += populateData(item);
    carosuel.innerHTML += populateFeatData(item);
  })
}).catch(e => {
  console.error(e);
})
