function changeStatus(button, status) {
    console.log("Botão clicado:", button);  
    console.log("Novo status:", status);  
    const room = button.closest('.room');
    console.log("Sala selecionada:", room); 

    if (room) {
        room.setAttribute('data-status', status);
        const statusText = room.querySelector('p');
        if (statusText) {
            switch (status) {
                case 'livre':
                    statusText.textContent = 'Status: Livre';
                    break;
                case 'ocupado':
                    statusText.textContent = 'Status: Ocupado';
                    break;
                case 'manutencao':
                    statusText.textContent = 'Status: Manutenção';
                    break;
            }
        }
        console.log("Status atualizado para:", status); 
    } else {
        console.log("Erro: Sala não encontrada.");
    }
}
