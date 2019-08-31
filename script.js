var selectedRow = null;
        
        function onFormSubmit() {
            if (validar()) {
                var dados = pegarDados();
                if (selectedRow == null)
                    insereProduto(dados);
                else
                  editaProduto(dados);
                resetForm();
    }
        }

        function pegarDados() {
            var dados = {};
            dados["nome"] = document.getElementById("nome").value;
            dados["descricao"] = document.getElementById("descricao").value;
            dados["estoque"] = document.getElementById("estoque").value;
            dados["preco"] = document.getElementById("preco").value;
            dados["origem"] = document.getElementById("origem").value;

            return dados;
        }

        function insereProduto(data) {
            var table = document.getElementById("listaprodutos").getElementsByTagName('tbody')[0];
            var newRow = table.insertRow(table.length);
            cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.nome;
            cell2 = newRow.insertCell(1);
            cell2.innerHTML = data.descricao;
            cell3 = newRow.insertCell(2);
            cell3.innerHTML = data.estoque;
            cell4 = newRow.insertCell(3);
            cell4.innerHTML = data.preco;
            cell4 = newRow.insertCell(4);
            cell4.innerHTML = data.origem;
            cell4 = newRow.insertCell(5);
            cell4.innerHTML = `<button class="btn-warning" onClick="paraEditar(this)">Edit</button>
                            <button class="btn-danger" onClick="paraDeletar(this)">Delete</button>`;
        }

        function resetForm() {
            document.getElementById("nome").value = "";
            document.getElementById("dercricao").value = "";
            document.getElementById("estoque").value = "";
            document.getElementById("preco").value = "";
            document.getElementById("origem").value = "";
            selectedRow = null;
        }
        
        function paraEditar(td) {
            selectedRow = td.parentElement.parentElement;
            document.getElementById("nome").value = selectedRow.cells[0].innerHTML;
            document.getElementById("descricao").value = selectedRow.cells[1].innerHTML;
            document.getElementById("estoque").value = selectedRow.cells[2].innerHTML;
            document.getElementById("preco").value = selectedRow.cells[3].innerHTML;
            document.getElementById("origem").value = selectedRow.cells[4].innerHTML;
        }

        function editaProduto(dados) {
            selectedRow.cells[0].innerHTML = dados.nome;
            selectedRow.cells[1].innerHTML = dados.descricao;
            selectedRow.cells[2].innerHTML = dados.estoque;
            selectedRow.cells[3].innerHTML = dados.preco;
            selectedRow.cells[4].innerHTML = dados.origem;
        }

        function paraDeletar(td) {
            if (confirm('Tem certeza que deseja deletar?')) {
                row = td.parentElement.parentElement;
                document.getElementById("listaprodutos").deleteRow(row.rowIndex);
                resetForm();
            }
        }

        function validar() {
            isValid = true;
            if (document.getElementById("nome").value == "") {
                isValid = false;
                document.getElementById("nomeValidationError").classList.remove("hide");
            } else {
                isValid = true;
                if (!document.getElementById("nomeValidationError").classList.contains("hide"))
                    document.getElementById("nomeValidationError").classList.add("hide");
            }
            return isValid;
        }
        