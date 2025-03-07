const uploadInput = document.getElementById('upload')
const imagePreview = document.getElementById('image-preview')

imagePreview.addEventListener('click', () => {
  if (!imagePreview.querySelector('img')) {
    uploadInput.click()
  }
})

uploadInput.addEventListener('change', (event) => {
  const file = event.target.files[0]

  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.innerHTML = `
          <div class="relative w-full h-full">
            <img src="${e.target.result}" 
              class="absolute inset-0 w-full h-full object-cover rounded-full" 
              alt="Image preview" />
            <button
              type="button"
              onclick="deleteImage(event)"
              class="cursor-pointer absolute top-1/2 right-[-135px] transform -translate-y-1/2 text-[#EF372B] bg-[#FFE3E1] px-4 py-2.5 text-xs font-bold rounded-full"
            >
              DELETE PHOTO
            </button>
          </div>`
    }
    reader.readAsDataURL(file)
  }
})

function deleteImage(event) {
  event.stopPropagation()
  imagePreview.innerHTML = `
      <div class="absolute inset-0 rounded-full border border-[#EAECEE] overflow-hidden flex items-center justify-center">
        <span class="relative w-12 z-10 text-center text-sm font-semibold" id="addPhotoText">
          Add Photo
        </span>
      </div>`
}
