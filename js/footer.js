// Este script inyecta el footer y los estilos en cualquier página que lo llame
const footerHTML = `
<style>
    .global-footer { text-align: center; color: var(--text-muted); font-size: 0.875rem; margin-top: 4rem; padding: 2rem 0; border-top: 1px solid var(--border); }
    .monetization-banner { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; margin-bottom: 2rem; }
    
    /* Botón Trade Republic */
    .affiliate-btn { display: inline-flex; align-items: center; gap: 0.5rem; background-color: #111827; border: 1px solid #374151; color: #f8fafc; padding: 0.6rem 1.2rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: all 0.2s; }
    .affiliate-btn:hover { background-color: #1f2937; border-color: #4b5563; }
    
    /* Botón Buy Me a Coffee */
    .coffee-btn { display: inline-flex; align-items: center; gap: 0.5rem; background-color: #FFDD00; color: #000000; padding: 0.6rem 1.2rem; border-radius: 8px; text-decoration: none; font-weight: 600; transition: all 0.2s; }
    .coffee-btn:hover { background-color: #FFEA4C; }
    
    .disclaimer { font-size: 0.75rem; margin-top: 1rem; opacity: 0.6; }
</style>

<div class="global-footer">
    <div class="monetization-banner">
        <a href="#" target="_blank" rel="noopener noreferrer" class="affiliate-btn">
            📈 Start investing with Trade Republic
        </a>
        
        <a href="https://buymeacoffee.com/dariosf" target="_blank" rel="noopener noreferrer" class="coffee-btn">
            ☕ Buy me a coffee
        </a>
    </div>
    
    <p>&copy; 2026 FIRE Toolkit. All calculations are processed locally in your browser.</p>
    <p class="disclaimer">Disclaimer: We may receive a small commission if you open an account through our affiliate links. This helps keep the tools free.</p>
</div>
`;

// Busca el contenedor en la página e inyecta el HTML
document.getElementById('global-footer-container').innerHTML = footerHTML;