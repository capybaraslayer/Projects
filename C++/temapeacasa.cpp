#include<iostream>
using namespace std;

int main()
{
    int notaBac, notaExamen = 0, notaAnexa, numarOlimpiade = 0;
    bool olimpiade, Examen;
    double MGC = 0;

    cout << "Introdu nota de la bac: ";
    cin >> notaBac;
    cout << "Introdu nota din anexa: ";
    cin >> notaAnexa;
    cout << "Ai mers la olimpiade (da-1; nu-0): ";
    cin >> olimpiade;

    if (olimpiade == 1) {
        cout << "La cate olimpiade ai mers? ";
        cin >> numarOlimpiade;
    }

    cout << "Ai avut examen de intrare (da-1; nu-0): ";
    cin >> Examen;

    if (Examen == 1) {
        cout << "Introdu nota la examen: ";
        cin >> notaExamen;
        MGC = 0.3 * notaBac + 0.3 * notaAnexa + 0.4 * notaExamen;
    } else {
        MGC = 0.5 * notaBac + 0.5 * notaAnexa;
    }

    cout << "\nMedia ta este: " << MGC << "\nRezultat: ";

    if (MGC < 5) {
        cout << "Nu ai intrat la Universitate (medie sub 5).";
    }
    else if (MGC >= 5 && MGC < 7) {
        if (!olimpiade) {
            cout << "Ai fost pus in lista de asteptare";
        } else {
            cout << "Ai intrat la contract (ajutat de olimpiada)";
        }
    }
    else if (MGC >= 7 && MGC < 9) {
        if (numarOlimpiade >= 1) {
            cout << "Ai intrat la buget";
        } else {
            cout << "Ai intrat la contract";
        }
    }
    else if (MGC >= 9 && MGC < 10) {
        if (numarOlimpiade >= 1) {
            cout << "Ai intrat la buget cu bursa a II-a";
        } else {
            cout << "Ai intrat la buget (fara bursa)";
        }
    }
    else if (MGC == 10) {
        if (numarOlimpiade >= 1) {
            cout << "Ai intrat la buget cu cea mai mare bursa";
        } else {
            cout << "Ai intrat la buget cu bursa de merit";
        }
    }

    cout << endl;
    return 0;
}
