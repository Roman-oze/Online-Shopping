import OrderSummary from "./OrderSummary";

export default function CardSidebar(){
    return (
        <>
              
      <div class="lg:col-span-1">
        <div class="bg-white rounded-lg p-6 border border-gray-200">
          <h2 class="text-2xl font-bold mb-6">YOUR CART</h2>

          <div class="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
            <div class="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
              <img src="./assets/img/image 9-2.png" alt="Gradient Graphic T-shirt"
                class="h-full w-auto object-cover"/>
            </div>
            <div class="flex-grow">
              <div class="flex justify-between">
                <h3 class="font-medium">Gradient Graphic T-shirt</h3>
                <span class="text-red-500 text-sm">×</span>
              </div>
              <p class="text-sm text-gray-500">Size: Large</p>
              <p class="text-sm text-gray-500">Color: White</p>
              <div class="flex justify-between items-center mt-2">
                <p class="font-bold">$145</p>
                <div class="flex items-center space-x-2">
                  <button class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">−</button>
                  <span class="text-sm">1</span>
                  <button class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">+</button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
            <div class="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
              <img src="./assets/img/image 9-2.png" alt="Checkered Shirt" class="h-full w-auto object-cover"/>
            </div>
            <div class="flex-grow">
              <div class="flex justify-between">
                <h3 class="font-medium">Checkered Shirt</h3>
                <span class="text-red-500 text-sm">×</span>
              </div>
              <p class="text-sm text-gray-500">Size: Medium</p>
              <p class="text-sm text-gray-500">Color: Red</p>
              <div class="flex justify-between items-center mt-2">
                <p class="font-bold">$180</p>
                <div class="flex items-center space-x-2">
                  <button class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">−</button>
                  <span class="text-sm">1</span>
                  <button class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">+</button>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
            <div class="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
              <img src="./assets/img/image 9-2.png" alt="Skinny Fit Jeans" class="h-full w-auto object-cover"/>
            </div>
            <div class="flex-grow">
              <div class="flex justify-between">
                <h3 class="font-medium">Skinny Fit Jeans</h3>
                <span class="text-red-500 text-sm">×</span>
              </div>
              <p class="text-sm text-gray-500">Size: Large</p>
              <p class="text-sm text-gray-500">Color: Blue</p>
              <div class="flex justify-between items-center mt-2">
                <p class="font-bold">$240</p>
                <div class="flex items-center space-x-2">
                  <button class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">−</button>
                  <span class="text-sm">1</span>
                  <button class="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">+</button>
                </div>
              </div>
            </div>
          </div>

        <OrderSummary />
        </div>
      </div>
        </>
    );
}