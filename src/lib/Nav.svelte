<!-- Navbar.svelte -->
<script>
    let isOpen = false;

    function toggleMenu() {
        isOpen = !isOpen;
    }
</script>

<nav class="bg-blue-500 p-4">
    <div class="container mx-auto flex justify-between items-center">
        <a href="/" class="text-white text-2xl font-extrabold">School </a>
        <div class="hidden md:flex space-x-4">
            <a href="/" class="text-white hover:text-blue-300">Home</a>
            <a href="/" class="text-white hover:text-blue-300">About</a>
            <a href="/" class="text-white hover:text-blue-300">Services</a>
            <a href="/" class="text-white hover:text-blue-300">Contact</a>
        </div>
        <div class="md:hidden">
            <!-- Hamburger menu for mobile -->
            <button on:click={toggleMenu} class="text-white p-2 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
        </div>
    </div>
    <div class={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <!-- Mobile menu -->
        <a href="/" class="block text-white p-2 hover:text-blue-300">Home</a>
        <a href="/" class="block text-white p-2 hover:text-blue-300">About</a>
        <a href="/" class="block text-white p-2 hover:text-blue-300">Services</a>
        <a href="/" class="block text-white p-2 hover:text-blue-300">Contact</a>
    </div>
</nav>
