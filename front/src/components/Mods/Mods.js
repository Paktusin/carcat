import React from 'react';
import './Mods.scss';

const Mods = (props) => {
    return (
        <table className="table table-bordered mods">
            <thead>
            <tr>
                <th>Двигатель</th>
                <th>КПП</th>
                <th className="d-none d-sm-table-cell">Привод</th>
                <th>Разгон до 100</th>
                <th className="d-none d-sm-table-cell">Расход</th>
            </tr>
            </thead>
            <tbody>
            {props.mods.reduce((prev, next) => {
                if (prev.findIndex((el) => el.engine + el.gearbox === next.engine + next.gearbox) === -1) return [...prev, next];
                else return prev;
            }, []).sort((a, b) => a.engine < b.engine ? -1 : 1).map(mod =>
                <tr key={mod.id}>
                    <td>{mod.engine}</td>
                    <td>{mod.gearbox}</td>
                    <td className="d-none d-sm-table-cell">{mod.drive}</td>
                    <td>{mod.accel}</td>
                    <td className="d-none d-sm-table-cell">{mod.consum}</td>
                </tr>
            )}
            </tbody>
        </table>
    )
};

export default Mods;