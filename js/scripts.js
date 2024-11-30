// Mostrar solo la sección activa
function mostrarSeccion(seccionId) {
    // Ocultar todas las secciones
    const secciones = document.querySelectorAll('.contenido-seccion');
    secciones.forEach(seccion => seccion.style.display = 'none');

    // Mostrar la sección seleccionada
    const seccionSeleccionada = document.getElementById(seccionId);
    seccionSeleccionada.style.display = 'block';
}

// Inicializar la vista para la sección de inicio
document.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('inicio'); // Mostrar la sección de inicio por defecto

    // Asignar eventos a los enlaces de navegación
    document.getElementById('inicioLink').addEventListener('click', () => mostrarSeccion('inicio'));
    document.getElementById('productosLink').addEventListener('click', () => mostrarSeccion('productos'));
    document.getElementById('clientesLink').addEventListener('click', () => mostrarSeccion('clientes'));
    document.getElementById('ventasLink').addEventListener('click', () => mostrarSeccion('ventas'));
});
// Simulación de datos
const productos = [
    { id: 1, nombre: 'Producto 1', precio: 100, stock: 10 },
    { id: 2, nombre: 'Producto 2', precio: 150, stock: 5 },
    { id: 3, nombre: 'Producto 3', precio: 200, stock: 8 }
];

const clientes = [
    { id: 1, nombre: 'Cliente 1', email: 'cliente1@gmail.com' },
    { id: 2, nombre: 'Cliente 2', email: 'cliente2@gmail.com' },
    { id: 3, nombre: 'Cliente 3', email: 'cliente3@gmail.com' }
];

const ventas = [
    { id: 1, cliente: 'Cliente 1', producto: 'Producto 1', fecha: '2024-11-25', total: 100 },
    { id: 2, cliente: 'Cliente 2', producto: 'Producto 2', fecha: '2024-11-26', total: 150 }
];

// Función para mostrar productos
function mostrarProductos() {
    const productosSection = document.getElementById('productos-lista');
    productos.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.classList.add('producto');
        productoDiv.innerHTML = `<p><strong>${producto.nombre}</strong> - $${producto.precio} - Stock: ${producto.stock}</p>`;
        productosSection.appendChild(productoDiv);
    });
}

// Función para mostrar clientes
function mostrarClientes() {
    const clientesSection = document.getElementById('clientes-lista');
    clientes.forEach(cliente => {
        const clienteDiv = document.createElement('div');
        clienteDiv.classList.add('cliente');
        clienteDiv.innerHTML = `<p><strong>${cliente.nombre}</strong> - ${cliente.email}</p>`;
        clientesSection.appendChild(clienteDiv);
    });
}

// Función para mostrar ventas
function mostrarVentas() {
    const ventasSection = document.getElementById('ventas-lista');
    ventas.forEach(venta => {
        const ventaDiv = document.createElement('div');
        ventaDiv.classList.add('venta');
        ventaDiv.innerHTML = `<p><strong>${venta.cliente}</strong> compró <strong>${venta.producto}</strong> - Fecha: ${venta.fecha} - Total: $${venta.total}</p>`;
        ventasSection.appendChild(ventaDiv);
    });
}

// Llamar a las funciones para mostrar los datos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    mostrarProductos();
    mostrarClientes();
    mostrarVentas();
});
